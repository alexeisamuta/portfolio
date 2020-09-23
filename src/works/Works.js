import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from './work/Work';
import {Title} from '../common/components/title/Title';
import todoImage from './../assets/image/todo2.jpg';
import socialImage from './../assets/image/sn.jpg';


export function Works() {

    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.works}>
                    <Work style={social}
                          title={"Social Network"}
                          description={"Almost before we knew it, we had left the ground.Almost before we knew it, we had left the ground."}/>
                    <Work style={todolist}
                          title={"To Do List"}
                          description={"Almost before we knew it, we had left the ground.2"}/>
                    {/*<Work title={"Project 3"} description={"Almost before we knew it, we had left the ground.3"}/>*/}
                </div>
            </div>
        </div>
    );
}