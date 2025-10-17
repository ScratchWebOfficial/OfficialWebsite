import React from "react";
import "../styles/DigitalMarketingGrid.css";
import marketingImage from "../assets/marketing-right1.png"; // Use your actual path

import { FaLock } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";

const DigitalMarketingGrid = () => {
    return (
        <div className="digital-marketing-section" id="home-digitalmarketing-section">
            <div className="digital-marketing-left">
                <h2>
                    <span className="blue-text">Evolving Digital Marketing Services</span><br />
                    to Drive Better Revenues and ROI
                </h2>

                <div className="marketing-cards-grid">
                    <div className="marketing-card white-card">
                        <FaServer className="marketing-icon orange-icon" />
                        <h3>Earn a Spot</h3>
                        <p>Earn a power-packed spot among bigger brands</p>
                    </div>
                    <div className="marketing-card dark-card">
                        <FaLock className="marketing-icon white-icon" />
                        <h3>Broader Reach</h3>
                        <p>Reach out to more audiences the world across</p>
                    </div>
                    <div className="marketing-card white-card">
                        <FaServer className="marketing-icon orange-icon" />
                        <h3>Create a Buzz</h3>
                        <p>Stir greater interests in your intended customers</p>
                    </div>
                    <div className="marketing-card dark-card">
                        <FaLock className="marketing-icon white-icon" />
                        <h3>Safety Ensured</h3>
                        <p>We shall protect the confidentiality of your data</p>
                    </div>
                    <div className="marketing-card white-card">
                        <FaServer className="marketing-icon orange-icon" />
                        <h3>Cost-Efficient</h3>
                        <p>Get quality services at a cost advantageous to you</p>
                    </div>
                    <div className="marketing-card dark-card">
                        <FaLock className="marketing-icon white-icon" />
                        <h3>Brand Transformation</h3>
                        <p>Transform your business into a coveted brand</p>
                    </div>
                </div>
            </div>

            <div className="digital-marketing-right">
                <img src={marketingImage} alt="Digital Marketing Visual" />
            </div>
        </div>
    );
};

export default DigitalMarketingGrid;
