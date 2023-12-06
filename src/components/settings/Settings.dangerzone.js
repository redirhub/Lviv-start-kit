import { ContentSpinner } from '../ContentSpinner';
import { useDisclosure } from '@chakra-ui/react';
import { Box, Stack, Flex, } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'react-i18next';
import Button from '@/components/common/Button';
import DeleteAccountDialog from '@/components/user/DeleteAccountDialog';
import { Text20W700 } from '@/components/elements/Text20';
import { Text16W500 } from '@/components/elements/Text16';
import AlertTriangleIcon from '@/icons/alert-triangle';
import { useAppDispatch, useAppSelector } from '@/store';
import { useDeleteWorkspaceMutation } from '@/store/service/workspaces';
import { clearAccountsApiCache } from '@/store/thunks/accounts';
import { clearWorkspacesApiCache } from '@/store/thunks/workspaces';
import useGetWorkspaceByIdApi from '@/hooks/useGetWorkspaceByIdApi';

export function SettingsDangerzone() {
    const { t } = useTranslation();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { name } = useAppSelector((state) => state.workspaces.currentWorkspace);
    const [deleteWorkspace, { isSuccess, isLoading }] = useDeleteWorkspaceMutation();
    const { isLoading: currentLoading, currentFetching } = useGetWorkspaceByIdApi();
    const loading = currentLoading || currentFetching;

    useEffect(() => {
        if (isSuccess) {
            dispatch(clearAccountsApiCache());
            dispatch(clearWorkspacesApiCache());
            router.push('/');
        }
    }, [isSuccess]);

    return (
        <>
            {loading ? (<ContentSpinner />) : (
                <>
                    <Box mt={6} p={6} bg="white" borderRadius="lg">
                        <Stack spacing={6}>
                            <Stack spacing={4}>
                                <Flex gap={2} alignItems="center">
                                    <AlertTriangleIcon color="error.500" />
                                    <Text20W700 color="gray.700">
                                        {t('settings.dangerzone', 'Danger zone')}
                                    </Text20W700>
                                </Flex>
                                <Text16W500 color="gray.700" mr={6}>
                                    <Trans i18nKey="settings.dangerzone-description">
                                        Permanently remove your {{ n: name }} workspace and all of its contents from the
                                            our platform. This action is not reversible, so please continue with
                                        caution.
                                    </Trans>
                                </Text16W500>
                            </Stack>
                            <Button
                                text={t('settings.dangerzone-delete', 'Delete workspace')}
                                colorScheme="Gray"
                                size="md"
                                color="#F04438"
                                onClick={onOpen}
                            />
                        </Stack>
                    </Box>
                </>
            )}
            <DeleteAccountDialog
                isOpen1={isOpen}
                onClose1={onClose}
                confirm={name}
                type="workspace"
                isSuccess={isSuccess}
                deleting={isLoading}
                onDelete={deleteWorkspace}
            />
        </>
    );
}
