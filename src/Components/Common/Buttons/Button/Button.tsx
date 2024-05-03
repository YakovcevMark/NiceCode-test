import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './styles.module.scss'

export type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export const Button = ({children, className, ...props}: DefaultButtonPropsType) => {

    const finalCN = s.buttonCN + (
        className
            ? ` ${className}`
            : ""
    );

    return (
        <button
            className={finalCN}
            {...props}>
            {children}
        </button>
    );
};