import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Bounce from 'react-reveal/Bounce';
import ReactTypingEffect from 'react-typing-effect';

export function Main() {
    return (
        <div className={style.mainBlock}>
            <Bounce bottom>
                <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <div className={style.text}>
                        <span className={style.bigText}>Alexei</span>
                        <span className={style.secondName}>Samuta</span>
                        <ReactTypingEffect text={"I'm a Frontend Developer"} className={style.smallText}/>
                        {/*<span className={style.smallText}>I'm a Frontend Developer.</span>*/}
                    </div>
                    <div className={style.photo}>PHOTO</div>
                </div>
            </Bounce>
        </div>
    );
}
