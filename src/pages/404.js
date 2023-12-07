import { AppMain } from '@/components/layout/Main';
import { Screen404 } from '@/components/Screen.404';

export default function Page404() {
    return <Screen404 />;
}

Page404.getLayout = ( page ) => (
    <AppMain>{ page }</AppMain>
);
