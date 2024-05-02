import s from './styles.module.scss'
import Button, {DefaultButtonPropsType} from "../Button/Button";

type PT = DefaultButtonPropsType & {
    src: string;
};

const IconButton = ({src, children, className, ...props}: PT) => {

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
        </Button>
    );
};
export default IconButton;