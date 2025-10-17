import React from "react";
import "../styles/AgenciesSection.css";
import agencyHero from "../assets/agency-hero.png";
import trophy from "../assets/trophy.png";

const techData = [
    {
        title: "Artificial Intelligence",
        desc: "As a business development company, we always strive to be the most advanced development company so that you can receive the best service possible...",
    },
    {
        title: "Mobile App Development",
        desc: "The expert developers of our development services agency excel at creating official websites and have the skills to develop mobile applications...",
    },
    {
        title: "Content Management System",
        desc: "Ours is one of the top development agencies because it offers an optimal content management system (CMS)...",
    },
    {
        title: "Front-end Development",
        desc: "Skilled developers use HTML, CSS, and JavaScript to transform data into a graphical interface...",
    },
    {
        title: "CRM",
        desc: "Brilliant experts ensure that the interactions with your customers are smooth and hassle-free. It’s called Customer Relationship Management (CRM)...",
    },
    {
        title: "E-Commerce",
        desc: "Our consultants use platforms like Magento, WooCommerce, and Shopify to support your eCommerce business...",
    },
];

const roadblockData = [
    {
        title: "Finding Skilled Employees",
        desc: "Hiring developers and designers skilled enough to provide the output you expect is more complicated than it seems. Equally, if not more difficult, is to find people who will consistently perform well towards the growth of your business development company.",
    },
    {
        title: "Making Profits While Your Business Grows",
        desc: "Growing a business is a slow and steady process. In the early stages, you need to hire highly skilled employees, which will be cost-prohibitive. Therefore, it would help if you focused more on how quickly your business is established than how much money you make.",
    },
    {
        title: "Scaling Your Business",
        desc: "As you attempt to grow your development services agency, you need to have some crucial systems in the right place to ensure steady growth. Some critical systems are data tracking, sales monitoring, finance, service delivery, and Human Resources (HR).",
    },
    {
        title: "Maintaining Client Relationships",
        desc: "More important than gaining a client is maintaining good relationships with that client. Even high-quality performance from your employees cannot make up for a poorly managed professional relationship. Loss of clients is very taxing to the growth of your workforce development agency.",
    },
];

const AgenciesSection = () => {
    return (
        <div className="agencies-section-wrapper">
            {/* HERO SECTION */}
            <section className="agency-hero-section">
                <div className="agency-hero-left">
                    <h1>
                        <span className="blue-text">Grow Your</span> <br />
                        Agency’s Profits
                    </h1>
                    <p className="subtext">
                        With Our On-Demand Remote <br />
                        Experts & See Results In 48 Hours
                    </p>
                    <button className="agency-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="agency-hero-right">
                    <img src={agencyHero} alt="Grow Agency Profits" />
                </div>
            </section>

            {/* TECHNOLOGIES SECTION */}
            <section className="agency-technologies-section">
                <h2 className="tech-heading">
                    Technologies <span className="highlight">We Work With</span>
                </h2>

                <div className="tech-card-grid">
                    {techData.map((item, index) => (
                        <div key={index} className="tech-card">
                            <div className="tech-icon"></div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <button className="card-arrow-btn">→</button>
                        </div>
                    ))}
                </div>

                <div className="tech-footer-btn">
                    <button className="talk-btn">WANNA TALK? FIX A TIME</button>
                </div>
            </section>

            {/* ROADBLOCKS SECTION */}
            <section className="roadblocks-section">
                <h2 className="roadblocks-heading">
                    The <span className="highlight">Roadblocks You Face</span> As An Agency Owner
                </h2>

                <div className="roadblock-card-grid">
                    {roadblockData.map((item, index) => (
                        <div key={index} className="roadblock-card">
                            <div className="roadblock-icon">⚙️</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="roadblock-footer-btn">
                    <button className="talk-btn">WANNA TALK? FIX A TIME!</button>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="agency-benefits-section">
                <div className="benefits-content">
                    <div className="benefits-left">
                        <h2>
                            <span className="blue-text">Completely Revamp the Way</span> Your Business Functions
                        </h2>
                        <h3>With The Assistance Of A Remote Team</h3>
                        <p>
                            When you build a team of employees initially, you hire them based on a business structure that you have in mind. The functioning of your business is often challenged when a client has specific demands...
                        </p>

                        <ul className="benefits-list">
                            <li>
                                <strong>Extensive Control</strong><br />
                                After you inform us about your demands, we will associate you with individuals...
                            </li>
                            <li>
                                <strong>Freedom of Scaling</strong><br />
                                While the development process is underway, your client might need to make specific changes...
                            </li>
                            <li>
                                <strong>Mutual Profit</strong><br />
                                The advantage that you and we receive in remote team hire is connected...
                            </li>
                            <li>
                                <strong>Instant Access To Technical Knowledge</strong><br />
                                There are times when you have to turn down a particular project...
                            </li>
                        </ul>

                        <button className="talk-btn">WANNA TALK? FIX A TIME!</button>
                    </div>

                    <div className="benefits-right">
                        <img src={trophy} alt="Trophy" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgenciesSection;
