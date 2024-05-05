import {events} from './data'
import {NoteBlock} from "../NoteBlock/NoteBlock";
import commonStyles from '../../../../../assets/styles/commonStyles.module.scss'
import {EventDescribeBlock} from "./EventDiscribeBlock/EventDescribeBlock";


export const AllEvents = ({}) => {
    return (
        <section>
            {
                events.map(
                    (e, i) =>
                        <NoteBlock
                            iconNode={
                                <img className={commonStyles.noteImg}
                                     src={e.icon}
                                     alt={`The Event Icon ${i}`}/>
                            }
                            mainContent={e.name}
                            secondContent={
                                <EventDescribeBlock
                                    type={e.type}
                                    data={e.data}
                                    time={e.time}
                                />
                            }
                        />
                )
            }
        </section>
    );
};