import React, { InputHTMLAttributes } from "react";
import { InputType } from "./input.types";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  name: string;
  className?: string;
  value?: string;
  placeholder?: string;
  autoComplete: string;
  autoFocus: boolean;
  disabled?: boolean;
  mask?: string | Array<string | RegExp>;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
}
