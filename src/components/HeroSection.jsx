import React from "react";
import "../styles/HeroSection.css";
import homeHeroImg from "../assets/l5.png";

const HeroSection = () => {
    return (
        <div className="home-hero-section" id="home-hero-section">
            <div className="home-hero-left">
                <h1>
                    <span className="blue-text">We Bring Your</span><br />
                    <span className="black-text">Digital Dreams To Life!</span>
                </h1>
                <p>
                    Your website visions are about to come true! Understanding your specific needs, we will
                    create world-class website designs. <strong></strong> <span className="orange-text"></span>
                </p>
                <button className="home-hero-btn">REDESIGN YOUR WEBSITE</button>
            </div>
            <div className="home-hero-right">
                <img src={homeHeroImg} alt="Home Hero" />
            </div>
        </div>
    );
};

export default HeroSection;
