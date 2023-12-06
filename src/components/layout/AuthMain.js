import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { capitalize } from 'lodash';
import { Error } from '@/components/layout/Error';
import useAppResponsive from '@/hooks/useAppResponsive';
import { APP_NAME } from '@/config/constant';


export function AuthMain({ title = 'login', children }) {
    const { isMobile } = useAppResponsive();
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{t('account.' + title, capitalize(title))} - {APP_NAME}</title>
            </Head>
            <div className="main">
                {children}
                <Error />
            </div>
        </>
    );

}
