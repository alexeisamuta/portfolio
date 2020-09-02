import React from 'react';
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";

export function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
            <h2 className={style.title}>Мои Работы</h2>
            <div className={style.works}>
                <Work title={"Работа 1"} description={"Описание первой работы"}/>
                <Work title={"Работа 2"} description={"Описание второй работы"}/>
                <Work title={"Работа 3"} description={"Описание третьей работы"}/>
            </div>
            </div>
        </div>
    );
}