import React from "react";
import "../styles/Reactjs.css";
import reactHeroImage from "../assets/reactjshero.png"; // make sure path is correct
/*import logoShopify from "../assets/logoshopify.png";
import logoOracle from "../assets/logooracle.png";
import logoMTN from "../assets/logomtn.png";
import logoMTU from "../assets/logomtu.png";
import logoBCG from "../assets/logobcg.png";
import logoSancho from "../assets/logosancho.png";
import logoGoogle from "../assets/logoGoogle.png";
import logoWordpress from "../assets/logoWordpress.png";
import logoMagento from "../assets/logoMagento.png";*/
import iconSpeed from "../assets/iconSpeed.png";
import iconSeo from "../assets/iconSeo.png";
import iconSecure from "../assets/iconSecure.png";
import iconPerformance from "../assets/iconPerformance.png";
import reactStandoutImage from "../assets/reactStandoutImage.png";
import iconPerformance1 from "../assets/visible.png";
import iconPerformance2 from "../assets/visible.png";
import iconPerformance3 from "../assets/visible.png";
import iconPerformance4 from "../assets/visible.png";
import iconPerformance5 from "../assets/visible.png";
import iconPerformance6 from "../assets/visible.png";
import iconTransport from "../assets/iconTransport.png";
import iconFinance from "../assets/iconFinance.png";
import iconMedia from "../assets/iconMedia.png";
import iconHealthcare from "../assets/iconHealthcare.png";
import iconEducation from "../assets/iconEducation.png";

