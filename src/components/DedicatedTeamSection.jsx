// DedicatedTeamSection.jsx

import React from "react";
import "../styles/DedicatedTeamSection.css";
import dedicatedImg from "../assets/dedicated-hero.png"; // Use the uploaded image
import iconImg from "../assets/icon-placeholder.png";
import local from "../assets/local-team.png";
import you from "../assets/you-receive.png";
import remote from "../assets/remote-team.png";
import iconImg1 from "../assets/team.png";
import icon from "../assets/dedicatedbird.png";
import image1 from "../assets/dedicatedimg1.png";
import image2 from "../assets/dedicatedimg2.png";
import image3 from "../assets/dedicatedimg3.png";
import image4 from "../assets/dedicatedimg4.png";
import image5 from "../assets/dedicatedimg5.png";
import image6 from "../assets/dedicatedimg6.png";



const DedicatedTeamSection = () => {
    return (
        <div className="dedicated-hero-section" id="dedicated-hero-section">
            <div className="dedicated-hero-text">
                <h1>
                    <span className="blue-text">Upgrade To The Future Of Development</span><br />
                    With Our Dedicated Software Development Team
                </h1>
                <p>
                    We Guarantee Faster Business Growth, Reduced Infrastructure Cost & On-Time Product Launch!!
                </p>
                <button className="dedicated-hero-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="dedicated-hero-image">
                <img src={dedicatedImg} alt="Dedicated Development Team Illustration" />
            </div>
            <div className="dedicated-demands-section" id="dedicated-demands-section">
                <h2>
                    <span className="blue-text">Dedicated To Fulfill Your Demands</span> & Exceed Your <br />
                    <span className="underline">Expectations</span>
                </h2>

                <div className="demand-card-container">
                    <div className="demand-card">
                        <img src={iconImg} alt="Software Dev Icon" />
                        <h3>Software Development</h3>
                        <p>
                            We credit our software development teams to build you robust software solutions, which
                            will channelize your business growth & fix complex challenges.
                        </p>
                    </div>

                    <div className="demand-card">
                        <img src={iconImg} alt="Quality Testing Icon" />
                        <h3>Quality Analysis & Testing</h3>
                        <p>
                            Conducting a rigorous testing & quality analysis, our dedicated software development
                            team will deliver the best customized software solutions for your business.
                        </p>
                    </div>

                    <div className="demand-card">
                        <img src={iconImg} alt="Mobile App Dev Icon" />
                        <h3>Mobile App Development</h3>
                        <p>
                            Scale greater business growth with B2B & B2C apps, built by our mobile app development
                            team, dedicated to help you conquer your development milestones!
                        </p>
                    </div>
                    <div className="demand-card">
                        <img src={iconImg} alt="Quality Testing Icon" />
                        <h3>Quality Analysis & Testing</h3>
                        <p>
                            Conducting a rigorous testing & quality analysis, our dedicated software development
                            team will deliver the best customized software solutions for your business.
                        </p>
                    </div>
                    <div className="demand-card">
                        <img src={iconImg} alt="Quality Testing Icon" />
                        <h3>Quality Analysis & Testing</h3>
                        <p>
                            Conducting a rigorous testing & quality analysis, our dedicated software development
                            team will deliver the best customized software solutions for your business.
                        </p>
                    </div>
                    <div className="demand-card">
                        <img src={iconImg} alt="Quality Testing Icon" />
                        <h3>Quality Analysis & Testing</h3>
                        <p>
                            Conducting a rigorous testing & quality analysis, our dedicated software development
                            team will deliver the best customized software solutions for your business.
                        </p>
                    </div>
                </div>
            </div>
            <div className="dedicated-benefits-section" id="dedicated-benefits-section">
                <h2>
                    <span className="blue-text">Our Software Development Teams</span> – Dedicatedly Fulfilling Your <br />
                    <span className="underline">Demands!</span>
                </h2>
                <p className="benefits-subtext">
                    Taking a note of your development visions, our dedicated development team shall be instrumental in adding real-time value to your project lifecycle,
                    fulfilling your quality requisites and delivering your products on time!
                </p>

                <div className="benefits-card-container">
                    <div className="benefits-card">
                        <img src={local} alt="Local Team" />
                        <h3>Our Local Team</h3>
                        <ul>
                            <li>Appoints The Best Talents</li>
                            <li>Sets Up Right Infrastructure</li>
                            <li>Ensures Rapid Iteration</li>
                            <li>Provides Early Feedback</li>
                            <li>Builds Suitable Coding & Architecture</li>
                            <li>Adopts Your Process</li>
                        </ul>
                    </div>

                    <div className="benefits-card">
                        <img src={you} alt="You Receive" />
                        <h3>You Receive</h3>
                        <ul>
                            <li>High Scalability</li>
                            <li>Proper Infrastructure</li>
                            <li>Suitable Process Setup</li>
                            <li>Downtime</li>
                            <li>Compensation Fees</li>
                            <li>Timely Delivery</li>
                        </ul>
                    </div>

                    <div className="benefits-card">
                        <img src={remote} alt="Remote Team" />
                        <h3>Our Remote Team</h3>
                        <ul>
                            <li>Recruits The Right Experts</li>
                            <li>Sets Up Suitable Infrastructure</li>
                            <li>Builds Suitable Coding & Architecture</li>
                            <li>Adopts Your Process</li>
                            <li>Provides Accurate Updates</li>
                            <li>Ensures Timely Delivery</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="dedicated-trust-section" id="dedicated-trust-section">
                <h2>
                    <span className="blue-text">What Makes Us Tick</span> & Worth Your Trust?
                </h2>
                <p className="trust-subtext">
                    With skilled coders, client-driven approach & versatile programmers’ team, we shall cultivate unmatchable
                    progress in your project lifecycle, greater efficiency in your product delivery & more transparency in the
                    pricing of overall product development.
                </p>

                <div className="trust-cards">
                    <div className="trust-card">
                        <img src={iconImg1} alt="Collab Icon" />
                        <h3>Collab With Skilled Developers</h3>
                        <p>
                            From our in-house development team, hire highly efficient developers to bring success in your development project.
                        </p>
                    </div>
                    <div className="trust-card">
                        <img src={iconImg1} alt="Admin Icon" />
                        <h3>Seamless Administration</h3>
                        <p>
                            Whether it’s to set contract, build a team, handle payroll operation, NDA or logistics,
                            our dedicated developers will manage everything!
                        </p>
                    </div>
                    <div className="trust-card">
                        <img src={iconImg1} alt="Infrastructure Icon" />
                        <h3>Advanced Infrastructure</h3>
                        <p>
                            To bring agility & quality in a development process, we shall enhance our infrastructure
                            with edgy tools & software systems.
                        </p>
                    </div>
                    <div className="trust-card">
                        <img src={iconImg1} alt="Consultation Icon" />
                        <h3>Expert Consultation</h3>
                        <p>
                            Offering a thorough IT consultation, our dedicated development team will help you manage your
                            software lifecycle & enhance your system performance.
                        </p>
                    </div>
                </div>

                <button className="trust-btn">LET US KNOW WHAT YOU NEED</button>
            </div>
            <div className="dedicated-expect-section">
                <div className="expect-left">
                    <h2>
                        <span className="blue-text">Things To Expect</span> From Our Developers
                    </h2>
                    <p>
                        Besides adding real-time value to your business with customized, business-centric,
                        scalable & secure software solutions, our dedicated software development teams
                        will also help you manage complex projects with greater efficiency!
                    </p>

                    <div className="expect-grid">
                        <div className="expect-block">
                            <img src={icon} alt="icon" />
                            <div>
                                <h3>Business Analysis</h3>
                                <p>Enhance your development process with the best dedicated business analysts, process designers & strategy planners from our dedicated teams.</p>
                            </div>
                        </div>
                        <div className="expect-block">
                            <img src={icon} alt="icon" />
                            <div>
                                <h3>Project Management</h3>
                                <p>Count on our dedicated project managers to manage your project, from ideation to planning to development and the final delivery!</p>
                            </div>
                        </div>
                        <div className="expect-block">
                            <img src={icon} alt="icon" />
                            <div>
                                <h3>Impressive Graphic Designs</h3>
                                <p>We shall empower your development arsenal with efficient graphic experts, UI/UX designers & mobile/web designers!</p>
                            </div>
                        </div>
                        <div className="expect-block">
                            <img src={icon} alt="icon" />
                            <div>
                                <h3>Software Stalwarts</h3>
                                <p>Our software development teams have adequate expertise in building robust web apps, intuitive mobile apps, CMS, and Ecommerce solutions.</p>
                            </div>
                        </div>
                        <div className="expect-block">
                            <img src={icon} alt="icon" />
                            <div>
                                <h3>Tech Cognizance</h3>
                                <p>Stay agile in today’s competitive landscape with leading tech solutions i.e. Blockchain, AR/VR, AI/ML, Chatbot & more!</p>
                            </div>
                        </div>
                        <div className="expect-block">
                            <img src={icon} alt="icon" />
                            <div>
                                <h3>Quality Assurance</h3>
                                <p>With our dedicated QA and UI experts, you can improve your business growth and customer experience.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="expect-right">
                    <div className="expect-images">
                        <img src={image1} alt="img1" />
                        <img src={image2} alt="img1" />
                        <img src={image3} alt="img1" />
                        <img src={image4} alt="img1" />
                        <img src={image5} alt="img1" />
                        <img src={image6} alt="img1" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DedicatedTeamSection;
