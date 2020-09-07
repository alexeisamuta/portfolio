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
                        <div><input/></div>
                        <div><input/></div>
                        <div><textarea/></div>
                    </form>
                </div>
                <button>Отправить</button>
            </div>
        </div>
    );
}