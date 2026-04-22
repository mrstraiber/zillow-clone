type OnSubmit = (e: React.SubmitEvent<HTMLFormElement>) => void;
type OnChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

export default interface EmailFormProps {
  email: string;
  formTitle: string;
  errorMessageContext: string;
  emailError: boolean;
  btnIsDisabled: boolean;
  onSubmit: OnSubmit;
  onChange: OnChange;
}
