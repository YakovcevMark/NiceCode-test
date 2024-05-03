import {consultations} from './data'
import {NoteBlock} from "../NoteBlock/NoteBlock";
import s from './styles.module.scss'

const onlineMeetingIcon = require("./icons/camera.svg") as string;
const liveMeetingIcon = require("./icons/peoples.svg") as string;
type PT = {};

export const AllConsultations = ({}: PT) => {
    return (
        <section>
            {
                consultations.map(
                    (c, i) =>
                        <NoteBlock
                            iconNode={
                                <div className={s.icon}>
                                    <img
                                        className={s.img}
                                        src={
                                            c.type === "Online консультация"
                                                ? onlineMeetingIcon
                                                : liveMeetingIcon
                                        }
                                        alt={`The Consultation Icon  ${i}`}/>
                                </div>
                            }
                            mainContent={c.type}
                            secondContent={
                                `${c.data}, ${c.time}`
                            }
                            additionalInformation={
                                i === consultations.length - 1
                                    ? "Не подтверждена"
                                    : ""
                            }
                            confirmed={c.isConfirmed}
                        />
                )
            }
        </section>
    );
};