import { useRouter } from 'next/router';
import { AppMain } from '@/components/layout/Main';
import { StatisticsFilesPreview } from  '@/pages/statistics/__private_slug';
import ErrorPage from '@/pages/404';


export default function Statistics() {
    const router = useRouter();
    const files= router.query.files;
    const product = router.query.product;

    if (!!files || !!product) {
        return <StatisticsFilesPreview files={files} product={product} />;
    }

    if ( ! router.isReady ) {
        return null;
    }

    return ErrorPage;
}

Statistics.getLayout = ( page ) => (
    <AppMain>{ page }</AppMain>
);
