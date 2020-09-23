import React from "react";
import style from './Сontacts.module.css';
import styleContainer from "../common/styles/Container.module.css";

export function Сontacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <div className={style.contacts}>
                    <form className={style.form}>
                        <input/>
                        <input/>
                        <textarea/>
                        <button>Отправить</button>
                    </form>
                </div>

            </div>
        </div>
    );
}