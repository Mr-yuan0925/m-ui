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
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
  link = "link",
    default = "default"
}

export interface IButtonState {
  isActive: boolean;
}

const Button:React.FC<IButtonProps> = (props) => {
    const {
        children,
        className,
        disabled,
        href,
        onClick,
        size,
        btnType,
    } = props

    const classes = classNames('btn', {
        [`btn-${size}`]: size,
        [`btn-${btnType}`]: btnType,
        [`btn-${size}-${btnType}`]: size && btnType,
        'disabled': (btnType === ButtonType.link && disabled) || disabled,
    })

    // 如果是link
    if(btnType === ButtonType.link && href){
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                onClick={onClick}
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