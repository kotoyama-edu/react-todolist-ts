import React from "react";
import classNames from "classnames";

import "./button.styles.scss";

import { IButtonProps } from "./button.interface";

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  className,
  variant,
  theme,
  size,
  ...props
}) => {
  let style = classNames("btn", {
    [`btn--${className}`]: className,
    [`btn--${theme}`]: theme,
    [`btn--${size}`]: size,
    [`btn--${variant}`]: variant,
  });

  return (
    <button className={style} {...props} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "block",
  disabled: false,
  size: "medium",
  theme: "primary",
};

export default Button;
