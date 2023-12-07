import { memo, Fragment } from 'react';
import {
    Avatar,
    Button,
    Divider,
    Flex,
    Text,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    useDisclosure,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Check from '@/icons/check';
import PlusCircle from '@/icons/plus-circle';
import useAppResponsive from '@/hooks/useAppResponsive';
import { styler_menu_item } from '@/components/layout/WorkspaceMenu';
import { WORKSPACE_CATEGORIES } from '@/config/workspace';
import Monitor from '@/icons/monitor';
import Redirects from '@/icons/redirects';
import Url from '@/icons/url';
import User from '@/icons/user';

export function WorkspaceSubMenu({ name, headurl, summaries, isSelected }) {
    const { isMobile } = useAppResponsive();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t } = useTranslation();

    const CATEGORIES = {
        [WORKSPACE_CATEGORIES.MEMBERS]: {
            name: t('shared.ws-members', 'Members'),
            icon: <User color='gray.500' size='20px' />
        },
        [WORKSPACE_CATEGORIES.MONITOR]: {
            name: t('shared.ws-monitor', 'Monitoring'),
            icon: <Monitor color='gray.500' size='20px' />
        },
        [WORKSPACE_CATEGORIES.REDIRECT]: {
            name: t('shared.ws-redirects', 'Redirects'),
            icon: <Redirects color='gray.500' size='20px' />
        },
        [WORKSPACE_CATEGORIES.SHORT_URL]: {
            name: t('shared.ws-short-url', 'Short URL'),
            icon: <Url color={'gray.500'} size='20px' />
        },
    };

    return (
        <Menu
            isLazy
            transition="all 0.1s"
            isOpen={isOpen}
            offset={[0, 0]}
            placement={isMobile ? 'bottom' : 'right-start'}
        >
            <MenuButton
                as={Button}
                id={name}
                size={isMobile & 1 === 2 && 'sm'}
                zIndex={999}
                _hover={{ zIndex: 1000 }}
                {...styler_menu_item}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                        <Avatar name={name} src={headurl} size={isMobile ? 'sm' : 'sm'} />
                        <Text fontWeight='600' as='span' ml={2} lineHeight='20px' color='gray.700'>
                            {name}
                        </Text>
                    </Flex>
                    {isSelected && <Check size="16px" />}
                </Flex>
            </MenuButton>
            <MenuList
                zIndex={9999}
                border={0}
                p={1}
                ml={isMobile && '60%'}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                {summaries?.map((summary, index) => {
                    const category = CATEGORIES[summary.category];
                    return (
                        <Fragment key={`${name}-${category.name}-${index}`}>
                            <MenuItem
                                value={category.name}
                                id={category.name}
                                as='button'
                                size={isMobile && 'sm'}
                                icon={category.icon}
                                py={3.5}
                                px={4}
                                borderRadius={'8px'}
                            >
                                <Flex justifyContent='space-between'>
                                    <Text as="span" fontWeight='600' color='gray.500'>
                                        {category.name}
                                    </Text>
                                    <Text fontWeight='600' as='span' color='gray.700'>
                                        {summary.used}
                                        {category.add &&
                                            <PlusCircle size='20px' ml={4} />
                                        }
                                    </Text>
                                </Flex>
                            </MenuItem>
                            {index !== summaries.length - 1 && <Divider orientation='horizontal' color='gray.100' />}
                        </Fragment>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

export default memo(WorkspaceSubMenu);
