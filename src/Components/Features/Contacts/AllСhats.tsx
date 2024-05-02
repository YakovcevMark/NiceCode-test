import {Chat} from "./Chat/Chat";
import React, {useCallback, useState} from "react";
import {Input} from "./input/input";
import {SelectSection} from "./SelectSection/SelectSection";
import {chats, contacts} from "../../../App/data"
import s from './styles.module.scss'


export const AllChats = () => {

    const [selectingMode, setSelectingMode] = useState(false);
    const [selectedChats, setSelectedChats] = useState(
        chats.map(() => false)
    );
    const [displayedChats, setDisplayedChats] = useState(chats);

    const countOfSelected =
        selectedChats
            .filter(flag => flag === true)
            .length;


    const onChangeSelect = useCallback((indexOfElementWhatNeedToChange: number) => {
        setSelectedChats((selectedChats) =>
            selectedChats.map((flag, i) =>
                i === indexOfElementWhatNeedToChange
                    ? !flag
                    : flag
            )
        );
    }, []);

    const changeAll = useCallback((flag: boolean) =>
        (
            () => {
                setSelectedChats(arr => arr.map(() => flag));
            }
        ), []
    );

    const onInputChange = useCallback((val: string) => {
        setDisplayedChats(displayedChats.filter(ch => contacts[ch.contactId].name.includes(val)))
    }, []);

    return (
        <aside>
            <Input
                onInputChange={onInputChange}/>
            <SelectSection
                changeSelectingMode={() => setSelectingMode(mode => !mode)}
                clearAll={changeAll(false)}
                setAll={changeAll(true)}
                countOfSelected={countOfSelected}
                countOfChats={displayedChats.length}
                isSelectingMode={selectingMode}
            />

            <section className={s.allChats}>
                {
                    displayedChats.map(
                        (ch, i) =>
                            (
                                <Chat
                                    key={i}
                                    contactId={ch.contactId}
                                    additionalChatInfo={ch?.additionalChatInfo}
                                    isSelecting={selectingMode}
                                    isSelected={selectedChats[i] as boolean}
                                    onChangeSelect={() => onChangeSelect(i)}
                                />
                            )
                    )
                }
            </section>
        </aside>
    );
};