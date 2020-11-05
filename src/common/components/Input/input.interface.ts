import React, { InputHTMLAttributes } from "react";

import { InputType } from "./input.types";
import { IValidationResult } from "helpers/validation/result";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  name?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  checked?: boolean;
  label?: React.ReactNode;
  mask?: string | Array<string | RegExp>;
  errors?: IValidationResult[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
