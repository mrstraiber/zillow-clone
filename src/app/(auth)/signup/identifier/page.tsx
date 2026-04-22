import Logo from '@/components/layout/Logo';
import Link from 'next/link';
import { Metadata } from 'next';

import AuthLogin from '@/components/layout/AuthLogin';
import EmailRegisterForm from './EmailRegisterForm';

export const metadata: Metadata = {
  title: 'Create account',
};

export default function RegisterLoginPage() {
  return (
    <AuthLogin>
      <Logo />
      <EmailRegisterForm />
      <div className="flex max-[244px]:flex-col sm:flex-row text-sm">
        <p>Have a Zillow account?</p>
        <Link href="/login/identifier" className="text-blue-custom ml-2">
          <strong>Sign in</strong>
        </Link>
      </div>
      <div className="my-4">
        <Link href="/pro-register" className="text-blue-custom text-sm">
          <strong>I am a professional</strong>
        </Link>
      </div>
      <div className="flex items-center my-10">
        <div className="border-b w-full border-[#535364]"></div>
        <div>
          <span className="mx-3 text-sm text-[#535364]">OR</span>
        </div>
        <div className="border-b w-full border-[#535364]"></div>
      </div>
      <div className="flex max-[285px]:flex-col sm:flex-row text-xs">
        <p>By submitting, I accept Zillow&apos;s</p>
        <Link href="/terms">
          <strong className="ml-1 text-blue-custom">terms of use</strong>
        </Link>
      </div>
    </AuthLogin>
  );
}
