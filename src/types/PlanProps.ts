export default interface IPlanProps {
  /**
   * Plan Name
   */
  planName: string;
  /**
   * Plan Price
   */
  price: number;
  /**
   * Plan Description
   */
  description: string;
  /**
   * Plan Ideal For
   */
  idealFor: string;
  /**
   * Plan Index
   */
  planIndex: number;
  /**
   * This plan is selected by user?
   */
  isSelectedPlan: boolean;
  /**
   * This plan is most used?
   */
  isMostUsedPlan: boolean;
}
