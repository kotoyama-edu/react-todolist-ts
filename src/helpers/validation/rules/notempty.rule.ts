import { EMPTY_ERR } from "../constants";
import { IValidationResult } from "../result";
import { valid, error } from "../result/result.defines";

const notEmpty = (value: string): IValidationResult => {
  return value && value !== "" && !/\S/.test(value)
    ? valid()
    : error([EMPTY_ERR]);
};

export default notEmpty;
