import { useTranslation } from 'react-i18next';
import { AppMain } from '@/components/layout/Main';
import { SettingsMembers } from '@/components/settings/Settings.members';
import { SettingsLayout } from '@/components/settings/Settings.layout';


export default function Members() {
    const { t } = useTranslation();
    return (
        <AppMain title={t('shared.settings', 'Settings')}>
            <SettingsLayout index={1}>
                <SettingsMembers />
            </SettingsLayout>
        </AppMain>
    );
}
