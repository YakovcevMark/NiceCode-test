import s from './styles.module.scss'
import {ReactNode} from "react";

type PT = {
    children: ReactNode;
    className?: string;
};
const Container = ({children, className}: PT) => {
    const finalCN = s.container + (
        className
            ? ` ${className}`
            : ""
    );
    return (
        <article className={finalCN}>
            {children}
        </article>
    );
};
export default Container;