import {consultations} from './data'
import {NoteBlock} from "../NoteBlock/NoteBlock";
import {ConsultationsIcon} from "./ConsultationsIcon/ConsultationsIcon";


type PT = {};

export const AllConsultations = ({}: PT) => {
    return (
        <section>
            {
                consultations.map(
                    (c, i) =>
                        <NoteBlock
                            iconNode={
                                <ConsultationsIcon
                                    id={i}
                                    type={c.type}/>
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