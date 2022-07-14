import React from "react";
import cx from "clsx";
import { CommonComponentProps, ComponentSize } from "../../type";
import Spinner from "../Spinner";
import style from "./Button.module.scss";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "link"
  | "danger"
  | "success";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonComponentProps & {
    disabled?: boolean;
    loading?: boolean;
    type?: string;
    variant?: ButtonVariant;
    size?: ComponentSize;
  };

const Button = ({
  disabled,
  loading,
  className,
  variant = "primary",
  size = "md",
  children,
  type,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      type={type as any}
      disabled={disabled || loading}
      className={cx(
        "Button",
        className,
        style.root,
        variant ? style[variant] : undefined,
        style[`size-${size}`]
      )}
    >
      {loading && <Spinner />}
      {typeof children === "string" ? <span>{children}</span> : children}
    </button>
  );
};

export default Button;
