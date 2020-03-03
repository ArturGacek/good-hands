import React from 'react';
import Decorations from "../assets/Decoration.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";

const Contact = () => {
    return (
        <div className="footer__container">
            <div className="footer__title">
                <h3>Skontaktuj się z nami</h3>
                <img src={Decorations} alt="T-shirt"/>
            </div>
            <div className="footer__contact__container">
                <div className="contact__name__input">
                    <label htmlFor="name">Wpisz swoje imię</label>
                    <input type="text" id="name" placeholder="Krzysztof" />
                </div>
                <div className="contact__email__input">
                    <label htmlFor="email">Wpisz swój email</label>
                    <input type="text" id="email" placeholder="abc@xyz.pl" />
                </div>
                <div className="contact__textarea__input">
                    <label htmlFor="textarea">Wpisz swój email</label>
                    <textarea rows="4" id="textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                </div>
                <div className="contact__button__container">
                    <button>Wyślij</button>
                </div>
            </div>
            <div className="contact__rights__and__icons">
                    <span>
                        Copyright by Coders Lab
                    </span>
                <div className="contact__icons">
                    <img src={Instagram} alt="Instragram"/>
                    <img src={Facebook} alt="Facebook"/>
                </div>
            </div>
        </div>
    );
};

export default Contact;