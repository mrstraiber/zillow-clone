'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ErrorMessage from '@/components/ui/ErrorMessage';

export default function EmailLoginForm() {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [btnIsDisabled, setBtnIsDisabled] = useState<boolean>(true);
  const router = useRouter();
  // regex patterns for validating email and password inputs
  const emailsRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // on page Load ,check if there is an email in sessionStorage and set it to the email state
  useEffect(() => {
    const savedEmail = sessionStorage.getItem('loginEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setBtnIsDisabled(false);
    }
  }, []);

  // handle form submission
  function handleContinue(e: React.FormEvent<HTMLFormElement>) {
    // prevent the page from refreshing on submit
    e.preventDefault();

    // check if the email is valid using the regex pattern
    if (emailsRegex.test(email)) {
      // set the button disabled to true when the email is valid
      setBtnIsDisabled(true);

      // Save email to sessionStorage
      sessionStorage.setItem('loginEmail', email);

      // add a delay of 1 seconds before navigating to the password page
      setTimeout(() => {
        router.push(`/login/password`);
      }, 1000);
    } else {
      setEmailError(true);
    }
  }

  // handle email input change
  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    // reset the email error state to false when the user starts typing
    setEmailError(false);

    // save the value of the email input and remove any whitespace characters
    const emailValue: string = e.target.value.replace(/\s+/g, '');

    // update the email state
    setEmail(emailValue);

    // check if the email input is not empty to enable the submit button
    if (emailValue.length > 0) {
      setBtnIsDisabled(false);
    } else {
      setBtnIsDisabled(true);
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleContinue} method="POST">
      <h3 className="font-object text-xl mb-10">Sign in</h3>
      <input
        type="text"
        id="email-input"
        className="rounded-lg border py-4 px-3 w-full"
        placeholder="Email Address"
        value={email}
        onChange={handleEmailChange}
        onKeyDown={(e) => e.key === 'Enter' && handleContinue}
      />

      {emailError && ErrorMessage({ message: 'Please enter a valid email address' })}

      <div className="my-5">
        <button
          disabled={btnIsDisabled}
          className="w-full rounded-lg bg-[#0041d9] py-3 px-4 text-white font-black cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
          id="signin-button"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
