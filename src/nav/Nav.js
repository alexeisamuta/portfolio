import React from 'react';
import {Link} from 'react-scroll';
import style from './Nav.module.scss';


export function Nav() {
    return (
        <div className={style.nav}>
            <a href="">HOME</a>
            {/*<a href="#skills" >SKILLS</a>*/}
            {/*<a href="#projects" >PROJECTS</a>*/}
            {/*<a href="#contacts">CONTACTS</a>*/}
            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >SKILLS</Link>
            <Link
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >PROJECTS</Link>
            <Link
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >CONTACTS</Link>
        </div>
    );
}

