import React from "react";
import "../styles/AIChatbotSection.css";
import chatbotImage from "../assets/chatbot-hero.png"; // update path if needed
import phoneImage from "../assets/chatbot-phone.png"; // Update path as needed
import icon1 from "../assets/ai-icon1.png";
import icon2 from "../assets/ai-icon2.png";
import icon3 from "../assets/ai-icon3.png";
import icon4 from "../assets/ai-icon4.png";
import laptop from "../assets/chatbot-laptop.png";
import i1 from "../assets/i11.png";
import i2 from "../assets/i12.png";
import i3 from "../assets/i13.png";
import i4 from "../assets/i14.png";
import educationIcon from "../assets/education11.png";
import transportIcon from "../assets/transport11.png";
import financeIcon from "../assets/finance11.png";
import mediaIcon from "../assets/media11.png";
import healthcareIcon from "../assets/healthcare11.png";

const AIChatbotSection = () => {
    return (
        <div className="aichatbot-hero-section">
            <div className="aichatbot-left">
                <h1>
                    <span className="blue-text">AI Chatbot</span><br />
                    Development Services
                </h1>
                <p>
                    To Resolve Conversational Problems That The Real World Is Facing!
                </p>
                <button className="aichatbot-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="aichatbot-right">
                <img src={chatbotImage} alt="AI Chatbot Illustration" />
            </div>
            <div className="aichatbot-equip-section">
                <div className="aichatbot-equip-left">
                    <img src={phoneImage} alt="Phone Chatbot" />
                </div>
                <div className="aichatbot-equip-right">
                    <h2>
                        <span className="blue-text">Equip Your Business</span><br />
                        With AI Chatbot Development
                    </h2>
                    <div className="aichatbot-feature-grid">
                        <div className="aichatbot-feature-card">
                            <img src={icon1} alt="Easy Management" />
                            <h3>Easy Business Management</h3>
                            <p>Our skilled & efficient bot developers streamline your supply chain & drive more sales.</p>
                        </div>
                        <div className="aichatbot-feature-card">
                            <img src={icon2} alt="Know Prospects" />
                            <h3>Know Your Prospects Better</h3>
                            <p>Understand market trends and customer behavior with intuitive chatbot development.</p>
                        </div>
                        <div className="aichatbot-feature-card">
                            <img src={icon3} alt="Assist Efficiently" />
                            <h3>Assist Virtually With Efficiency</h3>
                            <p>Foster efficiency in your business operations, team management & more.</p>
                        </div>
                        <div className="aichatbot-feature-card">
                            <img src={icon4} alt="Customer Support" />
                            <h3>Assist Your Customers Better</h3>
                            <p>Resolve queries faster and better with powerful AI chatbot solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aichatbot-custom-section">
                <div className="aichatbot-custom-left">
                    <h2>
                        <span className="blue-text">Get Your AI-Powered Chatbot Custom Built</span><br />
                        From Scratch
                    </h2>
                    <h3>
                        <span className="highlight-line"></span>By Our Skilled And Efficient Bot Developers
                    </h3>
                    <p className="subtitle">
                        Keep Up With A Seamless Interaction With Bots, Exclusively Built For Your Needs!
                    </p>
                    <p>
                        As one of the top <strong>ai chatbot development companies in India, Wordsys</strong>,
                        the best software development company shall help you upgrade your business interactions
                        with custom-built bots, powered up by the latest technologies i.e. ML, NLP, analytics,
                        speech recognition, etc. Here’s how we go about the entire process of
                        <strong> ai chatbot development services</strong> –
                    </p>
                    <ul className="aichatbot-list">
                        <li><span>01</span> We build bots understanding your visions thoroughly</li>
                        <li><span>02</span> We integrate suitable features to imitate human interactions</li>
                        <li><span>03</span> For quality assurance, we thoroughly test our bots</li>
                        <li><span>04</span> Giving real conversational scripts, we judge our bots</li>
                        <li><span>05</span> We check our bots’ interactional capacities finally</li>
                    </ul>
                    <button className="aichatbot-start-btn">LET’S START</button>
                </div>
                <div className="aichatbot-custom-right">
                    <img src={laptop} alt="Chatbot Developer Illustration" />
                </div>
            </div>
            <div className="aichatbot-innovation-section">
                <div className="aichatbot-innovation-header">
                    <h2>
                        <span className="blue-text">Bring Innovation In</span><br />
                        Your Business Interactions
                    </h2>
                    <div className="underline"></div>
                    <p>With Customized Bots, Empowered By Advanced Technologies!</p>
                </div>
                <div className="aichatbot-innovation-grid">
                    <div className="aichatbot-innovation-card">
                        <img src={i1} alt="Integration" />
                        <h3>A Hassle-Free Integration</h3>
                        <p>
                            Hire the best Chatbot developers from our team to custom build high-performance bots,
                            which could be easily integrated with your social media channels, messengers, etc.
                        </p>
                    </div>
                    <div className="aichatbot-innovation-card">
                        <img src={i2} alt="Personalized" />
                        <h3>Foster Personalized Experience</h3>
                        <p>
                            The custom AI-powered Chatbots built by our developers are adept at identifying every consumer,
                            thereby serving them with a more personalized experience as per their interests, choices, etc.
                        </p>
                    </div>
                    <div className="aichatbot-innovation-card">
                        <img src={i3} alt="Engagement" />
                        <h3>Drive More Engagement</h3>
                        <p>
                            Acting swiftly on your customers’ purchase interests, besides providing you with accurate data &
                            insights about their response towards your offerings, Chatbots can help you drive more engagements.
                        </p>
                    </div>
                    <div className="aichatbot-innovation-card">
                        <img src={i4} alt="Decisions" />
                        <h3>Make More Informed Decisions</h3>
                        <p>
                            Bots, custom-built by our AI Chatbot developers will give you more data-centric insights in your
                            customers’ purchase history, decisions, etc., gathering more accurate data while interacting with them.
                        </p>
                    </div>
                </div>
            </div>
            <div className="aichatbot-industries-section">
                <h2>
                    <span className="blue-text">Industries</span>{" "}
                    We Have Served To Date
                </h2>
                <div className="aichatbot-industries-line"></div>

                <div className="aichatbot-industries-grid">
                    <div className="industry-card">
                        <img src={educationIcon} alt="Education" />
                        <p>Education</p>
                    </div>
                    <div className="industry-card">
                        <img src={transportIcon} alt="Transportation" />
                        <p>Transportation</p>
                    </div>
                    <div className="industry-card">
                        <img src={financeIcon} alt="Finance" />
                        <p>Finance</p>
                    </div>
                    <div className="industry-card">
                        <img src={mediaIcon} alt="Media" />
                        <p>Media & Entertainment</p>
                    </div>
                    <div className="industry-card">
                        <img src={healthcareIcon} alt="Healthcare" />
                        <p>Healthcare</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AIChatbotSection;
