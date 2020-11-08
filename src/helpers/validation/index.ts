import { TValidationResult, IValidationResult } from "./result";

export const combineRules = (
  ...rules: Array<(...args: any[]) => IValidationResult>
): ((...args: any[]) => IValidationResult) => (
  ...args: any[]
): IValidationResult => mergeResults(...rules.map((rule) => rule(...args)));

export const mergeResults = (
  ...results: IValidationResult[]
): IValidationResult => {
  const output: IValidationResult = {
    type: TValidationResult.valid,
    message: [],
  };
  for (const result of results) {
    if (result.type !== TValidationResult.valid) {
      output.type =
        result.type === TValidationResult.error ||
        output.type === TValidationResult.error
          ? TValidationResult.error
          : result.type;
      if (result.message && result.message.length > 0) {
        output.message = output.message!.concat(result.message);
      }
    }
  }
  return output;
};
