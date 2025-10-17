import React from "react";
import "../styles/FlutterSection.css";
import flutterHeroImage from "../assets/flutterhero.png";
import { FaHeart, FaExchangeAlt, FaSync, FaCubes, FaCompressAlt, FaCode } from "react-icons/fa";
import flutterserviceicon from "../assets/g1.png";
import flutterserviceico from "../assets/g2.png";
import flutterserviceic from "../assets/g3.png";
import flutterservicei from "../assets/g4.png";
import education from "../assets/education.png";
import tra from "../assets/transportation.png";
import finance from "../assets/finance.png";
import media from "../assets/media.png";
import hea from "../assets/healthcare.png";

const FlutterSection = () => {
    const benefits = [
        { icon: <FaHeart />, title: "It is Open Source", desc: "Flutter is a development toolkit by Google, which is used to develop software and is open source in nature." },
        { icon: <FaExchangeAlt />, title: "Cross-Platform", desc: "Flutter is a framework, which runs on multiple platforms with the same seamlessness." },
        { icon: <FaSync />, title: "Instant Reload", desc: "Fast reload is a feature that is exclusive to Flutter. The instant reloads feature allows developers to see changes immediately." },
        { icon: <FaCubes />, title: "Widgets Are Customizable", desc: "The main reason developers love Flutter is that it comes with rich and attractive widgets that are customizable." },
        { icon: <FaCompressAlt />, title: "Simplification", desc: "Flutter uses Dart, which simplifies programming and enables fast rendering and high-performance apps." },
        { icon: <FaCode />, title: "Shared Code", desc: "Write once, deploy anywhere! Flutter lets you write a single set of code and use it across iOS and Android platforms." },
    ];

    const services = [
        { title: "Flutter Development", desc: "When you choose to develop your Flutter application, our Flutter app development company is an ideal choice." },
        { title: "Top-Notch iOS Development", desc: "If you hire Flutter app developers from us, you get access to one of the best services possible." },
        { title: "Improved Chat Feature", desc: "Our Flutter app development company develops chat applications for both your mobile and web applications." },
        { title: "Consultation", desc: "In addition to Flutter app development services, we also provide Flutter consulting services." },
        { title: "Hybrid Flutter Development", desc: "Our Flutter developers are experts in employing technologies like accelerometer and geolocation." },
        { title: "Migration", desc: "Our Flutter development company will make sure that you can smoothly migrate into the Flutter environment." },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="flutter-hero-section">
                <div className="flutter-left">
                    <h1>
                        <span className="blue-text">Hire Skilled</span><br />
                        Flutter Developers From Us
                    </h1>
                    <p>
                        Establish A Strong Presence Online With Custom Flutter Development Services,
                        Encasing Path-Breaking Technologies
                    </p>
                    <button className="flutter-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="flutter-right">
                    <img src={flutterHeroImage} alt="Flutter Illustration" />
                </div>
            </div>

            {/* Benefits Section */}
            <div className="flutter-benefits-section">
                <h2><span className="blue-text">Benefits Of</span> Choosing Flutter App Development Services</h2>
                <div className="flutter-benefits-grid">
                    {benefits.map((item, idx) => (
                        <div key={idx} className="benefit-card">
                            <div className="benefit-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                          
                        </div>
                    ))}
                </div>
                <div className="benefit-button-wrapper">
                    <button className="flutter-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>

            {/* Services Section */}
            <div className="flutter-services-section">
                <h2><span className="blue-text">Flutter Services</span> That We Offer</h2>
                <div className="flutter-services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="flutter-service-card">
                            <div className="service-icon">
                                <img src={flutterserviceicon} alt="Service Icon" />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                         
                        </div>
                    ))}
                </div>
                <div className="service-button-wrapper">
                    <button className="flutter-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>

            {/* Industries Served Section */}
            <div className="flutter-industries-section">
                <h2><span className="blue-text">Industries</span> We Have Served To Date</h2>
                <div className="industry-grid">
                    <div className="industry-card"><img src={education} alt="Education" /><p>Education</p></div>
                    <div className="industry-card"><img src={tra} alt="Transportation" /><p>Transportation</p></div>
                    <div className="industry-card"><img src={finance} alt="Finance" /><p>Finance</p></div>
                    <div className="industry-card"><img src={media} alt="Media & Entertainment" /><p>Media & Entertainment</p></div>
                    <div className="industry-card"><img src={hea} alt="Healthcare" /><p>Healthcare</p></div>
                </div>
            </div>

            {/* Benefit By Associating Section */}
            <div className="flutter-benefitbywordsystech-section">
                <h2>
                    <span className="blue-text">How Can You Benefit</span> By Associating With Wordsystech?
                </h2>
                <div className="benefitbywordsystech-grid">
                    <div className="benefitbywordsystech-card">
                        <img src={flutterserviceicon} alt="Icon" />
                        <h3>Grow Your Start-Up</h3>
                        <p>
                            For a Start-Up, time is money. We will help you to flutter your way into a cost-effective way of building feature-rich mobile apps...
                        </p>
                    </div>
                    <div className="benefitbywordsystech-card">
                        <img src={flutterserviceico} alt="Icon" />
                        <h3>Boost Small Scale Business</h3>
                        <p>
                            As a small business owner, you will wear several hats. With Flutter app development services on the rise, we will render your high-quality app 10× easily...
                        </p>
                    </div>
                    <div className="benefitbywordsystech-card">
                        <img src={flutterserviceic} alt="Icon" />
                        <h3>For Your Large-Scale Business</h3>
                        <p>
                            For a large-scale business, enterprise apps are needed to run the day-to-day operations smoothly. Hire our flutter developers to create seamless apps...
                        </p>
                    </div>
                    <div className="benefitbywordsystech-card">
                        <img src={flutterservicei} alt="Icon" />
                        <h3>For Your Software Development Company</h3>
                        <p>
                            As a software development company, you need to hire top flutter developers. Our team is skilled in making layout-compatible native apps across all platforms...
                        </p>
                    </div>
                </div>
                <div className="benefitbywordsystech-button">
                    <button className="flutter-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>
        </>
    );
};

export default FlutterSection;