const Reactjs = () => {
    /*const logos = [
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
        <div className="react-hero-section">
            <div className="react-hero-left">
                <h1>
                    <span className="blue-text">ReactJS</span><br />
                    Development Company
                </h1>
                <p>
                    Understanding your need, our React.js developers will build you web or hybrid mobile apps,
                    which boast of robustness & amazing UX!
                </p>
                <button className="react-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="react-hero-right">
                <img src={reactHeroImage} alt="ReactJS Illustration" />
            </div>
            
            <div className="react-standout-section">
                <div className="react-standout-left">
                    <h2>
                        <span className="blue-text">What Makes React.js Development</span> Stand Out?
                    </h2>

                    <div className="standout-feature">
                        <img src={iconSpeed} alt="Speedy Icon" />
                        <div>
                            <h4>Speedy And Scalable</h4>
                            <p>Exploring the component-based nature, our React JS developers can convert designs in codes a lot faster...</p>
                        </div>
                    </div>

                    <div className="standout-feature">
                        <img src={iconSeo} alt="SEO Icon" />
                        <div>
                            <h4>Search Engine Friendly</h4>
                            <p>Cutting short on the overall page load time & allowing search engine crawlers to index React.js apps with ease...</p>
                        </div>
                    </div>

                    <div className="standout-feature">
                        <img src={iconSecure} alt="Secure Icon" />
                        <div>
                            <h4>Stability Ensured</h4>
                            <p>React.js is devoid of patent-related threats and ensures stability & supportability for every project...</p>
                        </div>
                    </div>

                    <div className="standout-feature">
                        <img src={iconPerformance} alt="Performance Icon" />
                        <div>
                            <h4>Optimum Performance</h4>
                            <p>With virtual DOM and server-side rendering, React apps perform better and faster even when complex...</p>
                        </div>
                    </div>

                    <button className="cta-talk-btn">WANNA TALK? FIX A TIME!</button>
                </div>

                <div className="react-standout-right">
                    <img src={reactStandoutImage} alt="React Standout Illustration" />
                </div>
            </div>
            <div className="react-nutshell-section">
                <h2><span className="blue-text">React.js Development Services</span> In A Nutshell</h2>
                <div className="nutshell-grid">
                    <div className="nutshell-card">
                        <img src={iconPerformance1} alt="Web Development" />
                        <h4>Web Development</h4>
                        <p>Leveraging the flexible & less complex JavaScript-centered framework of React.js, we can custom-build robust applications...</p>
                    </div>
                    <div className="nutshell-card">
                        <img src={iconPerformance2} alt="E-commerce Solutions" />
                        <h4>E-commerce Solutions</h4>
                        <p>As a leading React.js web development company, we are aimed at enhancing your E-commerce website with certain features...</p>
                    </div>
                    <div className="nutshell-card">
                        <img src={iconPerformance3} alt="SPA Development" />
                        <h4>SPA Development</h4>
                        <p>Get highly responsive Single Page Applications, capable of loading any single HTML page and updating content instantly...</p>
                    </div>
                    <div className="nutshell-card">
                        <img src={iconPerformance4} alt="Thorough Support" />
                        <h4>A Thorough Support</h4>
                        <p>We offer SEO-friendly, scalable mobile/web apps with strong maintenance, constant support, and enhancements...</p>
                    </div>
                    <div className="nutshell-card">
                        <img src={iconPerformance5} alt="Migration" />
                        <h4>A Hassle-Free Migration</h4>
                        <p>Our React.js team helps you migrate apps from other platforms efficiently, including template integration and APIs...</p>
                    </div>
                    <div className="nutshell-card">
                        <img src={iconPerformance6} alt="Dedicated Dev" />
                        <h4>Dedicated Development</h4>
                        <p>Hire React.js developers full-time/part-time/hourly to build premium web & mobile apps tailored to your budget and timeline...</p>
                    </div>
                </div>
                <button className="cta-talk-btn">WANNA TALK? FIX A TIME!</button>
            </div>
            <div className="react-industries-section">
                <h2>
                    <span className="blue-text">Industries</span> We Have Served To Date
                </h2>
                <div className="industries-grid">
                    <div className="industry-card">
                        <img src={iconTransport} alt="Transportation" />
                        <p>Transportation</p>
                    </div>
                    <div className="industry-card">
                        <img src={iconFinance} alt="Finance" />
                        <p>Finance</p>
                    </div>
                    <div className="industry-card">
                        <img src={iconMedia} alt="Media & Entertainment" />
                        <p>Media & Entertainment</p>
                    </div>
                    <div className="industry-card">
                        <img src={iconHealthcare} alt="Healthcare" />
                        <p>Healthcare</p>
                    </div>
                    <div className="industry-card">
                        <img src={iconEducation} alt="Education" />
                        <p>Education</p>
                    </div>
                </div>
            </div>
            <div className="react-rely-section">
                <h2><span className="blue-text">Why Should You</span> Rely On Us?</h2>
                <div className="rely-grid">
                    <div className="rely-card">
                        <h4>Power Up Your Project</h4>
                        <p>
                            Leveraging cutting-edge features i.e. virtual DOM, server rendering & component reusability,
                            our proficient React.js development experts can help your project visions emerge with flying colors –
                            right from the stage of ideation to design to development to management & the final execution!
                        </p>
                    </div>
                    <div className="rely-card">
                        <h4>Grow A Small Business</h4>
                        <p>
                            To be a pioneer of success for your small business, we shall nestle a crew of experienced React.js developers
                            for scaling your products, upgrading their overall efficacies with a constant maintenance & the inclusion of edgy features.
                        </p>
                    </div>
                    <div className="rely-card">
                        <h4>Foster Actionable Results</h4>
                        <p>
                            Even an established brand needs a boost to stay put amidst competition! Our React.js front-end developers
                            can help your brand scale better heights with quality-driven yet affordable solutions,
                            bringing more actionable insights into your enterprise operation, management, etc.
                        </p>
                    </div>
                    <div className="rely-card">
                        <h4>In-House Resources</h4>
                        <p>
                            Our React.js development company will be the binding force for supporting your in-house business resources & building
                            more efficient tech units to quench your enterprise needs – keeping a tab on your visions, goals & intended audiences!
                        </p>
                    </div>
                </div>
                <button className="cta-talk-btn">WANNA TALK? FIX A TIME!</button>
            </div>

        </div>
    );
};

export default Reactjs;
