import s from "./styles.module.scss";
import {memo} from "react";

const videoCamera = require('./icons/videoCamera.svg') as string;
const clock = require('./icons/clock.svg') as string;
const calendar = require('./icons/calendar.svg') as string;

type PT = {
    type: string;
    data: string;
    time: string;
};
export const EventDescribeBlock = memo(
    ({
         type,
         time,
         data
     }: PT) => {

        const describesInfo = [
            {describeIcon: videoCamera, describe: type},
            {describeIcon: calendar, describe: data},
            {describeIcon: clock, describe: time}
        ];

        return (
            <section className={s.describeBlock}>
                {
                    describesInfo.map(
                        item =>
                            <article className={s.describe}>
                                <img
                                    className={s.icon}
                                    src={item.describeIcon}
                                    alt="describe Icon"/>
                                {item.describe}
                            </article>
                    )
                }
            </section>
        );
    });
