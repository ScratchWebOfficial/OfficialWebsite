import React from "react";
import "../styles/RetailSection.css";
import retailHero from "../assets/retailhero.png"; // make sure the image matches your uploaded asset
import envato from "../assets/envato.png";
import woocommerce from "../assets/woocommerce.png";
import wordpress from "../assets/wordpress.png";
import magento from "../assets/magento.png";
import sass from "../assets/sass.png";
import solarwinds from "../assets/solarwinds.png";
import less from "../assets/less.png";
import jquery from "../assets/jquery.png";
import google from "../assets/google.png";
import mobileMockup from "../assets/mobilemockup.png";

const RetailSection = () => {
    return (
        <div className="retail-hero-section">
            <div className="retail-left">
                <h1>
                    <span className="blue">Empower Your Retail Store</span><br />
                    With Robust Retail Software<br />
                    Development
                </h1>
                <p>Deliver Better Retail Experience</p>
                <button>SCHEDULE A MEETING</button>
            </div>
            <div className="retail-right">
                <img src={retailHero} alt="Retail Hero Illustration" />
            </div>
            <div className="retail-growth-section">
                <div className="growth-left">
                    <h2>
                        <span className="blue">Improve Your</span><br />
                        <span className="dark">Consumers’ Shopping Experience</span><br />
                        & Grow Retail Business
                    </h2>
                    <p>
                        Whether you want to build a robust E-commerce site from scratch or re-vamp an already existing site,
                        our <strong>retail software solutions</strong> shall get you covered! Leveraging the edgier platforms
                        i.e. WooCommerce, OpenCart, Magento, etc., we shall custom-build visually-appealing & feature-rich
                        E-commerce sites to establish a good will for your retail store, foster engagements & improve shopping experience.
                    </p>
                    <button className="start-now-button">START NOW</button>
                </div>
                <div className="growth-right">
                    <div className="feature-box">
                        <div className="icon">⏱️</div>
                        <div>
                            <h4>Fast Loading Speed</h4>
                            <p className="blue small">More Engagements</p>
                            <p>
                                Using cutting-edge technologies, we add fast loading speed to our E-commerce sites,
                                thereby winning visitors’ & customers’ kudos & favors!
                            </p>
                        </div>
                    </div>
                    <div className="feature-box">
                        <div className="icon">🖥️</div>
                        <div>
                            <h4>Design and Themes</h4>
                            <p className="blue small">Views That Appeal To The Eyes</p>
                            <p>
                                Integrating attractive layouts & user-friendly features, we build visually-appealing,
                                feature-rich & robust E-commerce websites to promote your retail store.
                            </p>
                        </div>
                    </div>
                    <div className="feature-box">
                        <div className="icon">🛍️</div>
                        <div>
                            <h4>Feature-Rich Package</h4>
                            <p className="blue small">Hassle-Free Shopping</p>
                            <p>
                                With our expertise in building feature-packed websites, we shall ensure a fulfilling
                                viewing & shopping experience for your visitors & consumers.
                            </p>
                        </div>
                    </div>
                    <div className="feature-box">
                        <div className="icon">📊</div>
                        <div>
                            <h4>Performance Standards</h4>
                            <p className="blue small">Invest Where It Is Worth</p>
                            <p>
                                Integrating search engine friendly features & multi-channel integration of cutting-edge
                                E-commerce technologies, we shall build you a high-performing website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="retail-promotion-section">
                <h2 className="promotion-heading">
                    <span className="blue">Foster Your</span><br />
                    <span className="dark">Business Promotion</span><br />
                    <span className="blue"> & Growth With</span><br />
                    A Stunning & Secure E-commerce Website
                </h2>

                <div className="tech-logo-grid">
                    <img src={envato} alt="Envato" />
                    <img src={woocommerce} alt="WooCommerce" />
                    <img src={wordpress} alt="WordPress" />
                    <img src={magento} alt="Magento" />
                    <img src={sass} alt="Sass" />
                    <img src={solarwinds} alt="Solarwinds" />
                    <img src={less} alt="Less" />
                    <img src={jquery} alt="jQuery" />
                    <img src={google} alt="Google" />
                </div>
            </div>
            <div className="retail-analytics-section">
                <div className="analytics-left">
                    <h2>
                        <span className="blue">Optimize Your Retail Experience</span><br />
                        Using <span className="dark">Customer Information</span>.
                    </h2>
                    <p>
                        Integrating the best <strong>retail software</strong>, we shall gain accurate analytics of your customer’s
                        shopping style, buying pattern, etc., thereby predicting their behavior across multiple E-commerce platforms,
                        thus keeping up with a real-time stock accordingly.
                    </p>
                </div>

                <div className="analytics-right">
                    <div className="progress-bar">
                        <span>SHOPIFY – OPEN SOURCE PLATFORM</span>
                        <div className="bar">
                            <div className="fill" style={{ width: "82%" }}>
                                <span className="label">82%</span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <span>MAGENTO – MOBILE RESPONSIVE PLATFORM</span>
                        <div className="bar">
                            <div className="fill" style={{ width: "92%" }}>
                                <span className="label">92%</span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <span>BIGCOMMERCE – HOSTED PLATFORM</span>
                        <div className="bar">
                            <div className="fill" style={{ width: "88%" }}>
                                <span className="label">88%</span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <span>WOOCOMMERCE – SELF-HOSTED PLATFORM</span>
                        <div className="bar">
                            <div className="fill" style={{ width: "69%" }}>
                                <span className="label">69%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="retail-services-section">
                {[
                    {
                        icon: "⚙️",
                        title: "Marketing Automation",
                        desc: "Leveraging the best POS software in India, we shall streamline your marketing process! Allow us to lead you to the maximum prospects across multiple platforms, creating a sure-fire digital marketing campaign for your business!",
                        number: "01"
                    },
                    {
                        icon: "📱",
                        title: "Mobility in Online Shopping",
                        desc: "Who doesn’t have a Smartphone these days? Integrating your retail store’s USPs with the latest tech innovations, we shall deliver the most fulfilling shopping experience for your mobile-using consumers.",
                        number: "02"
                    },
                    {
                        icon: "💰",
                        title: "Business Revenue Generation",
                        desc: "Which business runs without money? We can convert the traffic into leads by monitoring each step till POS with our customized and comprehensive retail and E-commerce software solutions.",
                        number: "03"
                    },
                    {
                        icon: "💳",
                        title: "Improved Customer Experience",
                        desc: "To level up the overall efficacy of your E-commerce website, we shall leverage a bunch of power-packed features that include a multitude of payment gateway integrations, automated return, complete inventory viewing, and more!",
                        number: "04"
                    },
                    {
                        icon: "📞",
                        title: "Payment Gateway Integration",
                        desc: "Our qualitative and customized retail and E-commerce services are aimed at conveying your business messages through powerful E-commerce platforms, thus changing consumer expectations and experience.",
                        number: "05"
                    },
                    {
                        icon: "🧩",
                        title: "Plug-ins & Module Development",
                        desc: "As a leading E-commerce software development company in India, we shall level up your E-commerce site with a number of advanced in-built plug-ins, thereby bringing a boost in your retail business, engagement, and conversions.",
                        number: "06"
                    }
                ].map((item, index) => (
                    <div key={index} className="retail-card">
                        <div className="icon">{item.icon}</div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                        <span className="background-number">{item.number}</span>
                    </div>
                ))}
            </div>
            <div className="retail-portfolio-section">
                <h2 className="portfolio-heading">
                    <span className="blue">An Insight</span> <span className="dark">Into Our Work</span>
                    <div className="underline" />
                </h2>
                <div className="portfolio-container">
                    <div className="portfolio-left">
                        <h3>Restaurant Seat Booking App</h3>
                        <p>
                            Instareserve is the restaurant seat booking app that we developed.
                            The app does what it is supposed to and is one of the best at it.
                            The app is able to instantaneously book a seat for the customer….
                        </p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>
                    <div className="portfolio-right">
                        <img src={mobileMockup} alt="App Mockup" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RetailSection;
