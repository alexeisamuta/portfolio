import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"This section is dedicated to the JavaScript language itself"}/>
                    <Skill title={"CSS"} description={"and not the parts that are specific to Web pages or other host environments."}/>
                    <Skill title={"React"} description={"For information about API specifics to Web pages, please see Web APIs and DOM."}/>
                </div>
            </div>
        </div>
    );
}