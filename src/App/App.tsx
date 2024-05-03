import React, {useState} from 'react';
import s from './app.module.scss';
import {Header} from "../Components/Features/Header/Header";
import {AllChats} from "../Components/Features/Chats/AllСhats";
import {ChatInfo} from "../Components/Features/ChatInfo/ChatInfo";
import {SelectedChatIdContext} from "./SelectedChatIdContext";

export const App = () => {

    const selectedChatState = useState(1);

    return (
        <>
            <Header/>
            <div className={s.app}>
                <SelectedChatIdContext.Provider value={selectedChatState}>
                    <AllChats/>
                    <ChatInfo/>
                </SelectedChatIdContext.Provider>
            </div>
        </>

    );
};
