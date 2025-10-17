/*"use client";
import React, { useState } from "react";
import MegaMenuServices from "./MegaMenuServices";
import TechnologiesDropdown from "./TechnologiesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import OurWorkDropdown from "./OurWorkDropdown";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
    const [servicesHover, setServicesHover] = useState(false);
    const [techHover, setTechHover] = useState(false);
    const [industriesHover, setIndustriesHover] = useState(false);
    const [companyHover, setCompanyHover] = useState(false);
    const [ourWorkHover, setOurWorkHover] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Mobile dropdown toggles
    const [mobileDropdown, setMobileDropdown] = useState("");

    const toggleDropdown = (key) => {
        setMobileDropdown(prev => (prev === key ? "" : key));
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="WORDSYS logo" className="logo" />
            </div>

            <nav className={`navbar-center ${isMobileMenuOpen ? "show-mobile" : ""}`}>
                <a href="/" className="active">HOME</a>

                <div className="nav-dropdown-trigger mobile-toggle" onClick={() => toggleDropdown("tech")}>
                    <span>TECHNOLOGIES</span>
                    {mobileDropdown === "tech" && (
                        <div className="mobile-dropdown">
                            <TechnologiesDropdown visible={true} mobile={true} />
                        </div>
                    )}
                </div>

                <div className="nav-dropdown-trigger mobile-toggle" onClick={() => toggleDropdown("services")}>
                    <span>SERVICES</span>
                    {mobileDropdown === "services" && (
                        <div className="mobile-dropdown">
                            <MegaMenuServices visible={true} mobile={true} />
                        </div>
                    )}
                </div>

                <div className="nav-dropdown-trigger mobile-toggle" onClick={() => toggleDropdown("industries")}>
                    <span>INDUSTRIES</span>
                    {mobileDropdown === "industries" && (
                        <div className="mobile-dropdown">
                            <IndustriesDropdown visible={true} mobile={true} />
                        </div>
                    )}
                </div>

                <div className="nav-dropdown-trigger mobile-toggle" onClick={() => toggleDropdown("company")}>
                    <span>COMPANY</span>
                    {mobileDropdown === "company" && (
                        <div className="mobile-dropdown">
                            <CompanyDropdown visible={true} mobile={true} />
                        </div>
                    )}
                </div>

                <div className="nav-dropdown-trigger mobile-toggle" onClick={() => toggleDropdown("ourwork")}>
                    <span>OUR WORK</span>
                    {mobileDropdown === "ourwork" && (
                        <div className="mobile-dropdown">
                            <OurWorkDropdown visible={true} mobile={true} />
                        </div>
                    )}
                </div>
            </nav>

            <div className="navbar-right">
                <button className="nav-btn nav-btn-orange">WEBSITE DESIGN</button>
                <button className="nav-btn nav-btn-blue">GET A QUOTE</button>

                <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span className={isMobileMenuOpen ? "open" : ""}></span>
                    <span className={isMobileMenuOpen ? "open" : ""}></span>
                    <span className={isMobileMenuOpen ? "open" : ""}></span>
                </div>
            </div>
        </header>
    );
}*/


