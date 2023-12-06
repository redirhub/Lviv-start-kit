import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { capitalize } from 'lodash';
import { ContentSpinner } from '@/components/ContentSpinner';
import { AppSidebar } from '@/components/layout/Sidebar';
import { Error } from '@/components/layout/Error';
import { Header } from '@/components/layout/Header';
import { APP_NAME, SIDEBAR_SIZE, SMALL_SIDEBAR_SIZE } from '@/config/constant';
import useAppResponsive from '@/hooks/useAppResponsive';
import useCurrentAccountApi from '@/hooks/useCurrentAccountApi';
import ChevronRightIcon from '@/icons/chevron-right';
import ChevronLeftIcon from '@/icons/chevron-left';

const getCurrentState = () => {
    if (window.innerWidth > 1300) {
        return true;
    } else {
        return false;
    }
};

function getCurrentDimension() {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
}

export function AppMain({ title = 'dashboard', children }) {
    const { t } = useTranslation();
    const { isMobile } = useAppResponsive();
    const { isLoading } = useCurrentAccountApi();

    const router= useRouter();

    const isFullHeight= useMemo(()=> {
        if(router.pathname==='/short-url/c'|| router.pathname==='/redirects/c') {
            return true;
        }
        return false;
    }, [router]);

    const [isSidebar, setIsSidebar] = useState(getCurrentState());
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    useEffect(() => {
        const updateDimension = () => {
            setIsSidebar(getCurrentState());
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener('resize', updateDimension);

        return () => {
            window.removeEventListener('resize', updateDimension);
        };
    }, [isSidebar, screenSize]);

    const styler_content = {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        flexGrow: 1,
        px: isMobile ? 5 : '30px',
        py: isMobile ? 5 : 8,
        pb:isFullHeight?0:'auto',
        minW: 0,
        w: 'full',
    };

    const styler_content_wrap = {
        as: Box,
        flexDirection: 'column',
        minHeight: '100vh',
        width: isMobile
            ? '100%'
            : `calc(100% - ${
                isSidebar ? SIDEBAR_SIZE : SMALL_SIDEBAR_SIZE
            })`,
        ml: isMobile ? 0 : isSidebar ? SIDEBAR_SIZE : SMALL_SIDEBAR_SIZE,
    };

    const setSidebar = () => {
        setIsSidebar(!isSidebar);
    };

    return (
        <>
            <Head>
                <title>{t('shared.' + title, capitalize(title))} - {APP_NAME}</title>
            </Head>
            <div className="main">
                {!isMobile && toggle()}
                <AppSidebar isSidebar={isSidebar} />
                <Flex {...styler_content_wrap}>
                    <Header />
                    {isLoading ? (
                        <ContentSpinner />
                    ) : (
                        <Box {...styler_content}>
                            <Box w="full" minW={0}>
                                {children}
                            </Box>
                        </Box>
                    )}
                </Flex>
                <Error />
            </div>
        </>
    );

    function toggle() {
        return (
            <IconButton
                borderRadius="full"
                aria-label="control Sidebar"
                colorScheme="gray"
                icon={
                    isSidebar ? (
                        <ChevronLeftIcon size="20px" />
                    ) : (
                        <ChevronRightIcon size="20px" />
                    )
                }
                size="sm"
                position="fixed"
                left={`calc(${isSidebar ? SIDEBAR_SIZE : SMALL_SIDEBAR_SIZE} - 15px)`}
                top="50px"
                zIndex={10}
                minWidth="30px"
                height="30px"
                onClick={setSidebar}
            />
        );
    }
}
