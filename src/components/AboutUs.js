import React from 'react';

import Decorations from "../assets/Decoration.svg";

const AboutUs = () => {
    return (
        <div className="about__us__container">
            <div className="about__us__content__container">
                <h2>O nas</h2>
                <img src={Decorations} alt="T-shirt"/>
                <div className="about__us__content">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </div>
                <div className="about__us__signature">
                    <div> </div>
                </div>
            </div>
            <div className="about__us__photo"> </div>
        </div>
    );
};

export default AboutUs;