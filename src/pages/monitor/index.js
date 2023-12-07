import { useTranslation } from 'react-i18next';
import { AppMain } from '@/components/layout/Main';
import MonitorStats from '@/components/monitor/stats';
import MonitorList from '@/components/monitor/List';

export default function Monitor() {
    const { t } = useTranslation();

    return (
        <AppMain title={t('shared.monitor', 'Monitor')}>
            <MonitorStats />
            <MonitorList />
        </AppMain>
    );
}
