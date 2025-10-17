import React from "react";
import "../styles/ShopifySection.css";
import shopifyImage from "../assets/shopify-hero.png"; // Make sure this matches the uploaded image path
import responsiveIcon from "../assets/responsive.png";
import openSourceIcon from "../assets/opensource.png";
import featuresIcon from "../assets/features.png";
import integrationIcon from "../assets/integration.png";
import exclusivityIcon from "../assets/exclusivity.png";
import securityIcon from "../assets/security.png";
import devIcon1 from "../assets/dev1.png"; // Dedicated Developers
import devIcon2 from "../assets/dev2.png"; // Testing Services
import devIcon3 from "../assets/dev3.png"; // Easy Migration
import devIcon4 from "../assets/dev4.png"; // Theme Development
import devIcon5 from "../assets/dev5.png"; // Customer Support
import devIcon6 from "../assets/dev6.png";
import education from "../assets/education.png";
import tran from "../assets/transportation.png";
import finance from "../assets/finance.png";
import media from "../assets/media.png";
import health from "../assets/healthcare.png";

const ShopifySection = () => {
    const cards = [
        {
            icon: responsiveIcon,
            title: "Visual Appeal",
            desc: "When you own a shopping website, you must have a visually appealing eCommerce site to attract and retain customers easily. Shopify website developers use professional templates and, with the help of its rich UX and UI, amplify the visual quality.",
        },
        {
            icon: openSourceIcon,
            title: "Security",
            desc: "Security is another segment Shopify excels in. Whenever an eCommerce store is being considered, security is one of the essential features. An eCommerce website includes several transactions during the day, which involves sharing of personal and financial information. If you associate with a Shopify web development company, you need not worry about this confidential data.",
        },
        {
            icon: featuresIcon,
            title: "Flexibility",
            desc: "When Shopify website developers use the platform to develop a particular eCommerce website, they have the freedom to make use of more than 100 pre-designed web templates. They can even choose to employ multiple extensions to amplify the functionalities of Shopify.",
        },
        {
            icon: integrationIcon,
            title: "Mobile-Friendly",
            desc: "The maximum amount of traffic is brought over to any eCommerce website through mobile phones in the present age. If you hire Shopify experts they can make use of the vast array of its pre-equipped mobile-friendly features.",
        },
        {
            icon: exclusivityIcon,
            title: "Rapid Loading",
            desc: "Shopify today is a globally popular solution powered by a reliable architecture consisting of hardware and software that is completely optimized. Optimization benefits a Shopify website designer, as it lets them build e-commerce websites on this platform, which are smooth and fast.",
        },
        {
            icon: securityIcon,
            title: "Cost-Effectiveness",
            desc: "Shopify is a SAAS platform that is highly scalable. Building an eCommerce website using Shopify will not require you to invest much money in maintenance. Developers consider Shopify all around the world as one of the most competitively priced platforms.",
        },
    ];
    const shopifyServices = [
        {
            icon: devIcon1,
            title: "Dedicated Developers",
            desc: "Our Shopify website developers, apart from being highly skilled in their fields, are intensely dedicated, who strive to complete all your Shopify projects before the deadline.",
        },
        {
            icon: devIcon2,
            title: "Testing Services",
            desc: "Our Shopify app development company makes your eCommerce stores run smoothly on all platforms and devices with the help of a test cloud by Shopify. Testing drastically improves the performance of your website.",
        },
        {
            icon: devIcon3,
            title: "Easy Migration",
            desc: "No matter if your site is built using popular platforms like WooCommerce, BigCommerce, or Magento, our skilled Shopify experts will help you migrate your existing e-commerce store to Shopify.",
        },
        {
            icon: devIcon4,
            title: "Theme Development",
            desc: "Our certified Shopify experts build custom themes for your website from scratch. We are focused on creating the theme of your website based on your demands.",
        },
        {
            icon: devIcon5,
            title: "Customer Support",
            desc: "Developing an eCommerce website using Shopify is just half the work. Our talented Shopify website developers make sure your site is free of any bugs and is updated regularly.",
        },
        {
            icon: devIcon6,
            title: "Offshore development",
            desc: "Skilled developers of our Shopify development company working offshore are technically skilled to build interactive e-stores for your business.",
        },
    ];

    return (
        <div className="shopify-hero-section">
            <div className="shopify-left">
                <h1>
                    <span className="blue-text">Let Your Business Excel</span><br />
                    With Shopify Development<br />
                    Services
                </h1>
                <p>
                    Hire skilled Shopify Developers, on a full-time basis, at an hourly rate, or on a project basis, and turn them into an extended team for your business
                </p>
                <button className="shopify-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="shopify-right">
                <img src={shopifyImage} alt="Shopify Development Illustration" />
            </div>
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
            <div className="shopify-services-section">
                <h2>
                    <span className="blue-text">The Shopify </span> Development Services We Provide
                </h2>
                <div className="shopify-service-grid">
                    {shopifyServices.map((service, index) => (
                        <div className="shopify-service-card" key={index}>
                            <img src={service.icon} alt={service.title} />
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <a href="#">Explore More</a>
                        </div>
                    ))}
                </div>
                <button className="shopify-service-btn">WANNA TALK? FIX A TIME!</button>
            </div>
            <div className="shopify-industries-section">
                <h2>
                    <span className="blue-text">Industries</span> We Have Served To Date
                </h2>
                <hr className="shopify-underline" />
                <div className="shopify-industries-grid">
                    <div className="industry-card">
                        <img src={education} alt="Education" />
                        <p>Education</p>
                    </div>
                    <div className="industry-card">
                        <img src={tran} alt="Transportation" />
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
                        <img src={health} alt="Healthcare" />
                        <p>Healthcare</p>
                    </div>
                </div>
            </div>
            <div className="shopify-benefit-section">
                <h2>
                    <span className="blue-text">How Can You Benefit By</span> Associating With Wordsystech?
                </h2>
                <div className="shopify-benefit-grid">
                    <div className="shopify-benefit-card">
                        <h3>Startups</h3>
                        <p>
                            Our Shopify experts will be at your service from the very early stages of business development.
                            We are going to amplify the quality of your experience while building a business.
                            We will assist you in creating your idea, all through design and development,
                            up until product launches and business scaling.
                        </p>
                    </div>
                    <div className="shopify-benefit-card">
                        <h3>Small-Scale Businesses</h3>
                        <p>
                            Small-scale businesses must create a specific impression and maintain it.
                            So we assign top developers of our Shopify development agency for the job
                            to make sure that you get the best service possible and your business grows even further.
                        </p>
                    </div>
                    <div className="shopify-benefit-card">
                        <h3>Large-Scale Enterprises</h3>
                        <p>
                            If you own an enterprise, you are already stable in your business.
                            Your priorities in this stage of business development are process automation
                            and profit earning so that you can maintain the scale of your business.
                            Our Shopify development company will provide you solutions,
                            which will help you constantly grow at a steady pace.
                        </p>
                    </div>
                    <div className="shopify-benefit-card">
                        <h3>Software Development Companies</h3>
                        <p>
                            Software is the sector our Shopify experts excel at.
                            We have an array of highly skilled developers who will take full responsibility
                            for your software development process. In addition, our Shopify web development
                            services involve using top-level tools to create software that is of the best quality.
                        </p>
                    </div>
                </div>
                <button className="shopify-benefit-btn">WANNA TALK? FIX A TIME!</button>
            </div>


        </div>
    );
};

export default ShopifySection;
