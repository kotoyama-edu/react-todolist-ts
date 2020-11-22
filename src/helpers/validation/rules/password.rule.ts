import { WEAK_PASSWORD_ERR } from "../constants";
import { IValidationResult } from "../result";
import { valid, error } from "../result/result.defines";

const password = (value: string): IValidationResult =>
  value &&
  value !== "" &&
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(value)
    ? valid()
    : error([WEAK_PASSWORD_ERR]);

export default password;
