import React from 'react';
import {NavLink} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';
import Decorations from "../assets/Decoration.svg"


const HomeHeaders = () => {

    return (
            <header className="header__section">
                    <div className="header__photo"> </div>
                    <div className="header__section__content">
                        <div className="header__nav__container">
                            <div className="header__user__panel">
                                <NavLink to="/loginForm"> Zaloguj się </NavLink>
                                <NavLink to="/registerForm"> Załóż konto </NavLink>
                            </div>
                            <nav className="header__section__nav">
                            <ul>
                                <li>
                                    <ScrollLink to="/" >Start</ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="simpleSteps" spy={true} smooth={true} duration={500}> O co chodzi? </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="aboutUs" spy={true} smooth={true} duration={500}> O nas </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="whoWeHelp" spy={true} smooth={true} duration={500}> Fundacja i organizacje </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="contact" spy={true} smooth={true} duration={500}> Kontakt </ScrollLink>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        <div className="header__collections">
                            <div className="header__collections__title">
                                <div>Zacznij pomagać!</div>
                                <div>Oddaj niechciane rzeczy w zaufane ręce</div>
                            </div>
                            <img src={Decorations} alt="decoration"/>
                            <div className="header__collections__buttons">
                                <button><NavLink to="LoginForm">Oddaj rzeczy</NavLink></button>
                                <button><NavLink to="LoginForm">Zorganizuj zbiórkę</NavLink></button>
                            </div>
                        </div>
                    </div>
            </header>
    );
};

export default HomeHeaders;

