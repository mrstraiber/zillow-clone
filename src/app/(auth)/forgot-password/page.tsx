import AuthLogin from '@/components/layout/AuthLogin';
import ForgotPasswordForm from './ForgotPassword';
import Link from 'next/link';
export default function ForgotPassword() {
  return (
    <AuthLogin>
      <ForgotPasswordForm />
      <p>
        <Link href="/login/identifier" className="text-[#0041d9]">
          <strong className="text-sm">Back to sign in</strong>
        </Link>
      </p>
    </AuthLogin>
  );
}
