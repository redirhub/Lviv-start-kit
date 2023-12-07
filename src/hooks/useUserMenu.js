import useLogoutApi from './useLogoutApi';
import { useTranslation } from 'react-i18next';
import { Spinner } from '@chakra-ui/react';
import UserSettingsIcon from '@/icons/user-settings';
import NewIcon from '@/icons/new';
import WebsiteIcon from '@/icons/website';
import SupportIcon from '@/icons/support';
import HelpIcon from '@/icons/help';
import LogoutIcon from '@/icons/logout';
import ArrowRightUpIcon from '@/icons/arrow-right-up';

export default function useUserMenu() {
    const { t } = useTranslation();
    const [logout, { isLoading, isFetching }] = useLogoutApi();
    const loggingout = isLoading || isFetching;

    return [
        {
            name: t('account.settings', 'Account settings'),
            key: 'usersettings',
            path: '/user/profile',
            icon: <UserSettingsIcon />,
            righticon: null
        },
        {
            name: t('settings.create', 'Create new workspace'),
            key: 'new',
            path: '',
            type: 'workspace',
            icon: <NewIcon />,
            righticon: null
        },
        {
            name: t('settings.marketing-website', 'Marketing Website'),
            key: 'website',
            path: '/',
            icon: <WebsiteIcon />,
            righticon: <ArrowRightUpIcon />
        },
        {
            name: t('settings.support', 'Support'),
            key: 'support',
            path: '/',
            icon: <SupportIcon />,
            righticon: null
        },
        {
            name: t('settings.help', 'Help center'),
            key: 'help',
            path: '/',
            icon: <HelpIcon />,
            righticon: null
        },
        {
            name: t('settings.logout', 'Log out'),
            key: 'logout',
            type: 'logout',
            path: '#',
            icon: loggingout ? <Spinner /> : <LogoutIcon />,
            righticon: null
        },
    ];
};

