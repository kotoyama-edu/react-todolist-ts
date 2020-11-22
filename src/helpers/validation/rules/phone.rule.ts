import { INCORRECT_PHONE_ERR } from "../constants";
import { IValidationResult } from "../result";
import { valid, error } from "../result/result.defines";

const phone = (value: string): IValidationResult =>
  value && value !== "" && /^((\+7|7|8)+([0-9]){10})$/.test(value)
    ? valid()
    : error([INCORRECT_PHONE_ERR]);

export default phone;
