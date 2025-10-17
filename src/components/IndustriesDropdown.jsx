// src/components/IndustriesDropdown.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/IndustriesDropdown.css";

const IndustriesDropdown = ({ visible, onClose, onItemClick }) => {
    if (!visible) return null;

    return (
        <div className="industries-dropdown" onMouseLeave={onClose}>
            <ul>
                <li><Link to="/construction" onClick={onItemClick}>Construction</Link></li>
                <li><Link to="/healthcare" onClick={onItemClick}>Healthcare</Link></li>
                <li><Link to="/retail" onClick={onItemClick}>Retail & E-Commerce</Link></li>
                <li><Link to="/infotech" onClick={onItemClick}>InfoTech</Link></li>
                <li><Link to="/logistics" onClick={onItemClick}>Automotive & Logistics</Link></li>
            </ul>
        </div>
    );
};

export default IndustriesDropdown;
