import Logo from '@/components/layout/Logo';
import Link from 'next/link';
import { Metadata } from 'next';
import AuthLogin from '@/components/layout/AuthLogin';
import PasswordRegisterForm from './PasswordRegisterForm';

export const metadata: Metadata = {
  title: 'Create your password',
};

export default function RegisterPasswordPage() {
  return (
    <AuthLogin>
      <Logo />
      <PasswordRegisterForm />
      <div className="flex max-[244px]:flex-col sm:flex-row text-sm">
        <p>Already have an account?</p>
        <Link href="/login/identifier" className="text-blue-custom ml-2">
          <strong>Sign in</strong>
        </Link>
      </div>
      <div className="flex items-center my-5">
        <div className="border-b w-full border-[#535364]"></div>
      </div>
      <div>
        <Link href="/send-code-to-email">
          <strong className="text-blue-custom text-sm">Or send a secure code to your email</strong>
        </Link>
      </div>
    </AuthLogin>
  );
}