/*import React, { useState, useEffect } from "react";
import MegaMenuServices from "./MegaMenuServices";
import TechnologiesDropdown from "./TechnologiesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import OurWorkDropdown from "./OurWorkDropdown";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
    const [servicesHover, setServicesHover] = useState(false);
    const [techHover, setTechHover] = useState(false);
    const [industriesHover, setIndustriesHover] = useState(false);
    const [companyHover, setCompanyHover] = useState(false);
    const [ourWorkHover, setOurWorkHover] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // set initial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleDropdown = (key) => {
        setMobileDropdown(prev => (prev === key ? "" : key));
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="WORDSYS logo" className="logo" />
            </div>

            <nav className={`navbar-center ${isMobileMenuOpen ? "show-mobile" : ""}`}>
                <a href="/" className="active">HOME</a>

                {isMobile ? (
                    <>
                        <div className="nav-dropdown-trigger mobile-toggle" onClick={() => toggleDropdown("tech")}>
                            <span>TECHNOLOGIES</span>
                            {mobileDropdown === "tech" && (
                                <div className="mobile-dropdown">
                                    <TechnologiesDropdown visible={true} mobile={true} />
                                </div>
                            )}
                        </div>
                        <div className="nav-dropdown-trigger mobile-toggle" onClick={() => toggleDropdown("services")}>
                            <span>SERVICES</span>
                            {mobileDropdown === "services" && (
                                <div className="mobile-dropdown">
                                    <MegaMenuServices visible={true} mobile={true} />
                                </div>
                            )}
                        </div>
                        <div className="nav-dropdown-trigger mobile-toggle" onClick={() => toggleDropdown("industries")}>
                            <span>INDUSTRIES</span>
                            {mobileDropdown === "industries" && (
                                <div className="mobile-dropdown">
                                    <IndustriesDropdown visible={true} mobile={true} />
                                </div>
                            )}
                        </div>
                        <div className="nav-dropdown-trigger mobile-toggle" onClick={() => toggleDropdown("company")}>
                            <span>COMPANY</span>
                            {mobileDropdown === "company" && (
                                <div className="mobile-dropdown">
                                    <CompanyDropdown visible={true} mobile={true} />
                                </div>
                            )}
                        </div>
                        <div className="nav-dropdown-trigger mobile-toggle" onClick={() => toggleDropdown("ourwork")}>
                            <span>OUR WORK</span>
                            {mobileDropdown === "ourwork" && (
                                <div className="mobile-dropdown">
                                    <OurWorkDropdown visible={true} mobile={true} />
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className="nav-dropdown-trigger"
                            onMouseEnter={() => setTechHover(true)}
                            onMouseLeave={() => setTechHover(false)}
                            onClick={() => setTechHover((v) => !v)}
                            style={{ position: "relative" }}
                        >
                            <a href="#technologies" tabIndex={0}>TECHNOLOGIES</a>
                            <TechnologiesDropdown visible={techHover} onClose={() => setTechHover(false)} />
                        </div>

                        <div
                            className="nav-dropdown-trigger"
                            onMouseEnter={() => setServicesHover(true)}
                            onMouseLeave={() => setServicesHover(false)}
                            onClick={() => setServicesHover((v) => !v)}
                        >
                            <a href="#services" tabIndex={0}>SERVICES</a>
                            <MegaMenuServices visible={servicesHover} onClose={() => setServicesHover(false)} />
                        </div>

                        <div
                            className="nav-dropdown-trigger"
                            onMouseEnter={() => setIndustriesHover(true)}
                            onMouseLeave={() => setIndustriesHover(false)}
                            onClick={() => setIndustriesHover((v) => !v)}
                            style={{ position: "relative" }}
                        >
                            <a href="#industries" tabIndex={0}>INDUSTRIES</a>
                            <IndustriesDropdown visible={industriesHover} onClose={() => setIndustriesHover(false)} />
                        </div>

                        <div
                            className="nav-dropdown-trigger"
                            onMouseEnter={() => setCompanyHover(true)}
                            onMouseLeave={() => setCompanyHover(false)}
                            onClick={() => setCompanyHover((v) => !v)}
                            style={{ position: "relative" }}
                        >
                            <a href="#company" tabIndex={0}>COMPANY</a>
                            <CompanyDropdown visible={companyHover} onClose={() => setCompanyHover(false)} />
                        </div>

                        <div
                            className="nav-dropdown-trigger"
                            onMouseEnter={() => setOurWorkHover(true)}
                            onMouseLeave={() => setOurWorkHover(false)}
                            onClick={() => setOurWorkHover((v) => !v)}
                            style={{ position: "relative" }}
                        >
                            <a href="#ourwork" tabIndex={0}>OUR WORK</a>
                            <OurWorkDropdown visible={ourWorkHover} onClose={() => setOurWorkHover(false)} />
                        </div>
                    </>
                )}
            </nav>

            <div className="navbar-right">
                <button className="nav-btn nav-btn-orange">WEBSITE DESIGN</button>
                <button className="nav-btn nav-btn-blue">GET A QUOTE</button>

                <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span className={isMobileMenuOpen ? "open" : ""}></span>
                    <span className={isMobileMenuOpen ? "open" : ""}></span>
                    <span className={isMobileMenuOpen ? "open" : ""}></span>
                </div>
            </div>
        </header>
    );
}*/

