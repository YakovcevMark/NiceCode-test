import {notes} from './data'
import s from './styles.module.scss'
import {ButtonWithDropDown} from "../../../../Common/Buttons/ButtonWithDropDown/ButtonWithDropDown";
import {BasicDropDown} from "../../../../Common/Buttons/ButtonWithDropDown/BasicDropDown/BasicDropDown";
import React from "react";

type PT = {};

export const AllNotes = ({}: PT) => {
    return (
        <section className={s.allNotes}>
            {
                notes.map(
                    n =>
                        <article className={s.note}>
                            <div className={s.noteContent}>
                                <span className={s.noteDate}>
                                    {n.data}
                                </span>
                                <span className={s.noteBody}>
                                    {n.body}
                                </span>
                            </div>
                            <ButtonWithDropDown className={s.dropDown}>
                                <BasicDropDown/>
                            </ButtonWithDropDown>
                        </article>
                )
            }
            <div className={s.theMap}>
                <img
                    src="https://s3-alpha-sig.figma.com/img/1153/2461/7c229622bcbe6884f7be41a0fd6d814f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OS8CDPc1z2Aq4nVRYiFTk0G1diVIBtywFj~HVtCPwDE6nK80OPmIVVoO2fGBd~Zc9dgaGxqv~jlTEu6hApUttd9VxHwsYoW1y9Ngs8uGWH9Krawv~HHLPk2lx~3-SfC7uGMlky14Wb15YfWuOeHjopVx9S9FkKDkBw3uJUzIWA8ezgGDBWAoOxp~VZcesdEbGgRnefgc3BOEgiIfXGCPeSnNIbb3nYSaI3z4~Gms5O~PzCYX~Rbgm9Ni~WiZbflIbLb98vtO0Wr0maGs3eawsBQv5KWN9SPcqSvi0AiMYFyFDqbcgFohjBoYnu0zWNPqm7LJ~Jscnlf~p3jLrTKnZg__"
                    alt="the map"/>
            </div>
        </section>
    );
};
