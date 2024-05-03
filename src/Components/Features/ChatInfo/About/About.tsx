import {Container} from "../../../Common/Container/Container";
import {ButtonWithDropDown} from "../../../Common/Buttons/ButtonWithDropDown/ButtonWithDropDown";
import {BasicDropDown} from "../../../Common/Buttons/ButtonWithDropDown/BasicDropDown/BasicDropDown";
import React, {memo, useContext} from "react";
import {SelectedChatIdContext} from "../../../../App/SelectedChatIdContext";
import {chats, contacts} from '../../../../App/data'
import s from './styles.module.scss'
import commonStyles from '../../../../assets/styles/commonStyles.module.scss'

type PT = {};
export const About = memo(({}: PT) => {

    const [selectedChat] = useContext(SelectedChatIdContext);

    const {
        avatar,
        age,
        sex,
        fullName
    } = contacts[chats[selectedChat].contactId];

    return (
        <Container className={s.container}>

            <article className={commonStyles.avatarParent + ` ${s.avatarParent}`}>
                <img
                    className={commonStyles.avatar}
                    src={avatar}
                    alt="Contact photo"/>
            </article>

            <article className={s.about}>
                <span className={s.name}>{fullName}</span>
                <span className={s.additionalInfo}>{`${age} лет, ${sex}`}</span>
            </article>

            <ButtonWithDropDown className={s.settingsButton}>
                <BasicDropDown/>
            </ButtonWithDropDown>

        </Container>
    );
});