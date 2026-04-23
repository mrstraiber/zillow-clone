'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EmailForm from '@/components/forms/EmailForm';

export default function EmailLoginForm() {
  const [email, setEmail] = useState<string>(() => sessionStorage.getItem('Email') || '');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [btnIsDisabled, setBtnIsDisabled] = useState<boolean>(!email.length);
  const router = useRouter();

  // regex patterns for validating email and password inputs
  const emailsRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // handle form submission
  function handleContinue(e: React.SubmitEvent<HTMLFormElement>) {
    // prevent the page from refreshing on submit
    e.preventDefault();

    // check if the email is valid using the regex pattern
    if (emailsRegex.test(email)) {
      // set the button disabled to true when the email is valid
      setBtnIsDisabled(true);

      // Save email to sessionStorage
      sessionStorage.setItem('Email', email);

      // add a delay of 1 seconds before navigating to the password page
      setTimeout(() => {
        router.push(`/login/password`);
      }, 1000);
    } else {
      setEmailError(true);
      setBtnIsDisabled(true);
    }
  }

  // handle email input change
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // reset the email error state to false when the user starts typing
    setEmailError(false);

    // save the value of the email input and remove any whitespace characters
    const emailInput: string = e.target.value.replace(/\s+/g, '');

    // update the email state
    setEmail(emailInput);

    // check if the email input is not empty to enable the submit button
    setBtnIsDisabled(emailInput.length > 0 ? false : true);
  }

  return (
    <EmailForm
      email={email}
      emailError={emailError}
      btnIsDisabled={btnIsDisabled}
      onSubmit={handleContinue}
      onChange={handleChange}
      formTitle="Sign in"
      errorMessageContext="Please enter a valid email address"
    />
  );
}
