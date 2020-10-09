import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactIcon from './../assets/image/react2.png'
import TSIcon from './../assets/image/typescriptPNG.png'
import CssIcon from './../assets/image/css1.png'
import ReduxIcon from './../assets/image/redux.png'
import HTMLIcon from './../assets/image/html.png'

export function Skills() {

    const reactImage = {
        backgroundImage: `url(${reactIcon})`,
    };
    const typescriptImage = {
        backgroundImage: `url(${TSIcon})`,
    };
    const cssImage = {
        backgroundImage: `url(${CssIcon})`,
    };
    const reduxImage = {
        backgroundImage: `url(${ReduxIcon})`,
    };
    const HTMLImage = {
        backgroundImage: `url(${HTMLIcon})`,
    };


    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"My"} lastWord={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"TypeScript"}
                           description={"This section is dedicated to the JavaScript language itself"}
                           style={typescriptImage}/>
                    <Skill title={"CSS"}
                           description={"and not the parts that are specific to Web pages or other host environments."}
                           style={cssImage}/>
                    <Skill title={"React"}
                           description={"For information about API specifics to Web pages, please see Web APIs and DOM."}
                           style={reactImage}/>
                    <Skill title={"Redux"}
                           description={"For information about API specifics to Web pages, please see Web APIs and DOM."}
                           style={reduxImage}/>
                    <Skill title={"HTML"}
                           description={"For information about API specifics to Web pages, please see Web APIs and DOM."}
                           style={HTMLImage}/>
                </div>
            </div>
        </div>
    );
}