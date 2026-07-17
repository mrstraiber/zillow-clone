interface PasswordCheckListProps {
  children: React.ReactNode;
  correctFormat: boolean;
}
export default function PasswordCheckList({ children, correctFormat }: PasswordCheckListProps) {
  return (
    <li className={`flex flex-row gap-2 my-4 text-sm ${correctFormat ? 'text-green-900' : ''}`}>
      <span className="w-2">{correctFormat ? '✓' : '•'}</span>
      <span>{children}</span>
    </li>
  );
}
