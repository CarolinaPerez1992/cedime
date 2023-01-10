import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

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
      <div className="right-h">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis tempora aliquam officiis. Repellat eius fugit excepturi 
      <div className="heart">
        <img src={heart} alt="corazon" />
        <span>heart</span><span> heart</span>
      </div>
      <img src={hero_image} alt="hero_image" className="hero-image"/>
      <img src={hero_image_back} alt="hero_image_back" className="hero-image_back"/>
      </div>
    </div>
  );
};

export default Hero;
