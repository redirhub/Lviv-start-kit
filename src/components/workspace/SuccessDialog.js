import { useEffect, useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Stack }  from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';
import { Text18W600 } from '@/components/elements/Text18';
import ActivateWorkspaceDialog from '@/components/workspace/ActivateWorkspaceDialog';
import CheckCircle1Icon from '@/icons/check-circle1';
import Modal from '@/components/common/Modal';
import { useAppSelector } from '@/store';

const SuccessDialog = ({ workspaceCreated }) => {
    const { t } = useTranslation();
    const workspaceName = useAppSelector((state) => state.workspaces.workspaceName);
    const {
        isOpen: isActivateModalOpen,
        onOpen: onActivateModalOpen,
        onClose: onActivateModalClose
    } = useDisclosure();
    const {
        isOpen: isSuccessModalOpen,
        onOpen: onSuccessModalOpen,
        onClose: onSuccessModalClose
    } = useDisclosure();

    const handleClose = useCallback(() => {
        onSuccessModalClose();
    }, [onSuccessModalClose]);

    const onOpenModal = useCallback(() => {
        onSuccessModalClose();
        onActivateModalOpen();
    }, [onSuccessModalClose, onActivateModalOpen]);

    useEffect(() => {
        let timer;
        if (workspaceCreated) {
            onSuccessModalOpen();
            timer = setTimeout(() => {
                onSuccessModalClose();
                onActivateModalOpen();
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [workspaceCreated]);

    return (
        <>
            <Modal
                handleClose={handleClose}
                isOpen={isSuccessModalOpen}
                onClose={onSuccessModalClose}
                onModalClick={onOpenModal}
                maxW={'400px'}
            >
                <Stack spacing={8}>
                    <Stack spacing={5} alignItems="center" textAlign="center">
                        <CheckCircle1Icon width='48px' height='48px'/>
                        <Stack spacing={2}>
                            <Text18W600 color="gray.900">
                                <Trans i18nKey="settings.create-success" t={t}>
                                    {{ n: workspaceName }} workspace created successfully
                                </Trans>
                            </Text18W600>
                        </Stack>
                    </Stack>
                </Stack>
            </Modal>
            <ActivateWorkspaceDialog
                isActivateModalOpen={isActivateModalOpen}
                onActivateModalClose={onActivateModalClose}
            />
        </>
    );
};

export default SuccessDialog;
