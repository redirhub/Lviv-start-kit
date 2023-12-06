import { Box, Image } from '@chakra-ui/react';
import { AppLink } from '@/components/AppLink';
import { APP_LOGO, APP_NAME, WEBSITE } from '@/config/constant';

export function Logo({ height = '40px', link, ...props }) {
    return (
        <Box px={4} py={3} {...props}>
            <AppLink display="block" href={link || WEBSITE}>
                <picture><Image height={height} width="auto" src={APP_LOGO} alt={APP_NAME} /></picture>
            </AppLink>
        </Box>
    );
}
