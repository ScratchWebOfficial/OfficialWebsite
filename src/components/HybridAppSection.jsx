import React from "react";
import "../styles/HybridAppSection.css";
import hybridImage from "../assets/hybridapp.png"; // confirm image path
import hybridDevImg from "../assets/hybriddevbox.png";
import education from "../assets/education.png";
import tra from "../assets/transportation.png";
import finance from "../assets/finance.png";
import media from "../assets/media.png";
import hea from "../assets/healthcare.png";
import startupIcon from "../assets/startup.png";
import smallBizIcon from "../assets/smallbiz.png";
import enterpriseIcon from "../assets/enterprise.png";
import hubIcon from "../assets/hub.png";
import { FaChartBar, FaTruckMoving, FaSmileBeam, FaSearch } from "react-icons/fa";
import {
    FaHeart,
    FaWrench,
    FaUmbrellaBeach,
    FaUserTie,
    FaUsers,
    FaBookOpen,
} from "react-icons/fa";

const HybridAppSection = () => {
    const cards = [
        {
            icon: <FaHeart />,
            title: "Access to Experienced Professionals",
            text: "All our hybrid app development experts are equipped with more than three years of experience in app development.",
        },
        {
            icon: <FaWrench />,
            title: "Confidentiality",
            text: "Our NDA’s are strictly confidential. If you choose to create a hybrid team by hiring members from our cross-platform app development company.",
        },
        {
            icon: <FaUmbrellaBeach />,
            title: "No Hidden Charges",
            text: "Our hybrid app development company will never charge you for setting up a team with our skilled developers.",
        },
        {
            icon: <FaUserTie />,
            title: "Talented Project Manager",
            text: "When you decide on hiring a dedicated team of hybrid developers, you will receive the services of one of our skilled project managers.",
        },
        {
            icon: <FaUsers />,
            title: "Curated Team",
            text: "After you decide to hire a hybrid team from our cross-platform mobile app development company, we will assign developers.",
        },
        {
            icon: <FaBookOpen />,
            title: "Focused and Dedicated Developers",
            text: "The cross-platform mobile app developer you hire from us is immensely focused and dedicated.",
        },
    ];
    const hybridServices = [
        {
            title: "Multi-Platform Application Development",
            description:
                "Our talented developers are proficient in creating applications on a variety of frameworks. Our services include developing applications that run on multiple platforms with equal smoothness.",
        },
        {
            title: "Wearable Applications",
            description:
                "Our cross-platform mobile app development services also branch out to various portable devices, which have sensors and screens. In addition to developing those apps, we provide services like local and remote data monitoring.",
        },
        {
            title: "Optimized Environment",
            description:
                "The way our hybrid app development company performs our testing and developing functions involves a lot of focus. We make sure that our developers are working with clean and optimized codes so that the output is of the highest quality.",
        },
        {
            title: "Business Growth",
            description:
                "No matter what kind of business you own, growth is a factor that is always a priority. When you pay us for hybrid app development services, we create apps that you can market across various platforms and channels.",
        },
        {
            title: "E-Commerce App Development",
            description:
                "Our cross-platform app development services can also cater to the needs and demands of your partners and investors in the eCommerce and retail domain.",
        },
        {
            title: "Post-Development Maintenance",
            description:
                "We do not stop providing our services immediately after the development of your hybrid apps comes to an end. We continue support with updates and bug fixes.",
        },
    ];
    const benefits = [
        {
            icon: <FaChartBar />,
            title: "Competitive Rates",
            description: "Here at Wordsys, we have deliberately selected a strategic price rate to enable a competitive service cost for our clients."
        },
        {
            icon: <FaTruckMoving />,
            title: "Timely Delivery",
            description: "Our multitasking team of Hybrid developers sticks to a client-centric approach to deliver your project within budget and on time!"
        },
        {
            icon: <FaSmileBeam />,
            title: "Customer Satisfaction",
            description: "Our technology competence and goal-centric focus enable us to fulfill your requirements to perfection. Expect 24/7 customer support service, always!"
        },
        {
            icon: <FaSearch />,
            title: "Transparency and Integrity",
            description: "It is our commitment to transparency and quality, that makes our Hybrid developers one of the most trusted teams in India."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="hybrid-hero-section">
                <div className="hybrid-left">
                    <h1>
                        <span className="highlight">Hybrid</span>
                        <br />
                        App Developer
                    </h1>
                    <p>
                        Establish a strong presence online with Hybrid App Developer,
                        encasing path-breaking technologies.
                    </p>
                    <button className="hybrid-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="hybrid-right">
                    <img src={hybridImage} alt="Hybrid App Illustration" />
                </div>
            </div>

            {/* Need Section */}
            <div className="hybrid-need-section">
                <h2>
                    <span className="blue-text">Why Do You Need A</span> Dedicated Hybrid
                    App Development Team?
                </h2>
                <div className="hybrid-cards-grid">
                    {cards.map((card, index) => (
                        <div className="hybrid-card" key={index}>
                            <div className="card-icon">{card.icon}</div>
                            <h4>{card.title}</h4>
                            <p>{card.text}</p>
                        
                        </div>
                    ))}
                </div>
                <div className="hybrid-cta">
                    <button>WANNA TALK? FIX A TIME!</button>
                </div>
                {/* Hybrid Services Section */}
                <div className="hybrid-services-section">
                    <div className="hybrid-services-left">
                        <img src={hybridDevImg} alt="Hybrid Developer Services" />
                    </div>
                    <div className="hybrid-services-right">
                        <h2>
                            <span className="highlight">Hybrid Development</span> Services We Offer
                        </h2>
                        <div className="hybrid-service-grid">
                            {hybridServices.map((service, index) => (
                                <div className="hybrid-service-card" key={index}>
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                        <button className="hybrid-services-btn">WANNA TALK? FIX A TIME!</button>
                    </div>
                </div>
                <div className="hybrid-benefits-section">
                    <h2>
                        <span className="blue-text">Benefits of Hiring</span><br />
                        Certified Hybrid Developers
                    </h2>
                    <div className="benefits-grid">
                        {benefits.map((item, index) => (
                            <div className="benefit-card" key={index}>
                                <div className="benefit-icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hybrid-industries-section">
                    <h2>
                        <span className="blue-text">Industries</span> We Have Served To Date
                    </h2>
                    <div className="industries-icons-grid">
                        <div className="industry-card">
                            <img src={education} alt="Education" />
                            <p>Education</p>
                        </div>
                        <div className="industry-card">
                            <img src={tra} alt="Transportation" />
                            <p>Transportation</p>
                        </div>
                        <div className="industry-card">
                            <img src={finance} alt="Finance" />
                            <p>Finance</p>
                        </div>
                        <div className="industry-card">
                            <img src={media} alt="Media & Entertainment" />
                            <p>Media & Entertainment</p>
                        </div>
                        <div className="industry-card">
                            <img src={hea} alt="Healthcare" />
                            <p>Healthcare</p>
                        </div>
                    </div>
                </div>
                <div className="hybrid-benefitbywordsystech-section">
                    <h2>
                        <span className="blue-text">How Can You Benefit</span> By Associating With Wordsystech?
                    </h2>
                    <div className="hybrid-benefit-grid">
                        <div className="hybrid-benefit-card">
                            <img src={startupIcon} alt="Startup" />
                            <h4>Grow Your Start-Up</h4>
                            <p>
                                Save your development time by building just a single version program instead of creating multiple versions for different platforms. Hybrid development cuts down cost & code redundancy.
                            </p>
                        </div>
                        <div className="hybrid-benefit-card">
                            <img src={smallBizIcon} alt="Small Business" />
                            <h4>Boost Small-Scale Business</h4>
                            <p>
                                With fast, native-like performance, Hybrid apps run seamlessly across platforms. Expand high-performance applications for small business growth without platform boundaries.
                            </p>
                        </div>
                        <div className="hybrid-benefit-card">
                            <img src={enterpriseIcon} alt="Enterprise" />
                            <h4>Scale Up Large-Scale Enterprise</h4>
                            <p>
                                Hybrid apps deliver smooth UI/UX for Android & iOS with real-time data access, seamless integration, and powerful data handling – suitable for large-scale enterprise solutions.
                            </p>
                        </div>
                        <div className="hybrid-benefit-card">
                            <img src={hubIcon} alt="Software Hub" />
                            <h4>Find The Next Big Solution For Your Software Hub</h4>
                            <p>
                                Tap into cross-platform compatibility, advanced tooling, and faster testing-maintenance cycle – everything under one roof, delivered by our skilled Hybrid app developers.
                            </p>
                        </div>
                    </div>
                    <button className="hybrid-benefit-btn">WANNA TALK? FIX A TIME!</button>
                </div>

            </div>
        </>
    );
};

export default HybridAppSection;
