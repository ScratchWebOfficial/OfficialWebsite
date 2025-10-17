// WordpressSection.jsx

import React from "react";
import "../styles/WordpressSection.css";
import wordpressHeroImg from "../assets/wordpresshero.png"; // Update path if needed
import wpStandoutImg from "../assets/wordpressstandout.png";
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
                    <span className="blue-text">Choose The Best</span> <br />
                    Drupal Developers
                </h1>
                <p>
                    Whether you need user-friendly sites, robust web apps or one-user blogs, our dedicated Drupal developers and consultants can ace the deal!
                </p>
                <button className="wordpress-hero-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="wordpress-hero-right">
                <img src={wordpressHeroImg} alt="WordPress Development" />
            </div>
            <div className="wordpress-standout-section">
                <div className="wordpress-standout-left">
                    <h2>
                        <span className="blue-text">Why Should You Pick</span> Drupal Development Services?
                    </h2>
                    <div className="standout-features">
                        <div className="feature-box">
                            <img src={mobile} alt="Mobile Responsive" />
                            <div>
                                <h4>Fully Mobile Responsive</h4>
                                <p>
                                    Drupal is second to none when it comes to creating mobile-friendly web designs! Hire our Drupal web developers to build mobile-first websites & improve user experience with responsive administration, themes, images, modules, etc.
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <img src={seo} alt="SEO Friendly" />
                            <div>
                                <h4>Multilingual – Another Perk!</h4>
                                <p>
                                    Besides having built-in multilingual handling abilities, Drupal streamlines content configuration, site interface translation, multilingual module installation, language negotiation, etc. Exploring these features, our Drupal web development services can localize your audiences’ digital experience.
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <img src={cms} alt="Power CMS" />
                            <div>
                                <h4>Search Engine Friendly</h4>
                                <p>
                                    As a leading Drupal development company, we shall help you explore the edgiest modules to implement the best search engine practice, incorporate result-yielding keywords in your title tags & index your page with ease!
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <img src={custom} alt="Customizable" />
                            <div>
                                <h4>Seamless Content Management</h4>
                                <p>
                                    Leveraging its edgy Field, Entity & Form APIs, coupled with some built-in modules i.e. menu, taxonomy, content type, etc., our Drupal certified developers can help you manage, structure, organize & filter your contents.
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <img src={inter} alt="Enhanced Interface" />
                            <div>
                                <h4>Highly Scalable</h4>
                                <p>
                                    Built on the highly customizable LAMP platform, Drupal spells scalability in spade! Leveraging its integrated systems & API-first characteristics, our Drupal web development service providers can build small-scale apps, complex infrastructure & scalable software!
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <img src={cost} alt="Cost-Effective" />
                            <div>
                                <h4>API-Driven Approach</h4>
                                <p>
                                    Driven by the API-first approach of Drupal, we can custom build robust applications. Whether you need behind-the-scene software written on PHP/Java or a front-end framework as React, our Drupal developers shall get you covered!
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
                    Our <span className="blue-text">Services</span> In A Nutshell
                </h2>
                <div className="services-grid">
                    <div className="service-card">
                        <img src={custom} alt="Custom Web Development" />
                        <h4>Web App Development</h4>
                        <p>
                            As the forerunner among India’s top Drupal web development companies, we shall build you customizable & mobile responsive web applications as per your need. Thanks to our years-long expertise, we could be instrumental in creating robust, attractive & dynamic websites for your business.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src={custom} alt="Theme Creation" />
                        <h4>E-commerce Solutions</h4>
                        <p>
                            As a leading Drupal web development company, we are aimed at enhancing your E-commerce website with the inclusion of certain edgy features including, product detail page, shopping cart & more! Avail our React.js services to delight your consumers with a seamless rendering & user experience.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src={custom} alt="PSD to WordPress" />
                        <h4>SPA Development</h4>
                        <p>
                            Pick our Drupal application development experts to get highly responsive Single Page Application, capable of loading any single HTML page. The SPAs could be updated automatically whenever a user starts interacting with the page. Since these apps don’t need continuous page reloading, a very little bandwidth will be required.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src={custom} alt="API Integration" />
                        <h4>A Thorough Support</h4>
                        <p>
                            Besides delivering SEO-friendly, feature-packed, robust & fully secure mobile & web apps in the mentioned time, our Drupal programmers will boost your React.js applications’ overall efficacy & performance with a thorough maintenance, a constant support, feature enhancement, tech upgrade & more!
                        </p>
                    </div>
                    <div className="service-card">
                        <img src={custom} alt="Enterprise Apps" />
                        <h4>A Hassle-Free Migration</h4>
                        <p>
                            The expert Drupal developers of Wordsys Tech can assist you in migrating your apps to React.js, be it for an application which is already running on another framework or was built upon any other template system. Besides, we can assist you in third party integration of API.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src={custom} alt="Maintenance & Security" />
                        <h4>Dedicated Development</h4>
                        <p>
                            You can hire Drupal developers from our dedicated development team on a part-time, full-time or hourly basis! Leveraging the highly flexible & less complex JavaScript framework of React.js, our dedicated developers shall build you premium mobile & web apps, keeping your project requisite, budget, etc. into a serious consideration.
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
                        <h4>Get Your Start-Up Growing Better</h4>
                        <p>
                            Hire our skilled and experienced Drupal developers to build a dynamic, robust and sophisticated website for your start-up business. Structure or manage your web contents with our scalable, secure and flexible Drupal web development services. This open-source CMS framework is free to download, extend or use. This will help you get over your need to overspend your money!
                        </p>
                    </div>
                    <div className="rely-card">
                        <img src={smallbiz} alt="Grow A Small Business" />
                        <h4>A Perfect Pal For Your Small Business</h4>
                        <p>
                            Backed by Drupal’s built-in modules i.e. menu, content-type, taxonomy, etc., you can organize, filter and structure your website contents with ease! You can build your small business a robust website using features like microblogging, caching mechanism, etc. Hire dedicated Drupal developers to manage your online orders, products, customer profiles, etc. with custom Drupal e-commerce solutions.
                        </p>
                    </div>
                    <div className="rely-card">
                        <img src={results} alt="Foster Actionable Results" />
                        <h4>Boost Your Large-Scale Venture</h4>
                        <p>
                            Your large-scale business needs a futuristic website or some robust web apps to drive more engagement. From ideation to design to development and deployment – our Drupal certified developers will take care of everything. Making most of the highly versatile CMS platform, we shall build you high-performing web apps and engaging websites, keeping your needs and budget in mind.</p></div>
                    <div className="rely-card">
                        <img src={inhouse} alt="In-House Resources" />
                        <h4>Explore Drupal For Your Software Hub</h4>
                        <p>
                            From UI & UX design to theme development for your website to 3-party feature integration to custom module development to maintenance and support – our Drupal web developers will provide you services of highest standard. Commitment to quality, budget-friendly services, bespoke solutions and faster turn-around – our customer-centric solutions speak volumes about our expertise and reputation.
                   </p> </div>
                </div>
                <button className="rely-btn">WANNA TALK? FIX A TIME!</button>
            </div>

        </div>
    );
};

export default WordpressSection;
