import React, { useCallback } from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Button from '@/components/common/Button';
import { useGetMemberRolesQuery } from '@/store/service/workspaces';
import PlusCircleIcon from '@/icons/plus-circle';
import InviteItem from '@/components/settings/members/InviteItem';
import { INVITE_MEMBER } from '@/config/workspace';

const Invites = ({ invites, setInvites, tab = 'settings' }) => {
    const { t } = useTranslation();
    const { data: roles } = useGetMemberRolesQuery();

    const handleAddMember = useCallback(() => {
        setInvites([...invites, { ...INVITE_MEMBER }]);
    }, [invites]);

    return (
        <Box w={'100%'}>
            {invites?.map((invite, index) => (
                <InviteItem
                    key={index}
                    tab={tab}
                    roles={roles}
                    value={invite}
                    index={index}
                    onChange={(value) => {
                        const newInvites = [...invites];
                        newInvites[index] = value;
                        setInvites(newInvites);
                    }}
                    onRemove={() => {
                        const newInvites = [...invites];
                        newInvites.splice(index, 1);
                        setInvites(newInvites);
                    }}
                />
            ))}
            <Button
                mt={4}
                text={t('settings.member-invite-add', 'Add member')}
                size="md1"
                border="none"
                boxShadow="none"
                p={0}
                lefticon={<PlusCircleIcon />}
                onClick={handleAddMember}
                color="primary.700"
            />
        </Box>
    );
};

export default Invites;
