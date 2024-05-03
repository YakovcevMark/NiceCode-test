import {IconButton ,IconButtonPT} from "../IconButton/IconButton";
import s from './styles.module.scss'
import {Container} from "../../Container/Container";

const standardButtonWithDropDownSrc = require("../../../../assets/imgs/combinedShape.svg") as string;

export type ButtonWithDropDownPT = Partial<IconButtonPT> & {
    dropDownClassName?: string;
};
export const ButtonWithDropDown =
    ({
         src,
         children,
         className,
         dropDownClassName,
         ...prop
     }: ButtonWithDropDownPT) => {

        const finalCN = s.buttonCN + (
            className
                ? ` ${className}`
                : ""
        );

        const dropDownCN = s.dropDownCN + (
            dropDownClassName
                ? ` ${dropDownClassName}`
                : ""
        );

        return (
            <IconButton
                className={finalCN}
                src={src ? src : standardButtonWithDropDownSrc}
                {...prop}>

                <Container className={dropDownCN}>
                    {children}
                </Container>

            </IconButton>
        );
    };