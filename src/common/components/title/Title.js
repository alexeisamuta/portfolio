import React from 'react';
import style from './Title.module.scss';

export function Title(props) {
    return (
        <div className={style.title}>
            <h2>{props.text} <span>{props.lastWord}</span></h2>
        </div>
    )
}
