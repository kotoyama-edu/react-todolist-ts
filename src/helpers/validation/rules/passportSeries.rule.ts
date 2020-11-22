import { INCORRECT_PASSPORT_SERIES_ERR } from "../constants";
import { IValidationResult } from "../result";
import { valid, error } from "../result/result.defines";

const passportSeries = (value: string): IValidationResult =>
  value && value !== "" && /^\d{4}$/i.test(value)
    ? valid()
    : error([INCORRECT_PASSPORT_SERIES_ERR]);

export default passportSeries;
