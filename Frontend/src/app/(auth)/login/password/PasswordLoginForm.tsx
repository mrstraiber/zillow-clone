'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import EmailInputReadOnly from '@/components/ui/EmailInputReadOnly';
import PasswordInput from '@/components/ui/PasswordInput';

export default function PasswordLoginForm() {
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const email: string = sessionStorage.getItem('Email') || '';
  const router = useRouter();
  const btnIsDisabled: boolean = password.length < 8;

  // handle password input change
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value.trim());
  }

  // handle form submission
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  // on page Load if email is not found in sessionStorage navigate back to the email login page
  useEffect(() => {
    if (!email) router.push(`/login/identifier`);
  }, [router, email]);

  return (
    <form className="flex flex-col" method="POST" onSubmit={handleSubmit}>
      <h3 className="font-object text-xl mb-10">Enter your password</h3>
      <div>
        <EmailInputReadOnly email={email} />
        <div className="mt-4">
          <PasswordInput
            password={password}
            onChange={handleChange}
            hidePassword={hidePassword}
            onHidePassword={setHidePassword}
          />
        </div>
      </div>

      <div className="flex max-[244px]:flex-col sm:flex-row text-sm">
        <Link href="/forgot-password" className="text-[#0041d9] mt-5">
          <p>
            <strong>Forgot password?</strong>
          </p>
        </Link>
      </div>

      <div className="my-5">
        <Button isDisabled={btnIsDisabled}>Continue</Button>
      </div>
    </form>
  );
}
