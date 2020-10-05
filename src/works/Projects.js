import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Project} from './work/Project';
import {Title} from '../common/components/title/Title';
import todoImage from './../assets/image/todo2.jpg';
import socialImage from './../assets/image/snIM2.jpg';


export function Projects() {

    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                {/*<Title text={"Projects"}/>*/}
                <Title text={"Latest"} lastWord={"Projects"}/>
                <div className={style.works}>
                    <Project style={social}
                          title={"Social Network"}
                          description={"Almost before we knew it, we had left the ground.Almost before we knew it, we had left the ground."}/>
                    <Project style={todolist}
                          title={"To Do List"}
                          description={"Almost before we knew it, we had left the ground.2"}/>
                    {/*<Work title={"Project 3"} description={"Almost before we knew it, we had left the ground.3"}/>*/}
                </div>
            </div>
        </div>
    );
}