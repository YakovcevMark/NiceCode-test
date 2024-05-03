import {Button} from "../../../Common/Buttons/Button/Button";
import s from './styles.module.scss'
import {memo} from "react";
import {ActiveSection} from "../ChatInfo";

const plus = require("../../../../assets/imgs/plus.svg") as string;

const btnsData: ActiveSection[] = ["Заметки", "Консультации", "Видео", "Мероприятия"];

const getActionContent = (section: ActiveSection): string => {
    switch (section) {
        case "Заметки":
            return "Новая заметка";
        case "Консультации":
            return "Записать";
        default:
            return "Рекомендовать";
    }
};

type PT = {
    activeSection: ActiveSection;
    setActiveSection: (section: ActiveSection) => void;
};
export const ContentType = memo(
    ({
         setActiveSection,
         activeSection
     }: PT) => {

        return (
            <section className={s.section}>

                <div className={s.btnsBlock}>
                    {
                        btnsData.map((btn, i) =>
                            <Button
                                onClick={() => setActiveSection(btn)}
                                className={activeSection === btn ? s.active : ""}>
                                <div className={s.btnWithLine}>
                                    {btn}
                                    {i !== btnsData.length - 1 && <div className={s.line}></div>}
                                </div>
                            </Button>
                        )
                    }
                </div>

                <Button className={s.action}>
                    <span>{getActionContent(activeSection)}</span>
                    <div className={s.icon}>
                        <img src={plus} alt=""/>
                    </div>
                </Button>

            </section>
        );
    });