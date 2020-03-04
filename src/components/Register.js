import React, {useState} from 'react';
import Decorations from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";

const Register = () => {
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [passwordReg2, setPasswordReg2] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleLogin = (e)=> {
        e.preventDefault();
        const tempErrors = [];

        let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;

        if (emailReg === "" || !emailReg.match(emailRegex)) {
            errors.push("Email should be valid.");
        }

        if ((passwordReg.value !== passwordReg2.value) ||
            (passwordReg.value === "" && passwordReg2.value === "") ||
            (passwordReg.length < 8 && passwordReg2.length < 8)) {
            errors.push("Hasła nie są takie same lub puste").trim();
        }
        if (tempErrors.length > 0) {
            setErrors(tempErrors);
        }
    };

    return (
        <div className="register__page">
            <div className="register__page__container">
                <h2>Załóż konto</h2>
                <img src={Decorations} alt="decoration"/>
                <div className="register__form__container"
                     onSubmit={handleLogin}>
                    <form className="register__form">
                        <div className="register__email__input">
                            <label htmlFor="emailReg">Email</label>
                            <input type="text" id="emailReg" placeholder="abc@xyz.pl"
                                   value={emailReg} onChange={e => setEmailReg(e.target.value)} required/>
                        </div>
                        <div className="register__password__input">
                            <label htmlFor="passwordReg">Hasło</label>
                            <input type="password" id="passwordReg"
                                   value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)}
                                   placeholder="********"/>
                        </div>
                        <div className="register__password__input">
                            <label htmlFor="passwordReg2">Powtórz hasło</label>
                            <input type="password" id="passwordReg2"
                                   value={passwordReg2} onChange={(e) => setPasswordReg2(e.target.value)}
                                   placeholder="********"/>
                        </div>

                    </form>
                </div>
                <div className="register__buttons">
                    <button ><NavLink to="LoginForm">Zaloguj</NavLink></button>
                    <button type="submit">Załóż konto</button>
                </div>
            </div>
        </div>
    );
};

export default Register;