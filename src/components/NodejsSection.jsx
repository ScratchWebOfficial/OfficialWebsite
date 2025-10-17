import React from "react";
import "../styles/NodejsSection.css";
import nodeHeroImage from "../assets/nodejs-hero.png";
import nodeLogo from "../assets/nodejs-orange.png";
import featuresIcon1 from "../assets/f1.png";
import cakephp from "../assets/cakephp0.png";
import sym from "../assets/symfony0.png";
import ter from "../assets/codeigniter0.png";
import vel from "../assets/laravel0.png";
import ii from "../assets/yii0.png";
import zen from "../assets/zend0.png";
import ed from "../assets/education.png";
import tr from "../assets/transportation.png";
import fi from "../assets/finance.png";
import me from "../assets/media.png";
import he from "../assets/healthcare.png";
import {
    FaCogs,
    FaStream,
    FaProjectDiagram,
    FaComments,
    FaBolt,
    FaUserCheck,
} from "react-icons/fa";

const NodejsSection = () => {
    const serviceCards = [
        {
            title: "Custom App Development",
            desc: "Being led with a fortitude that stems from our expertise in core PHP, Object Oriented Programming, Model View Controller, etc., our PHP developers can deliver you bespoke & dynamic web apps. Working across some of the most power-packed frameworks i.e. CodeIgniter, CakePHP, etc., we can build robust & intuitive apps for your enterprise!",
        },
        {
            title: "Social Networking Apps",
            desc: "As a leading PHP development company, we emphasize harnessing the cutting-edge Content Management Systems to build your website. To add an edge to your website's look & feel, we shall be hands on in harnessing the cutting-edge CMS technologies i.e. Drupal, Magento, WordPress & more!",
        },
        {
            title: "API Integration & Developmentt",
            desc: "Hire dedicated PHP developers from Wordsys Tech for enhancing or even extending the functionalities & overall efficacies of your web applications, mobile applications – both Android & iOS – etc. with the integration of well-documented, stable & fully secure Application Programming Interfaces or APIs.",
        },
        {
            title: "E-Commerce Development",
            desc: "Our PHP developers are skilled enough to assist you with a constant support & maintenance of your app & websites. We credit our PHP programmers to fulfill all your needs pertaining to both ongoing & demand-centric maintenance of your site, web applications & mobile apps.",
        },
        {
            title: "Support & Maintenance",
            desc: "Quality being the pillar of our PHP development solutions, we aim to be instrumental in custom building cloud-native applications for your business, leveraging the premium PHP tools. Hire PHP developers from Wordsys Tech to get unmatchable assistance in deploying, scaling or managing cloud-native apps of different sorts!",
        },
        {
            title: "System Architecture Development",
            desc: "Being the forerunner among India’s top-rated PHP development companies, we have an inkling of the status quo of new-age development. Owing to this, our PHP experts can significantly contribute in delivering customized consultation for multiple verticals of web or app design, feature implementation, architecture, development, management & more!",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="nodejs-hero-section">
                <div className="nodejs-left">
                    <h1>
                        <span className="blue-text">Premium Node.Js</span><br />
                        Development Company
                    </h1>
                    <p>
                        Interspersing your visions with our customized Node js development
                        services, we shall build you feature-packed, dynamic & secure mobile
                        & web apps.
                    </p>
                    <button className="nodejs-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="nodejs-right">
                    <img src={nodeHeroImage} alt="NodeJS Illustration" />
                </div>
            </div>

            {/* Benefits Section */}
            <div className="nodejs-benefits-section">
                <div className="nodejs-benefits-container">
                    <div className="nodejs-benefits-left">
                        <img src={nodeLogo} alt="NodeJS Logo" />
                    </div>
                    <div className="nodejs-benefits-right">
                        <h2>
                            <span className="blue-text">The Core Benefits Of</span> Node.js Development Services
                        </h2>
                        <div className="nodejs-benefits-grid">
                            <div className="benefit-card"><FaCogs className="benefit-icon" /><h4>Seamless Input/Output Operation</h4><p>Node.js can streamline unsynchronized input/output operations for faster data handling.</p></div>
                            <div className="benefit-card"><FaStream className="benefit-icon" /><h4>Seamless Data Streaming</h4><p>Ideal for audio/video uploads and HTTP responses with stream processing.</p></div>
                            <div className="benefit-card"><FaProjectDiagram className="benefit-icon" /><h4>Microservice Architecture</h4><p>Build modular, scalable, and agile apps using microservices architecture.</p></div>
                            <div className="benefit-card"><FaComments className="benefit-icon" /><h4>More Impactful Interaction</h4><p>Support for WebSocket/WebRTC enables powerful real-time communication.</p></div>
                            <div className="benefit-card"><FaBolt className="benefit-icon" /><h4>Lightweight Yet Efficient</h4><p>Fast and efficient apps with minimal server overhead.</p></div>
                            <div className="benefit-card"><FaUserCheck className="benefit-icon" /><h4>Better User Experience</h4><p>Ensures faster UI interactions and better customer engagement.</p></div>
                        </div>
                        <div className="benefits-btn-wrapper">
                            <button className="benefits-btn">WANNA TALK? FIX A TIME!</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Cards */}
            <div className="php-highlights-section">
                <h2><span className="blue-text">Our Services </span>In A Nutshell</h2>
                <hr className="php-highlight-underline" />
                <div className="php-highlight-grid">
                    {serviceCards.map((card, index) => (
                        <div className="php-highlight-card" key={index}>
                            <img src={featuresIcon1} alt="icon" />
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                            <a href="#">Explore More</a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Frameworks Section */}
            <div className="php-frameworks-section">
                <h2><span className="blue-text">The Different PHP frameworks</span> We Work With</h2>
                <hr className="php-frameworks-underline" />
                <div className="php-frameworks-grid">
                    {[cakephp, sym, ter, vel, ii, zen].map((img, i) => (
                        <div className="framework-card" key={i}><img src={img} alt={`Framework ${i}`} /></div>
                    ))}
                </div>
                <div className="php-frameworks-btn-container">
                    <button className="symfony-btn">WANT TO TALK? SAY HI!</button>
                </div>
            </div>

            {/* Industries Served */}
            <div className="php-industries-section">
                <h2><span className="blue-text">Industries</span> We Have Served To Date</h2>
                <hr className="php-industries-underline" />
                <div className="php-industries-grid">
                    {[{ img: ed, name: "Education" }, { img: tr, name: "Transportation" }, { img: fi, name: "Finance" }, { img: me, name: "Media & Entertainment" }, { img: he, name: "Healthcare" }].map((item, i) => (
                        <div className="industry-card" key={i}>
                            <img src={item.img} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Should You Rely On Us */}
            <div className="ionic-rely-section">
                <h2><span className="blue-text">Why Should You</span> Rely On Us?</h2>
                <div className="rely-grid">
                    {[
                        "Accomplish Your Project",
                        "Fuel A Small Business",
                        "Bring Actionable Results",
                        "In-House Resources"
                    ].map((title, idx) => (
                        <div className="rely-card blue-card" key={idx}>
                            <h3>{title}</h3>
                            <p>{[
                                "Backed by a tech cognizance & an understanding of the current industry status quo, our Ionic developers can turn your project visions into a reality – right from the stage of ideation to design to development to maintenance & the final execution!",
                                "To be a pioneer of success for your small business, we shall nestle a crew of skilled & experienced Ionic app developers for scaling your products, upgrading their overall efficacies with a constant maintenance & the inclusion of edgy features, functionalities et al!",
                                "Even an established brand needs an edge over its competitors! Hire Ionic app development experts from Wordsys Tech to help your business scale better heights with premium yet affordable solutions, via which, you can bring more actionable insights in your enterprise operation, management & more!",
                                "Our Ionic developers will be at the forefront in being the binding force for supporting your in-house business resources & building more efficient tech units to quell your enterprise needs, keeping a tab on your visions, goals, budget & intended audiences!"
                            ][idx]}</p>
                        </div>
                    ))}
                </div>
                <div className="rely-button">
                    <button className="flutter-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>
        </>
    );
};

export default NodejsSection;