/*import React, { useState } from "react";
import MegaMenuServices from "./MegaMenuServices";
import TechnologiesDropdown from "./TechnologiesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import OurWorkDropdown from "./OurWorkDropdown";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
    const [servicesHover, setServicesHover] = useState(false);
    const [techHover, setTechHover] = useState(false);
    const [industriesHover, setIndustriesHover] = useState(false);
    const [companyHover, setCompanyHover] = useState(false);
    const [ourWorkHover, setOurWorkHover] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState("");

    const toggleDropdown = (key) => {
        setMobileDropdown(prev => (prev === key ? "" : key));
        setIsMobileMenuOpen(false); // auto-close the navbar on dropdown click
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="WORDSYS logo" className="logo" />
            </div>

            <div
                className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`navbar-center ${isMobileMenuOpen ? "show-mobile" : ""}`}>
                <a href="/" className="active">HOME</a>

                <div
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setTechHover(true)}
                    onMouseLeave={() => setTechHover(false)}
                    onClick={() => toggleDropdown("technologies")}
                    style={{ position: "relative" }}
                >
                    <a href="#technologies" tabIndex={0}>TECHNOLOGIES</a>
                    <TechnologiesDropdown visible={techHover || mobileDropdown === "technologies"} onClose={() => setTechHover(false)} />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setServicesHover(true)}
                    onMouseLeave={() => setServicesHover(false)}
                    onClick={() => toggleDropdown("services")}
                >
                    <a href="#services" tabIndex={0}>SERVICES</a>
                    <MegaMenuServices visible={servicesHover || mobileDropdown === "services"} onClose={() => setServicesHover(false)} />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setIndustriesHover(true)}
                    onMouseLeave={() => setIndustriesHover(false)}
                    onClick={() => toggleDropdown("industries")}
                    style={{ position: "relative" }}
                >
                    <a href="#industries" tabIndex={0}>INDUSTRIES</a>
                    <IndustriesDropdown visible={industriesHover || mobileDropdown === "industries"} onClose={() => setIndustriesHover(false)} />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setCompanyHover(true)}
                    onMouseLeave={() => setCompanyHover(false)}
                    onClick={() => toggleDropdown("company")}
                    style={{ position: "relative" }}
                >
                    <a href="#company" tabIndex={0}>COMPANY</a>
                    <CompanyDropdown visible={companyHover || mobileDropdown === "company"} onClose={() => setCompanyHover(false)} />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setOurWorkHover(true)}
                    onMouseLeave={() => setOurWorkHover(false)}
                    onClick={() => toggleDropdown("ourwork")}
                    style={{ position: "relative" }}
                >
                    <a href="#ourwork" tabIndex={0}>OUR WORK</a>
                    <OurWorkDropdown visible={ourWorkHover || mobileDropdown === "ourwork"} onClose={() => setOurWorkHover(false)} />
                </div>

                <div className="navbar-mobile-actions">
                    <button className="nav-btn nav-btn-orange">WEBSITE DESIGN</button>
                    <button className="nav-btn nav-btn-blue">GET A QUOTE</button>
                </div>
            </nav>

            <div className="navbar-right">
                <button className="nav-btn nav-btn-orange">WEBSITE DESIGN</button>
                <button className="nav-btn nav-btn-blue">GET A QUOTE</button>
            </div>
        </header>
    );
}*/

