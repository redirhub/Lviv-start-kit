import { useCallback } from 'react';
import { Stack, Flex }  from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'react-i18next';
import Button from '@/components/common/Button';
import { Text18W600 } from '@/components/elements/Text18';
import { Text14W400, Text14W600 } from '@/components/elements/Text14';
import ZapIcon from '@/icons/zap';
import Modal from '@/components/common/Modal';
import { useAppDispatch, useAppSelector } from '@/store';
import { setWorkspaceName } from '@/store/slices/workspaces';

const ActivateWorkspaceDialog = ({ isActivateModalOpen, onActivateModalClose }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const workspaceName = useAppSelector((state) => state.workspaces.workspaceName);

    const handleClose = useCallback(() => {
        dispatch(setWorkspaceName(''));
        onActivateModalClose();
    }, [onActivateModalClose]);

    const redirectToPlans = useCallback(() => {
        handleClose();
        router.push('/plans');
    }, [handleClose]);

    return (
        <Modal
            handleClose={handleClose}
            isOpen={isActivateModalOpen}
            onClose={onActivateModalClose}
        >
            <Stack spacing={8}>
                <Stack spacing={5} alignItems="center" textAlign="center">
                    <ZapIcon width="56px" height='56px'/>
                    <Stack spacing={2}>
                        <Text18W600 color="gray.900">
                            {t('settings.activate', 'Activate workspace')}
                        </Text18W600>
                        <Text14W400 color="gray.500">
                            <Trans i18nKey="settings.activate-description" t={t}>
                            You must subscribe a plan to activate<br />
                                <Text14W600 color="gray.700" as="span" ml={1}>{{ n: workspaceName }}</Text14W600>
                            </Trans>
                        </Text14W400>
                    </Stack>
                </Stack>
                <Flex gap={3} w="full">
                    <Button
                        colorScheme="Gray"
                        text={t('shared.skip', 'Skip for now')}
                        size="lg"
                        w="50%"
                        onClick={handleClose}
                    />
                    <Button
                        colorScheme="Primary1"
                        text={t('shared.see-plans', 'See plans')}
                        size="lg"
                        w="50%"
                        onClick={redirectToPlans}
                    />
                </Flex>
            </Stack>
        </Modal>
    );
};

export default ActivateWorkspaceDialog;
