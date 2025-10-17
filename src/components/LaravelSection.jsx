import React from "react";
import "../styles/LaravelSection.css";
import laravelHeroImg from "../assets/laravel-hero.png";
import responsiveIcon from "../assets/responsive.png";
import openSourceIcon from "../assets/opensource.png";
import featuresIcon from "../assets/features.png";
import integrationIcon from "../assets/integration.png";
import exclusivityIcon from "../assets/exclusivity.png";
import crossPlatformIcon from "../assets/security.png";
import featuresIcon1 from "../assets/f1.png";
import javaImg from "../assets/cakephp1.png";
import sdkImg from "../assets/symfony2.png";
import kotlinImg from "../assets/codeigniter2.png";
import jsImg from "../assets/laravel2.png";
import studioImg from "../assets/yii2.png";
import xmlImg from "../assets/zend2.png";

const LaravelSection = () => {
    const cards = [
        {
            icon: responsiveIcon,
            title: "Coordinated Documentation",
            desc: "When you own a shopping website, you must have a visually appealing eCommerce site to attract and retain customers easily. Shopify website developers use professional templates and, with the help of its rich UX and UI, amplify the visual quality.",
        },
        {
            icon: openSourceIcon,
            title: "Articulate ORM",
            desc: "Security is another segment Shopify excels in. Whenever an eCommerce store is being considered, security is one of the essential features. An eCommerce website includes several transactions during the day, which involves sharing of personal and financial information. If you associate with a Shopify web development company, you need not worry about this confidential data.",
        },
        {
            icon: featuresIcon,
            title: "Optimal Security",
            desc: "When Shopify website developers use the platform to develop a particular eCommerce website, they have the freedom to make use of more than 100 pre-designed web templates. They can even choose to employ multiple extensions to amplify the functionalities of Shopify.",
        },
        {
            icon: integrationIcon,
            title: "Open Source",
            desc: "The maximum amount of traffic is brought over to any eCommerce website through mobile phones in the present age. If you hire Shopify experts they can make use of the vast array of its pre-equipped mobile-friendly features.",
        },
        {
            icon: exclusivityIcon,
            title: "Proper Caching",
            desc: "Shopify today is a globally popular solution powered by a reliable architecture consisting of hardware and software that is completely optimized. Optimization benefits a Shopify website designer, as it lets them build e-commerce websites on this platform, which are smooth and fast.",
        },
        {
            icon: crossPlatformIcon,
            title: "Object-Oriented Libraries",
            desc: "Shopify is a SAAS platform that is highly scalable. Building an eCommerce website using Shopify will not require you to invest much money in maintenance. Developers consider Shopify all around the world as one of the most competitively priced platforms.",
        },
    ];

    return (
        <div className="laravel-hero-section">
            <div className="laravel-left">
                <h1>
                    <span className="blue-text">Hire</span><br />
                    Laravel Developers
                </h1>
                <p>
                    Hire dedicated laravel developers on a full-time hourly, or fixed cost project basis and manage
                    them as your extended team
                </p>
                <button className="laravel-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="laravel-right">
                <img src={laravelHeroImg} alt="Laravel Developers" />
            </div>
            <div className="woo-ideal-section">
                <h2>
                    <span className="blue-text">Benefits Of</span>  Choosing Laravel
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
                <h2>
                    <span className="blue-text">PHP Services</span> We Offer
                </h2>
                <hr className="php-highlight-underline" />
                <div className="php-highlight-grid">
                    {[
                        {
                            title: "Custom Laravel Development",
                            desc: "Being led with a fortitude that stems from our expertise in core PHP, Object Oriented Programming, Model View Controller, etc., our PHP developers can deliver you bespoke & dynamic web apps. Working across some of the most power-packed frameworks i.e. CodeIgniter, CakePHP, etc., we can build robust & intuitive apps for your enterprise!",
                        },
                        {
                            title: "Premium Maintenance",
                            desc: "As a leading PHP development company, we emphasize harnessing the cutting-edge Content Management Systems to build your website. To add an edge to your website's look & feel, we shall be hands on in harnessing the cutting-edge CMS technologies i.e. Drupal, Magento, WordPress & more!",
                        },
                        {
                            title: "Website Development",
                            desc: "Hire dedicated PHP developers from Wordsys Tech for enhancing or even extending the functionalities & overall efficacies of your web applications, mobile applications – both Android & iOS – etc. with the integration of well-documented, stable & fully secure Application Programming Interfaces or APIs.",
                        },
                        {
                            title: "Automation and Testing Of Your Browser",
                            desc: "Our PHP developers are skilled enough to assist you with a constant support & maintenance of your app & websites. We credit our PHP programmers to fulfill all your needs pertaining to both ongoing & demand-centric maintenance of your site, web applications & mobile apps.",
                        },
                        {
                            title: "Detailed Full-Text Search",
                            desc: "Quality being the pillar of our PHP development solutions, we aim to be instrumental in custom building cloud-native applications for your business, leveraging the premium PHP tools. Hire PHP developers from Wordsys Tech to get unmatchable assistance in deploying, scaling or managing cloud-native apps of different sorts!",
                        },
                        {
                            title: "SAAS App Creation",
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
                    <h2><span className="blue-text">How Can You Benefit By</span> Associating With Wordsystech?</h2>
                    <div className="partner-grid">
                        {["Startups", "Small-Scale Businesses", "Large-Scale Enterprises", "Software Development Companies"].map((title, index) => (
                            <div className="partner-card" key={index}>
                                <h3>{title}</h3>
                                <p>
                                    {index === 0 && "Our Laravel developers will be at your service from the very early stages of business development. We are going to amplify the quality of your experience while building a business. We will assist you, starting with creating your idea, all through design and development, up till product launches and business scaling."}
                                    {index === 1 && "Small-scale businesses must create a specific impression and maintain it. So we assign top developers of our Laravel package development company for the job to make sure that you get the best service possible and your business grows even further."}
                                    {index === 2 && "If you own an enterprise, you are already stable in your business. Your priorities in this stage of business development are process automation and profit earning so that you can maintain the scale of your business. Our Laravel development company will provide you solutions, which will help you constantly grow at a steady pace."}
                                    {index === 3 && "Software is the sector our Laravel developers excel at. We have an array of highly skilled developers who will take full responsibility for your software development process. Our Laravel development services will involve using top-level tools to create software that is of the best quality."}
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

export default LaravelSection;
