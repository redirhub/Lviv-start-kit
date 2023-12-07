import {
    Menu,
    MenuButton,
    Avatar,
    Spacer,
    Flex,
    Text,
    MenuList,
    Box,
    useBreakpointValue,
    useDisclosure
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from '@/components/AppLink';
import CreateWorkspaceDialog from '@/components/workspace/CreateWorkspaceDialog';
import ChevronDownIcon from '@/icons/chevron-down';
import { styler_menu } from '@/components/common/Styler';
import { useAppSelector } from '@/store';
import useLogoutApi from '@/hooks/useLogoutApi';
import useUserMenu from '@/hooks/useUserMenu';

export function UserMenu() {
    const { t } = useTranslation();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [logout, { isLoading }] = useLogoutApi();
    const { name, headurl } = useAppSelector((state) => state.accounts.currentAccount);
    const usermenu = useUserMenu();

    const styler = {
        bg: 'none',
        p: 0,
        as: 'button',
        display: 'flex',
    };

    const styler_text = {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px',
        as: 'span',
        flexGrow: 1,
    };

    const responsive = useBreakpointValue({
        base: {
            display: 'none',
        },
        md: {
            display: 'inline-flex',
        },
    });

    const handleClick = useCallback(
        (type) => {
            if (type === 'workspace') {
                onOpen();
            } else if (type === 'logout') {
                logout();
            }
        },
        [onOpen, logout]
    );

    return (
        <>
            <Menu placement="top-end" isLazy>
                <MenuButton {...styler}>
                    <Flex alignItems="center">
                        <Avatar
                            w={{ base: '30px', md: '40px' }}
                            h={{ base: '30px', md: '40px' }}
                            name={name}
                            src={headurl}
                        />
                        <Text
                            ml={4}
                            fontSize="16px"
                            fontWeight={600}
                            color="gray.700"
                            {...responsive}
                        >
                            {name}
                        </Text>
                        <ChevronDownIcon ml={2} w={4} h={4} {...responsive} />
                    </Flex>
                </MenuButton>
                <MenuList p={2} zIndex={999}>
                    {usermenu.map((item) => (
                        <div key={item.key} onClick={() => handleClick(item.type)}>
                            <AppLink {...styler_menu} href={item.path}>
                                <Box mr={3} as="span">
                                    {item.icon}
                                </Box>
                                <Box {...styler_text}>{item.name}</Box>
                                <Spacer />
                                <Box as="span">{item.righticon}</Box>
                            </AppLink>
                        </div>
                    ))}
                </MenuList>
            </Menu>
            <CreateWorkspaceDialog
                isWorkspaceModalOpen={isOpen}
                onWorkspaceModalClose={onClose}
            />
        </>
    );
}

