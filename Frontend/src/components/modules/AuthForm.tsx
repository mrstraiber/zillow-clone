'use client';
import { useState, useReducer } from 'react';
import Button from '../ui/Button';

interface AuthFormProps {
  onCloseButton: () => void;
}

function reducer(
  state: typeof initializeState,
  action: { type: string; payload: Partial<typeof initializeState> },
) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const initializeState = {
  professionalType: '',
  firstName: '',
  lastName: '',
  zipCode: '',
  phoneNumber: '',
};

export default function AuthForm({ onCloseButton }: AuthFormProps) {
  const [currentSection, setCurrentSection] = useState<'auth' | 'forgotPassword'>('auth');
  const [authType, setAuthType] = useState<'login' | 'newAccount'>('login');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [professionalType, setProfessionalType] = useState<string>('');
  const [state, dispatch] = useReducer(reducer, initializeState);

  // turn the password string into array so we can loop over it
  const passwordArray = password.split('');

  /*- drived state -*/
  const isNumber: boolean = passwordArray.some((input) => input >= '0' && input <= '9');
  const isSpecial: boolean = passwordArray.some((input) => '/.-_)(^#~`!@#$%&*£¨<>'.includes(input));
  const isUpperCase: boolean = passwordArray.some((input) => input >= 'A' && input <= 'Z');
  const isLowerCase: boolean = passwordArray.some((input) => input >= 'a' && input <= 'z');
  const letterCheck: boolean = isLowerCase && isUpperCase;
  const btnIsDisabled =
    authType === 'newAccount' &&
    !(password.length >= 8 && isNumber && isSpecial && isLowerCase && isUpperCase);

  // handle password input change
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const userInput = e.target.value.trim();
    setPassword(userInput);
  }

  // handle form submit
  function handleAuthFormSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (authType === 'login') {
      handleAuthTypeLogin();
    }

    if (authType === 'newAccount') {
      handleAuthTypeNewAccount();
    }
  }

  // handle Login Form
  function handleAuthTypeLogin() {}

  // handle New Account Form
  function handleAuthTypeNewAccount() {}

  function handleForgotPasswordFormSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-100 w-full min-h-screen flex justify-center items-center md:bg-black/50">
      <div
        className={`max-md:flex max-md:items-center flex-wrap bg-white md:rounded-2xl md:shadow-xl py-6 px-5 w-full max-md:h-screen md:max-w-115 md:max-h-[95%] overflow-x-hidden ${isChecked ? 'overflow-y-auto' : ''} `}
      >
        <div className="relative p-3">
          <div className="absolute -right-2 -top-4">
            <button
              type="button"
              className="p-2.5 cursor-pointer hover:bg-black/15 rounded-2xl"
              onClick={onCloseButton}
            >
              <span>
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  className="h-4"
                >
                  <path
                    stroke="none"
                    d="M18.83,16,29.41,5.41a2,2,0,0,0-2.82-2.82L16,13.17,5.41,2.59A2,2,0,0,0,2.59,5.41L13.17,16,2.59,26.59a2,2,0,1,0,2.82,2.82L16,18.83,26.59,29.41a2,2,0,0,0,2.82-2.82Z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="my-2">
            <h1
              className={`font-black text-2xl text-center ${currentSection === 'auth' ? 'text-[22px]' : ''}`}
            >
              {currentSection === 'auth'
                ? 'Sign in or register to receive personalized recommendations'
                : 'Forgot your password?'}
            </h1>
            {currentSection === 'forgotPassword' && (
              <p className="text-center">
                Enter your email address and we&apos;ll send you a link to set your password.
              </p>
            )}
          </div>

          {currentSection === 'auth' && (
            <div className="mt-6">
              <div className="flex flex-row items-center border-b border-[#cdcdd3]">
                <button
                  type="button"
                  className={`p-4 cursor-pointer hover:text-blue-custom ${authType === 'login' ? 'custom-button' : ''}`}
                  onClick={() => {
                    setAuthType('login');
                    setPassword('');
                  }}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className={`p-4 cursor-pointer hover:text-blue-custom ${authType === 'newAccount' ? 'custom-button' : ''}`}
                  onClick={() => {
                    setAuthType('newAccount');
                    setPassword('');
                  }}
                >
                  New account
                </button>
              </div>
              <div className="m-4">
                <form onSubmit={handleAuthFormSubmit}>
                  {/* input fields */}
                  <section>
                    <div className="w-full">
                      <div
                        className="w-full cursor-pointer"
                        onClick={() => document.getElementById('email-input')?.focus()}
                      >
                        <label htmlFor="email-input" className="text-sm/6 font-bold cursor-pointer">
                          Email
                        </label>
                      </div>
                      <div className="input-field">
                        <input
                          type="email"
                          id="email-input"
                          className="w-full outline-none placeholder:text-[#535364]"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div
                        className="w-full cursor-pointer"
                        onClick={() => document.getElementById('password-input')?.focus()}
                      >
                        <label htmlFor="password-input" className="text-sm/6 font-bold">
                          Password
                        </label>
                      </div>
                      <div className="input-field">
                        <input
                          type="password"
                          id="password-input"
                          className="w-full outline-none placeholder:text-[#535364]"
                          placeholder={`${authType === 'login' ? 'Enter password' : 'Create password'}`}
                          value={password}
                          onChange={handlePasswordChange}
                          required={true}
                        />
                      </div>
                    </div>
                  </section>

                  {/* password requirements */}
                  {authType === 'newAccount' && (
                    <>
                      <section className="py-1 mb-2">
                        <ul>
                          <li className="flex flex-row items-center gap-1 text-xs/6 text-gray-600">
                            <span
                              className={`w-3.5 text-center ${password.length >= 8 ? 'text-green-900 text-sm' : ''}`}
                            >
                              {password.length >= 8 && <strong>✓</strong>}
                              {password.length > 0 && password.length < 8 && (
                                <svg
                                  viewBox="0 0 32 32"
                                  aria-hidden="true"
                                  focusable="false"
                                  role="img"
                                  className="h-3.75 fill-red-900"
                                >
                                  <path
                                    stroke="none"
                                    d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm5.71 18.29a1 1 0 010 1.42 1 1 0 01-1.42 0L16 17.41l-4.29 4.3a1 1 0 01-1.42 0 1 1 0 010-1.42l4.3-4.29-4.3-4.29a1 1 0 011.42-1.42l4.29 4.3 4.29-4.3a1 1 0 011.42 1.42L17.41 16z"
                                  ></path>
                                </svg>
                              )}
                            </span>
                            <span
                              className={`${password.length > 0 && password.length < 8 ? 'text-red-900' : ''}`}
                            >
                              At least 8 characters
                            </span>
                          </li>
                          <li className="flex flex-row items-center gap-1 text-xs/6 text-gray-600">
                            <span
                              className={`w-3.5 text-center ${isNumber ? 'text-green-900 text-sm' : ''}`}
                            >
                              {isNumber && <strong>✓</strong>}
                              {!isNumber && password.length > 0 && (
                                <svg
                                  viewBox="0 0 32 32"
                                  aria-hidden="true"
                                  focusable="false"
                                  role="img"
                                  className="h-3.75 fill-red-900"
                                >
                                  <path
                                    stroke="none"
                                    d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm5.71 18.29a1 1 0 010 1.42 1 1 0 01-1.42 0L16 17.41l-4.29 4.3a1 1 0 01-1.42 0 1 1 0 010-1.42l4.3-4.29-4.3-4.29a1 1 0 011.42-1.42l4.29 4.3 4.29-4.3a1 1 0 011.42 1.42L17.41 16z"
                                  ></path>
                                </svg>
                              )}
                            </span>
                            <span
                              className={`${!isNumber && password.length > 0 ? 'text-red-900' : ''}`}
                            >
                              {!isNumber && password.length > 0
                                ? 'At least 1 number'
                                : 'Mix of letters and numbers'}
                            </span>
                          </li>
                          <li className="flex flex-row items-center gap-1 text-xs/6 text-gray-600">
                            <span
                              className={`w-3.5 text-center ${isSpecial ? 'text-green-900 text-sm' : ''}`}
                            >
                              {isSpecial && <strong>✓</strong>}
                              {!isSpecial && password.length > 0 && (
                                <svg
                                  viewBox="0 0 32 32"
                                  aria-hidden="true"
                                  focusable="false"
                                  role="img"
                                  className="h-3.75 fill-red-900"
                                >
                                  <path
                                    stroke="none"
                                    d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm5.71 18.29a1 1 0 010 1.42 1 1 0 01-1.42 0L16 17.41l-4.29 4.3a1 1 0 01-1.42 0 1 1 0 010-1.42l4.3-4.29-4.3-4.29a1 1 0 011.42-1.42l4.29 4.3 4.29-4.3a1 1 0 011.42 1.42L17.41 16z"
                                  ></path>
                                </svg>
                              )}
                            </span>
                            <span
                              className={`${!isSpecial && password.length > 0 ? 'text-red-900' : ''}`}
                            >
                              At least 1 special character
                            </span>
                          </li>
                          <li className="flex flex-row items-center gap-1 text-xs/6 text-gray-600">
                            <span
                              className={`w-3.5 text-center ${letterCheck ? 'text-green-900 text-sm' : ''}`}
                            >
                              {letterCheck && <strong>✓</strong>}
                              {!letterCheck && password.length > 0 && (
                                <svg
                                  viewBox="0 0 32 32"
                                  aria-hidden="true"
                                  focusable="false"
                                  role="img"
                                  className="h-3.75 fill-red-900"
                                >
                                  <path
                                    stroke="none"
                                    d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm5.71 18.29a1 1 0 010 1.42 1 1 0 01-1.42 0L16 17.41l-4.29 4.3a1 1 0 01-1.42 0 1 1 0 010-1.42l4.3-4.29-4.3-4.29a1 1 0 011.42-1.42l4.29 4.3 4.29-4.3a1 1 0 011.42 1.42L17.41 16z"
                                  ></path>
                                </svg>
                              )}
                            </span>
                            <span
                              className={`${!letterCheck && password.length > 0 ? 'text-red-900' : ''}`}
                            >
                              {!isLowerCase && isUpperCase && 'At least 1 lowercase letter'}
                              {isLowerCase && !isUpperCase && 'At least 1 uppercase letter'}
                              {!isLowerCase &&
                                !isUpperCase &&
                                'At least 1 lowercase letter and 1 uppercase letter'}
                              {letterCheck && 'Mix of uppercase and lowercase letters'}
                            </span>
                          </li>
                        </ul>
                      </section>

                      {/* checkbox */}
                      <section>
                        <div className="flex flex-row text-base pb-2 text-black/90 group w-fit">
                          <input
                            type="checkbox"
                            className="group-hover:cursor-pointer"
                            id="checkbox"
                            checked={isChecked}
                            onChange={() => setIsChecked((toogle) => !toogle)}
                          />
                          <label htmlFor="checkbox" className="group-hover:cursor-pointer pl-2">
                            I am a landlord or industry professional
                          </label>
                        </div>
                        {isChecked && (
                          <div className="pt-4 pb-1.5 flex flex-col gap-2">
                            <h1 className="font-extrabold text-xl text-left">
                              Professional Information
                            </h1>
                            <div>
                              <div className="w-full my-2">
                                <div
                                  className="w-full cursor-pointer"
                                  onClick={() => document.getElementById('email-input')?.focus()}
                                >
                                  <label
                                    htmlFor="professional-type"
                                    className="text-sm/6 font-bold cursor-pointer"
                                  >
                                    Professional type
                                  </label>
                                </div>
                                <div className="input-field">
                                  <select
                                    id="professional-type"
                                    className="w-full outline-none placeholder:text-[#535364]"
                                    value={professionalType}
                                    onChange={(e) => setProfessionalType(e.target.value)}
                                    required={true}
                                  >
                                    <option value="" disabled>
                                      Select your category
                                    </option>
                                    <option value="real-estate-agent">
                                      Real Estate Agent/Broker
                                    </option>
                                    <option value="mortgage-lender">Mortgage Lender </option>
                                    <option value="home-improvement-services">
                                      Home Improvement Services
                                    </option>
                                    <option value="landlord">Landlord</option>
                                    <option value="photographer">Photographer</option>
                                    <option value="home-builder">Home Builder</option>
                                    <option value="home-inspector">Home Inspector</option>
                                    <option value="property-manager">Property Manager</option>
                                    <option value="other">Other Real Estate Professional</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-row justify-between my-2">
                                <div className="w-full md:w-[45%]">
                                  <div
                                    className="w-full cursor-pointer"
                                    onClick={() => document.getElementById('firstName')?.focus()}
                                  >
                                    <label
                                      htmlFor="firstName"
                                      className="text-sm/6 font-bold cursor-pointer"
                                    >
                                      First Name
                                    </label>
                                  </div>
                                  <div className="input-field">
                                    <input
                                      type="text"
                                      id="firstName"
                                      className="outline-none placeholder:text-[#535364]"
                                      placeholder="First name"
                                    />
                                  </div>
                                </div>
                                <div className="w-full md:w-[45%]">
                                  <div
                                    className="w-full cursor-pointer"
                                    onClick={() => document.getElementById('lastName')?.focus()}
                                  >
                                    <label
                                      htmlFor="lastName"
                                      className="text-sm/6 font-bold cursor-pointer"
                                    >
                                      Last Name
                                    </label>
                                  </div>
                                  <div className="input-field">
                                    <input
                                      type="text"
                                      id="lastName"
                                      className="outline-none placeholder:text-[#535364]"
                                      placeholder="Last name"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="w-full my-2">
                                <div
                                  className="w-full cursor-pointer"
                                  onClick={() => document.getElementById('zip-code')?.focus()}
                                >
                                  <label
                                    htmlFor="zip-code"
                                    className="text-sm/6 font-bold cursor-pointer"
                                  >
                                    Zip/Postal
                                  </label>
                                </div>
                                <div className="input-field">
                                  <input
                                    type="text"
                                    id="zip-code"
                                    className="outline-none placeholder:text-[#535364]"
                                    placeholder="Zip/Postal"
                                  />
                                </div>
                              </div>
                              <div className="w-full my-2">
                                <div
                                  className="w-full cursor-pointer"
                                  onClick={() => document.getElementById('phone-number')?.focus()}
                                >
                                  <label
                                    htmlFor="phone-number"
                                    className="text-sm/6 font-bold cursor-pointer flex items-center"
                                  >
                                    <span>Phone number</span>
                                    <span className="text-xs font-normal ml-1.5">
                                      (include the country code)
                                    </span>
                                  </label>
                                </div>
                                <div className="input-field">
                                  <input
                                    type="text"
                                    id="phone-number"
                                    className="outline-none placeholder:text-[#535364]"
                                    placeholder="+1 (234) (567) (8900)"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </section>
                    </>
                  )}
                  <div className="my-4">
                    <Button isDisabled={btnIsDisabled}>
                      {authType === 'login' ? 'Sign in' : isChecked ? 'Continue' : 'Submit'}
                    </Button>
                  </div>
                </form>
                {authType === 'login' && (
                  <div>
                    <p
                      className="w-full text-center text-blue-custom hover:underline cursor-pointer"
                      onClick={() => setCurrentSection('forgotPassword')}
                    >
                      <strong>Forgot your password ?</strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* forgot password form */}
          {currentSection === 'forgotPassword' && (
            <div className="mt-6">
              <form onSubmit={handleForgotPasswordFormSubmit}>
                <div className="w-full">
                  <div
                    className="w-full cursor-pointer"
                    onClick={() => document.getElementById('email-input')?.focus()}
                  >
                    <label htmlFor="email-input" className="text-sm/6 font-bold cursor-pointer">
                      Email
                    </label>
                  </div>
                  <div className="input-field">
                    <input
                      type="email"
                      id="email-input"
                      className="w-full outline-none"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value.trim())}
                    />
                  </div>
                </div>
                <div className="my-3">
                  <Button>Send</Button>
                </div>
              </form>
              <div className="flex flex-row justify-center items-center gap-2">
                <p>Know your password ?</p>
                <button
                  type="button"
                  className="text-blue-custom hover:underline cursor-pointer"
                  onClick={() => setCurrentSection('auth')}
                >
                  <strong>Sign in</strong>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
