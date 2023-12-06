import { styler_menu } from '../common/Styler';
import {
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text
} from '@chakra-ui/react';
import { memo, useEffect, useMemo } from 'react';
import { isEqual } from 'lodash';
import MoreIcon from '@/icons/more';
import useAppResponsive from '@/hooks/useAppResponsive';
import { AppLink } from '@/components/AppLink';
function _SharedMoreActions({ useMenuHook, data, onOpenAction, path = 'redirects' }) {
    const { children: _children, items: _items } = useMenuHook({ data, path });

    const items = useMemo( () => _items, [ _items ] );
    const children = useMemo( () => _children, [ _children ] );

    const { isMobile } = useAppResponsive();
    const size = isMobile ? 'sm' : 'md';
    const h =  isMobile ? '32px' : undefined;

    function MenuItemProxy({ text, Icon, action }) {

        const props = {};

        if ( typeof action === 'function' ) {
            props.onClick = action;
        }

        return (
            <MenuItem h={isMobile ? '32px' : '40px'} {...styler_menu} {...props}>
                <Flex w="full" alignItems="center">
                    <Icon mr={4} size="16px" />
                    <Text fontSize={ isMobile ? '13px' : '14px' } >{ text }</Text>
                </Flex>
            </MenuItem>
        );
    }

    function OpenWrap({ isOpen }) {

        useEffect(() => {
            onOpenAction && onOpenAction( isOpen );
        }, [ isOpen ]);

        return (
            <>
                <MenuButton h={ h } size={ size } as={ IconButton } icon={ <MoreIcon size="20px" /> } aria-label="More" />
                { children }
                <MenuList color="gray.700" overflow="hidden" p={2}>
                    {
                        items.map( ( { text, Icon, divider, action, linkProps } ) => (
                            <div key={ text }>
                                { !! divider && <MenuDivider my="0" /> }
                                {
                                    !! linkProps?.href ? (
                                        <AppLink _hover={{ textDecoration: 'none' }} {...linkProps}>
                                            <MenuItemProxy text={ text } Icon={ Icon } action={ action } />
                                        </AppLink>
                                    ) : (
                                        <MenuItemProxy text={ text } Icon={ Icon } action={ action } />
                                    )
                                }
                            </div>
                        ) )
                    }
                </MenuList>
            </>
        );
    }

    return (
        <Menu>
            {
                ({ isOpen }) => <OpenWrap isOpen={ isOpen } />
            }
        </Menu>
    );
}

export const SharedMoreActions =  memo( _SharedMoreActions, ( prevProps, nextProps ) => {
    return isEqual( prevProps.data, nextProps.data );
});
