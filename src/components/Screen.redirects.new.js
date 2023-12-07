import { Box, Button, Stack, IconButton, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@/components/PageTitle';
import CloseIcon from '@/icons/close';
import AlertTriangleIcon from '@/icons/alert-triangle';
import { AppLink } from '@/components/AppLink';
import { RedirectsNewForm } from '@/components/redirects-new/Form';
import useAppResponsive from '@/hooks/useAppResponsive';
import DownloadIcon from '@/icons/download';
import useRedirectsPlan from '@/hooks/useRedirectsPlan';

export function ScreenRedirectsNew() {
    const { t } = useTranslation();
    const router = useRouter();
    const importScreen = router.pathname === '/redirects/import';

    const { isDesktop } = useAppResponsive();
    const { leftRecords, recordsColor, upgradeLink } = useRedirectsPlan();

    return (
        <Box
            mx="auto"
            width="100%"
            maxWidth="736px"
            pt={2}
        >
            <PageTitle break={true} title={t('redirect.new', 'New redirect')}>
                <Stack
                    w={isDesktop ? undefined : 'full'}
                    alignItems="center"
                    spacing={isDesktop ? 6 : 0}
                    direction="row"
                    justifyContent="space-between"
                >
                    {
                        importScreen ? (
                            <Link href='/redirects/new'>
                                <Button colorScheme="primary" variant="link">
                                    {t('redirect.create-single', 'Single import')}
                                </Button>
                            </Link>
                        ) : (
                            <Link href='/redirects/import'>
                                <Button colorScheme="primary" rightIcon={<DownloadIcon size="20px" />} variant="link">
                                    {t('redirect.create-import', 'Import from CSV')}
                                </Button>
                            </Link>
                        )
                    }

                    <Link href="/redirects">
                        <IconButton
                            ml={4}
                            color="gray.700"
                            bg="gray.300"
                            borderRadius="50%"
                            icon={<CloseIcon size="20px" />}
                            aria-label="Cancel"
                        />
                    </Link>
                </Stack>
            </PageTitle>
            {leftRecords < 500 && (
                <Stack mt={2} direction="row" spacing={2}>
                    {leftRecords < 20 && <AlertTriangleIcon color={recordsColor} size="20px" />}
                    <Text color={recordsColor}>
                        {t('redirect.plan-left', '{{count}} redirect URLs left', { count: leftRecords })}
                    </Text>
                    <AppLink fontWeight="600" color="primary.700" href={upgradeLink}>
                        {t('shared.upgrade', 'Upgrade')}
                    </AppLink>
                </Stack>
            )}
            <RedirectsNewForm />
        </Box>
    );
}
