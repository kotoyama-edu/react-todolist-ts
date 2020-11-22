import { CYRILLIC_ERR } from "../constants";
import { IValidationResult } from "../result";
import { valid, error } from "../result/result.defines";

const cyrillic = (value: string): IValidationResult =>
  value && value !== "" && !/^[а-яА-ЯёЁ]*$/.test(value)
    ? error([CYRILLIC_ERR])
    : valid();

export default cyrillic;
