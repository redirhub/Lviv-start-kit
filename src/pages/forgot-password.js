import { ForgotPassword } from '@/components/auth/User.forgotPassword';
import { AuthMain } from '@/components/layout/AuthMain';

export default function ForgotPasswordPage() {
    return <ForgotPassword />;
}

ForgotPasswordPage.guard = 'guest';
ForgotPasswordPage.getLayout = (page) => (
    <AuthMain title='forgot-password'>{page}</AuthMain>
);
