import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="slogan-cedime">
          <div></div>
          <span> Lorem ipsum dolor sit amet.</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Lorem </span>
            <span>ipsum</span>
          </div>
          <div><span>
            Lorem, ipsum.</span></div>
        </div>
      </div>
      <div className="right-h">Right</div>
    </div>
  );
};

export default Hero;
