import React from "react";
import { Link } from "react-router-dom"; // make sure this is installed and imported
import "../styles/OurWorkDropdown.css";

export default function OurWorkDropdown({ visible, onClose, onItemClick }) {
    if (!visible) return null;

    return (
        <div
            className="ourwork-dropdown"
            onMouseLeave={onClose}
            onClick={onClose}
        >
            <ul>
                <li>
                    <Link to="/casestudy" onClick={onItemClick}>Case Study</Link>
                </li>
                <li>
                    <Link to="/portfolio" onClick={onItemClick}>Portfolio</Link>
                </li>
            </ul>
        </div>
    );
}

