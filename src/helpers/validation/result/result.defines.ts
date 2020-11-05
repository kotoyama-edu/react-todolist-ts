import { TValidationResult, IValidationResult } from "./";

export const valid = (): IValidationResult => ({
  type: TValidationResult.valid,
});

export const warning = (message?: string[]): IValidationResult => ({
  type: TValidationResult.warning,
  message,
});

export const error = (message?: string[]): IValidationResult => ({
  type: TValidationResult.error,
  message,
});
