import React from "react";
import "../styles/ReactNativeSection.css";
import reactNativeImage from "../assets/reactnativehero.png"; // make sure image path is correct
import reactnativeSideImg from "../assets/reactnativeSideImg.png";
import androidcardicon from "../assets/androidcardicon.png";
import education from "../assets/education.png";
import tra from "../assets/transportation.png";
import finance from "../assets/finance.png";
import media from "../assets/media.png";
import hea from "../assets/healthcare.png";
import { FaReact } from "react-icons/fa";

const ReactNativeSection = () => {
    const benefits = [
        {
            title: "Reusable Codes",
            description:
                "With this platform, hire React Native developers and use the same code for developing both Android and iOS applications.",
        },
        {
            title: "Quick Development",
            description:
                "Javascript is the language upon which React native coding is based. For example, Javascript allows a particular application.",
        },
        {
            title: "Live Reload",
            description:
                "This feature is exclusive to the React Native framework. You will not find this feature in other native frameworks.",
        },
        {
            title: "Community-Driven",
            description:
                "React Native was conceptualized in a hackathon event in 2013, which was a reaction to developers’ demands and needs.",
        },
        {
            title: "Suitable for Mobile Environments",
            description:
                "The React Native Platform is extremely well-tuned with mobile devices, which differs from most other native frameworks.",
        },
        {
            title: "Cost-Effective",
            description:
                "The most significant factor contributing to the apps developed in React Native is the development of a lower amount of money.",
        },
    ];

    return (
        <div className="reactnative-hero-section">
            <div className="reactnative-hero-left">
                <h1>
                    <span className="blue-text">React Native</span><br />
                    Development Company
                </h1>
                <p>
                    Establish A Strong Presence Online With React Native Development, Encas­ing Path-Breaking Technologies
                </p>
                <button className="reactnative-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="reactnative-hero-right">
                <img src={reactNativeImage} alt="React Native Illustration" />
            </div>
            <div className="reactnative-benefits-section">
                <h2>
                    <span className="highlight-blue">Key Benefits Of</span> Choosing React Native
                </h2>
                <div className="reactnative-benefits-container">
                    <div className="reactnative-benefits-grid">
                        {benefits.map((item, index) => (
                            <div className="benefit-card" key={index}>
                                <FaReact className="benefit-icon" />
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                        <button className="cta-button">WANNA TALK? FIX A TIME!</button>
                    </div>
                    <div className="reactnative-benefits-image">
                        <img src={reactnativeSideImg} alt="React Native" />
                    </div>
                </div>
            </div>
            <div className="reactnative-services-section">
                <h2>
                    <span className="highlight-blue">React Native</span> Services We Offer
                </h2>
                <div className="reactnative-services-grid">
                    {[
                        {
                            title: "Custom App Development",
                            description:
                                "Our React Native developers are immensely skilled in developing applications using the React Native Platform.",
                        },
                        {
                            title: "API and Backend Development",
                            description:
                                "Our React Native experts have extensive knowledge in Python, PHP, and NodeJS, making them experts in creating API services.",
                        },
                        {
                            title: "Migration",
                            description:
                                "Our skilled developers understand that if you plan to migrate to React Native to take advantage of an enriched UI/UX.",
                        },
                        {
                            title: "Hire Dedicated Developers",
                            description:
                                "Wordsys Tech is composed of one of the most skilled React Native Developers. Our developers are immensely dedicated.",
                        },
                        {
                            title: "Support and Maintenance",
                            description:
                                "Our React native development company is equipped with expert professionals to take care of your development project from end-to-end.",
                        },
                        {
                            title: "Top-Notch Consultation",
                            description:
                                "Our React native app development company also provides consultation services, and our experts can go through your business functions.",
                        },
                    ].map((service, index) => (
                        <div className="service-card" key={index}>
                            <img
                                src={androidcardicon}
                                alt="Service Icon"
                                className="service-icon"
                            />
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
                <button className="cta-button">WANNA TALK? FIX A TIME!</button>
            </div>
            <div className="reactnative-industries-section">
                <h2>
                    <span className="highlight-blue">Industries</span> We Have Served To Date
                </h2>
                <div className="reactnative-industries-grid">
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

            <div className="reactnative-benefitbywordsystech-section">
                <h2>
                    <span className="highlight-blue">How Can You Benefit</span> By Associating With Wordsystech?
                </h2>
                <div className="benefitbywordsystech-grid">
                    <div className="benefitbywordsystech-card">
                        <h4>Scale Your Start-Up</h4>
                        <p>
                            Hire React Native developers, and develop secure, dynamic and feature-rich native-looking mobile apps
                            without having to build iOS or Android apps separately. It requires just a single React Native coding to
                            build robust and user-engaging web and mobile apps for different operating systems.
                        </p>
                    </div>
                    <div className="benefitbywordsystech-card">
                        <h4>Grow Your Small-Scale Business</h4>
                        <p>
                            Hire React Native developers from Wordsys, and grow your small-scale business, converting your website
                            into a user-engaging digital interface. Plus, React Native app development services are fast and improve
                            user-experience.
                        </p>
                    </div>
                    <div className="benefitbywordsystech-card">
                        <h4>Step Up Your Large-Scale Enterprise</h4>
                        <p>
                            Leveraging the code-reusability feature of this JavaScript-based framework, our React Native experts can
                            fasten development across multiple operating systems. Hire us to step up your large-scale business with
                            premium mobile and web apps.
                        </p>
                    </div>
                    <div className="benefitbywordsystech-card">
                        <h4>Reap The Power Of React Native For Your Software Hub</h4>
                        <p>
                            Easy migration, cost-efficiency, code-reusability, third-party plug-ins – React Native offers multiple
                            perks. Hire our React Native experts to build SEO-friendly, secure and robust web and mobile apps for your
                            business.
                        </p>
                    </div>
                </div>
                <button className="cta-button">WANNA TALK? FIX A TIME!</button>
            </div>

        </div>
    );
};

export default ReactNativeSection;
