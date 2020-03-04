import React from 'react';
import Decorations from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";

const LogOut = () => {
    return (
        <div className="logOut__page">
            <div className="logOut__page__container">
                <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                <img src={Decorations} alt="decoration"/>
            </div>
            <div className="logOut__buttons">
                <button ><NavLink to="/">Strona główna</NavLink></button>
            </div>
        </div>
    );
};

export default LogOut;