import { Box, Image } from '@chakra-ui/react';
import { ensureHttp, isValidHttpUrl } from '@/utils';
import useAppResponsive from '@/hooks/useAppResponsive';

export function Favicon({ host, https = true, status, ...props }) {
    const _url = ensureHttp( host, https );
    const url = isValidHttpUrl(_url) ? new URL( ensureHttp( host, https ) ) : _url;
    const { isMobile } = useAppResponsive();
    const size = isMobile ? '32px' : '40px';

    const styler_badge = {
        height: '10px',
        width: '10px',
        position: 'absolute',
        bottom: '1px',
        right: '1px',
        borderRadius: '50%',
        background: 'success.500',
    };


    if ( status !== 'active' ) {
        styler_badge['background'] = 'warning.500';
    }



    return (
        <Box position="relative">
            <Box
                minWidth={ size }
                boxShadow={ '0 0 0 1px var(--chakra-colors-gray-200) inset' }
                display="flex"
                alignItems="center"
                justifyContent="center"
                h={ size }
                w={ size }
                overflow="hidden"
                borderRadius="full"
                {...props}
            >
                <Image maxW="80%" alt='icon' maxH="80%" width="auto" height="auto" src={`https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`} />
            </Box>
            {
                status && (
                    <Box as="span" {...styler_badge}></Box>
                )
            }

        </Box>
    );
}
