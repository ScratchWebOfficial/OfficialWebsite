import React from "react";
import "../styles/WooCommerceSection.css";

import wooImage from "../assets/woo-hero.png";
import responsiveIcon from "../assets/responsive.png";
import openSourceIcon from "../assets/opensource.png";
import featuresIcon from "../assets/features.png";
import integrationIcon from "../assets/integration.png";
import exclusivityIcon from "../assets/exclusivity.png";
import securityIcon from "../assets/security.png";
import tick from "../assets/tick-orange.png";
import industryeducation from "../assets/industry-education.png";
import industrytransportation from "../assets/industry-transportation.png";
import industryfinance from "../assets/industry-finance.png";
import industrymedia from "../assets/industry-media.png";
import industryhealthcare from "../assets/industry-healthcare.png";

const WooCommerceSection = () => {
    const cards = [
        {
            icon: responsiveIcon,
            title: "Fully Responsive",
            desc: "Our PHP & MySQL web development solutions spell seamless accessibility across a multitude of devices i.e. desktop computers, laptops, mobile phones, etc.",
        },
        {
            icon: openSourceIcon,
            title: "Open-Source",
            desc: "WooCommerce is open-source and maintained by experts, giving developers complete freedom to modify and update every aspect of your eCommerce store.",
        },
        {
            icon: featuresIcon,
            title: "Variety of Features",
            desc: "WooCommerce provides all features needed for a scalable eCommerce site – from listing products to payments and more, both physical and digital.",
        },
        {
            icon: integrationIcon,
            title: "Instant Integration",
            desc: "WooCommerce can be integrated easily with almost any site to boost sales, add banners, product lists, and pricing with zero hassle.",
        },
        {
            icon: exclusivityIcon,
            title: "Exclusivity",
            desc: "Hire our WooCommerce developers to build a custom E-commerce site with unique features not restricted by third-party platforms.",
        },
        {
            icon: securityIcon,
            title: "Security",
            desc: "With security from Sucuri.net and regular updates, WooCommerce provides a robust and secure platform for your eCommerce business.",
        },
    ];

    const services = [
        {
            title: "Payment Gateways",
            desc: "Our WooCommerce development company provides the benefit of securing your payments through the inclusion of multiple payment gateways. As a result, your customers can make safe and secure transactions through your website portal without hassle.",
        },
        {
            title: "Free Domain Name",
            desc: "When you plan to grow your business through an eCommerce website, you need to have an attractive domain name to recall the same and come back for more purchases quickly. Our team of the best WooCommerce developers will make it a reality for you.",
        },
        {
            title: "Website Customization",
            desc: "Customization is crucial if you want customers to come to your eCommerce site. Our WooCommerce development agency takes the entire responsibility of customizing features for your eCommerce store so that you stay ahead of your competition as far as sales are concerned.",
        },
        {
            title: "Multiple Layers of Caching",
            desc: "Our Woo experts invest time and effort to make sure that you earn as much profit as possible from your site. To ensure the same, they optimize your site so that they function smoothly without any hiccups.",
        },
        {
            title: "REST API Integration",
            desc: "Our WooCommerce development company strives to maintain every section of your online eCommerce store with the help of API technology. We also perform integral functions like building reports, creating folders, managing products, and updating product lists through this process.",
        },
        {
            title: "Save Time And Money",
            desc: "Completing your projects on time is an utmost priority for our WooCommerce expert developer, which is why we constantly analyze the progress of your site development so that we can hire new developers if your project demands so.",
        },
    ];

    return (
        <div className="woo-section-wrapper">
            {/* Hero Section */}
            <div className="woo-hero-section">
                <div className="woo-left">
                    <h1>
                        <span className="blue-text">Let Your Business Excel</span><br />
                        With Woo-Commerce<br />
                        Development
                    </h1>
                    <p>
                        Understanding your need, our Woo-Commerce developers will build you web or hybrid mobile apps,
                        which boast of robustness & amazing UX!
                    </p>
                    <button className="woo-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="woo-right">
                    <img src={wooImage} alt="WooCommerce Illustration" />
                </div>
            </div>

            {/* Why WooCommerce Ideal Section */}
            <div className="woo-ideal-section">
                <h2>
                    <span className="blue-text">Why Is</span> WooCommerce Ideal?
                </h2>
                <hr className="woo-underline" />
                <div className="woo-ideal-grid">
                    {cards.map((card, index) => (
                        <div className="woo-ideal-card" key={index}>
                            <img src={card.icon} alt={card.title} />
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                            <a href="#" className="woo-discover">Discover More</a>
                        </div>
                    ))}
                </div>
                <button className="woo-btn">SCHEDULE A MEETING</button>
            </div>

            {/* WooCommerce Services Section */}
            <div className="woo-services-section">
                <h2>
                    <span className="blue-text">Here Is A List Of</span> WooCommerce Development Services We Excel At
                </h2>
                <div className="woo-services-grid">
                    {services.map((service, index) => (
                        <div className="woo-service-card" key={index}>
                            <img src={tick} alt="icon" />
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <a href="#" className="woo-explore">Explore More</a>
                        </div>
                    ))}
                </div>
                <button className="woo-btn">WANNA TALK? FIX A TIME!</button>
            </div>
            {/* Industries We Have Served Section */}
            <div className="woo-industries-section">
                <h2><span className="blue-text">Industries</span> We Have Served To Date</h2>
                <hr className="woo-industries-underline" />
                <div className="woo-industries-grid">
                    <div className="woo-industry-card">
                        <img src={industryeducation} alt="Education" />
                        <p>Education</p>
                    </div>
                    <div className="woo-industry-card">
                        <img src={industrytransportation} alt="Transportation" />
                        <p>Transportation</p>
                    </div>
                    <div className="woo-industry-card">
                        <img src={industryfinance} alt="Finance" />
                        <p>Finance</p>
                    </div>
                    <div className="woo-industry-card">
                        <img src={industrymedia} alt="Media & Entertainment" />
                        <p>Media & Entertainment</p>
                    </div>
                    <div className="woo-industry-card">
                        <img src={industryhealthcare} alt="Healthcare" />
                        <p>Healthcare</p>
                    </div>
                </div>
            </div>
            {/* How Can You Benefit Section */}
            <div className="woo-benefit-section">
                <h2>
                    <span className="blue-text">How Can You Benefit By</span> Associating With Wordsystech?
                </h2>

                <div className="woo-benefit-grid">
                    {[
                        {
                            title: "Startups",
                            desc: "Our WooCommerce expert will be at your service from the very early stages of business development. We are going to amplify the quality of your experience while building a business. We will assist you in creating your idea, all through design and development, up until product launches and business scaling.",
                        },
                        {
                            title: "Small-Scale Businesses",
                            desc: "Small-scale businesses must create a specific impression and maintain it. So we assign top developers of our WooCommerce development agency for the job to make sure that you get the best service possible and your business grows even further.",
                        },
                        {
                            title: "Large-Scale Enterprises",
                            desc: "If you own an enterprise, you are already stable in your business. Your priorities in this stage of business development are process automation and profit earning so that you can maintain the scale of your business. Our WooCommerce development company will provide you solutions, which will help you constantly grow at a steady pace.",
                        },
                        {
                            title: "Software Development Companies",
                            desc: "Software is the sector our WooCommerce developers excel at. We have an array of highly skilled developers who will take full responsibility for your software development process. Our WooCommerce development service involves using top-level tools to create software that is of the best quality.",
                        },
                    ].map((item, idx) => (
                        <div className="woo-benefit-card" key={idx}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <button className="woo-btn">WANNA TALK? FIX A TIME!</button>
            </div>

        </div>
    );
};

export default WooCommerceSection;
