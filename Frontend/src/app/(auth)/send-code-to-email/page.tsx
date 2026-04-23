import AuthLogin from '@/components/layout/AuthLogin';
import SendCodeToEmailForm from './SendCodeToEmailForm';
import Link from 'next/link';
import { Metadata } from 'next';
import Logo from '@/components/ui/Logo';

export const metadata: Metadata = {
  title: 'Check your email',
};

export default function SendCodeToEmail() {
  return (
    <AuthLogin>
      <Logo />
      <SendCodeToEmailForm />
      <div className="mt-15">
        <div className="flex items-center my-5">
          <div className="border-b w-full border-[#535364]"></div>
        </div>
        <div>
          <Link href="/login/password">
            <strong className="text-[#0041d9] text-sm">Or enter a password</strong>
          </Link>
        </div>
      </div>
    </AuthLogin>
  );
}
