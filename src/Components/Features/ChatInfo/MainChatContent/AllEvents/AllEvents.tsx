import {events} from './data'
import {NoteBlock} from "../NoteBlock/NoteBlock";
import commonStyles from '../../../../../assets/styles/commonStyles.module.scss'
import s from './styles.module.scss'

const videoCamera = require('./icons/videoCamera.svg') as string;
const clock = require('./icons/clock.svg') as string;
const calendar = require('./icons/calendar.svg') as string;

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

                                <div className={s.describeBlock}>
                                    {
                                        [
                                            {describeIcon: videoCamera, describe: e.type},
                                            {describeIcon: calendar, describe: e.data},
                                            {describeIcon: clock, describe: e.time}
                                        ].map(
                                            item =>
                                                <section className={s.describe}>
                                                    <img
                                                        className={s.icon}
                                                        src={item.describeIcon}
                                                        alt="describe Icon"/>
                                                    {item.describe}
                                                </section>
                                        )
                                    }
                                </div>

                            }
                        />
                )
            }
        </section>
    );
};