import s from './styles.module.scss'
import {ReactNode} from "react";

type PT = {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
};
export const Container = ({children, className, ...prop}: PT) => {
    const finalCN = s.container + (
        className
            ? ` ${className}`
            : ""
    );
    return (
        <article
            className={finalCN}
            {...prop}>
            {children}
        </article>
    );
};