import { useState, useEffect, useCallback, useMemo } from 'react';
import { Stack, Flex }  from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';
import Button from '@/components/common/Button';
import { Text18W600 } from '@/components/elements/Text18';
import { Text14W400, Text14W600 } from '@/components/elements/Text14';
import SuccessDialog from '@/components/workspace/SuccessDialog';
import UserPlusIcon from '@/icons/user-plus';
import Invites from '@/components/settings/members/Invites';
import { INVITE_MEMBER } from '@/config/workspace';
import Modal from '@/components/common/Modal';
import { useAppSelector } from '@/store';
import useCreateWorkspaceApi from '@/hooks/useCreateWorkspaceApi';

const InviteDialog = ({ isInviteModalOpen, onInviteModalClose }) => {
    const { t } = useTranslation();
    const [invites, setInvites] = useState([{ ...INVITE_MEMBER }]);
    const [createWorkspace, { isSuccess }] = useCreateWorkspaceApi();
    const workspaceName = useAppSelector((state) => state.workspaces.workspaceName);

    const disabled = useMemo(() => !invites?.every((invite) => invite.email && invite.role), [invites]);

    const handleSendInvite = useCallback(() => {
        createWorkspace({ name: workspaceName, invites: !disabled ? invites : [] });
    }, [invites, workspaceName, disabled]);

    const handleSkip = useCallback(() => {
        setInvites([]);
        handleSendInvite();
    }, [invites, workspaceName, disabled]);

    const handleClose = useCallback(() => {
    }, [handleSendInvite]);

    useEffect(() => {
        if (isSuccess) {
            onInviteModalClose();;
            setInvites([{ ...INVITE_MEMBER }]);
        }
    }, [isSuccess]);

    return (
        <>
            <Modal
                handleClose={handleClose}
                isOpen={isInviteModalOpen}
                onClose={onInviteModalClose}
                maxW="544px"
            >
                <Stack spacing={5} alignItems="center" textAlign="center">
                    <UserPlusIcon />
                    <Stack spacing={2}>
                        <Text18W600 color="gray.900">
                            {t('settings.create-invite', 'Invite team members')}
                        </Text18W600>
                        <Text14W400 color="gray.500">
                            <Trans i18nKey="settings.create-invite-description" t={t}>
                            Want to collaborate with team members in
                                <Text14W600 color="gray.700" as="span" ml={1}>
                                    {{ n: workspaceName }}
                                </Text14W600>?
                            </Trans>
                        </Text14W400>
                    </Stack>
                </Stack>
                <Flex mt={5} mb={8}>
                    <Invites invites={invites} setInvites={setInvites} tab="workspace"/>
                </Flex>
                <Flex gap={3} w="full">
                    <Button
                        colorScheme="Gray"
                        text={t('shared.skip', 'Skip for now')}
                        size="lg"
                        w="50%"
                        onClick={handleSkip}
                    />
                    <Button
                        colorScheme="Primary1"
                        text={t('settings.create-invite-send', 'Send invites')}
                        size="lg"
                        w="50%"
                        disabled={disabled}
                        onClick={handleSendInvite}
                    />
                </Flex>
            </Modal>
            <SuccessDialog workspaceCreated={isSuccess} />
        </>
    );
};

export default InviteDialog;
