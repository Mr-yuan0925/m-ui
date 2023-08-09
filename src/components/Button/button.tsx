import React from "react";
import classNames from "classnames";

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export interface IButtonProps {
  /**
   * The text to be displayed on the button.
   */
  children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    href?: string;
    /**
       * The size of the button.
     */
    size?: ButtonSize;
    /**
       * The type of the button.
     */
    btnType?: ButtonType;
}

export enum  ButtonType {
    primary = "primary",
    secondary = "secondary",
    success = "success",
    danger = "danger",
    warning = "warning",
    info = "info",
    light = "light",
    dark = "dark",
    link = "link",
    default = "default"
}

type NativeButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
type AnchorButtonProps = IButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button:React.FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        disabled,
        href,
        size,
        btnType,
        ...restProps
    } = props

    const classes = classNames('btn', className, {
        [`btn-${size}`]: size,
        [`btn-${btnType}`]: btnType,
        [`btn-${size}-${btnType}`]: size && btnType,
        'disabled': (btnType === ButtonType.link && disabled) || disabled,
    })

    // 如果是link
    if(btnType === ButtonType.link && href){
        return (
            <a href={href} {...restProps} className={classes}>
                {children}
            </a>
        )
    } else {
        return (
            <button
                {...restProps}
                className={classes}
                disabled={disabled}
            >
                {children}
            </button>
        )
    }
}

// 设置按钮的默认值
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.default,
    size: ButtonSize.medium
}

export default Button;