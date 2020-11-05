import TValidationResult from "./result.enum";

export default interface IValidationResult {
  type: TValidationResult;
  message?: string[];
}
