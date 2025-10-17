import React from "react";
import "../styles/PHPSection.css";
import phpFrameworkHeroImg from "../assets/phpframework-hero1.png"; // replace with actual path
import trophyImage from "../assets/phpframework-trophy.png";
import dbIcon from "../assets/php-database.png";          // replace with your actual path
import assistanceIcon from "../assets/php-assistance.png"; // replace with your actual path
import ecommerceIcon from "../assets/php-ecommerce.png";
import teamImage from "../assets/phpframework-team.png"; // Replace with actual path
import agileIcon from "../assets/phpframework-agile.png";
import optionsIcon from "../assets/phpframework-options.png";
import trialIcon from "../assets/phpframework-trial.png";
import laravelIcon from "../assets/php-laravel.png";
import codeigniterIcon from "../assets/php-codeigniter.png";
import symphonyIcon from "../assets/php-symphony.png";
import cakephpIcon from "../assets/php-cakephp.png";
import costImage from "../assets/phpframework-costs.png"; 


const PHPSection = () => {
    return (
        <div className="phpframework-hero-section" id="phpframework-hero-section">
            <div className="phpframework-hero-left">
                <h1>
                    <span className="blue-text">Our</span><br />
                    Technologies
                </h1>
                <p>
                    Taking a note of your requisites & visions, we shall build customized & robust
                    Content Management Software solutions for your business!
                </p>
                <button className="phpframework-hero-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="phpframework-hero-right">
                <img src={phpFrameworkHeroImg} alt="PHP Framework Illustration" />
            </div>
            <div className="phpframework-solutions-section" id="phpframework-solutions-section">
                <div className="phpframework-solutions-left">
                    <p className="highlight-text">Stay Ahead Of The Pack</p>
                    <h2>With Interactive, Scalable & Customized<br />PHP Solutions</h2>
                    <div className="underline" />
                    <h4>
                        Conquer Your Development Milestones With Custom-Tailored, Scalable, And Robust PHP
                        Development Services.
                    </h4>
                    <p>
                        The PHP developers at Wordsys are absolutely well-versed with different PHP modules. Our developers
                        work in tandem with analysts to pick suitable PHP frameworks to streamline your website or web app
                        development. We have PHP frameworks expertise in Laravel, CodeIgniter, Symfony, Yii, CakePHP, etc.
                    </p>
                    <p>
                        Web app development, CMS development, API integration, E-commerce web development, etc. are to
                        name a few PHP programming services we provide.
                    </p>
                    <button className="phpframework-solutions-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="phpframework-solutions-right">
                    <img src={trophyImage} alt="Trophy Illustration" />
                </div>
            </div>
            <div className="phpframework-services-section" id="phpframework-services-section">
                <div className="phpframework-service-card">
                    <img src={dbIcon} alt="Database Support" />
                    <h3><span className="blue-text">Database</span> <br />Support</h3>
                    <p>
                        Valuing your needs & preferences over a specific database, we shall pick the database server
                        which would be compatible with your database type.
                    </p>
                </div>

                <div className="phpframework-service-card">
                    <img src={assistanceIcon} alt="Community Support" />
                    <h3><span className="blue-text">Assistance</span> <br />Community Support</h3>
                    <p>
                        Combining different cutting-edge versions of PHP frameworks, our developer shall develop
                        custom web applications, which are easy to use, navigate & perform.
                    </p>
                </div>

                <div className="phpframework-service-card">
                    <img src={ecommerceIcon} alt="E-commerce Development" />
                    <h3><span className="blue-text">E-commerce</span> <br />Site Development</h3>
                    <p>
                        Backed by our adroit in writing PHP codes, we can build robust E-commerce sites, which can manage
                        a huge influx of consumers with ease.
                    </p>
                </div>
            </div>
            <div className="phpframework-tick-section" id="phpframework-tick-section">
                <div className="tick-left">
                    <h2>
                        <span className="blue-text">What</span> Makes Us TICK?
                    </h2>
                    <div className="underline" />
                    <p className="tick-subtext">
                        Owing to our in-depth know-how of different PHP frameworks, we can build and deliver fully
                        customized, on-time and effective PHP development services as per your business requisites,
                        preference and budget.
                    </p>
                    <img src={teamImage} alt="Team Discussion" />
                </div>

                <div className="tick-right">
                    <div className="tick-feature">
                        <img src={agileIcon} alt="Agile Setup" />
                        <div>
                            <h4>Agile Setup Process</h4>
                            <p>
                                Our technical team speeds up the website setup process for you with minimal user-configuration.
                            </p>
                        </div>
                    </div>
                    <div className="tick-feature">
                        <img src={optionsIcon} alt="Multiple Options" />
                        <div>
                            <h4>Multiple Options</h4>
                            <p>
                                Our expertise in top PHP frameworks gives you the flexibility of choosing the one as per your convenience.
                            </p>
                        </div>
                    </div>
                    <div className="tick-feature">
                        <img src={trialIcon} alt="Trial and Error" />
                        <div>
                            <h4>Trial & Error</h4>
                            <p>
                                Executing trial and error, our team brings to you the best-suited framework with an extensive support.
                            </p>
                        </div>
                    </div>
                    <button className="tick-btn">SCHEDULE A MEETING</button>
                </div>
            </div>
            <div className="phpframework-cards-section" id="phpframework-cards-section">
                <div className="phpframework-card">
                    <img src={laravelIcon} alt="Laravel" />
                    <h3>Laravel</h3>
                    <p>
                        Leveraging optimum advantages of Laravel, we can craft robust web applications.
                    </p>
                </div>

                <div className="phpframework-card">
                    <img src={codeigniterIcon} alt="CodeIgniter" />
                    <h3>CodeIgniter</h3>
                    <p>
                        Using the power-packed features of CodeIgniter framework, we build highly secure
                        websites and feature-rich web applications.
                    </p>
                </div>

                <div className="phpframework-card">
                    <img src={symphonyIcon} alt="Symphony" />
                    <h3>Symphony</h3>
                    <p>
                        Hire our best minds to develop a one-on-one customized website leveraging the
                        powerful features of Symphony framework.
                    </p>
                </div>

                <div className="phpframework-card">
                    <img src={cakephpIcon} alt="CakePHP" />
                    <h3>CakePHP</h3>
                    <p>
                        Increase your profit with our profound experience in developing scalable commercial
                        web apps using CakePHP framework.
                    </p>
                </div>
            </div>
            <div className="phpframework-development-section" id="phpframework-development-section">
                <div className="phpframework-development-left">
                    <img src={costImage} alt="Cost Efficiency" />
                </div>

                <div className="phpframework-development-right">
                    <p className="highlight-text">Power Up Your Development Game</p>
                    <h2>With Custom PHP Development Services</h2>
                    <div className="underline" />

                    <h4>
                        Our PHP developers can handle any complex project with ease! Hire us for secure, agile & scalable PHP development.
                    </h4>

                    <p>
                        Backed by our expertise across multiple open-source languages & database management systems,
                        we can build secure, customized & interactive web apps & websites. The major PHP perks include
                        cost-efficiency, faster development time, cost reduction in feature inclusion, etc.
                        Responsiveness, scalability, customization, search engine friendliness, etc. are the prime attributes
                        of websites & web apps developed by our PHP developers.
                    </p>

                    <button className="phpframework-development-btn">EXPLORE MORE</button>
                </div>
            </div>
        </div>
    );
};

export default PHPSection;
