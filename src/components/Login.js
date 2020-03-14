// import React, {useState} from 'react';
// import Decorations from "../assets/Decoration.svg";
// import {NavLink} from "react-router-dom";
//
// const Login = () => {
//     const [emailLog, setEmailLog] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState([]);
//     const [success, setSuccess] = useState(false);
//
//     const handleLogin = (e)=> {
//         e.preventDefault();
//         const errors = [];
//
//         let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
//
//         if (emailLog === "" || !emailLog.match(emailRegex)) {
//             errors.push("Email should be valid.");
//         }
//
//         if (password.length < 8) {
//             errors.push("Pole hasło nie moe być krótsze niz 4 znaki");
//         }
//
//         setErrors(errors);
//         if (errors.length === 0) {
//             setSuccess(true);
//         }
//     };
//     return (
//         <div className="login__page">
//             <div className="login__page__container">
//                 <h2>Zaloguj się</h2>
//                 <img src={Decorations} alt="decoration"/>
//                 <div className="login__form__container"
//                      onSubmit={handleLogin}>
//                     <form className="login__form">
//                         <div className="login__email__input">
//                             <label htmlFor="emailLog">Email</label>
//                             <input type="text" id="emailLog" placeholder="abc@xyz.pl"
//                                    value={emailLog} onChange={e => setEmailLog(e.target.value)} required/>
//                         </div>
//                         <div className="login__password__input">
//                             <label htmlFor="password">Hasło</label>
//                             <input type="password" id="password"
//                                    value={password} onChange={(e) => setPassword(e.target.value)}
//                                    placeholder="********"/>
//                         </div>
//
//                     </form>
//                     <div className="login__success__container">
//                         <span>{success && <h2>You are logged in.</h2>}</span>
//                     </div>
//                     <div className="login__error__container">
//                         {errors.map(error => <p key={error}>{error}</p>)}
//                     </div>
//                 </div>
//                 <div className="login__buttons">
//                     <button><NavLink to="RegisterForm">Załóż konto</NavLink></button>
//                     <button><NavLink to="LogOut">Wyloguj się</NavLink></button>
//                     <button type="submit">Zaloguj</button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Login;

import React, {Component} from 'react';
import Decorations from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                email: "",
                password: ""
            },
            errors: {
                email: "",
                password: ""
            }
        };
    }

    submitForm = e => {
        e.preventDefault();
        // console.log(this.state.errors.email, this.state.errors.password)
        if (!this.state.errors.email && !this.state.errors.password) {
            this.props.history.push("/")
        }
        // console.log(this.state);
    };

    validateEmail = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(this.state.values.email).toLowerCase()))
            setTimeout(() => this.setErrors({ email: "Email is invalid" }), 800);
        else this.setErrors({ email: "" });
    };

    validatePassword = password => {
        if (this.state.values.password.length < 8)
            setTimeout(
                () =>
                    this.setErrors({
                        password: "Password must have at least 8 characters"
                    }),
                800
            );
        else this.setErrors({ password: "" });
    };

    setErrors = error =>
        this.setState({
            errors: { ...this.state.errors, ...error }
        });

    handleInputChangeLog = e => {
        this.setState({
            values: { ...this.state.values, [e.target.name]: e.target.value }
        });
    };

    render() {
        return (
            <div className="login__page">
                <div className="login__page__container">
                    <h2>Zaloguj się</h2>
                    <img src={Decorations} alt="decoration"/>
                    <div className="login__form__container" >
                        <form className="login__form" onSubmit={this.submitForm}>
                            <div className="login__email__input">
                                <label htmlFor="emailLog">Email</label>
                                <input type="email"
                                       name="email"
                                       id="email"
                                       value={this.state.values.email}
                                       onChange={this.handleInputChangeLog}
                                       onBlur={this.validateEmail}
                                       title="Email"
                                       autoComplete="off"
                                       required
                                />
                                <div className="error">
                                    <p>{this.state.errors.email}</p>
                                </div>
                            </div>
                            <div className="login__password__input">
                                <label htmlFor="password">Hasło</label>
                                <input type="password"
                                       name="password"
                                       id="password"
                                       value={this.state.values.password}
                                       onChange={this.handleInputChangeLog}
                                       onBlur={this.validatePassword}
                                       title="password"
                                       required
                                       placeholder="********"/>
                                       <div className="error">
                                           <p>{this.state.errors.password}</p>
                                       </div>
                            </div>
                            <div className="login__buttons">
                                <button><NavLink to="RegisterForm">Załóż konto</NavLink></button>
                                <button><NavLink to="LogOut">Wyloguj się</NavLink></button>
                                <button type="submit">Zaloguj</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;