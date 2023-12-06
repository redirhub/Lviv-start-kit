import {
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react';
import MoreIcon from '@/icons/more';
import { noop } from '@/utils';
import useAppResponsive from '@/hooks/useAppResponsive';
import { AppLink } from '@/components/AppLink';

export function MobilePageActions({ items }) {
    const { isMobile } = useAppResponsive();

    function MenuItemProxy({ name, Icon, onClick }) {
        return (
            <MenuItem onClick={ onClick } key={ name } h="40px">
                <Flex w="full" alignItems="center">
                    <Icon size="16px" mr={ 4 } />
                    <Text>{ name }</Text>
                </Flex>
            </MenuItem>
        );
    }

    return (
        <Menu>
            <MenuButton size={ isMobile ? 'sm' : undefined } as={ IconButton } icon={ <MoreIcon size="20px" /> } aria-label="More" />
            <MenuList color="gray.700" overflow="hidden" py={0} zIndex={99}>
                {
                    items.map( ({ name, icon: Icon, onClick = noop, path }) => (
                        ! path ? (
                            <MenuItemProxy name={ name } key={ name } Icon={ Icon } onClick={ onClick } />
                        ) : (
                            <AppLink key={ name } href={ path }>
                                <MenuItemProxy name={ name } key={ name } Icon={ Icon } onClick={ onClick } />
                            </AppLink>
                        )
                    ) )
                }
            </MenuList>
        </Menu>
    );
}
