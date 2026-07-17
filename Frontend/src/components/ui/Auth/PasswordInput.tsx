import { Dispatch, SetStateAction } from 'react';

interface PasswordInputProps {
  password: string;
  hidePassword: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHidePassword: Dispatch<SetStateAction<boolean>>;
}

export default function PasswordInput({
  password,
  onChange,
  hidePassword,
  onHidePassword,
}: PasswordInputProps) {
  return (
    <div className="flex flex-row rounded-xl border focus-within:outline-2 focus-within:outline-blue-custom outline-offset-2 focus-within:transition focus-within:duration-100 focus-within:ease-in-out my-1">
      <input
        type={hidePassword ? 'password' : 'text'}
        id="password-input"
        className="p-3 w-full outline-none"
        value={password}
        onChange={onChange}
        required={true}
      />
      <button
        className="flex items-center px-3 text-md text-blue-custom cursor-pointer"
        type="button"
        onClick={() => onHidePassword((toggle) => !toggle)}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            tabIndex={-1}
            className="w-6 h-6 outline-none"
            data-c11n-component="Icon"
            data-c11n-version="10.14.1"
            focusable="false"
            role="img"
          >
            {hidePassword ? (
              <>
                <path d="M18.9 15.1a3 3 0 0 1 .1.9 3 3 0 1 1-3-3 3 3 0 0 1 .9.1 1.5 1.5 0 0 0-.9 1.4 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.4-.9"></path>
                <path d="M29.5 14.7c-12.5-15-23.4-4.3-27 0a2 2 0 0 0 0 2.6c12.5 15 23.4 4.3 27 0a2 2 0 0 0 0-2.6M16 22a6 6 0 1 1 6-6 6 6 0 0 1-6 6"></path>
              </>
            ) : (
              <path d="M27.8 6.4a1 1 0 0 0-1.4-.2l-2.7 2.2C13.7 2 5.6 10.1 2.5 13.7a2 2 0 0 0 0 2.6 27.2 27.2 0 0 0 5.4 5l-3.5 3a1 1 0 0 0-.2 1.3 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2l4.1-3.4 2.8-2.3 2.7-2.2 3.8-3 2.6-2.1 3.8-3.1 2.2-1.9a1 1 0 0 0 .2-1.4m-11.5 8a1.5 1.5 0 0 1 .6-2.3 3 3 0 0 0-.9-.1 3 3 0 0 0-3 3 3 3 0 0 0 .6 1.7l-2.4 2a6 6 0 0 1 9.3-7.7zm13.2-.7a34 34 0 0 0-2.6-2.8L22 15a6 6 0 0 1-6 6 5.6 5.6 0 0 1-1.2-.1l-3 2.4c8.3 2.9 15-3.8 17.7-7a2 2 0 0 0 0-2.6"></path>
            )}
          </svg>
        </span>
      </button>
    </div>
  );
}
