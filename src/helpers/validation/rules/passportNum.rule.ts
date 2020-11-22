import { INCORRECT_PASSPORT_NUM_ERR } from "../constants";
import { IValidationResult } from "../result";
import { valid, error } from "../result/result.defines";

const passportNumber = (value: string): IValidationResult =>
  value && value !== "" && /^\d{6}$/i.test(value)
    ? valid()
    : error([INCORRECT_PASSPORT_NUM_ERR]);

export default passportNumber;
