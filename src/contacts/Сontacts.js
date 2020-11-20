import React, {useState} from "react";
import style from './Сontacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import {useFormik} from 'formik';
import Bounce from 'react-reveal/Bounce';
import * as axios from "axios";

export function Contacts() {

    const [disable, setDisable] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: async (values) => {
            setDisable(true)
            await axios.default.post("https://smtp-server-portfolio.herokuapp.com/sendMessage", {...values})
                .then(() => alert("Message send!"))
                .catch((e) => console.log({...e}))
                .finally(() => setDisable(false))
        },
    });

    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <Bounce bottom>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
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
                            <button type="submit" disabled={disable}>Send Message</button>
                        </form>
                    </div>
                </div>
            </Bounce>
        </div>
    );
}