/*import React, { useState } from "react";
import MegaMenuServices from "./MegaMenuServices";
import TechnologiesDropdown from "./TechnologiesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import OurWorkDropdown from "./OurWorkDropdown";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
    const [servicesHover, setServicesHover] = useState(false);
    const [techHover, setTechHover] = useState(false);
    const [industriesHover, setIndustriesHover] = useState(false);
    const [companyHover, setCompanyHover] = useState(false);
    const [ourWorkHover, setOurWorkHover] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState("");

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setMobileDropdown("");
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="WORDSYS logo" className="logo" />
            </div>
            <nav className={`navbar-center ${isMobileMenuOpen ? "show-mobile" : ""}`}>
                <a href="/" className="active" onClick={closeMobileMenu}>HOME</a>
                <div
                    className="nav-dropdown-trigger"
                    onClick={() => setMobileDropdown(mobileDropdown === "technologies" ? "" : "technologies")}
                    onMouseEnter={() => setTechHover(true)}
                    onMouseLeave={() => setTechHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#technologies">TECHNOLOGIES</a>
                    <TechnologiesDropdown visible={techHover || mobileDropdown === "technologies"} onClose={() => setTechHover(false)} onItemClick={closeMobileMenu} />
                </div>
                <div
                    className="nav-dropdown-trigger"
                    onClick={() => setMobileDropdown(mobileDropdown === "services" ? "" : "services")}
                    onMouseEnter={() => setServicesHover(true)}
                    onMouseLeave={() => setServicesHover(false)}
                >
                    <a href="#services">SERVICES</a>
                    <MegaMenuServices visible={servicesHover || mobileDropdown === "services"} onClose={() => setServicesHover(false)} onItemClick={closeMobileMenu} />
                </div>
                <div
                    className="nav-dropdown-trigger"
                    onClick={() => setMobileDropdown(mobileDropdown === "industries" ? "" : "industries")}
                    onMouseEnter={() => setIndustriesHover(true)}
                    onMouseLeave={() => setIndustriesHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#industries">INDUSTRIES</a>
                    <IndustriesDropdown visible={industriesHover || mobileDropdown === "industries"} onClose={() => setIndustriesHover(false)} onItemClick={closeMobileMenu} />
                </div>
                <div
                    className="nav-dropdown-trigger"
                    onClick={() => setMobileDropdown(mobileDropdown === "company" ? "" : "company")}
                    onMouseEnter={() => setCompanyHover(true)}
                    onMouseLeave={() => setCompanyHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#company">COMPANY</a>
                    <CompanyDropdown visible={companyHover || mobileDropdown === "company"} onClose={() => setCompanyHover(false)} onItemClick={closeMobileMenu} />
                </div>
                <div
                    className="nav-dropdown-trigger"
                    onClick={() => setMobileDropdown(mobileDropdown === "ourwork" ? "" : "ourwork")}
                    onMouseEnter={() => setOurWorkHover(true)}
                    onMouseLeave={() => setOurWorkHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#ourwork">OUR WORK</a>
                    <OurWorkDropdown visible={ourWorkHover || mobileDropdown === "ourwork"} onClose={() => setOurWorkHover(false)} onItemClick={closeMobileMenu} />
                </div>
            </nav>
            <div className="navbar-right">
                <button className="nav-btn nav-btn-orange">WEBSITE DESIGN</button>
                <button className="nav-btn nav-btn-blue">GET A QUOTE</button>
            </div>
            <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
            </div>
        </header>
    );
}

/*import React, { useState } from "react";
import MegaMenuServices from "./MegaMenuServices";
import TechnologiesDropdown from "./TechnologiesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import OurWorkDropdown from "./OurWorkDropdown";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
    const [servicesHover, setServicesHover] = useState(false);
    const [techHover, setTechHover] = useState(false);
    const [industriesHover, setIndustriesHover] = useState(false);
    const [companyHover, setCompanyHover] = useState(false);
    const [ourWorkHover, setOurWorkHover] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleDropdownClick = (dropdownSetter) => {
        setMobileMenuOpen(false);
        dropdownSetter(true);
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="WORDSYS logo" className="logo" />
            </div>

            <nav className={`navbar-center ${mobileMenuOpen ? "show-mobile" : ""}`}>
                <a href="/" className="active" onClick={() => setMobileMenuOpen(false)}>HOME</a>

                <div
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setTechHover(true)}
                    onMouseLeave={() => setTechHover(false)}
                    onClick={() => handleDropdownClick(setTechHover)}
                    style={{ position: "relative" }}
                >
                    <a href="#technologies" tabIndex={0}>TECHNOLOGIES</a>
                    <TechnologiesDropdown visible={techHover} onClose={() => setTechHover(false)} />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setServicesHover(true)}
                    onMouseLeave={() => setServicesHover(false)}
                    onClick={() => handleDropdownClick(setServicesHover)}
                >
                    <a href="#services" tabIndex={0}>SERVICES</a>
                    <MegaMenuServices visible={servicesHover} onClose={() => setServicesHover(false)} />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setIndustriesHover(true)}
                    onMouseLeave={() => setIndustriesHover(false)}
                    onClick={() => handleDropdownClick(setIndustriesHover)}
                    style={{ position: "relative" }}
                >
                    <a href="#industries" tabIndex={0}>INDUSTRIES</a>
                    <IndustriesDropdown visible={industriesHover} onClose={() => setIndustriesHover(false)} />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setCompanyHover(true)}
                    onMouseLeave={() => setCompanyHover(false)}
                    onClick={() => handleDropdownClick(setCompanyHover)}
                    style={{ position: "relative" }}
                >
                    <a href="#company" tabIndex={0}>COMPANY</a>
                    <CompanyDropdown visible={companyHover} onClose={() => setCompanyHover(false)} />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setOurWorkHover(true)}
                    onMouseLeave={() => setOurWorkHover(false)}
                    onClick={() => handleDropdownClick(setOurWorkHover)}
                    style={{ position: "relative" }}
                >
                    <a href="#ourwork" tabIndex={0}>OUR WORK</a>
                    <OurWorkDropdown visible={ourWorkHover} onClose={() => setOurWorkHover(false)} />
                </div>

                <div className="navbar-mobile-actions">
                    <button className="nav-btn nav-btn-orange">WEBSITE DESIGN</button>
                    <button className="nav-btn nav-btn-blue">GET A QUOTE</button>
                </div>
            </nav>

            <div className="navbar-right">
                <button className="nav-btn nav-btn-orange">WEBSITE DESIGN</button>
                <button className="nav-btn nav-btn-blue">GET A QUOTE</button>
                <div
                    className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}*/
