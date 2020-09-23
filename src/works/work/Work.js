import React from 'react';
import style from './Work.module.scss';

export function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <div className={style.button}>Смотреть</div>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.workTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    );
}