import React from "react";
import "../styles/OutsourcedProductSection.css";
import opdHeroImg from "../assets/opdhero.png";
import goalImg from "../assets/goalimage.png";

// Logos
/*import logoShopify from "../assets/logoshopify.png";
import logoOracle from "../assets/logooracle.png";
import logoMTN from "../assets/logomtn.png";
import logoMTU from "../assets/logomtu.png";
import logoBCG from "../assets/logobcg.png";
import logoSancho from "../assets/logosancho.png";
import logoGoogle from "../assets/logoGoogle.png";
import logoWordpress from "../assets/logoWordpress.png";
import logoMagento from "../assets/logoMagento.png";*/
import portfolioMockup from "../assets/portfolioMockup.png";

const OutsourcedProductSection = () => {
   /* const logos = [
        logoShopify,
        logoOracle,
        logoMTN,
        logoMTU,
        logoBCG,
        logoSancho,
        // Repeat logos to make the scroll loop look seamless
        logoGoogle,
        logoWordpress,
        logoMagento,
    ];
*/
    return (
        <>
            {/* Hero Section */}
            <div className="opd-hero-section">
                <div className="opd-left">
                    <h1>
                        <span className="highlight-blue">Outsourced Product</span><br />
                        <span className="highlight-dark">Development</span>
                    </h1>
                    <p>
                        Taking a note of your requisites & visions, we shall build customized & robust
                        <strong> Content Management Software</strong> solutions for your business!
                    </p>
                    <button className="opd-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="opd-right">
                    <img src={opdHeroImg} alt="Outsourced Product Development Illustration" />
                </div>
            </div>

        
            {/* OPD Services Section */}
            <div className="opd-services-section">
                <p className="opd-services-subtitle">End-To-End</p>
                <h2 className="opd-services-title">Outsourced Product Development Services</h2>

                <div className="opd-services-grid">
                    {/* Card 1 */}
                    <div className="opd-service-card">
                        <i className="fas fa-heart"></i>
                        <h4>Product Testing</h4>
                        <p>
                            Our software development company comprises an experienced team of testing experts who will take your business to all new heights.
                        </p>
                       
                    </div>
                    {/* Card 2 */}
                    <div className="opd-service-card">
                        <i className="fas fa-tools"></i>
                        <h4>Maintenance and Product Support</h4>
                        <p>
                            The experts of our IT solutions company will ensure the best customer service possible by updating your applications.
                        </p>
                        
                    </div>
                    {/* Card 3 */}
                    <div className="opd-service-card">
                        <i className="fas fa-cloud-upload-alt"></i>
                        <h4>Software Deployment</h4>
                        <p>
                            Our developers ensure timely deployment of software products to expedite the development process.
                        </p>
                      
                    </div>
                    {/* Card 4 */}
                    <div className="opd-service-card">
                        <i className="fas fa-pencil-ruler"></i>
                        <h4>Designing and Engineering</h4>
                        <p>
                            Our skilled developers ensure top-notch UI, UX, and technical soundness for robust software across platforms.
                        </p>
                        
                    </div>
                    {/* Card 5 */}
                    <div className="opd-service-card">
                        <i className="fas fa-cubes"></i>
                        <h4>MVP Development</h4>
                        <p>
                            We build Minimum Viable Products for your brand, helping you test early assumptions and iterate fast.
                        </p>
                       
                    </div>
                    {/* Card 6 */}
                    <div className="opd-service-card">
                        <i className="fas fa-sync-alt"></i>
                        <h4>Re-engineering and Transformation</h4>
                        <p>
                            We re-engineer old systems with premium technologies, improving performance, design, and functionality.
                        </p>
                        
                    </div>
                </div>

                <div className="opd-services-cta">
                   
                </div>
                <div className="opd-goal-section">
                    <div className="goal-left">
                        <p className="goal-subtitle">Our Ultimate Goal</p>
                        <h2>We Aim To Dominate Our Competition<br />In Each And Every Aspect of Full Stack Web Development.</h2>
                        <div className="goal-underline"></div>
                        <p className="goal-description">
                            Wordsys, as a <strong>outsourced product development company</strong>, we comprise highly skilled and trained developers who can provide top-notch back-end and front-end development solutions that will completely revamp your brand’s online presence. We are focused on achieving new milestones in the market through our software development services.
                        </p>
                        <ul className="goal-list">
                            <li>Take assistance from our experts who have nine years of experience</li>
                            <li>We always strive to make use of the latest technology</li>
                            <li>Our project managers are immensely dedicated and professional</li>
                            <li>We sign a non-disclosure agreement with you for the utmost confidentiality</li>
                            <li>We provide you complete guidance starting from the first till the last stage of development</li>
                        </ul>
                    </div>
                    <div className="goal-right">
                        <img src={goalImg} alt="Our Goal" />
                    </div>
                </div>
                {/* Portfolio Preview Section */}
                <div className="opd-portfolio-section">
                    <h2 className="portfolio-heading">
                        <span className="blue-text">Take a Sneak Peek</span> Into Our Portfolio
                    </h2>
                    <div className="portfolio-container">
                        <div className="portfolio-left">
                            <h4>Customer Service Chatbot System</h4>
                            <p>
                                Instaresponse is the customer service chatbot system that we developed for our clients.
                                We made sure that it included all the features that would grab a customer’s attention and retain it throughout...
                            </p>
                            <button className="portfolio-btn">READ MORE</button>
                            <div className="portfolio-arrow-left">&#x276E;</div>
                        </div>
                        <div className="portfolio-right">
                            <img src={portfolioMockup} alt="Portfolio Mockup" />
                            <div className="portfolio-arrow-right">&#x276F;</div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
};

export default OutsourcedProductSection;
