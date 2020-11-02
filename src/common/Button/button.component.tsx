import React from "react";
import "./button.styles.scss";
import classNames from "classnames";
import { IButtonProps } from "./button.interface";

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  className,
  variants,
  theme,
  size,
  ...props
}) => {
  let style = classNames("btn", {
    [`btn--${className}`]: className,
    [`btn--${theme}`]: theme,
    [`btn--${size}`]: size,
    [`btn--${variants}`]: variants,
  });

  return (
    <button className={style} {...props} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  variants: "block",
  disabled: false,
  size: "medium",
  theme: "primary",
};

export default Button;
