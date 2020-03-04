import React from 'react';
import {NavLink} from "react-router-dom";
import Decorations from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

const SimpleSteps = () => {
    return (
        <div className="simpleSteps__container">
            <div className="simpleSteps__title">
                <h3>Wystarczą 4 proste kroki</h3>
                <img src={Decorations} alt="decoration"/>
            </div>
            <div className="simpleSteps__content__container">
                <div className="simpleSteps__content">
                    <img src={Icon1} alt="T-shirt"/>
                    <span>Wybierz rzeczy</span>
                    <div className="simpleSteps__underline"> </div>
                    <div>ubrania, zabawki, sprzęt i inne</div>
                </div>
                <div className="simpleSteps__content">
                    <img src={Icon2} alt="T-shirt"/>
                    <span>Spakuj je</span>
                    <div className="underline"> </div>
                    <div>skorzystaj z worków na śmieci</div>
                </div>
                <div className="simpleSteps__content">
                    <img src={Icon3} alt="T-shirt"/>
                    <span>Zdecyduj komu chcesz pomóc</span>
                    <div className="underline"> </div>
                    <div>wybierz zaufane miejsce</div>
                </div>
                <div className="simpleSteps__content">
                    <img src={Icon4} alt="T-shirt"/>
                    <span>Zamów kuriera</span>
                    <div className="underline"> </div>
                    <div>kurier przyjedzie w dogodnym terminie</div>
                </div>
            </div>
            <div className="simpleSteps__button">
                <button><NavLink to="LoginForm">Oddaj rzeczy</NavLink></button>
            </div>
        </div>
    );
};

export default SimpleSteps;