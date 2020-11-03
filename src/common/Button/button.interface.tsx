import React, { ButtonHTMLAttributes } from "react";
import {
  ButtonType,
  ButtonSize,
  ButtonTheme,
  ButtonVariant,
} from "./button.types";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonType;
  size: ButtonSize;
  theme: ButtonTheme;
  variants: ButtonVariant;
  disabled: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
