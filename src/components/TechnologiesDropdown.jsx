// src/components/TechnologiesDropdown.jsx
/*import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TechnologiesDropdown.css";

export default function TechnologiesDropdown({ visible, onClose, onItemClick  }) {
    const navigate = useNavigate();
    if (!visible) return null;

    const handleClick = (path) => {
        navigate(path);
        onClose();
    };

    return (
        <div className="tech-dropdown" onMouseLeave={onClose}>
            <ul>
                <li onClick={() => handleClick("/blockchain")}>Blockchain</li>
                <li onClick={() => handleClick("/ai")}>Artificial Intelligence</li>
                <li onClick={() => handleClick("/phpframework")}>PHP Framework</li>
                <li onClick={() => handleClick("/customui")}>Custom UI</li>
            </ul>
        </div>
    );
}*/

// src/components/TechnologiesDropdown.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TechnologiesDropdown.css";

export default function TechnologiesDropdown({ visible, onClose, onItemClick }) {
    const navigate = useNavigate();

    if (!visible) return null;

    const handleClick = (path) => {
        navigate(path);           // Navigate to selected page
        onItemClick();            // Close dropdown and navbar
        onClose();                // Reset hover/dropdown
    };

    return (
        <div className="tech-dropdown" onMouseLeave={onClose}>
            <ul>
                <li onClick={() => handleClick("/blockchain")}>Blockchain</li>
                <li onClick={() => handleClick("/ai")}>Artificial Intelligence</li>
                <li onClick={() => handleClick("/phpframework")}>PHP Framework</li>
                <li onClick={() => handleClick("/customui")}>Custom UI</li>
            </ul>
        </div>
    );
}

