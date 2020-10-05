import React from 'react';
import style from './Nav.module.scss';

export function Nav() {
    return (
        <div className={style.nav}>
            <a href="" className={style.link}>HOME</a>
            <a href="" className={style.link}>SKILLS</a>
            <a href="" className={style.link}>PROJECTS</a>
            <a href="" className={style.link}>CONTACTS</a>
        </div>
    );
}

