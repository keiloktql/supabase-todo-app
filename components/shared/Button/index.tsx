import React from "react";
import { BTN_META, BTN_ENUM } from "../../../config/constants";
import { ButtonProps } from "./types";

const Button = ({
  disabled = false,
  text,
  variation = BTN_ENUM.PRIMARY,
  onClickFn,
  customClassName,
  children,
  type
}: ButtonProps): JSX.Element => {
  const { className } = BTN_META[variation];
  return (
    <button
      disabled={disabled}
      onClick={() => onClickFn && onClickFn()}
      type={type || "button"}
      className={`h-fit rounded border-none px-4 py-2.5 font-semibold transition-opacity 
        hover:translate-y-[-1px] hover:opacity-80 
        active:translate-y-0 active:opacity-70 
        disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 ${className} ${
        customClassName || ""
      }`}
    >
      {text || children}
    </button>
  );
};

export default Button;
