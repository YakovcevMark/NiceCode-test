import s from "./styles.module.scss";
import {memo} from "react";

const onlineMeetingIcon = require("./icons/camera.svg") as string;
const liveMeetingIcon = require("./icons/peoples.svg") as string;

type PT = {
    id: number;
    type: string;
};

export const ConsultationsIcon = memo(
    ({id, type}: PT) => {
        return (
            <div className={s.icon}>
                <img
                    className={s.img}
                    src={
                        type === "Online консультация"
                            ? onlineMeetingIcon
                            : liveMeetingIcon
                    }
                    alt={`The Consultation Icon  ${id}`}/>
            </div>
        );
    });