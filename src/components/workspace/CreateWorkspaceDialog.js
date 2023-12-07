import { useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Stack, Flex }  from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Button from '@/components/common/Button';
import CustomInput from '@/components/common/CustomInput';
import InviteDialog from '@/components/workspace/InviteDialog';
import { Text18W600 } from '@/components/elements/Text18';
import { Text14W400, Text14W500 } from '@/components/elements/Text14';
import TrelloIcon from '@/icons/trello';
import Modal from '@/components/common/Modal';
import { useAppDispatch, useAppSelector } from '@/store';
import { setWorkspaceName } from '@/store/slices/workspaces';

const CreateWorkspaceDialog = ({ isWorkspaceModalOpen, onWorkspaceModalClose }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const workspaceName = useAppSelector((state) => state.workspaces.workspaceName);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleWorkspaceName = useCallback((e) => {
        dispatch(setWorkspaceName(e.target.value));
    }, []);

    const handleClose = useCallback(() => {
        dispatch(setWorkspaceName(''));
        onWorkspaceModalClose();
    }, [onWorkspaceModalClose]);

    const handleCreate = useCallback(() => {
        onOpen();
        onWorkspaceModalClose();
    }, [handleClose, onOpen]);

    return (
        <>
            <Modal
                handleClose={handleClose}
                isOpen={isWorkspaceModalOpen}
                onClose={onWorkspaceModalClose}
            >
                <Stack spacing={8}>
                    <Stack spacing={5} alignItems="center" textAlign="center">
                        <TrelloIcon />
                        <Stack spacing={2}>
                            <Text18W600 color="gray.900">
                                {t('settings.create', 'Create new workspace')}
                            </Text18W600>
                            <Text14W400 color="gray.500">
                                {t('settings.create-description', 'Please enter a name for this workspace.')}
                            </Text14W400>
                        </Stack>
                        <Stack spacing={1.5} w="100%" textAlign="left">
                            <Text14W500 color="gray.700">
                                {t('settings.name-enter', 'Workspace name')}
                            </Text14W500>
                            <CustomInput
                                colorScheme="Gray"
                                placeholder={t('settings.name-placeholder', 'e.g. My workspace')}
                                value={workspaceName}
                                onChange={handleWorkspaceName}
                            />
                        </Stack>
                    </Stack>
                    <Flex gap={3} w="full">
                        <Button
                            colorScheme="Gray"
                            text={t('shared.cancel', 'Cancel')}
                            size="lg"
                            w="50%"
                            onClick={handleClose}
                        />
                        <Button
                            colorScheme="Primary1"
                            text={t('shared.create', 'Create')}
                            size="lg"
                            w="50%"
                            disabled={!workspaceName}
                            onClick={handleCreate}
                        />
                    </Flex>
                </Stack>
            </Modal>
            <InviteDialog
                isInviteModalOpen={isOpen}
                onInviteModalClose={onClose}
            />
        </>
    );
};

export default CreateWorkspaceDialog;
