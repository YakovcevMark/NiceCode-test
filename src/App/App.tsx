import React from 'react';
import s from './app.module.scss';
import Header from "../Components/Features/Header/Header";
import {AllChats} from "../Components/Features/Contacts/AllСhats";
export const App = () => {

    return (
        <>
            <Header/>
            <section className={s.aSideContainer}>
                <AllChats/>
            </section>
        </>
    );
};
