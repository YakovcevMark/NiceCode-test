import s from './styles.module.scss'

type PT = {};
export const BasicDropDown = ({}: PT) => {

    return (
        <div className={s.container}>
            <div className={s.fakeButton}>
                <span>
                    Изменить
                </span>
            </div>
            <div className={s.fakeButton}>
                <span>
                    Удалить
                </span>
            </div>
        </div>
    );
};