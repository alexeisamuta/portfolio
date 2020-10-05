import React from "react";
import style from './Сontacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export function Сontacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                {/*<h2 className={style.title}>Contact with me</h2>*/}
                <Title text={"Contact with"} lastWord={"me"}/>
                <div className={style.contacts}>
                    <form className={style.form}>
                        <input placeholder={"Name"}/>
                        <input placeholder={"Email"}/>
                        <textarea placeholder={"Message"}/>
                        <button>Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
}