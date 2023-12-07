import { ContentSpinner } from '../ContentSpinner';
import { useCallback, useMemo } from 'react';
import {
    Box, Stack, Flex, Spacer, Table, Tr, Th, Tbody, Thead, TableContainer
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Button from '@/components/common/Button';
import { Text20W700 } from '@/components/elements/Text20';
import { Text16W500 } from '@/components/elements/Text16';
import { Text12W500 } from '@/components/elements/Text12';
import TeamMember from '@/components/settings/TeamMember';
import UserPlusIcon from '@/icons/user-plus';
import LinkIcon from '@/icons/link';
import { useGetMembersQuery } from '@/store/service/workspaces';
import Members from '@/components/settings/members/Members';
import { getWorkspaceId } from '@/utils';

export function SettingsMembers() {
    const { t } = useTranslation();
    const { data: members, isLoading, isFetching } = useGetMembersQuery(getWorkspaceId());
    const loading = isLoading || isFetching;

    const normalizedList = useMemo(() => {
        if (!members) return [];
        const normalizedData = [{ ...members?.owner }, ...members?.members].map((item) => ({
            ...item,
            status: 'active',
        }));
        const normalizedInvitations = members?.invitations?.map((item) => ({
            ...item,
            status: 'pending',
        }));
        return [...normalizedData, ...normalizedInvitations];
    }, [members]);

    const handleCopyLink = useCallback(() => {
        navigator.clipboard.writeText(members?.invite_link);
    }, [members?.invite_link]);

    return (
        <>
            {members?.invite_link && (
                <Box
                    mt={3.5}
                    p={3.5}
                    bg="white"
                    borderRadius="lg"
                    borderWidth={0.5}
                    borderColor="primary.100"
                >
                    <Flex alignItems="center">
                        <UserPlusIcon />
                        <Text16W500 color="gray.700" ml={3}>
                            {t('settings.member-invite-link', 'Share your invite link')}
                        </Text16W500>
                        <Spacer />
                        <Button
                            colorScheme="Primary"
                            lefticon={<LinkIcon />}
                            text={t('settings.member-invite-copy', 'Copy invite link')}
                            size="sm"
                            onClick={handleCopyLink}
                        />
                    </Flex>
                </Box>
            )}
            <Members />
            <Box mt={6} bg="white" borderRadius="lg">
                <Stack>
                    <Text20W700 color="gray.700" m={6}>
                        {t('settings.members', 'Team members')}
                    </Text20W700>
                    {loading ? (<ContentSpinner />) : (
                        <TableContainer>
                            <Table>
                                <Thead bg="gray.50">
                                    <Tr>
                                        <Th><Text12W500 color="gray.500">
                                            {t('settings.members-name', 'Name')}
                                        </Text12W500></Th>
                                        <Th><Text12W500 color="gray.500">Email</Text12W500></Th>
                                        <Th><Text12W500 color="gray.500">
                                            {t('settings.members-role', 'Role')}
                                        </Text12W500></Th>
                                        <Th><Text12W500 color="gray.500">
                                            {t('shared.status', 'Status')}
                                        </Text12W500></Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {normalizedList?.map((user) => (
                                        <TeamMember
                                            key={user.id}
                                            id={user.id}
                                            avatar={user.headurl}
                                            name={user.name}
                                            email={user.email}
                                            role={user.role}
                                            status={user.status}
                                        />
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </Stack>
            </Box>
        </>
    );
}
