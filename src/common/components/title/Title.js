import React from 'react';
import style from './Title.module.scss';

export function Title(props) {
    return (
        <div className={style.title}>
            <h3>{props.text}</h3>
        </div>
    )
}
