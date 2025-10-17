import React from "react";
import "../styles/InfotechSection.css";
import infotechHero from "../assets/infotechHero.png"; // Make sure this image exists
import icon1 from "../assets/infotechIcon1.png";
import icon2 from "../assets/infotechIcon2.png";
import icon3 from "../assets/infotechIcon3.png";
import r from "../assets/solutionIcon1.png";
import re from "../assets/solutionIcon2.png";
import req from "../assets/solutionIcon3.png";
import requ from "../assets/solutionIcon4.png";
import benefit1 from "../assets/benefitIcon1.png";
import benefit2 from "../assets/benefitIcon2.png";
import benefit3 from "../assets/benefitIcon3.png";
import brandStoryImage from "../assets/infotechBrandStory.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const InfotechSection = () => {
    return (
        <div className="infotech-hero-section">
            <div className="infotech-left">
                <h1>
                    <span className="blue">Unearth The True Value Of</span><br />
                    IT Services
                </h1>
                <p>To Steer Your Business Growth</p>
                <button className="meeting-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="infotech-right">
                <img src={infotechHero} alt="Infotech Hero" />
            </div>
            <div className="infotech-features-section">
                <div className="infotech-feature-card">
                    <img src={icon1} alt="Magnifier Icon" />
                    <h3>Reshape Your User <span className="blue">Experience</span></h3>
                    <p>
                        Engineering the latest software technologies as per your requisites and budget,
                        we shall help you reap the unprecedented benefits of AI, Analytics, Cloud, etc.,
                        thus making your customer experience more intuitive and fulfilling.
                    </p>
                </div>

                <div className="infotech-feature-card">
                    <img src={icon2} alt="Disruption Icon" />
                    <h3>“Stay Put” Amidst the <span className="blue">Tech-Disruption</span></h3>
                    <p>
                        Our experienced and efficient IT experts shall conduct a detailed research for your
                        individual technology needs to kick pass the hurdles at every step of your business
                        growth, which calls for agility and excellence.
                    </p>
                </div>

                <div className="infotech-feature-card">
                    <img src={icon3} alt="Badge Icon" />
                    <h3>Improve Your Business <span className="blue">Operations</span></h3>
                    <p>
                        Using the cutting-edge technologies including, AI, ML, Cloud, Edge Computing, IoT, etc.,
                        our information technology consultants shall improve your business operations and help
                        you attain your goals transitioning to the latest information technologies.
                    </p>
                </div>
            </div>
            <div className="infotech-solutions-section">
                <h4 className="sub-heading blue">Re-Invent Your Business Growth</h4>
                <h2>With Best-in-Class InfoTech Solutions</h2>
                <div className="solutions-grid">
                    <div className="solution-card">
                        <img src={r} alt="Edge Icon" />
                        <h3>An Edge Over Your Competition</h3>
                        <p>
                            With our meticulously managed IT services, you can improve customer experience, boost business interactions,
                            add better insights to your user-interaction & grow your revenues.
                        </p>
                    </div>

                    <div className="solution-card">
                        <img src={re} alt="Informed Decisions Icon" />
                        <h3>Make More Informed Decisions</h3>
                        <p>
                            Harness the ultimate potential of our robust information technology consulting services to foster your
                            business growth, take more insightful decisions & improve your customer experience.
                        </p>
                    </div>

                    <div className="solution-card">
                        <img src={req} alt="Productivity Icon" />
                        <h3>A Surge in Your Productivity</h3>
                        <p>
                            Our technically-cognizant experts will enable your business to embrace the transition of today’s
                            digital disruption, improving your brand’s bottom line & overall productivity.
                        </p>
                    </div>

                    <div className="solution-card">
                        <img src={requ} alt="Operations Icon" />
                        <h3>Better Business Operation</h3>
                        <p>
                            Empowered by top-notch technologies i.e. AI, ML, Edge Computing, IoT, Cyber security, etc., you can
                            operate your business automatically & obtain more results simultaneously.
                        </p>
                    </div>
                </div>
            </div>


            <div className="infotech-benefits-section">
                <div className="benefit-icons">
                    <div className="benefit-item">
                        <img src={benefit1} alt="Enhanced Business Process" />
                        <h4>Enhanced Business<br />Process</h4>
                    </div>
                    <div className="benefit-item">
                        <img src={benefit2} alt="Improved Customer Engagement" />
                        <h4>Improved Customer<br />Engagement</h4>
                    </div>
                    <div className="benefit-item">
                        <img src={benefit3} alt="More Profitability Guaranteed" />
                        <h4>More Profitability<br />Guaranteed</h4>
                    </div>
                </div>

                <h2 className="highlight-text">Technology Is Transforming The Future.</h2>
                <h3 className="sub-text">Time To Adapt To The Transition!</h3>

                <p className="description">
                    Integrating premium IT support & highly advanced technologies i.e. AI, ML, IoT, Edge Computing,
                    Cyber Security, Virtual Reality, Cloud, etc., we shall add more efficiency in your business operations
                    and greater agility in your growth. Engineering the latest infotech solutions, we shall transform your user journey,
                    adding value to their expectations and experience.
                </p>

                <button className="know-more-btn">KNOW MORE</button>
            </div>
            <div className="infotech-efficiency-section">
                <h4 className="sub-heading blue">Drive More Efficiency And</h4>
                <h2>Better Insights For Your Business</h2>
                <ul className="efficiency-list">
                    <li>
                        <span className="tick">✔</span>
                        Re-vamp your strategies, re-think your business model and improve the lifecycle of your products with transformative tech solutions
                    </li>
                    <li>
                        <span className="tick">✔</span>
                        We provide customized Infotech & software solutions to stay abreast with the changing demand curve of today’s marketplace
                    </li>
                    <li>
                        <span className="tick">✔</span>
                        We shall help you gain more profitable growth with the right technologies, which foster better operational efficiency
                    </li>
                    <li>
                        <span className="tick">✔</span>
                        Integrate industry-standard technologies to hone your business insights, grab new opportunities & deliver more fulfilling results
                    </li>
                    <li>
                        <span className="tick">✔</span>
                        We deliver modernized IT solutions to provide optimum operational values & compelling experience for users
                    </li>
                </ul>
            </div>
            <div className="infotech-brandstory-section">
                <div className="brandstory-left">
                    <h2><span className="blue">Weave A Successful Brand Story</span><br />With Premium Infotech Solutions</h2>
                    <div className="underline"></div>
                    <h4>
                        Keep your business at par to the advancements of today’s technologies and get ready to thrive in tomorrow’s marketplace.
                    </h4>
                    <p>
                        Our scalable, result-yielding & business-centric information technology and services will accelerate your enterprise operations,
                        scale up your growth & deliver better results in terms of customer satisfaction. We shall enable your brand to adapt to the latest
                        tech & digital transformations with a bevy of advanced technologies i.e. IoT, AI, Cloud, Analytics & more.
                    </p>
                    <button className="continue-btn">CONTINUE READING</button>
                </div>
                <div className="brandstory-right">
                    <img src={brandStoryImage} alt="Brand Story" />
                </div>
            </div>
            <div className="infotech-blog-section">
                <div className="blog-header">
                    <div>
                        <h4 className="blue">Rummage About Our Blog Posts</h4>
                        <h2>For Some More In-Depth Insights!</h2>
                        <div className="underline"></div>
                    </div>
                    <button className="see-all-btn">SEE ALL BLOGS</button>
                </div>

                <div className="blog-cards">
                    <div className="blog-card">
                        <img src={blog1} alt="Blog 1" />
                        <div className="blog-content">
                            <p className="blog-date">July 08, 2025</p>
                            <h4 className="blog-title">Is Your Website Future Ready? Signs You Need a Redesign</h4>
                            <p className="blog-desc">
                                Is your website ready for the future? Discover the key signs that it’s time for a redesign...
                            </p>
                            <button className="blog-read-btn">READ MORE</button>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src={blog2} alt="Blog 2" />
                        <div className="blog-content">
                            <p className="blog-date">May 07, 2025</p>
                            <h4 className="blog-title">
                                AI-Powered Web Design: How Tools Like ChatGPT & Midjourney Are Reshaping the Process
                            </h4>
                            <p className="blog-desc">
                                Discover how AI tools like ChatGPT and Midjourney are revolutionizing web design...
                            </p>
                            <button className="blog-read-btn">READ MORE</button>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src={blog3} alt="Blog 3" />
                        <div className="blog-content">
                            <p className="blog-date">October 03, 2024</p>
                            <h4 className="blog-title">
                                Here’s How You Can Create Designs for Your Target Audience ?
                            </h4>
                            <p className="blog-desc">
                                Almost every web designer knows who their target audiences are and how to design...
                            </p>
                            <button className="blog-read-btn">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InfotechSection;
