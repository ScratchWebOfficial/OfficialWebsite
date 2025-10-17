import React from "react";
import "../styles/SoftwareDevItOpsSection.css";
import softwareImg from "../assets/softwaredevitops.png";
/*import logoShopify from "../assets/logoshopify.png";
import logoOracle from "../assets/logooracle.png";
import logoMTN from "../assets/logomtn.png";
import logoMTU from "../assets/logomtu.png";
import logoBCG from "../assets/logobcg.png";
import logoSancho from "../assets/logosancho.png";
import logoGoogle from "../assets/logoGoogle.png";
import logoWordpress from "../assets/logoWordpress.png";
import logoMagento from "../assets/logoMagento.png";*/
import education from "../assets/education.png";
import transportation from "../assets/transportation.png";
import finance from "../assets/finance.png";
import media from "../assets/media.png";
import healthcare from "../assets/healthcare.png";
import devopsgoal from "../assets/devopsgoal.png";
import portfolioMockup from "../assets/portfolioMockup.png";


const SoftwareDevItOpsSection = () => {
  /*  const logos = [
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
        <>
            {/* Hero Section */}
            <div className="software-hero-section">
                <div className="software-left">
                    <h1>
                        <span className="blue-text">Software Development &</span><br />
                        <span className="dark-text">IT Operation</span>
                    </h1>
                    <p className="software-subtext">
                        Fuel Your Business Growth with Premium Quality and Better Agility
                    </p>
                    <button className="software-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="software-right">
                    <img src={softwareImg} alt="Software Development and IT Operation Illustration" />
                </div>
            </div>

            {/* Logo Carousel BEFORE Services Section */}
          
            {/* Services Section */}
            <div className="opd-services-section">
                <p className="opd-services-subtitle">End-To-End</p>
                <h2 className="opd-services-title">Outsourced Product Development Services</h2>

                <div className="opd-services-grid">
                    <div className="opd-service-card">
                        <i className="fas fa-heart"></i>
                        <h4>Product Testing</h4>
                        <p>
                            Our software development company comprises an experienced team of testing experts who will take your business to all new heights...
                        </p>
                        <a href="#">Discover More</a>
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-tools"></i>
                        <h4>Maintenance and Product Support</h4>
                        <p>
                            The experts of our IT solutions company will ensure the best customer service possible by updating your applications...
                        </p>
                        <a href="#">Discover More</a>
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-cloud-upload-alt"></i>
                        <h4>Software Deployment</h4>
                        <p>
                            Our developers ensure timely deployment of software products to expedite the development process...
                        </p>
                        <a href="#">Discover More</a>
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-pencil-ruler"></i>
                        <h4>Designing and Engineering</h4>
                        <p>
                            Our skilled developers ensure top-notch UI, UX, and technical soundness for robust software across platforms...
                        </p>
                        <a href="#">Discover More</a>
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-cubes"></i>
                        <h4>MVP Development</h4>
                        <p>
                            We build Minimum Viable Products for your brand, helping you test early assumptions and iterate fast...
                        </p>
                        <a href="#">Discover More</a>
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-sync-alt"></i>
                        <h4>Re-engineering and Transformation</h4>
                        <p>
                            We re-engineer old systems with premium technologies, improving performance, design, and functionality...
                        </p>
                        <a href="#">Discover More</a>
                    </div>
                </div>
                {/* Tools and Services Section */}
                <div className="tools-benefit-section">
                    <h2 className="tools-benefit-heading">
                        <span className="blue-text">How Our Tools and Services</span> Will Prove Beneficial?
                    </h2>

                    <div className="tools-benefit-grid">
                        <div className="tool-card">
                            <h4>Collaboration</h4>
                            <p>
                                Our DevOps consulting services provider are going to make your understanding about DevOps better
                                and in turn drastically improve the collaboration your team members have with each other. We will
                                also guide you through using our tools.
                            </p>
                        </div>

                        <div className="tool-card">
                            <h4>Security Scanning</h4>
                            <p>
                                The DevOps service providers of our company are going to perform extensive security scanning, which
                                will help you choose the most suitable from the list of supported operating systems.
                            </p>
                        </div>

                        <div className="tool-card">
                            <h4>Security</h4>
                            <p>
                                Make use of our top-quality security tools, which will allow you to manage certificates across various
                                cloud environments. These tools will also give you access to immensely secure passwords which are
                                tuned for RBAC.
                            </p>
                        </div>

                        <div className="tool-card">
                            <h4>Software Scanning</h4>
                            <p>
                                Our DevOps software development team is equipped with security scanning techniques and tools that
                                will keep your software completely bug free. Our tools will also provide you information about the
                                source code.
                            </p>
                        </div>

                        <div className="tool-card">
                            <h4>Cloud Environment</h4>
                            <p>
                                Provide a boost to the efficiency of your business, by building public environments and private data
                                centers. Use our set of high-quality tools, to create a hybrid cloud environment.
                            </p>
                        </div>

                        <div className="tool-card">
                            <h4>Automated Workflow</h4>
                            <p>
                                Our agile software development company has the ability to provide you with best-in-class automation
                                tools. This is one of our DevOps services, which speeds up the deployment process, drastically improves
                                code velocity and makes you free from time consuming manual tasks.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Industries Section */}
                <div className="industries-served-section">
                    <h2 className="industries-title">
                        <span className="blue-text">Industries</span> We Have Served To Date
                    </h2>
                    <div className="industries-grid">
                        <div className="industry-card">
                            <img src={education} alt="Education" />
                            <p>Education</p>
                        </div>
                        <div className="industry-card">
                            <img src={transportation} alt="Transportation" />
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
                            <img src={healthcare} alt="Healthcare" />
                            <p>Healthcare</p>
                        </div>
                    </div>
                </div>
                {/* Our Ultimate Goal Section */}
                <div className="our-goal-section">
                    <div className="goal-image">
                        <img src={devopsgoal} alt="DevOps Goal" />
                    </div>
                    <div className="goal-content">
                        <h5 className="goal-subtitle">Our Ultimate Goal</h5>
                        <h2 className="goal-title">
                            We Aim To Dominate Our Competition <br />
                            In Each And Every Aspect of Full Stack WebDevelopment.
                        </h2>
                        <hr className="goal-divider" />
                        <p className="goal-description">
                            Our DevOps services company comprises highly skilled and trained developers who can
                            provide top-notch back-end and front-end development solutions that will completely
                            revamp your brand's online presence. We are focused on achieving new milestones in the
                            market through our DevOps consulting services.
                        </p>
                        <ul className="goal-features">
                            <li>Take assistance from our experts who have nine years of experience</li>
                            <li>We always strive to make use of the latest technology</li>
                            <li>Our project managers are immensely dedicated and professional</li>
                            <li>We sign a non-disclosure agreement with you for the utmost confidentiality</li>
                            <li>We provide you complete guidance starting from the first till the last stage of development</li>
                        </ul>
                        <button className="goal-btn">SCHEDULE A MEETING</button>
                    </div>
                </div>
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

export default SoftwareDevItOpsSection;
