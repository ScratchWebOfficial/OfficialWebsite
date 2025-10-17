import React from "react";
import "../styles/SymfonySection.css";
import symfonyHeroImage from "../assets/symfony-hero.png";
import symfonyLogo from "../assets/symfony-logo-orange.png";
import featuresIcon1 from "../assets/f1.png";
import cakephp from "../assets/cakephp0.png";
import sym from "../assets/symfony0.png";
import ter from "../assets/codeigniter0.png";
import vel from "../assets/laravel0.png";
import ii from "../assets/yii0.png";
import zen from "../assets/zend0.png";
import ed from "../assets/education.png";
import tr from "../assets/transportation.png";
import fi from "../assets/finance.png";
import me from "../assets/media.png";
import he from "../assets/healthcare.png";
import st from "../assets/startup.png";
import s from "../assets/smallbusiness.png";
import e from "../assets/enterprise1.png";
import so from "../assets/softwaredev.png";

const SymfonySection = () => {
    const serviceCards = [
        {
            title: "Hire Experienced Experts",
            desc: "Being led with a fortitude that stems from our expertise in core PHP, Object Oriented Programming, Model View Controller, etc., our PHP developers can deliver you bespoke & dynamic web apps. Working across some of the most power-packed frameworks i.e. CodeIgniter, CakePHP, etc., we can build robust & intuitive apps for your enterprise!",
        },
        {
            title: "Customer And Client Support",
            desc: "As a leading PHP development company, we emphasize harnessing the cutting-edge Content Management Systems to build your website. To add an edge to your website's look & feel, we shall be hands on in harnessing the cutting-edge CMS technologies i.e. Drupal, Magento, WordPress & more!",
        },
        {
            title: "E-Commerce Development",
            desc: "Hire dedicated PHP developers from Wordsys Tech for enhancing or even extending the functionalities & overall efficacies of your web applications, mobile applications – both Android & iOS – etc. with the integration of well-documented, stable & fully secure Application Programming Interfaces or APIs.",
        },
        {
            title: "Symfony Cloud Applications",
            desc: "Our PHP developers are skilled enough to assist you with a constant support & maintenance of your app & websites. We credit our PHP programmers to fulfill all your needs pertaining to both ongoing & demand-centric maintenance of your site, web applications & mobile apps.",
        },
        {
            title: "Migration And Modernization",
            desc: "Quality being the pillar of our PHP development solutions, we aim to be instrumental in custom building cloud-native applications for your business, leveraging the premium PHP tools. Hire PHP developers from Wordsys Tech to get unmatchable assistance in deploying, scaling or managing cloud-native apps of different sorts!",
        },
        {
            title: "Enterprise Applications",
            desc: "Being the forerunner among India’s top-rated PHP development companies, we have an inkling of the status quo of new-age development. Owing to this, our PHP experts can significantly contribute in delivering customized consultation for multiple verticals of web or app design, feature implementation, architecture, development, management & more!",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="symfony-hero-section">
                <div className="symfony-left">
                    <h1>
                        <span className="blue-text">Symfony</span><br />
                        Development Services
                    </h1>
                    <p>
                        Provide a boost to the growth of your business by hiring skilled Symfony developers and programmers on an hourly or full-time basis from Wordsys, one of the <strong>best symfony development company</strong> and amplifying the overall quality of your existing team.
                    </p>
                    <button className="symfony-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="symfony-right">
                    <img src={symfonyHeroImage} alt="Symfony Development Illustration" />
                </div>
            </div>

            {/* Benefits Section */}
            <div className="symfony-benefits-section">
                <div className="symfony-benefits-left">
                    <img src={symfonyLogo} alt="Symfony Logo" />
                </div>
                <div className="symfony-benefits-right">
                    <h2>
                        <span className="blue-text">Benefits Of</span> Choosing Symfony
                    </h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h4>🛡️ Ease Of Use</h4>
                            <p>Great for small-scale businesses and beginners. Symfony offers embedded features for an easier development journey.</p>
                        </div>
                        <div className="benefit-card">
                            <h4>🌍 Wide Range of Use Cases</h4>
                            <p>Ideal for apps like community portals, social platforms, and more. Trusted globally for its versatility.</p>
                        </div>
                        <div className="benefit-card">
                            <h4>🔁 Versatility</h4>
                            <p>Symfony supports reusable, fast, and scalable components making it one of the most adaptable PHP frameworks.</p>
                        </div>
                        <div className="benefit-card">
                            <h4>⚡ Rapid Development</h4>
                            <p>Reduce coding time. Symfony is lightweight and helps developers speed up the development process.</p>
                        </div>
                        <div className="benefit-card">
                            <h4>🔗 Expandability</h4>
                            <p>Everything is bundled and modular. Expand and modify without breaking compatibility.</p>
                        </div>
                        <div className="benefit-card">
                            <h4>👨‍💻 Developer-Friendly</h4>
                            <p>Easy for both beginners and experts. Add and reconfigure modules with minimal hassle.</p>
                        </div>
                    </div>
                    <button className="symfony-btn">SCHEDULE A MEETING</button>
                </div>
            </div>

            {/* Symfony Services Section */}
            <div className="php-highlights-section">
                <h2>
                    <span className="blue-text">The Symfony Development Services</span> That We Offer
                </h2>
                <hr className="php-highlight-underline" />
                <div className="php-highlight-grid">
                    {serviceCards.map((card, index) => (
                        <div className="php-highlight-card" key={index}>
                            <img src={featuresIcon1} alt="icon" />
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                            <a href="#">Explore More</a>
                        </div>
                    ))}
                </div>
                {/* PHP Frameworks Section */}
                <div className="php-frameworks-section">
                    <h2>
                        <span className="blue-text">The Different PHP frameworks</span> We Work With
                    </h2>
                    <hr className="php-frameworks-underline" />
                    <div className="php-frameworks-grid">
                        <div className="framework-card"><img src={cakephp} alt="CakePHP" /></div>
                        <div className="framework-card"><img src={sym} alt="Symfony" /></div>
                        <div className="framework-card"><img src={ter} alt="CodeIgniter" /></div>
                        <div className="framework-card"><img src={vel} alt="Laravel" /></div>
                        <div className="framework-card"><img src={ii} alt="Yii Framework" /></div>
                        <div className="framework-card"><img src={zen} alt="Zend" /></div>
                    </div>
                    <div className="php-frameworks-btn-container">
                        <button className="symfony-btn">WANT TO TALK? SAY HI!</button>
                    </div>
                </div>
                {/* Industries We Have Served Section */}
                <div className="php-industries-section">
                    <h2>
                        <span className="blue-text">Industries</span> We Have Served To Date
                    </h2>
                    <hr className="php-industries-underline" />
                    <div className="php-industries-grid">
                        <div className="industry-card">
                            <img src={ed} alt="Education" />
                            <p>Education</p>
                        </div>
                        <div className="industry-card">
                            <img src={tr} alt="Transportation" />
                            <p>Transportation</p>
                        </div>
                        <div className="industry-card">
                            <img src={fi} alt="Finance" />
                            <p>Finance</p>
                        </div>
                        <div className="industry-card">
                            <img src={me} alt="Media & Entertainment" />
                            <p>Media & Entertainment</p>
                        </div>
                        <div className="industry-card">
                            <img src={he} alt="Healthcare" />
                            <p>Healthcare</p>healthcare.png
                        </div>
                    </div>
                </div>
                <div className="php-benefitbywordsystech-section">
                    <h2>
                        <span className="blue-text">How Can You Benefit By</span> Associating With Wordsystech?
                    </h2>
                    <div className="php-benefitbywordsystech-grid">
                        <div className="benefit-card">
                            <img src={st} alt="Startup" />
                            <h4>Startups</h4>
                            <p>
                                Our Symfony developer will be at your service from the very early stages of business
                                development. We are going to amplify the quality of your experience while building a
                                business. We will assist you starting with creating your idea, all through design and
                                development, up till product launches and business scaling.
                            </p>
                        </div>
                        <div className="benefit-card">
                            <img src={s} alt="Small Scale Business" />
                            <h4>Small-Scale Businesses</h4>
                            <p>
                                Small-scale businesses must create a specific impression and maintain it. So we assign top
                                developers of our Symfony web development company for the job to make sure that you get the
                                best service possible and your business grows even further.
                            </p>
                        </div>
                        <div className="benefit-card">
                            <img src={e} alt="Large Scale Enterprises" />
                            <h4>Large-Scale Enterprises</h4>
                            <p>
                                If you own an enterprise, you are already stable in your business. Your priorities in this
                                stage of business development are process automation and profit earning so that you can
                                maintain the scale of your business. Our Symfony development company will provide you
                                solutions, which will help you constantly grow at a steady pace.
                            </p>
                        </div>
                        <div className="benefit-card">
                            <img src={so} alt="Software Development Companies" />
                            <h4>Software Development Companies</h4>
                            <p>
                                Software is the sector our Symfony programmer excels at. We have an array of highly skilled
                                developers who will take full responsibility for your software development process. Our
                                Symfony development services will involve using top-level tools to create software that is
                                of the best quality.
                            </p>
                        </div>
                    </div>
                    <div className="benefit-cta">
                        <button className="blue-btn">SCHEDULE A MEETING</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SymfonySection;
