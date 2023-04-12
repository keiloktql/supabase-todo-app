import { BTN_ENUM } from "../../../config/constants";

export interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  text?: string;
  variation?: BTN_ENUM;
  arrow?: boolean;
  onClickFn?: () => any;
  customClassName?: string | null;
  children?: any;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface ExternalLinkButtonProps {
  text: string;
  href: string;
  disabled?: boolean;
  variation?: BTN_ENUM;
  className?: string;
  showIcon?: boolean;
  handleOnClick?: any;
}
