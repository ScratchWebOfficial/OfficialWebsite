import React from "react";
import "../styles/BlockchainSection.css";
import blockchainImage from "../assets/blockchainhero.png";
import wordcloudImage from "../assets/blockchain-wordcloud.png";
import { FaFileAlt, FaShieldAlt, FaLaptopCode, FaClipboardCheck } from "react-icons/fa";
import decentralizedIcon from "../assets/decentralized.png";
import developmentIcon from "../assets/development.png";
import consultationIcon from "../assets/consultation1.png";
import insightImage from "../assets/futuristic-blockchain.png";
import boostImage from "../assets/boost-efficiency.png";

export default function BlockchainSection() {
    return (
        <section className="blockchain-hero-section">
            <div className="blockchain-hero-left">
                <h1>
                    <span className="blue-text">Stay Ahead Of The Wave Of</span><br />
                    Blockchain Revolution
                </h1>
                <p>
                    Tapping into the unexplored ecosystems, we shall help you address your business problems
                    with our intuitive & robust blockchain services and their solutions.
                </p>
                <button className="blockchain-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="blockchain-hero-right">
                <img src={blockchainImage} alt="Blockchain Illustration" />
            </div>

            <section className="blockchain-readiness-section">
                <div className="readiness-left">
                    <img src={wordcloudImage} alt="Blockchain Word Cloud" />
                </div>
                <div className="readiness-right">
                    <h2>Get Your Business Blockchain Ready Now!</h2>

                    <div className="readiness-feature">
                        <FaClipboardCheck className="readiness-icon" />
                        <div>
                            <h4>Decentralized Apps</h4>
                            <p>Allow us to decentralize your business ecosystem with our transparent and reliable decentralized blockchain apps.</p>
                        </div>
                    </div>

                    <div className="readiness-feature">
                        <FaFileAlt className="readiness-icon" />
                        <div>
                            <h4>Secure</h4>
                            <p>Keeping up with the security of your confidential data is something that always tops our priority list.</p>
                        </div>
                    </div>

                    <div className="readiness-feature">
                        <FaShieldAlt className="readiness-icon" />
                        <div>
                            <h4>Transformative</h4>
                            <p>Putting our blockchain enterprise solutions in the middle of your enterprise transformation, you can explore better business opportunities.</p>
                        </div>
                    </div>

                    <div className="readiness-feature">
                        <FaLaptopCode className="readiness-icon" />
                        <div>
                            <h4>Non-Corruptive</h4>
                            <p>Explore our non-corruptive blockchain solutions to tap into more business opportunities and better operational efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blockchain-services-section">
                <div className="blockchain-service-card">
                    <img src={decentralizedIcon} alt="Decentralized Apps" />
                    <h4><span className="blue">Decentralized</span> Blockchain Apps</h4>
                    <p>
                        We are developing decentralized apps and supporting private/public Blockchain to help you explore numerous perks of this thriving technology.
                    </p>
                </div>
                <div className="blockchain-service-card">
                    <img src={developmentIcon} alt="App Development" />
                    <h4><span className="blue">Blockchain App</span> Development</h4>
                    <p>
                        Get custom-tailored platforms, apps and systems for various Blockchain projects, app development and address problems specific to your business domains.
                    </p>
                </div>
                <div className="blockchain-service-card">
                    <img src={consultationIcon} alt="Consultation" />
                    <h4><span className="blue">Business</span> Consultation</h4>
                    <p>
                        With WordSys Tech, you can analyze and embed Blockchain technologies into different business domains including, Trade, Finance, Healthcare, etc.
                    </p>
                </div>
            </section>

            <section className="blockchain-insight-section">
                <div className="insight-left">
                    <h2>
                        <span className="blue-text">Get An Insight Into</span><br />
                        The Futuristic Horizon Of Blockchain
                    </h2>
                    <div className="insight-grid">
                        <div className="insight-item">
                            <h4>Varied Expertise</h4>
                            <p>Owing to our in-depth know-how of the current industry, we ensure the best-in-class blockchain-based solutions across a variety of business verticals.</p>
                        </div>
                        <div className="insight-item">
                            <h4>Extensive Experience</h4>
                            <p>Thanks to our years-long experience, which has led us to build and implement latest Blockchain technologies across enterprises and organizations.</p>
                        </div>
                        <div className="insight-item">
                            <h4>Ensuring Security</h4>
                            <p>We attain the utmost business security by embedding robust blockchain, cryptocurrency distributed ledger technology services, and solutions, competitively priced and suitable to your requisites.</p>
                        </div>
                        <div className="insight-item">
                            <h4>Innovation</h4>
                            <p>Data safety is our top-most priority. We blend in an innovative approach with data security when working on different business projects.</p>
                        </div>
                    </div>
                    <button className="insight-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="insight-right">
                    <img src={insightImage} alt="Blockchain Insight" />
                </div>
            </section>

            <section className="blockchain-boost-section">
                <div className="boost-container">
                    <div className="boost-left">
                        <img src={boostImage} alt="Boost Business Growth" />
                    </div>
                    <div className="boost-right">
                        <h2>
                            <span className="blue-text">Let’s Boost Your Business Efficiency</span><br />
                            With Innovative Blockchain Services
                        </h2>
                        <button className="boost-btn">ANY PROJECT ON YOUR MIND?</button>
                    </div>
                </div>
            </section>
        </section>
    );
}
