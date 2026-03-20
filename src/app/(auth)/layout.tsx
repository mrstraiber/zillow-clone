import AuthBackground from '@/components/layout/AuthBackground';

export const metadata = {
  title: 'Sign in',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex flex-row">
        <AuthBackground />
        {children}
      </div>
    </main>
  );
}
