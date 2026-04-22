'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PasswordInput from '@/components/ui/PasswordInput';
import Button from '@/components/ui/Button';
import PasswordCheckList from '@/components/ui/PasswordCheckList';
import EmailInputReadOnly from '@/components/ui/EmailInputReadOnly';

export default function PasswordRegisterForm() {
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const router = useRouter();
  const email: string = sessionStorage.getItem('Email') || '';

  // turn the password string into array so we can loop over it
  const passwordArray = password.split('');

  /*- drived state -*/
  const isUpperCase: boolean = passwordArray.some((input) => input >= 'A' && input <= 'Z');
  const isLowerCase: boolean = passwordArray.some((input) => input >= 'a' && input <= 'z');
  const isNumber: boolean = passwordArray.some((input) => input >= '0' && input <= '9');
  const isSpecial: boolean = passwordArray.some((input) => '!@#$%^&*)'.includes(input));

  // filtre how many booloan value are true ?
  const trueCount: number = [isUpperCase, isLowerCase, isNumber, isSpecial].filter(Boolean).length;

  // only this become true when there's at least 3 true boolean
  const atLeastThreeType: boolean = trueCount >= 3;
  const btnIsDisabled: boolean = !(password.length >= 8 && atLeastThreeType);

  // handle password input change
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const userInput = e.target.value.trim();
    setPassword(userInput);
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    // prevent the page from loading
    e.preventDefault();
  }

  // on page Load if email is not found in sessionStorage navigate back to the email login page
  useEffect(() => {
    if (!email) router.push(`/signup/identifier`);
  }, [router, email]);

  return (
    <form className="flex flex-col" method="POST" onSubmit={handleSubmit}>
      <div className="mb-8 mt-2">
        <h3 className="font-object text-xl mb-1">Enter your password</h3>
        <p className="text-base">To create your account, enter your password.</p>
      </div>

      <EmailInputReadOnly email={email} />

      <div className="mt-4">
        <label htmlFor="password-input" className="text-sm font-bold">
          Password
        </label>
        <PasswordInput
          password={password}
          onChange={handleChange}
          hidePassword={hidePassword}
          onHidePassword={setHidePassword}
        />
      </div>

      {password.length > 0 && (
        <div className="flex flex-col rounded-xl border mt-4 mb-2 w-full p-6 text-sm">
          <span>Your password must contain:</span>
          <ul>
            <PasswordCheckList correctFormat={password.length >= 8}>
              At least 8 characters
            </PasswordCheckList>
            <PasswordCheckList correctFormat={atLeastThreeType}>
              At least 3 of the following:
            </PasswordCheckList>
            <ul className="pl-8">
              <PasswordCheckList correctFormat={isLowerCase}>
                Lowercase letters (a-z)
              </PasswordCheckList>
              <PasswordCheckList correctFormat={isUpperCase}>
                Uppercase letters (A-Z)
              </PasswordCheckList>
              <PasswordCheckList correctFormat={isNumber}>Numbers (0-9)</PasswordCheckList>
              <PasswordCheckList correctFormat={isSpecial}>
                Special characters (e.g. !@#$%^&*)
              </PasswordCheckList>
            </ul>
          </ul>
        </div>
      )}

      <div className="mt-2 mb-3">
        <Button isDisabled={btnIsDisabled}>Continue</Button>
      </div>
    </form>
  );
}
