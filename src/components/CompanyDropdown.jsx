
// src/components/CompanyDropdown.jsx
/*import React from "react";
import { Link } from "react-router-dom";
import "../styles/IndustriesDropdown.css";

const CompanyDropdown = ({ visible, onClose, onItemClick }) => {
    if (!visible) return null;

    return (
        <div className="company-dropdown" onMouseLeave={onClose}>
            <ul>
                <li><Link to="/aboutus" onClick={onItemClick}>About Us</Link></li>
                <li><Link to="/careers" onClick={onItemClick}>Careers</Link></li>
                <li><Link to="/news" onClick={onItemClick}>News</Link></li>
                <li><Link to="/blogs" onClick={onItemClick}>Blogs</Link></li>
                <li><Link to="/contactus" onClick={onItemClick}>Contact Us</Link></li>
            </ul>
        </div>
    );
};

export default CompanyDropdown;*/


// src/components/CompanyDropdown.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/CompanyDropdown.css"; // Create this file or update existing one

const CompanyDropdown = ({ visible, onClose, onItemClick }) => {
    if (!visible) return null;

    return (
        <div className="company-dropdown" onMouseLeave={onClose}>
            <ul>
                <li><Link to="/aboutus" onClick={onItemClick} className="company-link">About Us</Link></li>
                <li><Link to="/careers" onClick={onItemClick} className="company-link">Careers</Link></li>
                <li><Link to="/news" onClick={onItemClick} className="company-link">News</Link></li>
                <li><Link to="/blogs" onClick={onItemClick} className="company-link">Blogs</Link></li>
                <li><Link to="/contactus" onClick={onItemClick} className="company-link">Contact Us</Link></li>
            </ul>
        </div>
    );
};

export default CompanyDropdown;


