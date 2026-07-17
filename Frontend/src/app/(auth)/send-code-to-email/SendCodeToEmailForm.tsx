'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import SuccessMessage from '@/components/ui/SuccessMessage';
import EmailInputReadOnly from '@/components/ui/Auth/EmailInputReadOnly';

export default function SendCodeToEmailForm() {
  const [digitCode, setDigitCode] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [btnIsDisabled, setIsBtnDisabled] = useState<boolean>(true);

  const email: string = sessionStorage.getItem('Email') || '';
  const router = useRouter();

  // handle digit code input change
  function handleChangeDigitCode(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();
    if (value.length > 6) return;
    if (isNaN(Number(value))) return;
    setDigitCode(value);
    if (value.length === 6) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }

  // handle resend code to email
  function handleResendCode() {
    setShowSuccess(true);
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  // on page Load if email is not found in sessionStorage navigate back to the email login page
  useEffect(() => {
    if (!email) router.push(`/login/identifier`);
  }, [router, email]);

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }, [showSuccess]);

  return (
    <>
      <form method="POST" className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-8 mt-2">
          <h3 className="font-object text-xl mb-1">Check your email</h3>
          <p className="text-base">Enter the one-time code we emailed you.</p>
        </div>
        <div>
          <EmailInputReadOnly email={email} />
          <div className="mt-4">
            <div className="flex flex-row rounded-xl border focus-within:outline-2 focus-within:outline-blue-custom outline-offset-2 focus-within::transition focus-within:duration-100 focus-within:ease-in-out">
              <input
                type="text"
                id="password-input"
                className="p-3 w-full outline-none"
                placeholder="6-digit code"
                value={digitCode}
                onChange={handleChangeDigitCode}
                required={true}
              />
            </div>
          </div>
        </div>

        <div className="my-4">
          <Button isDisabled={btnIsDisabled}>Continue</Button>
        </div>
      </form>
      <div className="flex max-[244px]:flex-col sm:flex-row text-sm">
        <p>Didn&apos;t get a code?</p>
        <button onClick={handleResendCode}>
          <strong className="text-blue-custom ml-2 hover:cursor-pointer">Try again</strong>
        </button>
      </div>
      {showSuccess && (
        <SuccessMessage>
          A new code has been sent to your email address :<strong> (&quot;{email}&quot;)</strong>
        </SuccessMessage>
      )}
    </>
  );
}
