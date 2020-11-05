import TValidationResult from "./result.enum";

export default interface IValidationResult {
  field?: string;
  type: TValidationResult;
  message?: string[];
}
