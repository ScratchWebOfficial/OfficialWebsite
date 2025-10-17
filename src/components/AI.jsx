import React from "react";
import "../styles/AI.css";
import aiHeroImage from "../assets/ai-hero.png"; // Make sure the image name matches
import a from "../assets/ai-leverage.png";
import ai from "../assets/ai-geny.png";
import aii from "../assets/ai-ideate.png";
import aiii from "../assets/ai-profitable.png";
import aiiii from "../assets/ai-assistance.png";
import aiiiii from "../assets/ai-techfrontier.png";
import aiiiiii from "../assets/ai-future.png";
import di from "../assets/ai-discovery.png";
import as from "../assets/ai-assessment.png";
import de from "../assets/ai-development.png";
import su from "../assets/ai-support.png";
import aiv from "../assets/ai-vision.png";
import aig from "../assets/ai-growth.png";


export default function AI() {
    return (
        <section className="ai-hero-section">
            <div className="ai-hero-left">
                <h1>
                    <span className="blue-text">AI Isn’t The Future</span>
                    <br />
                    It’s Now!
                </h1>
                <p>
                    With our data-driven AI solutions, you can unravel the intelligent value across different
                    business verticals and deliver smarter performance.
                </p>
                <button className="ai-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="ai-hero-right">
                <img src={aiHeroImage} alt="AI Illustration" />
            </div>
            <section className="ai-feature-section">
                <div className="ai-feature-card">
                    <img src={a} alt="Leverage Icon" />
                    <h3><span className="blue-text">Leverage</span> Your Brand</h3>
                    <p>Step up the overall growth of your business and outcomes with intuitive AI & real-time data.</p>
                </div>

                <div className="ai-feature-card">
                    <img src={ai} alt="Gen-Y Icon" />
                    <h3><span className="blue-text">Build</span> Gen-Y Enterprise</h3>
                    <p>Re-invent your journey of growth with the facets of our services, integrated in AI and advanced analytics.</p>
                </div>

                <div className="ai-feature-card">
                    <img src={aii} alt="Ideate Icon" />
                    <h3><span className="blue-text">Ideate Better</span>, Perform Smarter</h3>
                    <p>Backed by our futuristic and trailblazing AI solutions, you can architect smarter business ideas and perform better.</p>
                </div>
            </section>
            <section className="ai-profitable-section">
                <div className="ai-profitable-left">
                    <img src={aiii} alt="AI Illustration" />
                </div>

                <div className="ai-profitable-right">
                    <h2><span className="blue-text">AI – For a More</span> Profitable Tomorrow</h2>
                    <p>Combining AI-agonistic strategies with our in-depth industry knowledge, we can help you crack your goals, enhance business outcomes and improve user experience.</p>

                    <div className="ai-profitable-feature">
                        <img src={aiiii} alt="24x7 Icon" />
                        <div>
                            <h4>24x7 Assistance</h4>
                            <p>Get uninterrupted customer support with the best practices of AI, embedded in our industry best services.</p>
                        </div>
                    </div>

                    <div className="ai-profitable-feature">
                        <img src={aiiiii} alt="Tech Icon" />
                        <div>
                            <h4>Latest Tech Frontiers</h4>
                            <p>Let our industry-agonistic AI strategies help you to push your brand to the advanced frontier of technology.</p>
                        </div>
                    </div>

                    <div className="ai-profitable-feature">
                        <img src={aiiiiii} alt="Future Icon" />
                        <div>
                            <h4>Tap Into the Future</h4>
                            <p>Exploring AI, analytics and data science, we shall make your business ready for the futuristic challenges and transformations.</p>
                        </div>
                    </div>

                    <button className="ai-profitable-btn">SCHEDULE A MEETING</button>
                </div>
            </section>
            <section className="ai-process-section">
                <div className="ai-process-card">
                    <img src={di} alt="Data Discovery" />
                    <h4>Data Discovery</h4>
                    <p>
                        We evaluate the potential of your data, software technology and infrastructure
                        to deploy the best AI workflow for your brand.
                    </p>
                    <span className="step-number">01</span>
                </div>

                <div className="ai-process-card">
                    <img src={as} alt="Assessment" />
                    <h4>Assessment</h4>
                    <p>
                        Reviewing the existing processes, workflows and operations, we will determine
                        which AI solutions could be beneficial for your business.
                    </p>
                    <span className="step-number">02</span>
                </div>

                <div className="ai-process-card">
                    <img src={de} alt="Development" />
                    <h4>Development</h4>
                    <p>
                        Experimenting on a small-scale system, we demonstrate the right AI technologies
                        in your business and improvise your services.
                    </p>
                    <span className="step-number">03</span>
                </div>

                <div className="ai-process-card">
                    <img src={su} alt="Support" />
                    <h4>Adequate Support</h4>
                    <p>
                        Upon understanding your business type and needs thoroughly, our AI and ML developer
                        will offer adequate support for on-going operations.
                    </p>
                    <span className="step-number">04</span>
                </div>
            </section>

            <div className="ai-solution-section">
                {/* Block 1 */}
                <div className="ai-solution-block">
                    <div className="ai-solution-image">
                        <img src={aiv} alt="AI Vision" />
                    </div>
                    <div className="ai-solution-content">
                        <h2><span className="blue-text">You Dream,</span><br />We Shall Formulate The Best AI Solutions</h2>
                        <p>
                            Get your brand future-ready and set to adapt to the changing whims of today’s competitive market.<br /><br />
                            We are aimed to get your business AI-first, thereby making it future-ready. In this day and age,
                            execution translates into owning a power-packed marketing strategy based on real-time data and AI technologies.
                            With Wordsys, an AI software development company you can ideate, market, and boost your business,
                            thereby scaling enterprise heights never seen before.
                        </p>
                        <button className="ai-btn">Explore Now</button>
                    </div>
                </div>

                {/* Block 2 */}
                <div className="ai-solution-block reverse">
                    <div className="ai-solution-image">
                        <img src={aig} alt="AI Growth" />
                    </div>
                    <div className="ai-solution-content">
                        <h2><span className="blue-text">Steer Your Business Growth</span><br />With Our Intuitive & Comprehensive AI Solutions</h2>
                        <p>
                            Let our AI-powered techniques drive your business forward using tailored solutions and predictive models.
                        </p>
                        <button className="ai-btn">Have Any Project On Mind?</button>
                    </div>
                </div>
            </div>

        </section>
    );
}
