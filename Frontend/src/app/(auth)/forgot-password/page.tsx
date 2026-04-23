import AuthLogin from '@/components/layout/AuthLogin';
import ForgotPasswordForm from './ForgotPassword';
import Logo from '@/components/layout/Logo';

export default function ForgotPassword() {
  return (
    <AuthLogin>
      <Logo />
      <ForgotPasswordForm />
    </AuthLogin>
  );
}