/*import React, { useState } from "react";
import MegaMenuServices from "./MegaMenuServices";
import TechnologiesDropdown from "./TechnologiesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import OurWorkDropdown from "./OurWorkDropdown";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
    const [servicesHover, setServicesHover] = useState(false);
    const [techHover, setTechHover] = useState(false);
    const [industriesHover, setIndustriesHover] = useState(false);
    const [companyHover, setCompanyHover] = useState(false);
    const [ourWorkHover, setOurWorkHover] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState("");

    const closeAllDropdowns = () => {
        setServicesHover(false);
        setTechHover(false);
        setIndustriesHover(false);
        setCompanyHover(false);
        setOurWorkHover(false);
        setMobileDropdown("");
        setIsMobileMenuOpen(false);
    };

    const handleMobileDropdownClick = (section) => {
        setMobileDropdown(mobileDropdown === section ? "" : section);
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="WORDSYS logo" className="logo" />
            </div>

            <nav className={`navbar-center ${isMobileMenuOpen ? "show-mobile" : ""}`}>
                <a href="/" className="active" onClick={closeAllDropdowns}>HOME</a>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("technologies")}
                    onMouseEnter={() => setTechHover(true)}
                    onMouseLeave={() => setTechHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#technologies">TECHNOLOGIES</a>
                    <TechnologiesDropdown
                        visible={techHover || mobileDropdown === "technologies"}
                        onClose={() => {
                            setTechHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("services")}
                    onMouseEnter={() => setServicesHover(true)}
                    onMouseLeave={() => setServicesHover(false)}
                >
                    <a href="#services">SERVICES</a>
                    <MegaMenuServices
                        visible={servicesHover || mobileDropdown === "services"}
                        onClose={() => {
                            setServicesHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("industries")}
                    onMouseEnter={() => setIndustriesHover(true)}
                    onMouseLeave={() => setIndustriesHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#industries">INDUSTRIES</a>
                    <IndustriesDropdown
                        visible={industriesHover || mobileDropdown === "industries"}
                        onClose={() => {
                            setIndustriesHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("company")}
                    onMouseEnter={() => setCompanyHover(true)}
                    onMouseLeave={() => setCompanyHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#company">COMPANY</a>
                    <CompanyDropdown
                        visible={companyHover || mobileDropdown === "company"}
                        onClose={() => {
                            setCompanyHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("ourwork")}
                    onMouseEnter={() => setOurWorkHover(true)}
                    onMouseLeave={() => setOurWorkHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#ourwork">OUR WORK</a>
                    <OurWorkDropdown
                        visible={ourWorkHover || mobileDropdown === "ourwork"}
                        onClose={() => {
                            setOurWorkHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>
            </nav>

            <div className="navbar-right">
                <button className="nav-btn nav-btn-orange">WEBSITE DESIGN</button>
                <button className="nav-btn nav-btn-blue">GET A QUOTE</button>
            </div>

            <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
            </div>
        </header>
    );
}*/
/*import React, { useState } from "react";
import MegaMenuServices from "./MegaMenuServices";
import TechnologiesDropdown from "./TechnologiesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import OurWorkDropdown from "./OurWorkDropdown";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
    const [servicesHover, setServicesHover] = useState(false);
    const [techHover, setTechHover] = useState(false);
    const [industriesHover, setIndustriesHover] = useState(false);
    const [companyHover, setCompanyHover] = useState(false);
    const [ourWorkHover, setOurWorkHover] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState("");

    const closeAllDropdowns = () => {
        setServicesHover(false);
        setTechHover(false);
        setIndustriesHover(false);
        setCompanyHover(false);
        setOurWorkHover(false);
        setMobileDropdown("");
        setIsMobileMenuOpen(false);
    };

    const handleMobileDropdownClick = (section) => {
        setMobileDropdown(mobileDropdown === section ? "" : section);
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="WORDSYS logo" className="logo" />
            </div>

            <nav className={`navbar-center ${isMobileMenuOpen ? "show-mobile" : ""}`}>
                <a href="/" className="active" onClick={closeAllDropdowns}>HOME</a>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("technologies")}
                    onMouseEnter={() => setTechHover(true)}
                    onMouseLeave={() => setTechHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#technologies">TECHNOLOGIES</a>
                    <TechnologiesDropdown
                        visible={techHover || mobileDropdown === "technologies"}
                        onClose={() => {
                            setTechHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("services")}
                    onMouseEnter={() => setServicesHover(true)}
                    onMouseLeave={() => setServicesHover(false)}
                >
                    <a href="#services">SERVICES</a>
                    <MegaMenuServices
                        visible={servicesHover || mobileDropdown === "services"}
                        onClose={() => {
                            setServicesHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("industries")}
                    onMouseEnter={() => setIndustriesHover(true)}
                    onMouseLeave={() => setIndustriesHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#industries">INDUSTRIES</a>
                    <IndustriesDropdown
                        visible={industriesHover || mobileDropdown === "industries"}
                        onClose={() => {
                            setIndustriesHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("company")}
                    onMouseEnter={() => setCompanyHover(true)}
                    onMouseLeave={() => setCompanyHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#company">COMPANY</a>
                    <CompanyDropdown
                        visible={companyHover || mobileDropdown === "company"}
                        onClose={() => {
                            setCompanyHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("ourwork")}
                    onMouseEnter={() => setOurWorkHover(true)}
                    onMouseLeave={() => setOurWorkHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#ourwork">OUR WORK</a>
                    <OurWorkDropdown
                        visible={ourWorkHover || mobileDropdown === "ourwork"}
                        onClose={() => {
                            setOurWorkHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>
            </nav>

            <div className="navbar-right">
                <button className="nav-btn nav-btn-orange">WEBSITE DESIGN</button>
                <button className="nav-btn nav-btn-blue">GET A QUOTE</button>
            </div>

            <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
            </div>
        </header>
    );
}*/


