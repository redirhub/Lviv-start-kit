import { AppMain } from '@/components/layout/Main';
import { ScreenHome } from '@/components/Screen.home';

export default function Home() {
    return <ScreenHome />;
}

Home.getLayout = ( page ) => (
    <AppMain title='dashboard'>{page}</AppMain>
);
