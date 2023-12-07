import { useTranslation } from 'react-i18next';
import { Box, Stack } from '@chakra-ui/react';
import { AppMain } from '@/components/layout/Main';
import FeatureRequest from '@/components/common/FeatureRequest';
import MonitorStats from '@/components/monitor/stats';
import MonitorList from '@/components/monitor/List';

export default function Monitor() {
    const { t } = useTranslation();

    return (
        <AppMain title={t('shared.monitor', 'Monitor')}>
            <MonitorStats />
            <MonitorList />
            <Box mx={{ base: 0, md: '14', xl: '48' }} mt={10}>
                <Stack spacing={6}>
                    <FeatureRequest id={'monitor'} />
                </Stack>
            </Box>
        </AppMain>
    );
}
