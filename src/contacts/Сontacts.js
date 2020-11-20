import React from "react";
import style from './Сontacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import {useFormik} from 'formik';
import * as axios from "axios";

export function Contacts() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: async (values) => {
            await axios.default.post("https://smtp-server-portfolio.herokuapp.com/sendMessage" , {...values})
                .then(() => alert("Message send!"))
                .catch((e) => console.log({...e}))
        },
    });

    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                {/*<h2 className={style.title}>Contact with me</h2>*/}
                <Title text={"Contact with"} lastWord={"me"}/>
                <div className={style.contacts}>
                    <form className={style.form} onSubmit={formik.handleSubmit}>
                        <input placeholder="Name"
                               name="name"
                               onChange={formik.handleChange}
                               value={formik.values.name}/>
                        <input placeholder="Email"
                               name="email"
                               onChange={formik.handleChange}
                               value={formik.values.email}/>
                        <textarea placeholder="Message"
                                  name="message"
                                  onChange={formik.handleChange}
                                  value={formik.values.message}/>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}