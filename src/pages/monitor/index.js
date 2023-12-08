import { useTranslation } from 'react-i18next';
import { AppMain } from '@/components/layout/Main';
import MonitorList from '@/components/monitor/List';
import MonitorStats from '@/components/monitor/Stats';

export default function Monitor() {
    const { t } = useTranslation();

    return (
        <AppMain title={t('shared.monitor', 'Monitor')}>
            <MonitorStats />
            <MonitorList />
        </AppMain>
    );
}
