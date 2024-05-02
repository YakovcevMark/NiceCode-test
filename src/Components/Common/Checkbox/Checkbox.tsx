import s from './styles.module.scss'
import {DetailedHTMLProps, InputHTMLAttributes} from "react";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Checkbox = ({className, type, ...props}: DefaultInputPropsType) => {

    const finalCN = s.checkbox + (
        className
            ? ` ${className}`
            : ""
    );

    return (
        <input
            className={finalCN}
            type={"checkbox"}
            {...props}/>
    );
};
export default Checkbox;