import Link from 'next/link';
import PasswordLoginForm from './PasswordLoginForm';
import AuthLogin from '@/components/layout/AuthLogin';
import { Metadata } from 'next';
import Logo from '@/components/ui/Logo';

export const metadata: Metadata = {
  title: 'Enter your password',
};

export default function Password() {
  return (
    <AuthLogin>
      <Logo />
      <PasswordLoginForm />
      <div className="flex max-[244px]:flex-col sm:flex-row text-sm">
        <p>New to Zillow?</p>
        <Link href="/register" className="text-[#0041d9] ml-2">
          <strong>Create account</strong>
        </Link>
      </div>
      <div className="flex items-center my-5">
        <div className="border-b w-full border-[#535364]"></div>
      </div>
      <div>
        <Link href="/send-code-to-email">
          <strong className="text-[#0041d9] text-sm">Or send a secure code to your email</strong>
        </Link>
      </div>
    </AuthLogin>
  );
}
