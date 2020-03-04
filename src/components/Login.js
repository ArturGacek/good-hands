import React, {useState} from 'react';
import Decorations from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";

const Login = () => {
    const [emailLog, setEmailLog] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleLogin = (e)=> {
        e.preventDefault();
        const tempErrors = [];

        let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;

        if (emailLog === "" || !emailLog.match(emailRegex)) {
            errors.push("Email should be valid.");
        }

        if (password.length < 8) {
            tempErrors.push("Pole hasło nie moe być krótsze niz 4 znaki");
        }
        if (tempErrors.length > 0) {
            setErrors(tempErrors);
        }
    };
    return (
        <div className="login__page">
            <div className="login__page__container">
                <h2>Zaloguj się</h2>
                <img src={Decorations} alt="decoration"/>
                <div className="login__form__container"
                     onSubmit={handleLogin}>
                    <form className="login__form">
                        <div className="login__email__input">
                            <label htmlFor="emailLog">Email</label>
                            <input type="text" id="emailLog" placeholder="abc@xyz.pl"
                                   value={emailLog} onChange={e => setEmailLog(e.target.value)} required/>
                        </div>
                        <div className="login__password__input">
                            <label htmlFor="password">Hasło</label>
                            <input type="password" id="password"
                                   value={password} onChange={(e) => setPassword(e.target.value)}
                                   placeholder="********"/>
                        </div>

                    </form>
                </div>
                <div className="login__buttons">
                    <button><NavLink to="RegisterForm">Załóż konto</NavLink></button>
                    <button><NavLink to="LogOut">Wyloguj się</NavLink></button>
                    <button type="submit">Zaloguj</button>
                </div>
            </div>
        </div>
    );
};

export default Login;