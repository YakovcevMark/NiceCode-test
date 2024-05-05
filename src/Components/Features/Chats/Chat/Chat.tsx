import React, {memo, useContext} from 'react';
import s from './styles.module.scss'
import commonStyles from '../../../../assets/styles/commonStyles.module.scss'
import {Container} from "../../../Common/Container/Container";
import Checkbox from "../../../Common/Checkbox/Checkbox";
import {AdditionalChatInfo, contacts} from "../data";
import {SelectedChatIdContext} from "../../../../App/SelectedChatIdContext";

const message = require("../../../../assets/imgs/message.svg") as string;
const problem = require("../../../../assets/imgs/problem.svg") as string;

function selectInfoIcon(additionalChatInfo: AdditionalChatInfo): string {
    if (additionalChatInfo.hasMessage)
        return message;
    return problem;
}

type PT = {
    chatId: number;
    contactId: number;
    isSelected: boolean;
    isSelecting: boolean;
    additionalChatInfo?: AdditionalChatInfo;
    onChangeSelect: () => void;
}


export const Chat = memo(
    ({
         chatId,
         contactId,
         isSelected,
         isSelecting,
         additionalChatInfo,
         onChangeSelect
     }: PT) => {

        const {fullName, avatar} = contacts[contactId];

        const [firstName, middleName, lastName] = fullName.split(' ');

        const name = `${middleName} ${lastName}`
        const displayedName = name.includes("undefined") ? fullName : name;


        const [selectedChat, setSelectedChat] = useContext(SelectedChatIdContext);

        const contactClassName = s.contact + (
            chatId === selectedChat
                ? ` ${s.active}`
                : ""
        );

        const containerClassName = s.container + (
            additionalChatInfo && additionalChatInfo.hasMessage
                ? ` ${s.message}`
                : ""
        );

        return (
            <Container
                onClick={() => {
                    isSelecting
                        ? onChangeSelect()
                        : setSelectedChat(chatId)
                }}
                className={containerClassName}>

                <div className={contactClassName}>
                    {
                        isSelecting &&
                        <Checkbox
                            onChange={() => {
                            }}
                            checked={isSelected}/>
                    }
                    <div className={commonStyles.avatarParent}>
                        <img
                            className={commonStyles.avatar}
                            src={avatar}
                            alt={`avatar${contactId}`}/>
                    </div>


                    <span>{displayedName}</span>
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
