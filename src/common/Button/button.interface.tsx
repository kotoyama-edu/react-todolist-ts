import React, { ButtonHTMLAttributes } from "react";
import {
  ButtonTypes,
  ButtonSizes,
  ButtonThemes,
  ButtonVariants,
} from "./button.types";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonTypes;
  size?: ButtonSizes;
  theme?: ButtonThemes;
  variants?: ButtonVariants;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
