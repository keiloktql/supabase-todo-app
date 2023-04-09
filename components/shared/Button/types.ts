import { BTN_ENUM } from "../../../config/enum";

export interface ButtonProps {
  disabled?: boolean;
  text?: string;
  variation?: BTN_ENUM;
  arrow?: boolean;
  onClickFn?: () => any;
  customClassName?: string | null;
  children?: any;
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
