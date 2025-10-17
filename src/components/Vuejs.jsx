import React from "react";
import "../styles/Vuejs.css";
import vueHeroImage from "../assets/vuehero.png"; // ensure this image path is correct
/*import logoShopify from "../assets/logoshopify.png";
import logoOracle from "../assets/logooracle.png";
import logoMTN from "../assets/logomtn.png";
import logoMTU from "../assets/logomtu.png";
import logoBCG from "../assets/logobcg.png";
import logoSancho from "../assets/logosancho.png";
import logoGoogle from "../assets/logoGoogle.png";
import logoWordpress from "../assets/logoWordpress.png";
import logoMagento from "../assets/logoMagento.png";*/
import edu from "../assets/edu.png";
import trans from "../assets/trans.png";
import financ from "../assets/financ.png";
import med from "../assets/med.png";
import health from "../assets/health.png";

const Vuejs = () => {
   /* const logos = [
        logoShopify,
        logoOracle,
        logoMTN,
        logoMTU,
        logoBCG,
        logoSancho,
        logoGoogle,
        logoWordpress,
        logoMagento,
    ];*/
    return (
        <div className="vue-hero-section">
            <div className="vue-hero-left">
                <h1>
                    <span className="blue-text">Vue JS</span><br />
                    Development Company
                </h1>
                <p>
                    Understanding your need, hire our Vuejs developers who will build you web or hybrid mobile apps,
                    which boast of robustness & amazing UX!
                </p>
                <button className="vue-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="vue-hero-right">
                <img src={vueHeroImage} alt="Vue JS Illustration" />
            </div>

            
            <div className="opd-services-section">
                <p className="opd-services-subtitle">End-To-End</p>
                <h2 className="opd-services-title">Outsourced Product Development Services</h2>

                <div className="opd-services-grid">
                    <div className="opd-service-card">
                        <i className="fas fa-heart"></i>
                        <h4>Product Testing</h4>
                        <p>
                            Our software development company comprises an experienced team of testing experts who will take your business to all new heights.
                        </p>
                        
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-tools"></i>
                        <h4>Maintenance and Product Support</h4>
                        <p>
                            The experts of our IT solutions company will ensure the best customer service possible by updating your applications.
                        </p>
                        
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-cloud-upload-alt"></i>
                        <h4>Software Deployment</h4>
                        <p>
                            Our developers ensure timely deployment of software products to expedite the development process.
                        </p>
                        
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-pencil-ruler"></i>
                        <h4>Designing and Engineering</h4>
                        <p>
                            Our skilled developers ensure top-notch UI, UX, and technical soundness for robust software across platforms.
                        </p>
                        
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-cubes"></i>
                        <h4>MVP Development</h4>
                        <p>
                            We build Minimum Viable Products for your brand, helping you test early assumptions and iterate fast.
                        </p>
                        
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-sync-alt"></i>
                        <h4>Re-engineering and Transformation</h4>
                        <p>
                            We re-engineer old systems with premium technologies, improving performance, design, and functionality.
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className="vuejs-devservices-section">
                <h2><span className="highlight-blue">VueJS</span> Development <span>Services</span></h2>
                <div className="vuejs-devservices-grid">
                    <div className="vuejs-dev-card">
                        <i className="fas fa-award"></i>
                        <h4>Premium Application Development</h4>
                        <p>Our VueJS development company has the experience of developing VueJS applications for massive enterprises.</p>
                       
                    </div>
                    <div className="vuejs-dev-card">
                        <i className="fas fa-layer-group"></i>
                        <h4>Single-Page Applications</h4>
                        <p>Our VueJS developers are proficient in even the most minute forms of technical app development.</p>
                        
                    </div>
                    <div className="vuejs-dev-card">
                        <i className="fas fa-random"></i>
                        <h4>VueJS Migration</h4>
                        <p>If you decide to migrate all your applications to the VueJS framework, we will guide you through the process.</p>
                        
                    </div>
                    <div className="vuejs-dev-card">
                        <i className="fas fa-mobile-alt"></i>
                        <h4>Native App Development</h4>
                        <p>Our dedicated VueJS developers make use of the Vue native CLI to create Vue native applications.</p>
                        
                    </div>
                    <div className="vuejs-dev-card">
                        <i className="fas fa-tools"></i>
                        <h4>VueJS Maintenance</h4>
                        <p>We have a team of reliable and dedicated maintenance experts to support your VueJS apps and websites.</p>
                        
                    </div>
                    <div className="vuejs-dev-card">
                        <i className="fas fa-chart-bar"></i>
                        <h4>Enticing Dashboards</h4>
                        <p>Our skilled VueJS experts help build attractive, interactive dashboards to keep users engaged from the start.</p>
                       
                    </div>
                </div>
                <div className="vuejs-devservices-btn">
                    <button className="vue-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>

            {/* Industries Served Section */}
            <div className="vue-industries-section">
                <h2>
                    <span className="vue-blue">Industries</span> We Have Served To Date
                </h2>
                <div className="vue-industries-grid">
                    <div className="industry-card">
                        <img src={edu} alt="Education" />
                        <p>Education</p>
                    </div>
                    <div className="industry-card">
                        <img src={trans} alt="Transportation" />
                        <p>Transportation</p>
                    </div>
                    <div className="industry-card">
                        <img src={financ} alt="Finance" />
                        <p>Finance</p>
                    </div>
                    <div className="industry-card">
                        <img src={med} alt="Media & Entertainment" />
                        <p>Media & Entertainment</p>
                    </div>
                    <div className="industry-card">
                        <img src={health} alt="Healthcare" />
                        <p>Healthcare</p>
                    </div>
                </div>
            </div>
            <div className="vue-benefitassoc-section">
                <h2>
                    <span className="vue-blue">How Can You Benefit By</span> Associating With Wordsystech?
                </h2>
                <div className="vue-benefitassoc-grid">
                    <div className="benefitassoc-card">

                        <h4>Startups</h4>
                        <p>Our VueJS developer will be at your service from the very early stages of business development.</p>
                    </div>
                    <div className="benefitassoc-card">

                        <h4>Small-Scale Businesses</h4>
                        <p>We assign top VueJS developers to ensure your small business leaves a mark and continues to grow.</p>
                    </div>
                    <div className="benefitassoc-card">

                        <h4>Large-Scale Enterprises</h4>
                        <p>We offer automation-focused solutions for scaling enterprises and maximizing profitability.</p>
                    </div>
                    <div className="benefitassoc-card">

                        <h4>Software Development Companies</h4>
                        <p>We use top-level tools to develop software that meets the highest industry standards.</p>
                    </div>
                </div>
                <div className="vue-benefitassoc-btn">
                    <button className="vue-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </div>

        </div>
    );
};

export default Vuejs;
