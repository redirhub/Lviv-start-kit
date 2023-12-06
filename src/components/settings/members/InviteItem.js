import { useCallback, useEffect, useState } from 'react';
import { Flex, IconButton, Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { memberRolesOptions } from '@/utils';
import Dropdown from '@/components/common/Dropdown';
import CustomInput from '@/components/common/CustomInput';
import { Text14W500 } from '@/components/elements/Text14';
import TrashIcon from '@/icons/Trash';
import MailIcon from '@/icons/mail';
import useAppResponsive from '@/hooks/useAppResponsive';

const InviteItem = ({ roles, value, onChange, index, onRemove, tab }) => {
    const { t } = useTranslation();
    const { isMobile } = useAppResponsive();
    const [email, setEmail] = useState(null);
    const [role, setRole] = useState(null);

    const handleAddress = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const handleRole = useCallback((e) => {
        setRole(e.target.value);
    }, []);

    useEffect(() => {
        if (onChange && email && role)
            onChange({ email, role });
    }, [email, role]);

    useEffect(() => {
        if (value) {
            setEmail(value.email);
            setRole(value.role);
        }
    }, [value]);

    return (
        <Flex flexWrap={{ base: 'wrap', md: 'nowrap' }} gap={4} mb={3} alignItems={'end'}>
            <Flex w={{ base: '100%', md: tab === 'settings' ? '40%': '65%' }}>
                <Stack w="100%" spacing={1.5}>
                    <Text14W500 color="gray.700">
                        Email
                    </Text14W500>
                    <CustomInput
                        colorScheme="Gray"
                        icontype="icon"
                        lefticon={<MailIcon color="gray.500" />}
                        placeholder="you@company.com"
                        value={email}
                        onChange={handleAddress}
                        required
                    />
                </Stack>
            </Flex>
            <Flex w={{ base: '100%', md: tab === 'settings' ? '25%': '30%' }}>
                <Dropdown
                    required
                    label={t('settings.member-role', 'Role')}
                    placeholder={t('settings.member-role-placeholder', 'Select role')}
                    selected={role}
                    onChange={handleRole}
                    options={memberRolesOptions(roles)}
                    dropdownWidth={{ w: '100%' }}
                />
            </Flex>
            <Flex w={{ base: '100%', md:'5%' }} justifyContent={isMobile? 'end' : 'start'} >
                {index > 0 && (
                    <IconButton
                        onClick={onRemove}
                        py={2}
                        minW="0"
                        variant="link"
                        color="gray.500"
                        icon={<TrashIcon size="20px" />}
                        aria-label="Remove"
                    />
                )}
            </Flex>
        </Flex>
    );
};

export default InviteItem;
