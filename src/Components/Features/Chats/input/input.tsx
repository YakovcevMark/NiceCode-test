import {Container} from "../../../Common/Container/Container";
import s from "./styles.module.scss";
import {IconButton} from "../../../Common/Buttons/IconButton/IconButton";
import React, {ChangeEvent, memo, useState} from "react";

const plus = require("../../../../assets/imgs/plus.svg") as string;
const search = require("../../../../assets/imgs/search.svg") as string;
const filter = require("../../../../assets/imgs/filter.svg") as string;

type PT = {
    onInputChange: (val: string) => void;
};
export const Input = memo(
    ({onInputChange}: PT) => {

        const [searchValue, setSearchValue] = useState("");

        const [typeMode, setTypeMode] = useState(false);
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const val = e.currentTarget.value.trim();
            setSearchValue(val);
            onInputChange(val.toLowerCase());
        }

        return (
            <Container className={s.container}>
                {
                    typeMode
                        ? (
                            <>
                                <IconButton
                                    src={search}
                                    className={s.searchBTNClassNameInTypeMode}/>

                                <input
                                    value={searchValue}
                                    onChange={onChangeHandler}
                                    className={s.searchInput}
                                    type="search"/>

                                <IconButton
                                    onClick={() => setTypeMode(false)}
                                    className={s.plusBTNInTypeMode}
                                    src={plus}/>

                            </>
                        )
                        : (
                            <>
                                <IconButton
                                    onClick={() => setTypeMode(true)}
                                    src={search}
                                    className={s.searchBTNClassName}/>

                                <span className={s.usersControlButtons}>
                                <IconButton
                                    src={filter}
                                    className={s.filterBTNClassName}/>
                                <IconButton src={plus}/>
                            </span>
                            </>
                        )
                }
            </Container>
        );
    });
