import { AppLink } from '../AppLink';
import {
    Box,
    Button,
    Flex,
    Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import useAppResponsive from '@/hooks/useAppResponsive';
import GoogleIcon from '@/icons/google';
import GithubIcon from '@/icons/github-avatar';
import { OAUTH_GITHUB, OAUTH_GOOGLE } from '@/config/constant';

export function Connections() {
    const { t } = useTranslation();
    const { isMobile, isDesktop } = useAppResponsive();
    return (<>
        {OAUTH_GOOGLE && <Box mt={isMobile ? 1 : 5}>
            <AppLink href={OAUTH_GOOGLE}>
                <Button leftIcon={<GoogleIcon />} width="100%">
                    {t('account.continue-google', 'Continue with Google')}
                </Button>
            </AppLink>
        </Box>
        }
        {OAUTH_GITHUB &&
            <Box mt={isMobile ? 1 : 2}>
                <AppLink href={OAUTH_GITHUB}>
                    <Button
                        leftIcon={<GithubIcon width="20px" height="20px" />}
                        width="100%"
                    >
                        {t('account.continue-github', 'Continue with GitHub')}
                    </Button>
                </AppLink>
            </Box>
        }
        {(OAUTH_GITHUB || OAUTH_GOOGLE) &&
            <Flex alignItems="center" justifyContent="center" gap={2} my={isMobile ? 1 : 5}>
                <Box width="100%" height="1px" background="#e2e8ef"></Box>
                <Text color="#4a5568">OR</Text>
                <Box width="100%" height="1px" background="#e2e8ef"></Box>
            </Flex>
        }
    </>);
}
