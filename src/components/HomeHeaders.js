import React from 'react';
import {Link} from "react-router-dom";

const HomeHeaders = () => {
    return (
            <section className="main__section">

                    <div className="main__section__photo"> </div>
                    <div className="main__section__content">
                        <nav className="main__section__nav">
                            <div className="main__section__nav__container">
                                <ul>
                                    <li>
                                        <Link to="/loginForm">
                                            Zaloguj się
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/registerForm">
                                            Załóż konto
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            Start
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            O co chodzi
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            O nas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Fundacja i organizacje
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Kontakt
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="main__section__way__help">
                            <h2>Sekcja wyboru formy pomocy</h2>
                            <ul>
                                <li>
                                    <Link to="/loginForm">
                                        Oddaj rzeczy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/loginForm">
                                        Zorganizuj zbiórkę
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


            </section>
    );
};

export default HomeHeaders;