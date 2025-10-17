import React from "react";
import "../styles/CustomUISection.css";
import customUiHeroImg from "../assets/customui-hero.png"; // replace with actual path
import futuristicIcon from "../assets/futuristic.png"; // Replace with actual path
import aestheticIcon from "../assets/aesthetic.png";
import brandingIcon from "../assets/branding.png";
import tabletImage from "../assets/customui-bestinterface.png";
import icon1 from "../assets/ui-customized.png";
import icon2 from "../assets/ui-userfriendly.png";
import icon3 from "../assets/ui-featurerich.png";
import icon4 from "../assets/ui-engaging.png";
import icon5 from "../assets/ui-identified.png";
import icon6 from "../assets/ui-strategies.png";
import icon7 from "../assets/ui-ideated.png";
import icon8 from "../assets/ui-testing.png";
import icon9 from "../assets/ui-backend.png";

const CustomUISection = () => {
    return (
        <div className="customui-hero-section" id="customui-hero-section">
            <div className="customui-hero-left">
                <h1>
                    <span className="blue-text">Pixel-Perfect</span><br />
                    UI UX Design Services
                </h1>
                <p>UI Designs For A Better User Experience</p>
                <button className="customui-hero-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="customui-hero-right">
                <img src={customUiHeroImg} alt="UI UX Design Illustration" />
            </div>
            <div className="customui-interface-section" id="customui-interface-section">
                <p className="section-highlight">Building Excellent User Interface From The Ground Up!</p>
                <h2>
                    Understanding your business goals, we underscore the perfect <br />
                    foundations of design, strategy and information architecture to lend <br />
                    engaging interfaces to your digital products, thereby fostering a better <br />
                    user interaction.
                </h2>
                <div className="underline" />

                <div className="interface-card-container">
                    <div className="interface-card">
                        <img src={futuristicIcon} alt="Futuristic" />
                        <h3>Futuristic</h3>
                        <p>
                            Deploying advanced technologies, we create futuristic interfaces for your digital products,
                            thus driving more engagements.
                        </p>
                    </div>

                    <div className="interface-card">
                        <img src={aestheticIcon} alt="Aesthetically-Appealing" />
                        <h3>Aesthetically-Appealing</h3>
                        <p>
                            Visualizing data structure & incorporating cutting-edge features, we design user-friendly &
                            engaging User Interfaces.
                        </p>
                    </div>

                    <div className="interface-card">
                        <img src={brandingIcon} alt="Visual Branding" />
                        <h3>Visual Branding</h3>
                        <p>
                            Being creative at each step of design, we climb the slope of dynamism while designing your
                            digital products’ interfaces.
                        </p>
                    </div>
                </div>
            </div>
            <div className="customui-bestinterface-section" id="customui-bestinterface-section">
                <div className="customui-bestinterface-left">
                    <img src={tabletImage} alt="Best UI Interface" />
                </div>
                <div className="customui-bestinterface-right">
                    <p className="subheading-blue">UI Adapted To Your Requirements</p>
                    <h2>Put The Best User Interface Forward!</h2>
                    <div className="underline" />
                    <p className="description">
                        A digital product, which lacks an engaging User Interface, fails to appeal to the intended
                        audiences. We have a crew of skilled and knowledgeable UI designers who will work for you to
                        create and implement intuitive, engaging and modern digital interfaces. So, take our hands as we
                        will walk you through a memorable journey in UI design and development.
                    </p>
                    <button className="readmore-btn">READ MORE</button>
                </div>
            </div>
            <div className="customui-flexible-section">
                {/* Top icon row */}
                <div className="top-feature-icons">
                    <div className="feature-item">
                        <img src={icon1} alt="Customized" />
                        <h4>Customized</h4>
                        <p>Best Customization</p>
                    </div>
                    <div className="feature-item">
                        <img src={icon2} alt="User-Friendly" />
                        <h4>User-Friendly</h4>
                        <p>Design with Love</p>
                    </div>
                    <div className="feature-item">
                        <img src={icon3} alt="Feature-Rich" />
                        <h4>Feature-Rich</h4>
                        <p>Visual Page Builder</p>
                    </div>
                    <div className="feature-item">
                        <img src={icon4} alt="Engaging" />
                        <h4>Engaging</h4>
                        <p>Live Website Builder</p>
                    </div>
                </div>

                {/* Mid content */}
                <div className="mid-cta">
                    <h2>Let’s Craft Brilliance With Adaptive And Flexible Approach</h2>
                    <p>
                        We create best website UI designs that are good for your users, as well as, business.
                        The importance of creating a delightful experience for the users is paramount.
                        Looking to craft, expand or optimize your UI designs? If yes, then collaborate with us.
                        Empowering your brand, we will help it excel and move ahead of the pack.
                    </p>
                    <button>READ MORE</button>
                </div>

                {/* Bottom dark strategy cards */}
                <div className="strategy-section">
                    <p className="strategy-subtitle">UI Goals?</p>
                    <h2>Let’s Make Them Come True!</h2>
                    <div className="strategy-card-row">
                        <div className="strategy-card">
                            <img src={icon5} alt="Needs Identified" />
                            <h4>Your Needs Identified</h4>
                            <p>Understanding your goals, we shall identify your UI needs & align them with the real-life user experience.</p>
                        </div>
                        <div className="strategy-card">
                            <img src={icon6} alt="Strategies" />
                            <h4>Suitable Strategies Built</h4>
                            <p>We formulate an effective strategy to achieve the set objectives of our clients.</p>
                        </div>
                        <div className="strategy-card">
                            <img src={icon7} alt="Ideated & Crafted" />
                            <h4>Design Ideated & Crafted</h4>
                            <p>We create engaging UI designs, themed with perfection and visualized creatively.</p>
                        </div>
                        <div className="strategy-card">
                            <img src={icon8} alt="Testing" />
                            <h4>Thorough Testing Done</h4>
                            <p>We convert your testing data into an action strategy that improves the UI design.</p>
                        </div>
                        <div className="strategy-card">
                            <img src={icon9} alt="Backend Integration" />
                            <h4>Back-End Integration</h4>
                            <p>After front-end design, we integrate it with backend logic for your app/website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomUISection;
