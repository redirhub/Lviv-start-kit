import { useTranslation } from 'react-i18next';
import { AppMain } from '@/components/layout/Main';
import { StatePanel } from '@/components/monitoring/StatePanel';
import { MonitoringsPanel } from '@/components/monitoring/MonitoringsPanel';

export default function Monitor() {
    const { t } = useTranslation();

    return (
        <AppMain title={t('shared.monitor', 'Monitor')}>
            <StatePanel />
            <MonitoringsPanel />
        </AppMain>
    );
}
