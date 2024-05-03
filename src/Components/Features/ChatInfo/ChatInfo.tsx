import React, {memo, useState} from "react";
import {About} from "./About/About";
import {ContentType} from "./ContentType/ContentType";
import {MainChatContent} from "./MainChatContent/MainChatContent";

export type ActiveSection =
    "Заметки"
    | "Консультации"
    | "Видео"
    | "Мероприятия"

type PT = {};

export const ChatInfo = memo(({}: PT) => {
    const [activeSection, setActiveSection] = useState<ActiveSection>("Мероприятия");

    return (
        <section>
            <About/>
            <ContentType
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <MainChatContent
                activeSection={activeSection}/>
        </section>
    );
});