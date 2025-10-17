import React, { useState } from "react";
import "../styles/IOSSection.css";
import iosHeroImage from "../assets/ioshero.png";
import { FaHeart, FaShieldAlt, FaVial, FaCompressAlt, FaPuzzlePiece, FaCoins } from "react-icons/fa";
import iosServiceIcon from "../assets/iosservice.png";
import swift from "../assets/swift.png";
import objectivec from "../assets/objectivec.png";
import xcode from "../assets/xcode.png";
import testflight from "../assets/testflight.png";
import javascript from "../assets/javascript.png";
import coredata from "../assets/coredata.png";
import education from "../assets/education.png";
import trans from "../assets/transportation.png";
import finance from "../assets/finance.png";
import media from "../assets/media.png";
import health from "../assets/healthcare.png";
import salonmockup from "../assets/salonmockup.png";
import hotelmockup from "../assets/hotelmockup.png";
import foodmockup from "../assets/foodmockup.png";

const IOSSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const caseStudies = [
        {
            image: salonmockup,
            title: "Online Salon App",
            description:
                "As far as online services go, more and more people are striving to look for the most convenient option. A salon is a place that most people go to periodically for a variety of purposes.",
        },
        {
            image: hotelmockup,
            title: "Hotel Booking App",
            description:
                "We developed a user-friendly hotel booking app with real-time availability, booking confirmation, and easy cancellations, targeting global users and boosting client revenue by 40%.",
        },
        {
            image: foodmockup,
            title: "Food Delivery Platform",
            description:
                "The app connects customers with local restaurants and delivery drivers. It ensures real-time order tracking, secure payment, and a seamless UX for busy users on the go.",
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1));
    };

    return (
        <div className="ios-hero-wrapper">
            {/* Hero Section */}
            <div className="ios-hero-section">
                <div className="ios-left">
                    <h1>
                        <span className="blue-text">IOS App</span><br />
                        <span className="dark-text">Development Company</span>
                    </h1>
                    <p>Establish A Strong Presence Online With Custom IOS Development Services, Encasing Path-Breaking Technologies</p>
                    <button className="ios-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="ios-right">
                    <img src={iosHeroImage} alt="iOS App Development Illustration" />
                </div>
            </div>

            {/* Benefits Section */}
            <div className="ios-benefits-section">
                <h2><span className="blue-text">Benefits Of Developing</span> iOS Applications</h2>
                <div className="underline"></div>
                <div className="ios-benefits-grid">
                    {[{ icon: <FaHeart />, title: "Immensely Smooth", desc: "A skilled iOS developer only needs knowledge about Swift and Xcode. The UI and development experience are straightforward and smooth." },
                    { icon: <FaShieldAlt />, title: "Top-Notch Security", desc: "iOS apps are built with industry-leading security, offering a stable and reliable platform for developers." },
                    { icon: <FaVial />, title: "Easy Testing", desc: "With fewer device variations, testing iOS apps is faster and more accurate compared to Android." },
                    { icon: <FaCompressAlt />, title: "Tiny Size", desc: "iOS apps have a smaller footprint and are easier to manage, often developed by a single skilled individual." },
                    { icon: <FaPuzzlePiece />, title: "Specialized Integration", desc: "iOS offers an exclusive, secure ecosystem with easy integration for certified developers." },
                    { icon: <FaCoins />, title: "Cost-Effective", desc: "SDK and essential tools are free for Mac users, reducing iOS development costs significantly." }].map((benefit, idx) => (
                        <div key={idx} className="ios-benefit-card">
                            <div className="ios-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.desc}</p>
                            
                        </div>
                    ))}
                </div>
                <div className="ios-benefits-cta">
                    <button className="ios-btn">SCHEDULE A MEETING</button>
                </div>
            </div>

            {/* Services Section */}
            <div className="ios-services-section">
                <h2><span className="blue-text">iOS Application Development</span> Services We Offer</h2>
                <div className="underline"></div>
                <div className="ios-services-grid">
                    {["Custom App Development", "Dedicated Developers", "Development And Deployment", "App Design", "App Maintenance", "iOS App Migration"].map((title, idx) => (
                        <div key={idx} className="ios-service-card">
                            <img src={iosServiceIcon} alt={`${title} Icon`} />
                            <h3>{title}</h3>
                            <p>{["Our expert iOS app developers are skilled enough to develop iOS applications based on your business needs. We use AI/ML, Blockchain, and IoT to build impressive apps.",
                                "Our iOS developers are dedicated and knowledgeable. They prioritize your project and ensure it's delivered before deadlines.",
                                "We ensure user-friendly iOS apps with effective algorithms. We manage the complete lifecycle until the app is fully developed and deployed.",
                                "We craft beautiful and functional iOS app designs that delight users and elevate brand identity.",
                                "We eliminate bugs and ensure your iOS app runs smoothly, even after deployment. Updates and support are ongoing.",
                                "We help migrate your apps to the iOS platform and guide you through converting older apps into updated iOS-compatible versions."][idx]}</p>
                            
                        </div>
                    ))}
                </div>
            </div>

            {/* Technology Stack */}
            <div className="ios-techstack-section">
                <h2>Our <span className="blue-text">iOS</span> Technology Stack</h2>
                <div className="underline"></div>
                <div className="ios-techstack-grid">
                    {[{ name: "", icon: swift }, { name: "", icon: objectivec }, { name: "", icon: xcode }, { name: "", icon: testflight }, { name: "", icon: javascript }, { name: "", icon: coredata }].map((tech, index) => (
                        <div key={index} className="ios-tech-card">
                            <img src={tech.icon} alt={tech.name} />
                            <h3>{tech.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="ios-techstack-btn">
                    <button className="ios-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>

            {/* Industries Served */}
            <div className="ios-industries-section">
                <h2><span className="blue-text">Industries</span> We Have Served To Date</h2>
                <div className="underline"></div>
                <div className="ios-industries-grid">
                    {[{ img: education, label: "Education" }, { img: trans, label: "Transportation" }, { img: finance, label: "Finance" }, { img: media, label: "Media & Entertainment" }, { img: health, label: "Healthcare" }].map((industry, idx) => (
                        <div key={idx} className="industry-card">
                            <img src={industry.img} alt={industry.label} />
                            <p>{industry.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefit With Wordsystech */}
            <div className="ios-benefitbywordsystech-section">
                <h2>How Can You <span className="blue-text">Benefit</span> By Associating With Wordsystech?</h2>
                <div className="ios-benefitbywordsystech-grid">
                    {["Startups", "Small-Scale Businesses", "Large-Scale Enterprises", "Software Development Companies"].map((title, idx) => (
                        <div key={idx} className="ios-benefitbywordsystech-card">
                            <h3>{title}</h3>
                            <p>{["Our team of the best iOS app developers will be at your service from the early stages of business development. We’ll help you in creating your idea, designing, and developing up until launch and business scaling.",
                                "Small businesses must create a specific impression. Our developers ensure you get the best service possible and your business grows further.",
                                "For stable enterprises, automation and earning profit are priorities. Our iPhone app company will provide you solutions to grow at a steady pace.",
                                "We offer top-level development services using cutting-edge tools. We’ll take full responsibility for delivering quality software for your clients."][idx]}</p>
                        </div>
                    ))}
                </div>
                <div className="ios-benefitbywordsystech-btn">
                    <button className="ios-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>

            {/* Case Study Section */}
            <div className="ios-casestudy-section">
                <h2><span className="blue-text">Our Recent</span> Case Studies</h2>
                <div className="underline"></div>
                <div className="ios-casestudy-slider">
                    <div className="arrow left" onClick={handlePrev}>&#8592;</div>
                    <div className="casestudy-card">
                        <div className="casestudy-left">
                            <img src={caseStudies[currentIndex].image} alt={caseStudies[currentIndex].title} />
                        </div>
                        <div className="casestudy-right">
                            <h3>{caseStudies[currentIndex].title}</h3>
                            <div className="line"></div>
                            <p>{caseStudies[currentIndex].description}</p>

                        </div>
                    </div>
                    <div className="arrow right" onClick={handleNext}>&#8594;</div>
                </div>
            </div>
        </div>
    );
};

export default IOSSection;
