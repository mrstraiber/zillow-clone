'use client';

import ErrorMessage from '@/components/ui/ErrorMessage';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import EmailLogoSvg from '@/components/ui/EmailLogoSvg';
import SuccessMessage from '@/components/ui/SuccessMessage';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState<string>(() => sessionStorage.getItem('Email') || '');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [formIsSubmited, setFormIsSubmitted] = useState<boolean>(false);
  const [resendEmailSuccess, setResendEmailSuccess] = useState<boolean>(false);

  // regex patterns for validating email and password inputs
  const emailsRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    // prevent the page from loading
    e.preventDefault();

    // eslint-disable-next-line
    emailsRegex.test(email) ? setFormIsSubmitted(true) : setEmailError(true);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newEmail = e.target.value.trim();
    setEmailError(false);
    setEmail(newEmail);
    // update the email in sessionStorage if the new email is valid
    if (emailsRegex.test(newEmail)) {
      sessionStorage.setItem('Email', newEmail);
    }
  }

  function handleResendEmailButton() {
    setResendEmailSuccess(true);
    setTimeout(() => {
      setResendEmailSuccess(false);
    }, 3000);
  }

  // update the page title
  useEffect(() => {
    document.title = 'Forgot your password?';
  }, []);

  return (
    <>
      {formIsSubmited ? (
        <div className="flex flex-col m-auto">
          <div className="flex flex-col justify-center mx-auto item-center">
            <EmailLogoSvg />
          </div>
          <div className="text-center pt-5">
            <h3 className="font-object text-xl mb-4">Check Your Email</h3>
            <p>{`Check the email address ${email} for instructions to reset your password.`}</p>
          </div>
          <form method="POST" className="py-5">
            <div className="border rounded-xl w-full text-center hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer">
              <button
                className="p-3 cursor-pointer"
                type="button"
                onClick={handleResendEmailButton}
              >
                <span>Resend email</span>
              </button>
            </div>
            <div className="flex flex-col items-center mt-4">
              <p className="text-sm text-blue-custom cursor-pointer">
                <strong>
                  <Link href="/">Return to Zillow</Link>
                </strong>
              </p>
            </div>
          </form>
          {resendEmailSuccess && <SuccessMessage>Email resent successfully!</SuccessMessage>}
        </div>
      ) : (
        <>
          <form action="POST" className="flex flex-col" onSubmit={handleSubmitForm}>
            <div className="mb-8 mt-2">
              <h3 className="font-object text-xl mb-4">Forgot your password?</h3>
              <p className="text-base">
                We will send instructions to your email to reset your password.
              </p>
            </div>
            <div
              className={`flex flex-row rounded-xl border focus-within:outline-2  outline-offset-2 focus-within:outline-blue-custom focus-within::transition focus-within:duration-100 focus-within:ease-in-out ${emailError && 'border-red-500'}`}
            >
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                id="email"
                className="p-3 w-full outline-none"
              />
            </div>

            {emailError &&
              ErrorMessage({ message: 'Invalid email address. Verify and try again.' })}

            <div className="my-4">
              <button
                className="w-full rounded-xl bg-[#0041d9] py-3 px-4 text-white font-bold cursor-pointer"
                type="submit"
              >
                Continue
              </button>
            </div>
          </form>
          <p>
            <Link href="/login/password" className="text-[#0041d9]">
              <strong className="text-sm">Back to sign in</strong>
            </Link>
          </p>
        </>
      )}
    </>
  );
}
