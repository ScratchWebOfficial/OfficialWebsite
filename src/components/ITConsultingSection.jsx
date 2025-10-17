// ITConsultingSection.jsx
import React from "react";
import "../styles/ITConsultingSection.css";
import checkIcon from "../assets/it1.png";
import handshakeIcon from "../assets/it2.png";
import clockIcon from "../assets/it3.png";

const ITConsultingSection = () => {
  return (
    <div className="itconsulting-section" id="itconsulting-section">
      <div className="itconsulting-header">
        <h2>
          <span className="blue-text">Next-Gen IT Consulting and Support</span>
        </h2>
        <h3>Services for Your Business</h3>
        <div className="underline"></div>
      </div>

      <div className="itconsulting-cards">
        <div className="it-card">
          <img src={checkIcon} alt="Check Icon" />
          <div className="overlay">
            <h4>Next-Gen IT Consulting and Support</h4>
            <p>Services for Your Business</p>
          </div>
        </div>
        <div className="it-card">
          <img src={handshakeIcon} alt="Handshake" />
          <div className="overlay">
            <h4>Catering to Clients Globally</h4>
            <p>Backed by our IT solutions and its technical support prowess, we cater to the varying needs of clients globally.</p>
        
          </div>
        </div>
        <div className="it-card">
          <img src={clockIcon} alt="Clock" />
          <div className="overlay">
            <h4>Faster Turnaround is Guaranteed</h4>
            <p>Our IT consulting will fit your goals and ensure utmost satisfaction with a faster turnaround.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITConsultingSection;
