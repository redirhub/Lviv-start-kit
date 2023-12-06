import { useTranslation } from 'react-i18next';

export default function useSettingTabs() {
    const { t } = useTranslation();

    return [
        {
            name: t('settings.general', 'General'),
            key: 'general',
            path: '/settings/general',
        },
        {
            name: t('settings.members', 'Members'),
            key: 'members',
            path: '/settings/members',
        },
        {
            name: t('settings.network', 'Network security'),
            key: 'network',
            path: '/settings/network',
        }
    ];
};

