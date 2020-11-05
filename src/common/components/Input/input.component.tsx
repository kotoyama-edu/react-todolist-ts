import React from "react";
import classNames from "classnames";
// TODO import InputMask from 'react-input-mask';

import "./input.styles.scss";

import { IInputProps } from "./input.interface";

const Input: React.FC<IInputProps> = ({
  type,
  onChange,
  className,
  errors,
  ...props
}) => {
  let style = classNames("input", {
    [`input--${type}`]: type,
    [`input--${className}`]: className,
  });

  return (
    <div className="wrapper__input">
      <input type={type} className={style} onChange={onChange} {...props} />
      {errors && <span className="errors">{errors}</span>}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
};

export default Input;
