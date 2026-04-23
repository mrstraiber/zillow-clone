import { ReactNode } from 'react';

interface SuccessMessageProps {
  children: ReactNode;
}

export default function SuccessMessage({ children }: SuccessMessageProps) {
  return (
    <div className="rounded-xl bg-green-100 p-3 mt-4">
      <p className="text-green-800 text-xs">{children}</p>
    </div>
  );
}
