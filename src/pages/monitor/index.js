import { Dashboard } from '../../components/monitor/Dashboard';
import { useTranslation } from 'react-i18next';
import { AppMain } from '@/components/layout/Main';

export default function Monitor() {
    const { t } = useTranslation();

    return (
        <AppMain title={t('shared.monitor', 'Monitor')}>
            <Dashboard />
            {/*<Box mx={{ base: 0, md: '14', xl: '48' }} mt={10}>*/}
            {/*    <Stack spacing={6}>*/}
            {/*        <FeatureRequest id={'monitor'} />*/}
            {/*    </Stack>*/}
            {/*</Box>*/}
        </AppMain>
    );
}
