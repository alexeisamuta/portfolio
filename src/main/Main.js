import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span className={style.bigText}>Alexei</span>
                    <span className={style.secondName}>Samuta</span>
                    {/*<span className={`${style.bigText} ${style.redText}`}>Samuta</span>*/}
                    <span className={style.smallText}>I'm a Frontend Developer.</span>
                </div>
                <div className={style.photo}>PHOTO</div>
            </div>
        </div>
    );
}

// export default Header;
