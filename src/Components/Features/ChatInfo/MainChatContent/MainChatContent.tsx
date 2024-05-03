import {ActiveSection} from "../ChatInfo";
import {Container} from "../../../Common/Container/Container";
import s from './styles.module.scss'
import {AllNotes} from "./AllNotes/AllNotes";
import {ReactNode} from "react";
import {AllConsultations} from "./AllConsultations/AllConsultations";
import {AllVideos} from "./AllVideos/AllVideos";
import {AllEvents} from "./AllEvents/AllEvents";

const getSectionContent = (section: ActiveSection): ReactNode | string => {
    switch (section) {
        case "Заметки":
            return <AllNotes/>;
        case "Консультации":
            return <AllConsultations/>;
        case "Видео":
            return <AllVideos/>;
        case "Мероприятия":
            return <AllEvents/>;
    }
};
type PT = {
    activeSection: ActiveSection
};
export const MainChatContent = ({activeSection}: PT) => {
    return (
        <Container className={s.container}>
            {getSectionContent(activeSection)}
        </Container>
    );
};