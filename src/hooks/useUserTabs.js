import { useTranslation } from 'react-i18next';

export default function useUserTabs() {
    const { t } = useTranslation();

    return [
        {
            name: t('account.profile', 'Profile'),
            key: 'profile',
            path: '/user/profile',
        },
        {
            name: t('account.connection', 'Login connections'),
            key: 'connection',
            path: '/user/connection',
        },
        {
            name: t('account.token', 'Token'),
            key: 'token',
            path: '/user/token',
        },
        {
            name: t('account.security', 'Security'),
            key: 'security',
            path: '/user/security',
        },
        {
            name: t('account.dangerzone', 'Danger zone'),
            key: 'dangerzone',
            path: '/user/dangerzone',
        }
    ];
};

