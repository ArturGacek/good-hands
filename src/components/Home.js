import React from 'react';
import * as Scroll from 'react-scroll';

import HomeHeaders from "./HomeHeaders";
import HomeThreeColumns from "./HomeThreeColumns";
import AboutUs from "./AboutUs";
import SimpleSteps from "./SimpleSteps";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";

const Element = Scroll.Element;

const Home = () => {
    return (
        <div>
            <Element name="/"> <HomeHeaders/> </Element>
            <Element name="collections"> <HomeThreeColumns/> </Element>
            <Element name={"simpleSteps"}> <SimpleSteps/> </Element>
            <Element name={"aboutUs"}> <AboutUs/> </Element>
            <Element name={"whoWeHelp"}> <WhoWeHelp/> </Element>
            <Element name={"contact"}> <Contact/> </Element>
        </div>
    );
};

export default Home;