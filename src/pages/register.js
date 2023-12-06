import { Register } from '@/components/auth/User.register';
import { AuthMain } from '@/components/layout/AuthMain';

export default function RegisterPage() {
    return <Register />;
}

RegisterPage.guard = 'guest';
RegisterPage.getLayout = (page) => (
    <AuthMain title='register'>{page}</AuthMain>
);
