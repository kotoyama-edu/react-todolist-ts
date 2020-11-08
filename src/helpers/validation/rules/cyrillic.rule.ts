import { CYRILLIC_ERR } from "../constants";
import { IValidationResult } from "../result";
import { valid, error } from "../result/result.defines";

const cyrillicRule = (value: string): IValidationResult =>
  value !== "" && !/^[а-яА-ЯёЁ]*$/.test(value)
    ? error([CYRILLIC_ERR])
    : valid();

export default cyrillicRule;
