import s from './styles.module.scss'
import {Button, DefaultButtonPropsType} from "../Button/Button";

export type IconButtonPT = DefaultButtonPropsType & {
    src: string;
};

export const IconButton = ({src, children, className, ...props}: IconButtonPT) => {

    const finalCN = s.buttonCN + (
        className
            ? ` ${className}`
            : ""
    );

    return (
        <Button
            className={finalCN}
            {...props}>
            <img
                src={src}
                alt={`the${src}Button`}
                className={s.imgCN}
            />
            {children}
        </Button>
    );
};