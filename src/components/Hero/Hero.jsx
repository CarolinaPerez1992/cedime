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
            <span className="stroke-text">Lorem</span>
            <span>ipsum</span>
          </div>
          <div>
            <span>Lorem, ipsum.</span>
          </div>
          <div>
            <span className="hero-text-span">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              consequatur!
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+17</span>
            <span>Profesionales</span>
          </div>
          <div>
            <span>+30</span>
            <span>Colaboradores</span>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Lorem, ipsum.</buttons>
          <buttons className="btn">Lorem, ipsum.</buttons>
        </div>
      </div>
      <div className="right-h">Right</div>
    </div>
  );
};

export default Hero;
