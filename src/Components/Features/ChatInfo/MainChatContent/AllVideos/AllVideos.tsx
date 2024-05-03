import {videos} from './data'
import {NoteBlock} from "../NoteBlock/NoteBlock";
import commonStyles from '../../../../../assets/styles/commonStyles.module.scss'

type PT = {};

export const AllVideos = ({}: PT) => {
    return (
        <section>
            {
                videos.map(
                    (v, i) =>
                        <NoteBlock
                            iconNode={
                                <img className={commonStyles.noteImg}
                                     src={v.icon}
                                     alt={`The Video Icon  ${i}`}/>
                            }
                            mainContent={v.name}
                            secondContent={v.author}
                            additionalInformation={
                                i === 0
                                    ? ""
                                    : v.data
                            }
                        />
                )
            }
        </section>
    );
};