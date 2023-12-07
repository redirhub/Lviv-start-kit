import {
    Box, Flex, InputGroup, Spacer, InputLeftElement, Input, IconButton
} from '@chakra-ui/react';
import SearchIcon from '@/icons/search';
import {
    UserMenu
} from '@/components/layout/UserMenu';
import { Logo } from '@/components/layout/Logo';
import { updateOption } from '@/store/slices/options';
import { useAppDispatch } from '@/store';
import MenuIcon from '@/icons/menu';
import { LanguageMenu } from '@/components/layout/LanguageMenu';
import useAppResponsive from '@/hooks/useAppResponsive';

export function Header() {
    const { isMobile } = useAppResponsive();

    const dispatch = useAppDispatch();
    const searchEnabled = false;

    const styler = {
        px: {
            base: '16px',
            md: '16px'
        },
        py: 3,
        borderBottomWidth: '1px',
        borderColor: 'gray.200',
        as: 'header',
        bg: 'white',
        alignItems: 'center',
    };

    return (
        <Flex {...styler}>
            {isMobile && <Flex display={{ base: 'flex', lg: 'none' }} alignItems="center">
                <IconButton
                    h="36px"
                    onClick={() => dispatch(updateOption({ key: 'sidebar', value: true }))}
                    variant="ghost"
                    mr={2}
                    icon={<MenuIcon size="26px" />}
                    aria-label="Menu"
                />
                <Logo p="0" height="36px" link='/' />
            </Flex>}
            <Box display={{ base: 'none', lg: 'block' }}>
                {searchEnabled && <InputGroup>
                    <InputLeftElement color="gray.600" justifyContent="flex-start" w="24px">
                        <SearchIcon width={'24px'} height={'24px'} />
                    </InputLeftElement>
                    <Input
                        h="40px"
                        pl="38px"
                        _focus={{
                            border: 'none', boxShadow: 'none'
                        }}
                        border="none"
                        type="text"
                        placeholder="Search"
                    />
                </InputGroup>
                }
            </Box>
            <Spacer />
            <LanguageMenu />
            <UserMenu />
        </Flex>
    );
}
