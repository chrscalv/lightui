import React, { DOMAttributes } from 'react'
import classNames from 'classnames';
import 'Button.scss'

type ButtonType = "button" | "outlined" | "link" | "submit"
type ButtonSize = "sm" | "md" | "lg" | "xl"

export interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
    className?: string,
    rounded?: string | boolean,
    type?: ButtonType,
    size?: ButtonSize | number
    color?: string,
    disabled?: boolean,
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    rounded = false,
    children,
    type = "button",
    size = "md",
    color,
    disabled = false
}) => {
    return (
        <button className={classNames('light-button', {
            "light-button__disabled" : disabled
        }, className)}>
            {children}
        </button>
    )
}