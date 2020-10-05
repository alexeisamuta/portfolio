import React from 'react';
import './App.css';
import {Header} from '../src/header/Header'
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./works/Projects";
import {Сontacts} from "./contacts/Сontacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Projects/>
            <Сontacts/>
            <Footer/>
        </div>
    );
}

export default App;
