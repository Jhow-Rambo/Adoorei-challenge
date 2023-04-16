export default interface IInputProps {
  /**
   * Input Placeholder
   */
  placeholder: string;
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
  };
}
