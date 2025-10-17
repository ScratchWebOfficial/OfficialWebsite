import React, { useState } from "react";
import "../styles/AndroidSection.css";
import androidHeroImage from "../assets/androidhero.png";
import androidServiceIcon from "../assets/androidservice.png";

import javaImg from "../assets/java1.png";
import xmlImg from "../assets/xml.png";
import sdkImg from "../assets/androidsdk.png";
import kotlinImg from "../assets/kotlin.png";
import jsImg from "../assets/javascript1.png";
import studioImg from "../assets/androidstudio.png";
import education from "../assets/education.png";
import tra from "../assets/transportation.png";
import finance from "../assets/finance.png";
import media from "../assets/media.png";
import hea from "../assets/healthcare.png";
import salonAppImg from "../assets/salona.png";
import ecommerceAppImg from "../assets/ecommerceapp1.png";
import foodDeliveryImg from "../assets/fooddelivery.png";

import {
    FaHeart,
    FaShieldAlt,
    FaVial,
    FaCompressAlt,
    FaPuzzlePiece,
    FaCoins,
} from "react-icons/fa";

const androidBenefits = [
    { icon: <FaHeart />, title: "Immensely Smooth", desc: "A skilled Android developer only needs knowledge about Kotlin or Java. The UI and development experience are straightforward and smooth." },
    { icon: <FaShieldAlt />, title: "Top-Notch Security", desc: "Android apps can be built with robust security measures, offering a stable and reliable platform." },
    { icon: <FaVial />, title: "Easy Testing", desc: "With a flexible emulator and debugging tools, testing Android apps becomes more streamlined and efficient." },
    { icon: <FaCompressAlt />, title: "Tiny Size", desc: "Android apps can be optimized for smaller APK sizes using modularization and proper architecture." },
    { icon: <FaPuzzlePiece />, title: "Specialized Integration", desc: "Android offers flexibility and integration capabilities across services, APIs, and hardware components." },
    { icon: <FaCoins />, title: "Cost-Effective", desc: "The Android SDK is free, and apps can be deployed and monetized easily on Google Play." },
];

const androidServices = [
    { title: "Custom-Built Apps", description: "Hire dedicated Android developers from Wordsys Tech to get user-friendly apps, custom-built in a quicker turnaround time!" },
    { title: "Impressive UI/UX", description: "Using a power-packed combination of good UI/UX design & great functionalities, our Android developers shall build intuitive & robust applications." },
    { title: "Thorough Maintenance", description: "Hire Android application developers from Wordsys Tech for optimizing the overall performance of your mobile app." },
    { title: "Extension of Features", description: "Our developers have adequate expertise in integrating third-party APIs for extending your app’s features." },
    { title: "Thorough Testing", description: "Upon rigorous testing, our Android developers ensure that your mobile apps are devoid of bugs and glitches." },
    { title: "App Migration", description: "We provide mobile app migration solutions to help your app transition smoothly to a new platform." },
];

const caseStudies = [
    { img: salonAppImg, title: "Online Salon App", desc: "As far as online services go, more and more people are striving to look for the most convenient option. A salon is a place that most people go to periodically for a variety of purposes." },
    { img: ecommerceAppImg, title: "E-Commerce App", desc: "A next-gen mobile app for seamless online shopping, cart management, and secure transactions. Ideal for scaling online retail operations." },
    { img: foodDeliveryImg, title: "Food Delivery App", desc: "Connects users with nearby restaurants, lets them order food and track delivery in real time. Highly optimized for performance and UX." },
];

const AndroidSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
    };

    const current = caseStudies[currentIndex];

    return (
        <>
            {/* Hero Section */}
            <div className="android-hero-section">
                <div className="android-hero-left">
                    <h1><span className="highlight">Android</span><br />Developers</h1>
                    <p>On a full-time or even hourly basis – to get robust & feature-packed mobile applications.</p>
                    <button className="android-hero-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="android-hero-right">
                    <img src={androidHeroImage} alt="Android Development" />
                </div>
            </div>

            {/* Benefits */}
            <div className="android-benefits-section">
                <h2><span className="blue-text">Benefits Of Developing</span> Android Applications</h2>
                <div className="underline"></div>
                <div className="android-benefits-grid">
                    {androidBenefits.map((benefit, idx) => (
                        <div key={idx} className="android-benefit-card">
                            <div className="android-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.desc}</p>
                            <a href="#">Discover More</a>
                        </div>
                    ))}
                </div>
                <div className="android-benefits-cta">
                    <button className="android-hero-btn">SCHEDULE A MEETING</button>
                </div>
            </div>

            {/* Services */}
            <div className="android-services-section">
                <h2><span className="blue-text">Services</span> We Provide</h2>
                <div className="underline"></div>
                <div className="android-services-grid">
                    {androidServices.map((service, idx) => (
                        <div key={idx} className="android-service-card">
                            <img src={androidServiceIcon} alt="Service Icon" className="android-service-icon" />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="#">Get in touch</a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technologies */}
            <div className="android-techstack-section">
                <h2><span className="blue-text">Android Technologies</span> We Are Working With</h2>
                <div className="underline"></div>
                <div className="android-techstack-grid">
                    {[javaImg, xmlImg, sdkImg, kotlinImg, jsImg, studioImg].map((img, idx) => (
                        <div key={idx} className="android-tech-card">
                            <img src={img} alt="tech" />
                        </div>
                    ))}
                </div>
                <div className="android-techstack-cta">
                    <button className="android-hero-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>

            {/* Industries */}
            <div className="android-industries-section">
                <h2><span className="blue-text">Industries</span> We Have Served To Date</h2>
                <div className="underline"></div>
                <div className="android-industries-grid">
                    {[{img: education, title: 'Education'}, {img: tra, title: 'Transportation'}, {img: finance, title: 'Finance'}, {img: media, title: 'Media & Entertainment'}, {img: hea, title: 'Healthcare'}].map((industry, idx) => (
                        <div key={idx} className="android-industry-card">
                            <img src={industry.img} alt={industry.title} />
                            <p>{industry.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rely Section */}
            <div className="android-rely-section">
                <h2><span className="blue-text">Why Should You</span> Rely On Us?</h2>
                <div className="underline"></div>
                <div className="android-rely-grid">
                    {[
                        {
                            title: "Power Up Your Project",
                            desc: "Backed by a tech cognizance & an understanding of the current industry status quo..."
                        },
                        {
                            title: "Grow A Small Business",
                            desc: "To be a pioneer of success for your small business..."
                        },
                        {
                            title: "Foster Actionable Results",
                            desc: "Even an established brand needs an edge over its competitors..."
                        },
                        {
                            title: "In-House Resources",
                            desc: "Our Android developers will be at the forefront in being the binding force..."
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="android-rely-card">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="android-rely-btn-container">
                    <button className="android-hero-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>

            {/* Case Studies */}
            <div className="android-casestudy-section">
                <h2><span className="blue-text">Our Recent</span> Case Studies</h2>
                <div className="underline"></div>
                <div className="android-casestudy-wrapper">
                    <div className="android-casestudy-arrow left" onClick={handlePrev}>&#8249;</div>
                    <div className="android-casestudy-card">
                        <div className="android-casestudy-image">
                            <img src={current.img} alt={current.title} />
                        </div>
                        <div className="android-casestudy-content">
                            <h3>{current.title}</h3>
                            <div className="small-underline"></div>
                            <p>{current.desc}</p>
                          
                        </div>
                    </div>
                    <div className="android-casestudy-arrow right" onClick={handleNext}>&#8250;</div>
                </div>
            </div>
        </>
    );
};

export default AndroidSection;
