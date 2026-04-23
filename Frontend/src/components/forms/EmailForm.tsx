import EmailFormProps from '@/app/types/EmailFormProps';
import Button from '@/components/ui/Button';
import ErrorMessage from '@/components/ui/ErrorMessage';

export default function EmailForm({
  email,
  formTitle,
  errorMessageContext,
  emailError,
  btnIsDisabled,
  onSubmit,
  onChange,
}: EmailFormProps) {
  return (
    <form className="flex flex-col" onSubmit={onSubmit} method="POST">
      <h3 className="font-object text-xl mb-10">{formTitle}</h3>
      <input
        type="text"
        id="email-input"
        className="rounded-xl border py-4 px-3 w-full"
        placeholder="Email Address"
        value={email}
        onChange={onChange}
        onKeyDown={(e) => e.key === 'Enter' && onSubmit}
      />

      {emailError && ErrorMessage({ message: `${errorMessageContext}` })}

      <div className="my-5">
        <Button isDisabled={btnIsDisabled}>Continue</Button>
      </div>
    </form>
  );
}
