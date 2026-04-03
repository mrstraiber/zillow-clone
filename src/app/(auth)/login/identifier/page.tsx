import Logo from '@/components/ui/Logo';
import Link from 'next/link';
import EmailLoginForm from './EmailLoginForm';

export default function Login() {
  return (
    <div className="basis-3/12 m-auto lg:min-w-120 min-w-100 max-[480px]:min-w-full">
      <div className="flex-col justify-center order-1 w-full items-start px-4 md:px-10 lg:px-20 flex">
        <div className="my-5">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="w-full">
          <EmailLoginForm />
          <div className="flex max-[244px]:flex-col sm:flex-row text-sm">
            <p>New to Zillow?</p>
            <Link href="/register" className="text-[#0041d9] ml-2">
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
              <strong className="ml-1 text-[#0041d9]">terms of use</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
