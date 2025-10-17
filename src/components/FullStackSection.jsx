import React from "react";
import "../styles/FullStackSection.css";
import fullstackHeroImg from "../assets/fullstackhero.png";
import codingImage from "../assets/fullstackprocess.png";
import { FaProjectDiagram, FaStopwatch, FaLaptopCode, FaCheck } from "react-icons/fa";

// Imported icons for services
import php from "../assets/php.png";
import python from "../assets/python.png";
import wordpressd from "../assets/wordpressd.png";
import ruby from "../assets/ruby.png";
import java from "../assets/java.png";
import nodejs from "../assets/nodejs.png";
import smilingface from "../assets/smilingface.png";
import visible from "../assets/visible.png";
import business from "../assets/business.png";
import checked from "../assets/checked.png";
import happyclients from "../assets/happyclients.png";
import fullstackIndomitable from "../assets/fullstackindomitable.png";
import projectImage from "../assets/portfolioemr.png";
import ideationicon from "../assets/ideationicon.png";
import uiicon from "../assets/uiicon.png";
import devicon from "../assets/devicon.png";
import qualityicon from "../assets/qualityicon.png";

const FullStackSection = () => {
    const serviceItems = [
        { title: "PHP Development", desc: "Using this server-side scripting language embedded in the advanced functionalities, we streamline the process of web development.", icon: php },
        { title: "Python Development", desc: "In our Machine Learning and Blockchain development applications, we implement Python to enhance the process of coding.", icon: python },
        { title: "Wordpress Development", desc: "Our Full-stack Web developers will build a premium website for you within a short time span, meeting all your business needs.", icon: wordpressd },
        { title: "Ruby On Rails", desc: "With the help of this exclusive framework, we build time-effective and quality-driven web applications for our clients.", icon: ruby },
        { title: "Java Development", desc: "Backed by Java, we make sure to compile, write and debug the logic in compare to other programming languages.", icon: java },
        { title: "Node Js", desc: "Using this cross platform, we ensure to build gen-next web and mobile apps with faster back-end and user-friendly front-end.", icon: nodejs }
    ];

    return (
        <section className="fullstack-hero-section">
            <div className="fullstack-container">
                <div className="fullstack-left">
                    <h1>
                        <span className="blue-text">Full Stack</span><br />
                        <span className="dark-text">Web Development</span>
                    </h1>
                    <p className="fullstack-subtext">Robust, Scalable and Intuitive</p>
                    <button className="fullstack-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="fullstack-right">
                    <img src={fullstackHeroImg} alt="Full Stack Development" />
                </div>
            </div>

            <section className="fullstack-process-section">
                <div className="fullstack-process-container">
                    <div className="process-left">
                        <img src={codingImage} alt="Full Stack Process" />
                    </div>
                    <div className="process-right">
                        <p className="process-subheading">Process-Driven Full-Stack Web Apps</p>
                        <h2>For an Enhanced UX and a Unique Brand Identity</h2>
                        <hr className="blue-line" />
                        <div className="process-feature">
                            <FaProjectDiagram className="process-icon" />
                            <div>
                                <h4>Fully Functional Prototype</h4>
                                <p>We build fully functional prototypes to delight you at every step of full-stack web app development.</p>
                            </div>
                        </div>
                        <div className="process-feature">
                            <FaStopwatch className="process-icon" />
                            <div>
                                <h4>Faster Turn Around</h4>
                                <p>We lay an emphasis on delivering our full stack web app development services on a timely manner.</p>
                            </div>
                        </div>
                        <div className="process-feature">
                            <FaLaptopCode className="process-icon" />
                            <div>
                                <h4>Advanced Programming Language</h4>
                                <p>We shall add a touch of personalization to your web apps adding your preferred development framework or language.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="fullstack-services-section">
                    <div className="services-header">
                        <p className="services-subtitle">Run a Glance</p>
                        <h2>At Our Full Stack Development Services</h2>
                        <hr className="blue-line" />
                    </div>
                    <div className="services-grid">
                        {serviceItems.map((item, idx) => (
                            <div className="service-card" key={idx}>
                                <img src={item.icon} alt={item.title} className="service-icon" />
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <section className="fullstack-reasons-section">
                        <div className="reasons-header">
                            <p className="reasons-subtitle">Steer To More Success</p>
                            <h2>Reasons Why You Should Bank Upon Us</h2>
                        </div>
                        <div className="reasons-icons">
                            <div className="reason-item">
                                <img src={smilingface} alt="Customer Satisfaction" />
                                <p>Customer Satisfaction</p>
                            </div>
                            <div className="reason-item">
                                <img src={visible} alt="UI/UX" />
                                <p>UI/UX</p>
                            </div>
                            <div className="reason-item">
                                <img src={business} alt="Business Analysis" />
                                <p>Business Analysis</p>
                            </div>
                            <div className="reason-item">
                                <img src={checked} alt="Quality Checked" />
                                <p>Quality Checked!</p>
                            </div>
                        </div>
                        <div className="reasons-content-box">
                            <div className="reasons-img">
                                <img src={happyclients} alt="Happy Clients" />
                            </div>
                            <div className="reasons-text">
                                <h4>Happy Clients</h4>
                                <p>For us, our success is measured by your satisfaction and it's only when we can add real value to your business, shall we feel successful.</p>
                            </div>
                            <div className="reasons-cta">
                                <h4>Excel. Thrive. Succeed!</h4>
                                <p>We are hell-bent on continuously & consistently improving our full stack development services, nurturing our expertise to delight more and more clients worldwide.</p>
                                <button>ABOUT COMPANY</button>
                            </div>
                        </div>
                    </section>
                    <section className="fullstack-indomitable-section">
                        <div className="indomitable-container">
                            <div className="indomitable-image">
                                <img src={fullstackIndomitable} alt="Full Stack Expertise" />
                            </div>
                            <div className="indomitable-content">
                                <p className="indomitable-subtitle">We Are Aimed To Be</p>
                                <h2 className="indomitable-title">Indomitable In Every Possible Aspect Of <br /> Full Stack Web Development</h2>
                                <hr className="blue-line" />
                                <p className="indomitable-desc">Our Full-stack Web developers have adequate proficiency in both front-end and back-end stack development. Our end-to-end solutions also include bug fighting, database management, and the likes. With the utmost diligence in everything we do, we are looking forward to setting new benchmarks.</p>
                                <ul className="indomitable-list">
                                    <li><FaCheck className="bullet-icon" /> Collaborate with our experts, who have 9+ years of experience</li>
                                    <li><FaCheck className="bullet-icon" /> Highly proficient with the advanced technologies</li>
                                    <li><FaCheck className="bullet-icon" /> Confidential on the non-disclosure agreement</li>
                                    <li><FaCheck className="bullet-icon" /> Our project managers are 100% dedicated</li>
                                    <li><FaCheck className="bullet-icon" /> Complete guideline from building concept to launching final products</li>
                                </ul>
                                <button className="indomitable-btn">START NOW</button>
                            </div>
                        </div>
                    </section>
                </section>
            </section>

            <section className="fullstack-portfolio-section">
                <h2 className="portfolio-heading">
                    <span className="blue-text">Check Out</span> <strong>Our Portfolio</strong>
                    <hr className="blue-line" />
                </h2>
                <div className="portfolio-content">
                    <div className="portfolio-box">
                        <h4>Hospital Patient Management Platform</h4>
                        <p>Medically was a system that we developed after our client asked us to create a way to simplify the management’s work. Medically consists of the feature to maintain cards and prescriptions from a pa...</p>
                        <button className="readmore-btn">READ MORE</button>
                    </div>
                    <div className="portfolio-image">
                        <img src={projectImage} alt="Portfolio Project" />
                    </div>
                </div>
            </section>

            <section className="fullstack-development-process">
                <div className="development-container">
                    <h2 className="development-heading">
                        <span className="blue-text">Our</span> Development Process
                        <hr className="blue-line" />
                    </h2>
                    <div className="development-steps">
                        <div className="dev-card">
                            <img src={ideationicon} alt="Ideation" />
                            <h4>Ideation</h4>
                            <p>Conducting a thorough market research, we brainstorm suitable web app solutions for your business.</p>
                            <span className="dev-number">01</span>
                        </div>
                        <div className="dev-card">
                            <img src={uiicon} alt="UI Creation" />
                            <h4>UI Creation</h4>
                            <p>We inculcate smooth interactive features & seamless UI in our web apps to ensure a better user experience.</p>
                            <span className="dev-number">02</span>
                        </div>
                        <div className="dev-card">
                            <img src={devicon} alt="Development" />
                            <h4>Development</h4>
                            <p>We develop robust & user-friendly web apps using cutting-edge technologies & business-centric development strategies.</p>
                            <span className="dev-number">03</span>
                        </div>
                        <div className="dev-card">
                            <img src={qualityicon} alt="Quality-Driven" />
                            <h4>Quality-Driven</h4>
                            <p>To ensure that our end-products are quality-driven, we check the agility & functionality of our web applications.</p>
                            <span className="dev-number">04</span>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default FullStackSection;
