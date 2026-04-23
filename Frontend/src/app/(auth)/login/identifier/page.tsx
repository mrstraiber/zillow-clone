import Link from 'next/link';
import EmailLoginForm from './EmailLoginForm';
import AuthLogin from '@/components/layout/AuthLogin';
import Logo from '@/components/layout/Logo';

export default function Login() {
  return (
    <AuthLogin>
      <Logo />
      <EmailLoginForm />
      <div className="flex max-[244px]:flex-col sm:flex-row text-sm">
        <p>New to Zillow?</p>
        <Link href="/signup/identifier" className="text-blue-custom ml-2">
          <strong>Create account</strong>
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
