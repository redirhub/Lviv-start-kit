import { Box, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AppMain } from '@/components/layout/Main';
import ArrowLeftIcon from '@/icons/arrow-left';
import ErrorPage from '@/pages/404';
import { StatisticsPreview } from '@/components/statistics/StatisticsPreview';
import { AppLink } from '@/components/AppLink';
import { handleGoBack } from '@/utils';

export function StatisticsFilesPreview({ files, product }) {
    const { t } = useTranslation();
    return (
        <Box mx="auto">
            <AppLink onClick={handleGoBack}>
                <Button
                    leftIcon={ <ArrowLeftIcon /> }
                    colorScheme="primary"
                    variant="link"
                    mt="-4px"
                    mb="26px"
                >
                    {t('shared.goback', 'Go back')}
                </Button>
            </AppLink>
            <StatisticsPreview files={files} product={product} />
        </Box>
    );
}

StatisticsFilesPreview.getLayout = ( page ) => (
    <AppMain>{ page }</AppMain>
);

export default ErrorPage;
