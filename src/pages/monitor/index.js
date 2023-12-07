import { useTranslation } from 'react-i18next';
import { AppMain } from '@/components/layout/Main';
import { ScreenMonitor } from '@/components/Screen.monitor';

export default function Monitor() {
    const { t } = useTranslation();

    return (
        <AppMain title={t('shared.monitor', 'Monitor')}>
            <ScreenMonitor />
        </AppMain>
    );
}
