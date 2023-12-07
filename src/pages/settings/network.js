import { useTranslation } from 'react-i18next';
import { AppMain } from '@/components/layout/Main';
import { SettingsNetwork } from '@/components/settings/Settings.network';
import { SettingsLayout } from '@/components/settings/Settings.layout';


export default function Network() {
    const { t } = useTranslation();
    return (
        <AppMain title={t('shared.settings', 'Settings')}>
            <SettingsLayout index={2}>
                <SettingsNetwork />
            </SettingsLayout>
        </AppMain>
    );
}
