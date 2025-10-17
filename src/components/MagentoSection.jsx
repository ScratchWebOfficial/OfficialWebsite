import React from "react";
import "../styles/MagentoSection.css";

import magentoHeroImg from "../assets/magento-hero.png";
import magentoLogo from "../assets/magento-logo.png";
import magentoIcon from "../assets/magento-icon.png";
import magentoicon from "../assets/magentoicon.png";

const MagentoSection = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="magento-hero-section">
                <div className="magento-left">
                    <h1>
                        <span className="blue-text">Hire The Best</span><br />
                        Magento Developers
                    </h1>
                    <p>
                        Boost your online business with Magento-based E‑commerce development services,
                        custom‑tailored by our expert and certified Magento developers!
                    </p>
                    <button className="magento-btn" aria-label="Schedule a meeting">
                        SCHEDULE A MEETING
                    </button>
                </div>
                <div className="magento-right">
                    <img src={magentoHeroImg} alt="Illustration showing Magento development" />
                </div>
            </div>

            {/* Reasons Section */}
            <div className="magento-reasons-section">
                <div className="magento-logo-side">
                    <img src={magentoLogo} alt="Magento Logo" />
                </div>
                <div className="magento-reasons-content">
                    <h2>
                        <span className="blue-text">Reasons Why You Should</span> Pick Magento<br />
                        Web Development
                    </h2>
                    <hr className="blue-line" />
                    <ul>
                        <li>Its visual‑based & intuitive page editor makes it customizable</li>
                        <li>Mobile responsive configuration – another major perk!</li>
                        <li>This open‑source platform spells unmatchable SEO efficiency</li>
                        <li>Multiplatform integration becomes easier with Magento!</li>
                        <li>It comes with customizable security permissions</li>
                        <li>Easy e‑commerce & database integration is guaranteed</li>
                        <li>User‑friendly CMS streamlines site management</li>
                    </ul>
                    <button className="magento-talk-btn" aria-label="Fix a time to talk">
                        WANNA TALK? FIX A TIME!
                    </button>
                </div>
            </div>

            {/* Competence Section */}
            <div className="magento-competence-section">
                <h2>
                    Let Our <span className="blue-text">Competence Fulfill</span> Your Commands
                </h2>
                <div className="magento-competence-grid">
                    {["Customized Web Development", "Premium E‑commerce Solutions", "Hassle‑Free Migration", "Customized Extension", "Seamless API Integration", "B2B Site Development"].map((title, i) => (
                        <div key={i} className="magento-competence-card">
                            <img src={magentoIcon} alt="" aria-hidden="true" />
                            <h3>{title}</h3>
                            <p>{["As India’s fastest‑growing Magento development company, we help enhance your brand with SEO‑friendly features, product catalogs, and more.",
                                "Our certified developers craft fully optimized online stores to boost sales and engagement.",
                                "Seamlessly migrate from Magento 1 to 2 with zero downtime, SEO preservation, and data integrity.",
                                "We build tailored modules, plugins & inventory systems to maximize conversions and efficiency.",
                                "Integrate third‑party APIs for advanced features—payment gateways, shipping, analytics & more.",
                                "Develop secure, scalable B2B portals with order customization, channel integration, and complex workflows."][i]}</p>
                        </div>
                    ))}
                </div>
                <div className="magento-competence-btn-container">
                    <button className="magento-competence-btn" aria-label="Fix a time to talk">
                        WANNA TALK? FIX A TIME!
                    </button>
                </div>

                {/* What Makes Us Section */}
                <div className="magento-worth-section">
                    <h2>
                        <span className="blue-text">What Makes Us</span> Worth Your Time & Trust?
                    </h2>
                    <hr className="blue-line" />
                    <p className="magento-worth-subtext">
                        Let our Magento E-commerce development services help you take your online store to another stature with perks
                        i.e. optimum security, easy product management, enhanced UI, several payment gateway options, streamlined order
                        processing, improved shipping methods, etc.
                    </p>

                    <div className="magento-worth-grid">
                        {["Efficient Team", "Customized Solutions", "Scalability Ensured", "Upgraded Set-Up", "Seamless Workflow", "Smooth Project Management", "Search-Engine Friendly Coding", "Affordability Ensured"].map((title, i) => (
                            <div className="worth-card" key={i}>
                                <img src={magentoicon} alt="Icon" />
                                <h3>{title}</h3>
                                <p>{["Our in-house Magento experts stick to strict NDAs to protect your data confidentiality, too!",
                                    "We ensure transparency and provide you with custom-tailored business-driven designs!",
                                    "Magento specialists fulfill your needs with scalable & robust solutions!",
                                    "We ensure to have a highly upgraded workspace infrastructure!",
                                    "Magento developers integrate an AI-driven approach to foster efficiency in workflow!",
                                    "We align project strategies to keep your project away from complexities!",
                                    "We guarantee search engine friendly & mobile responsive coding!",
                                    "Get full-customized Magento solutions without exceeding your budget!"][i]}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Hire Our Magento Developers Section */}
                <div className="magento-hire-section">
                    <h2>
                        Why <span className="blue-text">Hire Our</span> Magento Developers?
                    </h2>
                    <div className="magento-hire-grid">
                        {["Power Up Your Project", "Grow A Small Business", "Foster Actionable Results", "In-House Resources"].map((title, i) => (
                            <div className="magento-hire-card" key={i}>
                                <img src={magentoicon} alt={title} />
                                <h3>{title}</h3>
                                <p>{["Staying abreast with the technological advancements, our Magento certified developers shall be instrumental in making your project visions emerge with flying colors – right from the stage of ideation to design to development to management & the final execution!",
                                    "To be a pioneer of success for your small business, we shall nestle a crew of experienced Magento website designers for scaling your products, upgrading their overall efficacies with a constant maintenance & the inclusion of edgy features, functionalities et al!",
                                    "Even an established brand needs an edge over its competitors! Our Magento web development experts will help your brand scale better heights with premium yet affordable solutions, via which, you can bring more actionable insights in your enterprise operation, management, etc.",
                                    "Our Magento E-commerce development experts will be at the forefront in being the binding force for supporting your in-house business resources & building more efficient tech units to quell your enterprise needs, keeping a tab on your visions, goals & intended audiences!"][i]}</p>
                            </div>
                        ))}
                    </div>
                    <button className="magento-hire-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>
        </>
    );
};

export default MagentoSection;
