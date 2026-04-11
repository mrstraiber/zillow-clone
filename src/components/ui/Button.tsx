interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
}
export default function Button({ children, isDisabled = false }: ButtonProps) {
  return (
    <button
      className="w-full rounded-lg bg-[#0041d9] py-3 px-4 text-white font-black cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
