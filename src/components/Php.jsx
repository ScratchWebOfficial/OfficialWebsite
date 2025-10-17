import React from "react";
import "../styles/Php.css";
import phpHeroImage from "../assets/php-hero.png";
import responsiveIcon from "../assets/responsive.png";
import openSourceIcon from "../assets/opensource.png";
import featuresIcon from "../assets/features.png";
import integrationIcon from "../assets/integration.png";
import exclusivityIcon from "../assets/exclusivity.png";
import crossPlatformIcon from "../assets/security.png";
import javaImg from "../assets/cakephp1.png";
import sdkImg from "../assets/symfony2.png";
import kotlinImg from "../assets/codeigniter2.png";
import jsImg from "../assets/laravel2.png";
import studioImg from "../assets/yii2.png";
import xmlImg from "../assets/zend2.png";
import featuresIcon1 from "../assets/f1.png";

const Php = () => {
    const cards = [
        {
            icon: responsiveIcon,
            title: "Fully Responsive",
            desc: "When you own a shopping website, you must have a visually appealing eCommerce site to attract and retain customers easily. Shopify website developers use professional templates and, with the help of its rich UX and UI, amplify the visual quality.",
        },
        {
            icon: openSourceIcon,
            title: "Web-Aware",
            desc: "Security is another segment Shopify excels in. Whenever an eCommerce store is being considered, security is one of the essential features. An eCommerce website includes several transactions during the day, which involves sharing of personal and financial information. If you associate with a Shopify web development company, you need not worry about this confidential data.",
        },
        {
            icon: featuresIcon,
            title: "Open-Source Language",
            desc: "When Shopify website developers use the platform to develop a particular eCommerce website, they have the freedom to make use of more than 100 pre-designed web templates. They can even choose to employ multiple extensions to amplify the functionalities of Shopify.",
        },
        {
            icon: integrationIcon,
            title: "Highly Scalable",
            desc: "The maximum amount of traffic is brought over to any eCommerce website through mobile phones in the present age. If you hire Shopify experts they can make use of the vast array of its pre-equipped mobile-friendly features.",
        },
        {
            icon: exclusivityIcon,
            title: "SEO-Friendly",
            desc: "Shopify today is a globally popular solution powered by a reliable architecture consisting of hardware and software that is completely optimized. Optimization benefits a Shopify website designer, as it lets them build e-commerce websites on this platform, which are smooth and fast.",
        },
        {
            icon: crossPlatformIcon,
            title: "Cross Platform Integration",
            desc: "Shopify is a SAAS platform that is highly scalable. Building an eCommerce website using Shopify will not require you to invest much money in maintenance. Developers consider Shopify all around the world as one of the most competitively priced platforms.",
        },
    ];

    return (
        <div className="php-hero-section">
            <div className="php-left">
                <h1>
                    <span className="blue-text">PHP Web Development</span><br />
                    Challenges Head On!
                </h1>
                <p>
                    Establish A Strong Presence Online With Custom PHP Development Services,
                    Encasing Path-Breaking Technologies
                </p>
                <button className="php-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="php-right">
                <img src={phpHeroImage} alt="PHP Development" />
            </div>

            <div className="woo-ideal-section">
                <h2>
                    <span className="blue-text">Reasons Why PHP Should</span> Top Your Priority
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
            <div className="php-highlights-section">
                <h2><span className="blue-text">Highlights </span> Of Our Services</h2>
                <hr className="php-highlight-underline" />
                <div className="php-highlight-grid">
                    {[
                        {
                            title: "Web App Development",
                            desc: "Being led with a fortitude that stems from our expertise in core PHP, Object Oriented Programming, Model View Controller, etc., our PHP developers can deliver you bespoke & dynamic web apps. Working across some of the most power-packed frameworks i.e. CodeIgniter, CakePHP, etc., we can build robust & intuitive apps for your enterprise!",
                        },
                        {
                            title: "CMS Development",
                            desc: "As a leading PHP development company, we emphasize harnessing the cutting-edge Content Management Systems to build your website. To add an edge to your website's look & feel, we shall be hands on in harnessing the cutting-edge CMS technologies i.e. Drupal, Magento, WordPress & more!",
                        },
                        {
                            title: "API Development",
                            desc: "Hire dedicated PHP developers from Wordsys Tech for enhancing or even extending the functionalities & overall efficacies of your web applications, mobile applications – both Android & iOS – etc. with the integration of well-documented, stable & fully secure Application Programming Interfaces or APIs.",
                        },
                        {
                            title: "Seamless Maintenance",
                            desc: "Our PHP developers are skilled enough to assist you with a constant support & maintenance of your app & websites. We credit our PHP programmers to fulfill all your needs pertaining to both ongoing & demand-centric maintenance of your site, web applications & mobile apps.",
                        },
                        {
                            title: "Cloud-Based Solutions",
                            desc: "Quality being the pillar of our PHP development solutions, we aim to be instrumental in custom building cloud-native applications for your business, leveraging the premium PHP tools. Hire PHP developers from Wordsys Tech to get unmatchable assistance in deploying, scaling or managing cloud-native apps of different sorts!",
                        },
                        {
                            title: "Thorough Consultation",
                            desc: "Being the forerunner among India’s top-rated PHP development companies, we have an inkling of the status quo of new-age development. Owing to this, our PHP experts can significantly contribute in delivering customized consultation for multiple verticals of web or app design, feature implementation, architecture, development, management & more!",
                        },
                    ].map((card, index) => (
                        <div className="php-highlight-card" key={index}>
                            <img src={featuresIcon1} alt="icon" />
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                            <a href="#">Explore More</a>
                        </div>
                    ))}
                </div>
            </div>


            <div className="php-frameworks-partner-wrapper">
                {/* Left: PHP Frameworks */}
                <div className="php-frameworks-left">
                    <h2><span className="blue-text">The Different PHP frameworks</span> We Work With</h2>
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

                {/* Right: Partner With Wordsys Section */}
                <div className="partner-with-wordsys">
                    <h2><span className="blue-text">Partner With</span> Wordsys</h2>
                    <div className="partner-grid">
                        {["Accomplish Your Project", "Fuel A Small Business", "Bring Actionable Results", "In-House Resources"].map((title, index) => (
                            <div className="partner-card" key={index}>
                                <h3>{title}</h3>
                                <p>
                                    {index === 0 && "From stepping stone to milestones – our experienced, skilled & efficient PHP developers can help your project visions emerge with flying colors – right from the stage of ideation to design to development to management and the final execution!"}
                                    {index === 1 && "To be a pioneer of success for your small business, we shall nestle a crew of dedicated PHP web developers for scaling your products, upgrading their efficacies with constant maintenance & the inclusion of edgy features, functionalities et al!"}
                                    {index === 2 && "Our PHP developers can help your brand scale better heights with more affordable yet result-yielding solutions, via which, you can bring more actionable insights in your enterprise operation, management, etc."}
                                    {index === 3 && "Our skilled developers will be the binding force for supporting your in-house business resources & building more efficient tech units for addressing your enterprise needs."}
                                </p>
                            </div>
                        ))}
                    </div>
                    <button className="partner-btn">WANNA TALK? SAY HI!</button>
                </div>
            </div>
        </div>
    );
};

export default Php;
