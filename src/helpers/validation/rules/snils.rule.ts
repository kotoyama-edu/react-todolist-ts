import { INCORRECT_SNILS_ERR } from "../constants";
import { IValidationResult } from "../result";
import { valid, error } from "../result/result.defines";

const snils = (value: string): IValidationResult =>
  value && value !== "" && /^\d{3}-\d{3}-\d{3} \d{2}$/.test(value)
    ? valid()
    : error([INCORRECT_SNILS_ERR]);

export default snils;
