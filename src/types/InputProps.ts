export default interface IInputProps {
  /**
   * Input Placeholder
   */
  placeholder: string;
  /**
   * Input name
   */
  name: string;
  /**
   * which type the input has? (text, password, number, email, etc)
   */
  type: string;
  /**
   * Input contents
   */
  label: string;
  /**
   * Additional label to be displayed below the input
   */
  downLabel?: {
    message: string;
    isOnTheRight?: boolean;
    smartLinkPath?: string;
  };
  /**
   * Additional label to be displayed below the input
   */
  inputValidation?: {
    isInvalid: boolean;
    message?: string;
  };
}
