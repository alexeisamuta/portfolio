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
                          description={"Social network is a project, where you can assess my skills to learn something new. Every time I've learned new feature or technology I try to implement it here. So it's a kind of playground of my own. Deployed on gh pages"}/>
                    <Project style={todolist}
                          title={"To Do List"}
                          description={"Here you can observe all my skills in React/Redux. This project includes Redux Thunk, Ui=>BLL=>DAL workflow, Hooks, Material UI usage. Storybook and Unit Tests have also been used. Project is deployed on gh pages"}/>
                </div>
            </div>
        </div>
    );
}