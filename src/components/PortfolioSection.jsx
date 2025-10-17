import React from "react";
import "../styles/PortfolioSection.css";
import portfolioHeroImage from "../assets/portfoliohero.png"; // Replace with your actual image path
import p1 from "../assets/pr1.png";
import p2 from "../assets/pr2.png";
import p3 from "../assets/pr3.png";
import p4 from "../assets/pr4.png";
import p5 from "../assets/pr5.png";
import p6 from "../assets/pr6.png";

const PortfolioSection = () => {
    return (
        <section className="portfolio-hero-section">
            <div className="portfolio-hero-container">
                {/* Left Content */}
                <div className="portfolio-left">

                    <h1>
                        <span className="blue-highlight">Portfolio</span><br />
                        <span className="dark-bold">Development Company</span>
                    </h1>
                    <p className="portfolio-description">
                        Breathing Life In Your Construction Dreams!
                    </p>
                    <button className="portfolio-btn">SCHEDULE A MEETING</button>
                </div>

                {/* Right Image */}
                <div className="portfolio-right">
                    <img src={portfolioHeroImage} alt="Portfolio Hero" />
                </div>
            </div>
            {/* === Portfolio Projects Grid Section === */}
            <section className="portfolio-projects-section">
                <div className="portfolio-projects-container">
                    {[
                        {
                            title: "Inventore Enim Ullam",
                            desc: "Consectetur atque v",
                            image: p1,
                        },
                        {
                            title: "Online Auction House For Used Appliances",
                            desc: "In the fast-paced world today, hiring a team of proficient website designers and developers can scale your business with benefits galore. With more...",
                            image: p2,
                        },
                        {
                            title: "Job Service Portal Case Study",
                            desc: "E-Port is a job service portal that is developed by the highly skilled developers of Wordsys. E-port comprises all the latest features, which would...",
                            image: p3,
                        },
                        {
                            title: "ERP And POS Solution For Retail Business",
                            desc: "Top-Retail is the name of the ERP and POS system we developed for the owner of a retail business. It consists of the most advanced features to ensu...",
                            image: p4,
                        },
                        {
                            title: "Web Development For The Restaurant Industry",
                            desc: "Famished is the restaurant management system that is developed by us so that people who get access to it can book seats in restaurants, get informa...",
                            image: p5,
                        },
                        {
                            title: "Employee Management System",
                            desc: "Portal is the employee management system that we developed. We made sure that along with all the basic functions in employee management, we put to ...",
                            image: p6,
                        },
                    ].map((item, index) => (
                        <div className="portfolio-card" key={index}>
                            <img src={item.image} alt={item.title} />
                            <div className="card-content">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* === Start Your Project Contact Section === */}
            <section className="start-project-section">
                <div className="start-project-container">
                    <div className="start-project-header">
                        <span className="contact-us">CONTACT US</span>
                        <h2 className="start-project-title">Start Your Project</h2>
                    </div>

                    <form className="start-project-form">
                        <div className="form-row">
                            <input type="text" placeholder="Name*" required />
                            <textarea placeholder="Your Message" required></textarea>
                        </div>

                        <div className="form-row">
                            <input type="email" placeholder="E-mail*" required />
                        </div>

                        <div className="form-row">
                            <div className="phone-wrap">
                                <select className="country-code">
                                    <option value="+91">🇮🇳 (+91)</option>
                                </select>
                                <input type="tel" placeholder="Phone Number *" pattern="[0-9]*" required />
                            </div>
                            <div className="captcha-wrap">
                                <input type="checkbox" id="notRobot" required />
                                <label htmlFor="notRobot">I'm not a robot</label>
                                <div className="captcha-img">reCAPTCHA<br /><small>Privacy - Terms</small></div>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">SEND MESSAGE NOW</button>
                    </form>
                </div>
            </section>

        </section>

    );
};

export default PortfolioSection;
