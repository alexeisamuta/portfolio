import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import TelegramIcon from '../assets/image/87413.png'
import LinkedInIcon from '../assets/image/linkedin.png'
import VkIcon from '../assets/image/vk-com.png'
import Bounce from "react-reveal/Bounce";


export function Footer() {
    return (
        <div className={style.footerBlock}>
            <Bounce bottom>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <h2 className={style.footerName}>Alexei Samuta</h2>
                    <div className={style.sn}>
                        <AddingLinks url={"https://t.me/alexeisamuta"} icon={TelegramIcon}/>
                        <AddingLinks url={"https://www.linkedin.com/in/alexei-samuta-4304841a0/"} icon={LinkedInIcon}/>
                        <AddingLinks url={"https://vk.com/xlestakovschina"} icon={VkIcon}/>
                    </div>
                    <p>© 2020 All Rights Reserved.</p>
                </div>
            </Bounce>
        </div>
    );
}

//props {url: string, icon: any}
const AddingLinks = (props) => {
    return <div className={style.sn1}>
        <a target="_blank" rel="noopener noreferrer" href={props.url}>
            <img src={props.icon} alt={"icon"}/>
        </a>
    </div>
}