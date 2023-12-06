import {
    Tr, Td, Menu, MenuButton, MenuItem, MenuList, Checkbox, Avatar, Flex, Box, useDisclosure
} from '@chakra-ui/react';
import { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text14W400, Text14W500 } from '@/components/elements/Text14';
import Badge from '@/components/common/Badge';
import MoreIcon from '@/icons/more';
import DisconnectIcon from '@/icons/disconnect';
import { styler_menu } from '@/components/common/Styler';
import { AppAlertDialog } from '@/components/shared/AlertDialog';
import { useDeleteMemberInviteMutation, useDeleteMemberMutation, useGetMemberRolesQuery } from '@/store/service/workspaces';

export default function TeamMember({
    id,
    avatar,
    name,
    email,
    role,
    status
}) {
    const { t } = useTranslation();
    const { onOpen, onClose, isOpen } = useDisclosure();
    const [deleteMemberInvite, { isLoading: deleting1, isSuccess: isSuccess1 }] = useDeleteMemberInviteMutation();
    const [deleteMember, { isLoading: deleting2, isSuccess: isSuccess2 }] = useDeleteMemberMutation();
    const deleting = deleting1 || deleting2;
    const isSuccess = isSuccess1 || isSuccess2;

    const { data: roles } = useGetMemberRolesQuery();

    const handleRemove = useCallback(() => {
        if (status === 'pending') {
            deleteMemberInvite({ id, email, role });
        } else {
            deleteMember({ id });
        }
    }, []);

    const showActions = useMemo(() => role !== 'owner', [role]);

    const styler_text = {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px',
    };

    const name_display = useMemo(() => name ? name : email.split('@')[0], [email]);
    const findRole = useCallback((role) => {
        return roles?.find((item) => item.id === role)?.name || t('settings.members-owner', 'Owner');
    }, [roles]);

    useEffect(() => {
        if (isSuccess) {
            onClose();
        }
    }, [isSuccess]);

    return (
        <>
            <Tr>
                <Td>
                    <Flex gap={3} alignItems="center">
                        <Checkbox />
                        <Avatar w={10} h={10} name={name_display} src={avatar} />
                        <Text14W500 color="gray.700">{name_display}</Text14W500>
                    </Flex>
                </Td>
                <Td><Text14W400 color="gray.500">{email}</Text14W400></Td>
                <Td><Text14W400 color="gray.500">{findRole(role)}</Text14W400></Td>
                <Td>
                    <Badge
                        content={t(`settings.members-${status}`, status)}
                        colorScheme={status == 'active' ? 'Success' : 'Blue'}
                        size="sm"
                        width="fit-content"
                        visible={true}
                    />
                </Td>
                <Td>
                    {showActions && (
                        <Menu>
                            <MenuButton
                                p={2}
                                ml={6}
                                transition='all 0.2s'
                                borderRadius='lg'
                                _hover={{ bg: 'gray.400' }}
                                _expanded={{ bg: 'gray.200' }}
                                _focus={{ boxShadow: 'outline' }}
                            >
                                <MoreIcon />
                            </MenuButton>
                            <MenuList p={2}>
                                <MenuItem {...styler_menu} borderColor="gray.200" onClick={onOpen}>
                                    <Box mr={3} as="span" >
                                        <DisconnectIcon />
                                    </Box>
                                    <Box {...styler_text} color="error.500" mr={3.5}>
                                        {t('shared.remove', 'Remove')}
                                    </Box>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    )}
                </Td>
            </Tr>
            <AppAlertDialog
                {...{
                    title: t('shared.are-you-sure', 'Are you sure?'),
                    content: t('settings.members-remove-confirm', 'You want to remove {{n}} from Team?', { n: name ? name : email }),
                    onOpen,
                    isOpen,
                    onClose,
                    onConfirm: handleRemove,
                    confirmText: deleting ? t('shared.deleting', 'Deleting...') : t('shared.remove', 'Remove'),
                }}
            />
        </>
    );
}
