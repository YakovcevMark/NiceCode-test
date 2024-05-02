import React, {memo} from 'react';
import s from './styles.module.scss'
import Container from "../../../Common/Container/Container";
import Checkbox from "../../../Common/Checkbox/Checkbox";
import {AdditionalChatInfo, contacts} from "../../../../App/data";

const message = require("../../../../assets/imgs/message.svg") as string;
const problem = require("../../../../assets/imgs/problem.svg") as string;

function selectInfoIcon(additionalChatInfo: AdditionalChatInfo): string {
    if (additionalChatInfo.hasMessage)
        return message;
    return problem;
}

type PT = {
    contactId: number;
    isSelected: boolean;
    isSelecting: boolean;
    additionalChatInfo?: AdditionalChatInfo;
    onChangeSelect: () => void;
}


export const Chat = memo(
    ({
         contactId,
         isSelected,
         isSelecting,
         additionalChatInfo,
         onChangeSelect
     }: PT) => {

        const {name, avatar} = contacts[contactId];

        const contactClassName = s.contact + (
            contactId === 1
                ? ` ${s.active}`
                : ""
        );

        const containerClassName = s.container + (
            additionalChatInfo && additionalChatInfo.hasMessage
                ? ` ${s.message}`
                : ""
        );

        return (
            <Container className={containerClassName}>

                <div className={contactClassName}>
                    {
                        isSelecting &&
                        <Checkbox
                            onChange={onChangeSelect}
                            checked={isSelected}/>
                    }

                    <img
                        className={s.avatar}
                        src={avatar}
                        alt={`avatar${contactId}`}/>

                    <span>{name}</span>
                    {
                        additionalChatInfo &&
                        <img
                            className={s.additionalChatInfoIcon}
                            src={selectInfoIcon(additionalChatInfo)}
                            alt="Aditional ChatT Info"/>
                    }
                </div>

            </Container>
        );
    });
