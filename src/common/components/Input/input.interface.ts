import React, { InputHTMLAttributes } from "react";

import { InputType } from "./input.types";
import { IValidationResult } from "helpers/validation/result";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type?: InputType;
  name?: string;
  className?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  checked?: boolean;
  mask?: string | Array<string | RegExp>;
  rules?: IValidationResult[];
  errors?: IValidationResult;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
