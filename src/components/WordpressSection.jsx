// WordpressSection.jsx

import React from "react";
import "../styles/WordpressSection.css";
import wordpressHeroImg from "../assets/wordpress-hero.png"; // Update path if needed
import wpStandoutImg from "../assets/wordpress-standout.png";
import mobile from "../assets/mobile1.png";
import seo from "../assets/seo1.png";
import cms from "../assets/cms.png";
import custom from "../assets/custom.png";
import inter from "../assets/interface.png";
import cost from "../assets/cost1.png";
import e from "../assets/education.png";
import t from "../assets/transportation.png";
import f from "../assets/finance.png";
import m from "../assets/media.png";
import h from "../assets/healthcare.png";
import power from "../assets/power.png";
import smallbiz from "../assets/smallbiz1.png";
import results from "../assets/results.png";
import inhouse from "../assets/inhouse.png";


const WordpressSection = () => {
    return (
        <div className="wordpress-hero-section" id="wordpress-hero-section">
            <div className="wordpress-hero-left">
                <h1>
                    <span className="blue-text">WordPress</span> <br />
                    Development Agency In USA
                </h1>
                <p>
                    Whether you require custom website design, bespoke plugin development or E-commerce
                    solutions, our WordPress development agency shall get you covered!
                </p>
                <button className="wordpress-hero-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="wordpress-hero-right">
                <img src={wordpressHeroImg} alt="WordPress Development" />
            </div>
            <div className="wordpress-standout-section">
                <div className="wordpress-standout-left">
                    <h2>
                        <span className="blue-text">What Makes WordPress Website Design Services</span> Stand Out?
                    </h2>
                    <div className="standout-features">
                        <div className="feature-box">
                            <img src={mobile} alt="Mobile Responsive" />
                            <div>
                                <h4>Mobile Responsive</h4>
                                <p>
                                    Leveraging edgy plugins i.e. WPTouch, Jetpack, Mobile Pack, etc., our WordPress web developers
                                    will build websites that are functional, uncluttered, mobile-optimized & could be read with
                                    apt hyperlinks spacing & sans full-page pop-ups!
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <img src={seo} alt="SEO Friendly" />
                            <div>
                                <h4>Search Engine Friendly</h4>
                                <p>
                                    Exploring its built-in search engine parameters, our WordPress website developers can contribute
                                    in making your website SEO-friendly. To turn your brand’s digital store front – your website – more
                                    SEO-friendly, we can help you add additional plugins, too!
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <img src={cms} alt="Power CMS" />
                            <div>
                                <h4>Power-Packed CMS</h4>
                                <p>
                                    WordPress – a powerful open-source Content Management System – can work wonders in a successful
                                    web development for corporate organizations, trade associations, governmental portals, educational
                                    institutes, etc. Hire our top WordPress developers to reap the optimum dividends!
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <img src={custom} alt="Customizable" />
                            <div>
                                <h4>Customizable</h4>
                                <p>
                                    As a leading WordPress development company, we can develop usable layouts with features i.e. Twitter
                                    feed, image gallery, event calendars, etc. With tools like Google Analytics, Yoast SEO, etc., we can
                                    customize your site, too!
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <img src={inter} alt="Enhanced Interface" />
                            <div>
                                <h4>Enhanced Interface</h4>
                                <p>
                                    Backed by the WYSIWYG interface, WordPress becomes a cake for the tech-averse writers or editors!
                                    This CMS spells unmatchable ease in adding new contents, pages, images, links, crucial data, etc.
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <img src={cost} alt="Cost-Effective" />
                            <div>
                                <h4>Cost-Effective</h4>
                                <p>
                                    With a very meagre customization or maintenance expenses involved, WordPress spells greater cost
                                    efficiency! Besides, using different plugins, our WordPress web design service can protect your site
                                    from cross-site scripting, malware, SQL injection, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="standout-btn">WANNA TALK? FIX A TIME!</button>
                </div>
                <div className="wordpress-standout-right">
                    <img src={wpStandoutImg} alt="WordPress Features Illustration" />
                </div>
            </div>
            <div className="wordpress-hero-right">...</div>

            <div className="wordpress-services-section">
                <h2>
                    Our <span className="blue-text">WordPress</span> Web Design Services
                </h2>
                <div className="services-grid">
                    <div className="service-card">
                        <img src={custom} alt="Custom Web Development" />
                        <h4>Custom Web Development</h4>
                        <p>
                            Understanding your requisites, intended audiences, etc., our WordPress website design service providers
                            shall build robust & attractive WordPress sites, which will spell optimum user-friendliness & run seamlessly
                            across multiple browsers & devices i.e. computer, mobile phone & other hand-held devices!
                        </p>
                    </div>
                    <div className="service-card">
                        <img src={custom} alt="Theme Creation" />
                        <h4>Theme Creation</h4>
                        <p>
                            Staying abreast of the advanced technologies, the WordPress custom theme development service providers of our
                            team can custom-build feature-packed & visually-engaging themes as per your preference.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src={custom} alt="PSD to WordPress" />
                        <h4>PSD To WordPress</h4>
                        <p>
                            We are now adept at taking Photoshop Design Files, slicing them & coding them into feature-rich & functional WP
                            sites. Hire our experts to custom build user-friendly & fast-loading WordPress themes as per your PSD designs!
                        </p>
                    </div>
                    <div className="service-card">
                        <img src={custom} alt="API Integration" />
                        <h4>API Integration</h4>
                        <p>
                            Our custom WordPress services include API integration of third-party tools like Google Analytics, marketing tools,
                            Google Maps, etc. With accurate API integration, extend your website's features, functionalities & more.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src={custom} alt="Enterprise Apps" />
                        <h4>Enterprise Apps</h4>
                        <p>
                            Hire WordPress developers from Wordsys Tech to build secure, fast-loading enterprise sites. We’ll help drive user
                            engagement and greater conversions.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src={custom} alt="Maintenance & Security" />
                        <h4>Maintenance & Security Check</h4>
                        <p>
                            Our WordPress maintenance includes upgrades, bug fixes, malware protection, and more. We protect your WordPress
                            sites from hacks and threats.
                        </p>
                    </div>
                </div>
                <button className="services-btn">WANNA TALK? FIX A TIME!</button>
            </div>
            <div className="wordpress-industries-section">
                <h2>
                    <span className="blue-text">Industries</span> We Have Served To Date
                </h2>
                <div className="industries-grid">
                    <div className="industry-card">
                        <img src={e} alt="Education" />
                        <p>Education</p>
                    </div>
                    <div className="industry-card">
                        <img src={t} alt="Transportation" />
                        <p>Transportation</p>
                    </div>
                    <div className="industry-card">
                        <img src={f} alt="Finance" />
                        <p>Finance</p>
                    </div>
                    <div className="industry-card">
                        <img src={m} alt="Media & Entertainment" />
                        <p>Media & Entertainment</p>
                    </div>
                    <div className="industry-card">
                        <img src={h} alt="Healthcare" />
                        <p>Healthcare</p>
                    </div>
                </div>
            </div>
            <div className="wordpress-rely-section">
                <h2><span className="blue-text">Why Should You</span> Rely On Us?</h2>
                <div className="rely-grid">
                    <div className="rely-card">
                        <img src={power} alt="Power Up Your Project" />
                        <h4>Power Up Your Project</h4>
                        <p>
                            Backed by a technological cognizance & an in-depth know-how of the current industry status quo, our WordPress web developers can play a nuclear role in turning your project visions into a reality – right from the stage of ideation to design to development to management & the final execution!
                        </p>
                    </div>
                    <div className="rely-card">
                        <img src={smallbiz} alt="Grow A Small Business" />
                        <h4>Grow A Small Business</h4>
                        <p>
                            To be a pioneer of success for your small business, we shall nestle a crew of experienced WordPress website developers for scaling your products, upgrading their overall efficacies with a constant maintenance & the inclusion of edgy features, functionalities et al!
                        </p>
                    </div>
                    <div className="rely-card">
                        <img src={results} alt="Foster Actionable Results" />
                        <h4>Foster Actionable Results</h4>
                        <p>
                            Even an established brand needs an edge over its competitors! Our developers & WordPress page speed optimization experts will help your brand scale better heights with premium yet affordable solutions, via which, you can bring more actionable insights in your enterprise operation, management & more!
                        </p>
                    </div>
                    <div className="rely-card">
                        <img src={inhouse} alt="In-House Resources" />
                        <h4>In-House Resources</h4>
                        <p>
                            Our WordPress development service providers will be at the forefront in being the binding force for supporting your in-house business resources & building more efficient tech units to quell your enterprise needs, keeping a tab on your visions, goals & intended audiences!
                        </p>
                    </div>
                </div>
                <button className="rely-btn">WANNA TALK? FIX A TIME!</button>
            </div>

        </div>
    );
};

export default WordpressSection;