import React, { useState } from "react";
import MegaMenuServices from "./MegaMenuServices";
import TechnologiesDropdown from "./TechnologiesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import OurWorkDropdown from "./OurWorkDropdown";
import logo from "../assets/l.png";
import "../styles/Navbar.css";

export default function Navbar() {
    const [servicesHover, setServicesHover] = useState(false);
    const [techHover, setTechHover] = useState(false);
    const [industriesHover, setIndustriesHover] = useState(false);
    const [companyHover, setCompanyHover] = useState(false);
    const [ourWorkHover, setOurWorkHover] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState("");

    const closeAllDropdowns = () => {
        setServicesHover(false);
        setTechHover(false);
        setIndustriesHover(false);
        setCompanyHover(false);
        setOurWorkHover(false);
        setMobileDropdown("");
        setIsMobileMenuOpen(false);
    };

    const handleMobileDropdownClick = (section) => {
        setMobileDropdown(mobileDropdown === section ? "" : section);
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="WORDSYS logo" className="logo" />
            </div>

            <nav className={`navbar-center ${isMobileMenuOpen ? "show-mobile" : ""}`} style={{ overflowY: isMobileMenuOpen ? "scroll" : "visible", maxHeight: isMobileMenuOpen ? "80vh" : "auto" }}>
                <a href="/" className="active" onClick={closeAllDropdowns}>HOME</a>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("technologies")}
                    onMouseEnter={() => setTechHover(true)}
                    onMouseLeave={() => setTechHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#technologies">TECHNOLOGIES</a>
                    <TechnologiesDropdown
                        visible={techHover || mobileDropdown === "technologies"}
                        onClose={() => {
                            setTechHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("services")}
                    onMouseEnter={() => setServicesHover(true)}
                    onMouseLeave={() => setServicesHover(false)}
                >
                    <a href="#services">SERVICES</a>
                    <MegaMenuServices
                        visible={servicesHover || mobileDropdown === "services"}
                        onClose={() => {
                            setServicesHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("industries")}
                    onMouseEnter={() => setIndustriesHover(true)}
                    onMouseLeave={() => setIndustriesHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#industries">INDUSTRIES</a>
                    <IndustriesDropdown
                        visible={industriesHover || mobileDropdown === "industries"}
                        onClose={() => {
                            setIndustriesHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("company")}
                    onMouseEnter={() => setCompanyHover(true)}
                    onMouseLeave={() => setCompanyHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#company">COMPANY</a>
                    <CompanyDropdown
                        visible={companyHover || mobileDropdown === "company"}
                        onClose={() => {
                            setCompanyHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>

                <div
                    className="nav-dropdown-trigger"
                    onClick={() => handleMobileDropdownClick("ourwork")}
                    onMouseEnter={() => setOurWorkHover(true)}
                    onMouseLeave={() => setOurWorkHover(false)}
                    style={{ position: "relative" }}
                >
                    <a href="#ourwork">OUR WORK</a>
                    <OurWorkDropdown
                        visible={ourWorkHover || mobileDropdown === "ourwork"}
                        onClose={() => {
                            setOurWorkHover(false);
                            setMobileDropdown("");
                        }}
                        onItemClick={closeAllDropdowns}
                    />
                </div>
            </nav>

            <div className="navbar-right">
                <button className="nav-btn nav-btn-orange">WEBSITE DESIGN</button>
                <button className="nav-btn nav-btn-blue">GET A QUOTE</button>
            </div>

            <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
                <span className={isMobileMenuOpen ? "open" : ""}></span>
            </div>
        </header>
    );
}




