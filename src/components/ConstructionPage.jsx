import React from "react";
import "../styles/ConstructionPage.css";
import constructionImg from "../assets/construction.png";
import priyanshu from "../assets/construction-tablet.png"
import amit from "../assets/tablet.png"
import nikhil from "../assets/t.png"
import medal from "../assets/medal.png"
import p from "../assets/p.png"
import pr from "../assets/pr.png"
import geare from "../assets/geare.png"
import flow from "../assets/flow.png"
import delivery from "../assets/delivery.png"
import port from "../assets/port.png"
import { FaCube, FaCubes, FaRegClock } from "react-icons/fa";

const ConstructionPage = () => {
    return (
        <div className="construction-wrapper">
            {/* Hero Section */}
            <div className="construction-hero">
                <div className="hero-left">
                    <h1>
                        <span className="blue">Your Construction Vision,</span><br />
                        <span className="dark">Our Execution!</span>
                    </h1>
                    <p>Let’s Accomplish Your Goals With Our Tech Solutions</p>
                    <button>SCHEDULE A MEETING</button>
                </div>
                <div className="hero-right">
                    <img src={constructionImg} alt="Construction Illustration" />
                </div>
            </div>

            {/* Subheading */}
            <div className="construction-subheading">
                <span className="blue">Breathing Life</span> In Your <strong>Construction Dreams!</strong>
                <div className="underline"></div>
            </div>

            {/* Feature Cards */}
            <div className="construction-features">
                <div className="feature-card active">
                    <FaCube className="feature-icon" />
                    <h3>Tech Transcended with Innovation</h3>
                    <p>
                        We integrate the latest technologies & software solutions to foster
                        innovation across the construction value chains.
                    </p>
                </div>
                <div className="feature-card">
                    <FaCubes className="feature-icon" />
                    <h3>Embrace Augmented Reality</h3>
                    <p>
                        From planning to monitoring to accessing real-time data & more –
                        let’s help you streamline your construction process with right
                        technologies.
                    </p>
                </div>
                <div className="feature-card">
                    <FaRegClock className="feature-icon" />
                    <h3>Time Efficiency Re-Assured</h3>
                    <p>
                        To save your time & money, we integrate latest construction
                        technologies & software, custom-tailored as per your needs.
                    </p>
                </div>
            </div>
            {/* Why Pick Us Section */}
            <div className="why-pick-section">
                <h2><span className="blue">Why</span> Should You Pick Us?</h2>
                <div className="underline"></div>
                <div className="why-pick-cards">
                    <div className="why-card">
                        <img src="https://img.icons8.com/emoji/96/thumbs-up-light-skin-tone.png" alt="Ease In Ideation" />
                        <h3>Ease In Ideation</h3>
                        <p>
                            Leveraging cutting-edge technologies, we shall help you add simplicity & agility
                            to your project ideation, management & execution.
                        </p>
                    </div>
                    <div className="why-card">
                        <img src="https://img.icons8.com/fluency/96/stopwatch.png" alt="Detect Hazards Fast" />
                        <h3>Detect Hazards Fast</h3>
                        <p>
                            In a bid to bring down the rates of mishappening, we shall introduce you to
                            the finest hazard-detection software solutions.
                        </p>
                    </div>
                    <div className="why-card">
                        <img src="https://img.icons8.com/color/96/gear.png" alt="Modify Glitches Instantly" />
                        <h3>Modify Glitches Instantly</h3>
                        <p>
                            To save you from any kind of complexity involved in your project,
                            we make sure to provide you with the actual replica beforehand.
                        </p>
                    </div>
                </div>
            </div>
            {/* Project Management Section */}
            <div className="project-management-section">
                <div className="pm-left">
                    <h5 className="pm-subheading">Construction Project Management Simplified</h5>
                    <h2 className="pm-heading">
                        With State-Of-The-Art Tech And Software Solutions
                    </h2>
                    <p className="pm-description">
                        Imagine a world where construction management, facilities & productions are premium & leveraged
                        through a convergence of high-tech IT & software solutions. This is what smart construction is all about!
                        To foster agility & growth in your construction business, allow us to accelerate the process with
                        insight-driven & intelligent software & tech solutions.
                    </p>
                    <ul className="pm-list">
                        <li>We ensure well-structured project management & collaboration</li>
                        <li>We insist upon adopting & applying BIM for better presentation</li>
                        <li>Accurate, precise & comprehensive measurement of dimensions holds our emphasis</li>
                        <li>A constant examination of the site always tops our priority list</li>
                        <li>Competitive pricing & on-time delivery are our major USPs!</li>
                    </ul>
                    <button className="pm-button">KNOW MORE</button>
                </div>
                <div className="pm-right">
                    <img src={priyanshu} alt="Construction Management" />
                </div>
            </div>

            {/* Tech Shift Section */}
            <div className="tech-shift-section">
                <div className="tech-image">
                    <img
                        src={amit}
                        alt="Tech in Construction"
                    />
                </div>
                <div className="tech-content">
                    <p className="tech-subheading">Navigate The Tech-Shift In Construction</p>
                    <h2 className="tech-heading">With Our State-Of-The-Art Tech Solutions</h2>
                    <div className="underline left-underline"></div>
                    <p className="tech-paragraph">
                        At Wordsys, we drive innovation, agility and efficiency in your construction operations
                        with our best-in-class IT, tech and software productions. We have successfully led our clients
                        to develop more qualitative and customer-centric construction operational services.
                        Our approach prioritizes customer data gathered from multiple sources to develop actionable insights.
                        This leads to improved solutions, which allow contractors to respond more quickly and efficiently to their clients.
                    </p>
                    <button className="tech-button">START YOUR BUSINESS</button>
                </div>
            </div>
            {/* Tailor-Made Solutions Section */}
            <div className="tailor-made-section">
                <div className="tailor-left">
                    <p className="tailor-subheading">Improve Operations And Streamline Efficiency</p>
                    <h2 className="tailor-heading">With Tech And IT Solutions Tailor-Made By Us</h2>
                    <div className="underline left-underline"></div>
                    <p className="tailor-paragraph">
                        Owing to our unmatchable efficiency in construction-related project management & multiple
                        pre-construction solutions, we ensure that our clients receive optimum quality at a premium
                        pricing. Our aim for building a legacy of excellence & being the one-stop choice for your
                        construction-related needs have been accomplished with our skilled experts, who guarantee
                        quality, diligence & honesty.
                    </p>
                    <button className="tailor-button">KNOW MORE</button>
                </div>
                <div className="tailor-right">
                    <img
                        src={nikhil}
                        alt="Tailor-Made IT Solutions"
                    />
                </div>
            </div>
            {/* Stand Out Section */}
            <div className="standout-section">
                <h2 className="standout-heading">
                    <span className="blue">Reasons Why</span> <strong>We Stand Out In The Crowed!</strong>
                </h2>
                <div className="underline"></div>
                <div className="standout-grid">
                    <div className="standout-item">
                        <img src={medal} alt="Driving Value" />
                        <h4>Driving Value</h4>
                        <p>Into Your Projects</p>
                    </div>
                    <div className="standout-item">
                        <img src={p} alt="Delivering Success" />
                        <h4>Delivering Success</h4>
                        <p>For Your Project</p>
                    </div>
                    <div className="standout-item">
                        <img src={pr} alt="Premium Quality" />
                        <h4>Premium Quality</h4>
                        <p>Is 100% Guarantee</p>
                    </div>
                    <div className="standout-item">
                        <img src={geare} alt="Successful Execution" />
                        <h4>Successful Execution</h4>
                        <p>Is Re-Assured</p>
                    </div>
                    <div className="standout-item">
                        <img src={flow} alt="Flow Efficiency" />
                        <h4>Flow Efficiency</h4>
                        <p>Is Ensured</p>
                    </div>
                    <div className="standout-item">
                        <img src={delivery} alt="On-Time Delivery" />
                        <h4>On-Time Delivery</h4>
                        <p>Is A Promise</p>
                    </div>
                </div>
            </div>
            {/* Portfolio Section */}
            <div className="portfolio-section">
                <h2 className="portfolio-heading">
                    <span className="blue">Run A Glance</span> <strong>Through Our Portfolio</strong>
                </h2>
                <div className="underline"></div>
                <div className="portfolio-content">
                    <div className="portfolio-card">
                        <h3 className="portfolio-title">Document Management System</h3>
                        <p className="portfolio-description">
                            It is a feature-rich, affordable, and robust solution for all your document management needs.
                            It is a one-stop for all your digital document needs. File Master enables document scanning, storage, sharing & management with complete security.
                        </p>
                        <button className="portfolio-button">READ MORE</button>
                    </div>
                    <div className="portfolio-image">
                        <img src={port} alt="Portfolio Devices" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ConstructionPage;
