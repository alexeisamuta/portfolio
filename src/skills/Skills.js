import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactIcon from './../assets/image/react2.png'
import CssIcon from './../assets/image/CSSImage.png'
import ReduxIcon from './../assets/image/redux.png'
import HTMLIcon from './../assets/image/HTMLImage.png'
import JSIcon from './../assets/image/javascript.png'

export function Skills() {

    const reactImage = {
        backgroundImage: `url(${reactIcon})`,
    };
    const JSImage = {
        backgroundImage: `url(${JSIcon})`,
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
                    <Skill title={"JavaScript"}
                           description={"Good knowledge of JavaScript + experience with TypeScript. Daily practicing with codewars-like web-sites. Understanding of objects, function expression and function declaration, promises. Deep object and array copying. Familiar with ES6 syntax, arrow functions etc."}
                           style={JSImage}/>
                    <Skill title={"CSS"}
                           description={"Knowledge of all main CSS 3 features, including shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts. Deep understanding of flex-based design. Knowledge of SASS/SCSS prepros."}
                           style={cssImage}/>
                    <Skill title={"React"}
                           description={"Professional usage of React library. Class components, including life-cycles and local state managing, HOCs, container components, MSTP & MDTP. Functional components and Hooks (useState, useEffect, useReducer, etc). State management using React-Redux library (useSelector and useDispatch). React + TypeScript deep understanding"}
                           style={reactImage}/>
                    <Skill title={"Redux"}
                           description={"FLUX workflow, state management, Middlewares, Redux Thunk knowledge, Actions and Action creators, reducers, createStore, dispatch, immutable state changing. Deep understanding of UI => BLL => DAL workflow"}
                           style={reduxImage}/>
                    <Skill title={"HTML"}
                           description={"Deep knowledge of HTML 5 structure and semantic tags. Correct usage of block names to create corresponding page layout."}
                           style={HTMLImage}/>
                </div>
            </div>
        </div>
    );
}