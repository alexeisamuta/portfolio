import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import TelegramIcon from '../assets/image/87413.png'
import LinkedInIcon from '../assets/image/linkedin.png'
import VkIcon from '../assets/image/vk-com.png'



export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.footerName}>Alexei Samuta</h2>
                <div className={style.sn}>
                    <div className={style.sn1}>
                        <a href={"https://t.me/alexeisamuta"}>
                            <img src={TelegramIcon}/>
                        </a>
                    </div>
                    <div className={style.sn1}>
                        <a href={"https://www.linkedin.com/in/alexei-samuta-4304841a0/"}>
                            <img src={LinkedInIcon}/>
                        </a>
                    </div>
                    <div className={style.sn1}>
                        <a href={"https://vk.com/xlestakovschina"}>
                            <img src={VkIcon}/>
                        </a>
                    </div>
                </div>
                <p>© 2020 All Rights Reserved.</p>
            </div>

        </div>
    );
}