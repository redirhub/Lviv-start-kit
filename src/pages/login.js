import { Login } from '@/components/auth/User.login';
import { AuthMain } from '@/components/layout/AuthMain';

export default function LoginPage() {
    return <Login />;
}

LoginPage.guard = 'guest';
LoginPage.getLayout = (page) => (
    <AuthMain title='login'>{page}</AuthMain>
);
