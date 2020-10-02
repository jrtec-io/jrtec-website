import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Strenghts from '../components/sections/Strenghts';
import { IconContext } from "react-icons";

const Home = () => {

  return (
    <>
    <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Strenghts className="illustration-section-01" />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      </IconContext.Provider>
    </>
  );
}

export default Home;