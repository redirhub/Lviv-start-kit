import { useTranslation } from 'react-i18next';
import { AppMain } from '@/components/layout/Main';
import { SettingsGeneral } from '@/components/settings/Settings.general';
import { SettingsLayout } from '@/components/settings/Settings.layout';


export default function General() {
    const { t } = useTranslation();
    return (
        <AppMain title={t('shared.settings', 'Settings')}>
            <SettingsLayout index={0}>
                <SettingsGeneral />
            </SettingsLayout>
        </AppMain>
    );
}
