export default interface ISmartLinkProps {
  /**
   * Smart link contents
   */
  label: string;
  /**
   * Has underline style?
   */
  underline?: boolean;
  /**
   * Primary color is pink?
   */
  primaryPink?: boolean;
  /**
   * Where the link redirect?
   */
  href: string;
}
