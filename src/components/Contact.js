import React, {useState} from 'react';
import Decorations from "../assets/Decoration.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = [];

        let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
        let letters = /^[A-Za-z]+$/;

        if (name === "" || !name.match(letters)) {
            errors.push("Please put name. Only letters, one word.");
        }

        // if (email === "" || !email.match(emailRegex)) {
        //     errors.push("Email should be valid.");
        // }

        if (message.length < 120) {
            errors.push("Message should be at least 120 characters long.");
        }



        const obj = {
            name,
            email,
            message
        };

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                    return response.json();

            })
            .then(data => {
                if (data.status === "success") {
                    setSuccess(true);
                    setName("");
                    setEmail("");
                    setMessage("");
                } else if (data.status === "error") {
                    console.warn(data.errors)
                }
            })
            .catch(err => {
                console.log(err);
            });

        setErrors(errors);
        setSuccess(false);
        if (errors.length > 0) {
            return false;
        }

    };
    return (
        <div className="footer__container">
            <div className="footer__title">
                <h3>Skontaktuj się z nami</h3>
                <img src={Decorations} alt="T-shirt"/>
            </div>
            <div className="footer__contact__container"
                 onSubmit={handleSubmit}>
                <form>
                    <div className="contact__name__input">
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <input type="text" id="name" placeholder="Krzysztof"
                               value={name} onChange={e => setName(e.target.value)} required/>
                    </div>
                    <div className="contact__email__input">
                        <label htmlFor="email">Wpisz swój email</label>
                        <input type="text" id="email" placeholder="abc@xyz.pl"
                               value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div className="contact__textarea__input">
                        <label htmlFor="textarea">Wpisz swoją wiadomość</label>
                        <textarea rows="4" id="textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                  value={message} onChange={e => setMessage(e.target.value)} required/>
                    </div>
                    <div className="contact__button__container">
                        <button type="submit">Wyślij</button>
                    </div>
                </form>
                <div className="contact__success__container">
                    <span>{success && <h2>Form sent!</h2>}</span>
                </div>
                <div className="contact__error__container">
                    {errors.map(error => <p key={error}>{error}</p>)}
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