import React from "react";
import classNames from "classnames";
// TODO import InputMask from 'react-input-mask';

import "./input.styles.scss";

import { IInputProps } from "./input.interface";

const Input: React.FC<IInputProps> = ({
  type,
  onChange,
  className,
  ...props
}) => {
  let style = classNames("input", {
    [`input--${type}`]: type,
    [`input--${className}`]: className,
  });

  return <input className={style} onChange={onChange} {...props} />;
};

Input.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
  autoComplete: "off",
};

export default Input;
