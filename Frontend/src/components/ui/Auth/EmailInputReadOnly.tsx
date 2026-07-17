import Link from 'next/link';

interface EmailInputReadOnlyPRops {
  email: string;
}

export default function EmailInputReadOnly({ email }: EmailInputReadOnlyPRops) {
  return (
    <div className="flex flex-row rounded-xl border focus-within:outline-2 focus-within:outline-blue-custom outline-offset-2 focus-within::transition focus-within:duration-100 focus-within:ease-in-out">
      <input
        type="text"
        id="email"
        className="p-3 w-full outline-none"
        value={email}
        readOnly={true}
      />
      <span className="flex items-center px-3 text-md text-blue-custom cursor-pointer">
        <strong>
          <Link href="/login/identifier">Edit</Link>
        </strong>
      </span>
    </div>
  );
}
