// import React, {useState} from 'react';
// import Decorations from "../assets/Decoration.svg";
// import {NavLink} from "react-router-dom";
//
// const Register = () => {
//     const [emailReg, setEmailReg] = useState("");
//     const [passwordReg, setPasswordReg] = useState("");
//     const [passwordReg2, setPasswordReg2] = useState("");
//     const [errorsReg, setErrorsReg] = useState([]);
//     const [successReg, setSuccessReg] = useState(false);
//
//     const handleLogin = (e)=> {
//         e.preventDefault();
//         const errorsReg = [];
//
//         let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
//
//         if (emailReg === "" || !emailReg.match(emailRegex)) {
//             errorsReg.push("Email should be valid.");
//         }
//
//         if ((passwordReg.value !== passwordReg2.value) ||
//             (passwordReg.value === "" && passwordReg2.value === "") ||
//             (passwordReg.length < 8 && passwordReg2.length < 8)) {
//             errorsReg.push("Hasła nie są takie same lub puste").trim();
//         }
//
//
//         setErrorsReg(errorsReg);
//
//         if (errorsReg.length === 0) {
//             setSuccessReg(true);
//         }
//     };
//
//     return (
//         <div className="register__page">
//             <div className="register__page__container">
//                 <h2>Załóż konto</h2>
//                 <img src={Decorations} alt="decoration"/>
//                 <div className="register__form__container"
//                      onSubmit={handleLogin}>
//                     <form className="register__form">
//                         <div className="register__email__input">
//                             <label htmlFor="emailReg">Email</label>
//                             <input type="text" id="emailReg" placeholder="abc@xyz.pl"
//                                    value={emailReg} onChange={e => setEmailReg(e.target.value)} required/>
//                         </div>
//                         <div className="register__password__input">
//                             <label htmlFor="passwordReg">Hasło</label>
//                             <input type="password" id="passwordReg"
//                                    value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)}
//                                    placeholder="********"/>
//                         </div>
//                         <div className="register__password__input">
//                             <label htmlFor="passwordReg2">Powtórz hasło</label>
//                             <input type="password" id="passwordReg2"
//                                    value={passwordReg2} onChange={(e) => setPasswordReg2(e.target.value)}
//                                    placeholder="********"/>
//                         </div>
//                     </form>
//                     <div className="register__success__container">
//                         <span>{successReg && <h2>You are registered. Check e-mil to confirm.</h2>}</span>
//                     </div>
//                     <div className="register__error__container">
//                         {errorsReg.map(error => <p key={error}>{error}</p>)}
//                     </div>
//                 </div>
//                 <div className="register__buttons">
//                     <button ><NavLink to="LoginForm">Zaloguj</NavLink></button>
//                     <button type="submit">Załóż konto</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;


import React, {Component} from 'react';
import Decorations from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                emailReg: "",
                passwordReg: "",
                passwordReg2: "",
            },
            errors: {
                emailReg: "",
                passwordReg: "",
                passwordReg2: ""
            }
        };
    }

    submitForm = e => {
        e.preventDefault();
        if (
            !this.state.errors.emailReg.length &&
            !this.state.errors.passwordReg.length &&
            !this.state.errors.passwordReg2.length
        ){
            this.props.history.push("/")
        }
        console.log(this.state);
    };

    validateEmail = () => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(this.state.values.email).toLowerCase()))
            setTimeout(() => this.setErrors({ emailReg: "Email is invalid" }), 800);
        else this.setErrors({ emailReg: "" });
    };

    validatePasswordReg = () => {
        if ((this.state.values.passwordReg.length < 8) || (this.state.values.passwordReg === ""))
            setTimeout(
                () =>
                    this.setErrors({
                        passwordReg: "Password must have at least 8 characters"
                    }),
                800
            );
        else this.setErrors({ passwordReg: "" });
    };
    validatePasswordReg2 = () => {
        if ((this.state.values.passwordReg !== this.state.values.passwordReg2))
            setTimeout(
                () =>
                    this.setErrors({
                        passwordReg2: "Passwords must be same"
                    }),
                800
            );
        else this.setErrors({ passwordReg2: "" });
    };

    setErrors = error =>
        this.setState({
            errors: { ...this.state.errors, ...error }
        });

    handleInputChangeReg = e => {
        this.setState({
            values: { ...this.state.values, [e.target.name]: e.target.value }
        });
    };

    render() {
        return (
            <div className="register__page">
                <div className="register__page__container">
                    <h2>Załóż konto</h2>
                    <img src={Decorations} alt="decoration"/>
                    <div className="register__form__container">
                        <form className="register__form" onSubmit={this.submitForm}>
                            <div className="register__email__input">
                                <label htmlFor="emailReg">Email</label>
                                <input type="email"
                                       name="email"
                                       id="email"
                                       value={this.state.values.email}
                                       onChange={this.handleInputChangeReg}
                                       onBlur={this.validateEmail}
                                       title="Email"
                                       autoComplete="off"
                                       required/>
                                       <div className="error">
                                           <p>{this.state.errors.email}</p>
                                       </div>
                            </div>
                            <div className="register__passwordReg__input">
                                <label htmlFor="passwordReg">Hasło</label>
                                <input type="password"
                                       name="passwordReg"
                                       id="passwordReg"
                                       value={this.state.values.passwordReg}
                                       onChange={this.handleInputChangeReg}
                                       onBlur={this.validatePasswordReg}
                                       title="passwordReg"
                                       required
                                       placeholder="********"/>
                                       <div className="error">
                                           <p>{this.state.errors.passwordReg}</p>
                                       </div>
                            </div>
                            <div className="register__passwordReg__input">
                                <label htmlFor="passwordReg2">Powtórz hasło</label>
                                <input type="password"
                                       name="passwordReg2"
                                       id="passwordReg2" value={this.state.values.passwordReg2} onChange={this.handleInputChangeReg}
                                       onBlur={this.validatePasswordReg2}
                                       title="passwordReg2"
                                       required
                                       placeholder="********"/>
                                       <div className="error">
                                           <p>{this.state.errors.passwordReg2}</p>
                                       </div>
                            </div>
                            <div className="register__buttons">
                                <button ><NavLink to="LoginForm">Zaloguj</NavLink></button>
                                <button type="submit">Załóż konto</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;