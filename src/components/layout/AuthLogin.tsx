import Link from 'next/link';
import Logo from '../ui/Logo';

interface AuthLoginProps {
  children: React.ReactNode;
}
export default function AuthLogin({ children }: AuthLoginProps) {
  return (
    <div className="basis-3/12 m-auto lg:min-w-120 min-w-100 max-[480px]:min-w-full">
      <div className="flex-col justify-center order-1 w-full items-start px-4 md:px-10 lg:px-20 flex">
        <div className="my-5">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
