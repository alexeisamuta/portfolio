import React from 'react';
import './App.css';
import {Header} from '../src/header/Header'
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Сontacts} from "./contacts/Сontacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works/>
            <Сontacts/>
            <Footer/>
        </div>
    );
}

export default App;
