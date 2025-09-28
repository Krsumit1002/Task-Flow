import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import Features from "../components/FeatureSection";
import Work from "../components/WorkSection"
import Footer from "../components/Footer"

const Home = () => {

  return (
    <>
      <div className="h-screen w-full">
        <Navbar/>
        <Hero/>
        <Features/>
        <Work/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
