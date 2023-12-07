import { useTranslation } from 'react-i18next';
import HomeIcon from '@/icons/home';
import RedirectsIcon from '@/icons/redirects';
import UrlIcon from '@/icons/url';
import MonitorIcon from '@/icons/monitor';
import HostnamesIcon from '@/icons/hostnames';
import SubscriptionsIcon from '@/icons/subscriptions';
import SettingsIcon from '@/icons/settings';

const useNavigations = () => {
    const { t } = useTranslation();

    return [
        {
            name: t('shared.home', 'Home'),
            key: 'home',
            path: '/',
            icon: <HomeIcon />
        },
        {
            name: t('shared.redirects', 'Redirects'),
            key: 'redirects',
            path: '/redirects',
            icon: <RedirectsIcon />
        },
        {
            name: t('shared.short-url', 'URL shortener'),
            key: 'short-url',
            path: '/short-url',
            icon: <UrlIcon />
        },
        {
            name: t('shared.monitor', 'Monitor'),
            key: 'monitor',
            path: '/monitor',
            icon: <MonitorIcon />
        },
        {
            name: t('shared.hostnames', 'Hostnames'),
            key: 'hostnames',
            path: '/hostnames',
            icon: <HostnamesIcon />
        },
        {
            name: t('shared.subscriptions', 'Subscriptions'),
            key: 'subscriptions',
            path: '/subscriptions',
            icon: <SubscriptionsIcon />
        },
        {
            name: t('shared.settings', 'Settings'),
            key: 'settings',
            path: '/settings/general',
            icon: <SettingsIcon />
        }
    ];
};

export default useNavigations;
