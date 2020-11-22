import { INCORRECT_EMAIL_ERR } from "../constants";
import { IValidationResult } from "../result";
import { valid, error } from "../result/result.defines";

const email = (value: string): IValidationResult =>
  value &&
  value !== "" &&
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? valid()
    : error([INCORRECT_EMAIL_ERR]);

export default email;
