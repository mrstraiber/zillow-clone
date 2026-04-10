'use client';

import ErrorMessage from '@/components/ui/ErrorMessage';
import { useState, useEffect } from 'react';
export default function ForgotPasswordForm() {
  const [email, setEmail] = useState<string>(() => {
    const savedEmail = sessionStorage.getItem('loginEmail');
    return savedEmail ? savedEmail : '';
  });
  const [emailError, setEmailError] = useState<boolean>(false);

  // regex patterns for validating email and password inputs
  const emailsRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    // prevent the page from loading
    e.preventDefault();
    if (!emailsRegex.test(email)) {
      setEmailError(true);
    }
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newEmail = e.target.value.trim();
    setEmailError(false);
    setEmail(newEmail);
    // update the email in sessionStorage if the new email is valid
    if (emailsRegex.test(newEmail)) {
      sessionStorage.setItem('loginEmail', newEmail);
    }
  }

  // update the page title
  useEffect(() => {
    document.title = 'Forgot your password?';
  }, []);

  return (
    <form action="POST" className="flex flex-col" onSubmit={handleSubmitForm}>
      <div className="mb-8 mt-2">
        <h3 className="font-object text-xl mb-4">Forgot your password?</h3>
        <p className="text-base">We will send instructions to your email to reset your password.</p>
      </div>
      <div
        className={`flex flex-row rounded-xl border focus-within:outline-2  outline-offset-2 focus-within:outline-[#0041d9] focus-within::transition focus-within:duration-100 focus-within:ease-in-out ${emailError && 'border-red-500'}`}
      >
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          id="email"
          className="p-3 w-full outline-none"
        />
      </div>

      {emailError && ErrorMessage({ message: 'Invalid email address. Verify and try again.' })}

      <div className="my-4">
        <button
          className="w-full rounded-xl bg-[#0041d9] py-3 px-4 text-white font-bold cursor-pointer"
          type="submit"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
