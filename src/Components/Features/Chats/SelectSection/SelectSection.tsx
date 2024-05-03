import s from "./styles.module.scss";
import {Button} from "../../../Common/Buttons/Button/Button";
import React, {memo} from "react";
import Checkbox from "../../../Common/Checkbox/Checkbox";

type PT = {
    isSelectingMode: boolean;
    countOfSelected: number;
    countOfChats: number;
    changeSelectingMode: () => void;
    clearAll: () => void;
    setAll: () => void;
};

export const SelectSection = memo(
    ({
         isSelectingMode,
         countOfSelected,
         countOfChats,
         changeSelectingMode,
         clearAll,
         setAll
     }: PT) => {

        const isAllChecked = countOfSelected === countOfChats;
        const selectOrClearAll = () => {
            isAllChecked
                ? clearAll()
                : setAll()
        };

        const onDiscardAll = () => {
            changeSelectingMode();
            clearAll();
        }

        return (
            <section className={s.selectSection}>
                {
                    isSelectingMode
                        ? (
                            <>
                                <label
                                    className={s.label}>

                                    <Checkbox
                                        onChange={selectOrClearAll}
                                        checked={isAllChecked}
                                        className={s.selectAllCheckboxInput}/>

                                    <span className={s.text}>
                                        Все
                                    </span>

                                </label>

                                <p className={s.countOfUsers + ` ${s.activeCountOfUsers}`}>
                                    {countOfSelected}
                                </p>

                                <div className={s.activeControl}>
                                    <Button
                                        className={s.text}>
                                        Действия
                                    </Button>
                                    <Button
                                        onClick={onDiscardAll}
                                        className={s.text}>
                                        Отменить
                                    </Button>
                                </div>

                            </>
                        ) : (
                            <>

                                <p className={s.countOfUsers}>
                                    {countOfChats}
                                </p>

                                <Button
                                    onClick={changeSelectingMode}
                                    className={s.text}>
                                    Выбрать
                                </Button>

                            </>
                        )
                }
            </section>
        );
    });