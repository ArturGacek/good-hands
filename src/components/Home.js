import React from 'react';
import * as Scroll from 'react-scroll';

import HomeHeaders from "./HomeHeaders";
import HomeThreeColumns from "./HomeThreeColumns";

const Element = Scroll.Element;

const Home = () => {
    return (
        <div>
            <Element name="/"> <HomeHeaders/> </Element>
            <Element name="collections"> <HomeThreeColumns/> </Element>
        </div>
    );
};

export default Home;