import React from "react";
import { BTN_META, BTN_ENUM } from "../../../config/enum";
import { ButtonProps } from "./types";

const Button = ({
  disabled = false,
  text,
  variation = BTN_ENUM.PRIMARY,
  onClickFn,
  customClassName,
  children,
}: ButtonProps): JSX.Element => {
  const { className } = BTN_META[variation];

  return (
    <button
      disabled={disabled}
      onClick={() => onClickFn && onClickFn()}
      type={onClickFn ? "button" : "submit"}
      className={`border-none border-r-4 ${className} ${
        customClassName ? customClassName : ""
      }`}
    >
      {text || children}
    </button>
  );
};

export default Button;
