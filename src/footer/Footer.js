import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";



export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Alexei</h2>
                <div className={style.sn}>
                    <div>Facebook</div>
                    <div>Twitter</div>
                    <div>Dribble</div>
                    <div>Linkedin</div>
                    <div>Pinterest</div>
                </div>
                <p>© 2020 beingeorge, All Rights Reserved.</p>
            </div>

        </div>
    );
}