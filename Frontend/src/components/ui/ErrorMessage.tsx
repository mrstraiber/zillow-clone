interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className="text-red-500 text-sm mt-1">{message}</p>;
}
