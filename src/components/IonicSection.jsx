import React from "react";
import "../styles/IonicSection.css";
import {
    FaHeart,
    FaExchangeAlt,
    FaSync,
    FaCubes,
    FaCompressAlt,
    FaCode,
} from "react-icons/fa";
import ionicImage from "../assets/ionic-hero.png";
import ionic from "../assets/ionic-icon1.png";

const IonicSection = () => {
    const benefits = [
        {
            icon: <FaHeart />,
            title: "Premium UI Components",
            desc: "Leveraging Ionic’s intuitive UI, we can build robust cross-platform apps & upgrade your iOS, Android or web apps with edgy native device functionalities!",
        },
        {
            icon: <FaExchangeAlt />,
            title: "Single Codebase",
            desc: "With Ionic, there’s no need to rewrite codes for multiple platforms. Hire Ionic developers to get impressive apps in lesser cost & effort.",
        },
        {
            icon: <FaSync />,
            title: "Seamless Development",
            desc: "Exploring a powerful feature called Ionic Lab, our developers bring ease & agility in app development, deployment, testing, automatic update, etc.",
        },
        {
            icon: <FaCubes />,
            title: "Hassle-Free Maintenance",
            desc: "Deploying CSS, HTML, etc. within coding, our Ionic app developers will streamline the process of maintaining or even upgrading an app.",
        },
        {
            icon: <FaCompressAlt />,
            title: "Cordova Plugins",
            desc: "Cordova plugins & extensions offer developers an access to different native APIs. This helps them build fully customized & highly premium apps",
        },
        {
            icon: <FaCode />,
            title: "Shorter Turnaround",
            desc: "Quicker turnaround time – another perk of Ionic! Ionic reigns supreme, when it comes to delivering premium apps within a short time span.",
        },
    ];

    return (
        <div className="ionic-hero-section">
            {/* Hero Section */}
            <div className="ionic-left">
                <h1>
                    <span className="blue-text">Hire The Best</span> <br />
                    Ionic App Developers
                </h1>
                <p>
                    With our experienced & skilled Ionic app development experts, you can
                    get robust & feature-packed hybrid mobile apps!
                </p>
                <button className="ionic-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="ionic-right">
                <img src={ionicImage} alt="Ionic Illustration" />
            </div>

            {/* Benefits Section */}
            <div className="flutter-benefits-section">
                <h2>
                    <span className="blue-text">Benefits Of</span> Choosing Flutter App
                    Development Services
                </h2>
                <div className="flutter-benefits-grid">
                    {benefits.map((item, idx) => (
                        <div key={idx} className="benefit-card">
                            <div className="benefit-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <a href="#">Discover More</a>
                        </div>
                    ))}
                </div>
                <div className="benefit-button-wrapper">
                    <button className="flutter-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>

            {/* Services Section */}
            <div className="ionic-services-section">
                <h2>
                    <span className="blue-text">Our Ionic</span> App Development Services
                </h2>
                <div className="ionic-services-grid">
                    {["Fully Customized Ionic Apps", "E-commerce Solutions", "A Seamless Migration", "A Thorough Support", "UI & UX Design", "A Hassle-Free Testing"].map((title, idx) => (
                        <div className="ionic-service-card" key={idx}>
                            <div className="service-icon">
                                <img src={ionic} alt="icon" />
                            </div>
                            <h3>{title}</h3>
                            <p>{
                                [
                                    "Understanding your business needs, our Ionic app developers will custom build user-engaging & user-friendly apps using CSS, NodeJS, HTML5, AngularJS & more!",
                                    "Hire Ionic developers to avail the best-in-class E-commerce development solutions – from mobile sites to custom plugins and multi-vendor solutions.",
                                    "We guarantee quick deployment, high security & seamless migration of legacy systems or E-commerce apps to the latest Ionic version.",
                                    "Get post-development maintenance – bug-tracking, code review, fault analysis & third-party support for robust Ionic apps.",
                                    "We design intuitive, brand-centric & device-agnostic UI using customized code, wireframes & sketches to match your vision.",
                                    "We ensure your app is bug-free with thorough testing & quality assurance at every stage of the Ionic development lifecycle.",
                                ][idx]
                            }</p>
                            <a href="#">Get in touch</a>
                        </div>
                    ))}
                </div>
                <div className="ionic-service-button-wrapper">
                    <button className="flutter-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>

            {/* Why Rely Section */}
            <div className="ionic-rely-section">
                <h2><span className="blue-text">Why Should You</span> Rely On Us?</h2>
                <div className="rely-grid">
                    {["Power Up Your Project", "Grow A Small Business", "Foster Actionable Results", "In-House Resources"].map((title, idx) => (
                        <div className="rely-card" key={idx}>
                            <h3>{title}</h3>
                            <p>{
                                [
                                    "Backed by a tech cognizance & an understanding of the current industry status quo, our Ionic developers can turn your project visions into a reality – right from the stage of ideation to design to development to maintenance & the final execution!",
                                    "To be a pioneer of success for your small business, we shall nestle a crew of skilled & experienced Ionic app developers for scaling your products, upgrading their overall efficacies with a constant maintenance & the inclusion of edgy features, functionalities et al!",
                                    "Even an established brand needs an edge over its competitors! Hire Ionic app development experts from Wordsys Tech to help your business scale better heights with premium yet affordable solutions, via which, you can bring more actionable insights in your enterprise operation, management & more!",
                                    "Our Ionic developers will be at the forefront in being the binding force for supporting your in-house business resources & building more efficient tech units to quell your enterprise needs, keeping a tab on your visions, goals, budget & intended audiences!",
                                ][idx]
                            }</p>
                        </div>
                    ))}
                </div>
                <div className="rely-button">
                    <button className="flutter-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>
        </div>
    );
};

export default IonicSection;
