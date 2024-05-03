import {memo, ReactNode} from "react";
import s from './styles.module.scss';

type PT = {
    iconNode: ReactNode;
    mainContent: string;
    secondContent: ReactNode | string;
    additionalInformation?: string;
    confirmed?:boolean;
};

export const NoteBlock = memo(

    ({
         additionalInformation,
         iconNode,
         mainContent,
         secondContent,
         confirmed
     }: PT) => {

        return (
            <article className={s.container}>

                <div className={s.iconNodeCN}>
                    {iconNode}
                </div>

                <div className={s.content}>
                    <span className={s.mainContentCN}>
                        {mainContent}
                    </span>
                    <span className={s.secondContentCN}>
                        {secondContent}
                    </span>
                </div>

                {additionalInformation &&
                    <div className={s.additionalInformationCN +(
                        confirmed === false
                            ? ` ${s.notConfirmed}`
                            : ""
                    )}>
                        <span>
                            {additionalInformation}
                        </span>
                    </div>
                }

            </article>
        );
    });