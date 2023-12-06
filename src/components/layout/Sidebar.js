import { AppLink } from '../AppLink';
import { memo, useState, useEffect } from 'react';
import { Box, Flex, IconButton, Spacer, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useNavigations from '@/hooks/useNavigations';
import { SIDEBAR_SIZE, SMALL_SIDEBAR_SIZE } from '@/config/constant';
import PremiumAds from '@/components/layout/QuickUsage';
import { Logo } from '@/components/layout/Logo';
import WorkspaceMenu from '@/components/layout/WorkspaceMenu';
import CloseIcon from '@/icons/close';
import { useAppDispatch, useAppSelector } from '@/store';
import { updateOption } from '@/store/slices/options';
import useAppResponsive from '@/hooks/useAppResponsive';

function getCurrentDimension() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}

export function AppSidebar({ isSidebar } = props) {
    const router = useRouter();
    const sidebar = useAppSelector((state) => state.options.sidebar);
    const dispatch = useAppDispatch();
    const { isMobile } = useAppResponsive();
    const navigations = useNavigations();

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener('resize', updateDimension);

        return (() => {
            window.removeEventListener('resize', updateDimension);
        });
    }, [screenSize]);

    function match(path) {
        return (
            path === router.asPath || (path !== '/' && router.asPath.startsWith(path))
        );
    }

    let responsive = {};

    if (isMobile) {
        if (!sidebar) {
            responsive = {
                opacity: 0,
                visibility: 'hidden',
            };
        } else {
            responsive = {
                opacity: 1,
                visibility: 'visible',
                transitionDuration: '200ms',
                transitionProperty: 'opacity',
            };
        }
    }

    const styler = {
        height: '100%',
        zIndex: '9',
        position: 'fixed',
        borderRightWidth: '1px',
        borderRightColor: 'gray.200',
        width: (isMobile || isSidebar) ? SIDEBAR_SIZE : SMALL_SIDEBAR_SIZE,
        overflow: 'hidden',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        ...responsive,
    };

    const styler_nav = {
        px: 6,
        py: 3,
        my: 2,
        w: '100%',
        alignItems: 'center',
        display: 'flex',
        role: 'group',
        color: 'gray.500',
        className: 'tr200',
        borderRadius: '8px',
        _hover: {
            textDecoration: 'none',
            color: 'gray.700',
            background: 'gray.100',
        },
    };

    const small_styler_nav = {
        p: 2,
        my: 2,
        w: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        role: 'group',
        color: 'gray.500',
        className: 'tr200',
        borderRadius: '8px',
        _hover: {
            textDecoration: 'none',
            color: 'gray.700',
            background: 'gray.100',
        },
    };

    function closeSidebar() {
        dispatch(updateOption({ key: 'sidebar', value: false }));
    }

    return (
        <Box {...styler}>
            <Flex alignItems="center">
                <Logo link='/' />
                <Spacer />
                {isMobile && <IconButton
                    variant="ghost"
                    onClick={closeSidebar}
                    display={{ lg: 'none' }}
                    mr={2}
                    icon={<CloseIcon size="26px" />}
                    aria-label="Close"
                />}
            </Flex>
            <WorkspaceMenu isSidebar={isSidebar} />
            <Box as="nav" p={2}>
                {navigations.map((nav) => {
                    return (
                        <div key={nav.key}>
                            {
                                (!isMobile && !isSidebar) ? (
                                    <AppLink href={nav.path}>
                                        <Tooltip label={nav.name} placement='right'>
                                            <Box
                                                display="flex"
                                                height="60px"
                                                justifyContent="center"
                                                as="button"
                                                {...(isSidebar ? styler_nav : small_styler_nav)}
                                                onClick={() => {
                                                    closeSidebar();
                                                }}
                                                background={match(nav.path) ? 'gray.100' : 'white'}
                                            >
                                                <Box
                                                    className="tr200"
                                                    color={match(nav.path) ? 'warning.500' : 'gray.600'}
                                                    as="span"
                                                >
                                                    {nav.icon}
                                                </Box>
                                            </Box>
                                        </Tooltip>
                                    </AppLink>
                                ) : (
                                    <Box
                                        display="flex"
                                        textAlign="left"
                                        as="button"
                                        {...styler_nav}
                                        onClick={() => {
                                            router.push(nav.path).then(closeSidebar);
                                        }}
                                        background={match(nav.path) ? 'gray.100' : 'white'}
                                    >
                                        <Box
                                            className="tr200"
                                            color={match(nav.path) ? 'warning.500' : 'gray.600'}
                                            mr={6}
                                            as="span"
                                        >
                                            {nav.icon}
                                        </Box>
                                        <Box
                                            fontWeight={'600'}
                                            as='span'
                                            flexGrow={1}
                                        >
                                            {nav.name}
                                        </Box>
                                    </Box>
                                )
                            }
                        </div>
                    );
                })}
            </Box>
            {isSidebar && <PremiumAds />}
        </Box>
    );
}

export default memo(AppSidebar);
