import AuthLogin from '@/components/layout/AuthLogin';
import ForgotPasswordForm from './ForgotPassword';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Forgot your password?',
};

export default function ForgotPassword() {
  return (
    <AuthLogin>
      <ForgotPasswordForm />
    </AuthLogin>
  );
}
