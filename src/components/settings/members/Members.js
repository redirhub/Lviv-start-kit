import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Stack, useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Button from '@/components/common/Button';
import { Text20W700 } from '@/components/elements/Text20';
import { Text14W400, Text14W600 } from '@/components/elements/Text14';
import ArrowRightUpPrimaryIcon from '@/icons/arrow-right-up-primary';
import { INVITE_MEMBER } from '@/config/workspace';
import { useInviteMemberMutation } from '@/store/service/workspaces';
import Invites from '@/components/settings/members/Invites';

const Members = () => {
    const toast = useToast();
    const [invites, setInvites] = useState([{ ...INVITE_MEMBER }]);
    const [inviteMember, { isSuccess, isLoading }] = useInviteMemberMutation();
    const { t } = useTranslation();

    const disabled = useMemo(() => !invites?.every((invite) => invite.email && invite.role), [invites]);

    const handleInvite = useCallback(() => {
        inviteMember({ invites });
    }, [invites]);

    useEffect(() => {
        if (isSuccess) {
            setInvites([{ ...INVITE_MEMBER }]);
            toast({
                title: t('settings.member-invited-success', 'Member Invited Successfully'),
                position: 'bottom-right',
                status: 'success',
            });
        }
    }, [isSuccess]);

    return (
        <Box mt={6} p={6} bg="white" borderRadius="lg">
            <Stack spacing={6}>
                <Stack spacing={2}>
                    <Text20W700 color="gray.700">
                        {t('settings.member-invite', ' Invite')}
                    </Text20W700>
                    <Text14W400 color="gray.500">
                        {t('settings.member-invite-description', 'Invite members to your workspace. They’ll receive an email with a link to join.')}
                        <Text14W600 color="primary.700" as="span" mx={2}>
                            {t('settings.member-invite-learn', 'Learn more about Team members')}
                        </Text14W600>
                        <ArrowRightUpPrimaryIcon />
                    </Text14W400>
                </Stack>
                <Invites invites={invites} setInvites={setInvites} />
                <Button
                    type="submit"
                    colorScheme="Primary1"
                    text={t('settings.member-invite-send', 'Send invite')}
                    size="md1"
                    onClick={handleInvite}
                    disabled={disabled}
                />
            </Stack>
        </Box>
    );
};

export default Members;
