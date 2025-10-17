import React from "react";
import "../styles/SoftwareTestingSection.css";
import qaHeroImg from "../assets/softwareqa.png"; // make sure this image path is correct
import testingImg from "../assets/qaonestop.png";
import qaplan from "../assets/qaplan.png";
import qadesign from "../assets/qadesign.png";
import qareport from "../assets/qareport.png";
import qaregression from "../assets/qaregression.png";
import qaexecution from "../assets/qaexecution.png";

const SoftwareTestingSection = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="softwareqa-hero-section">
                <div className="softwareqa-content">
                    <h1>
                        <span className="highlight">Experience Game-Changing</span>
                        <br />
                        QA And Software Testing
                        <br />
                        Services
                    </h1>
                    <p>
                        Fuel Your Business Growth with Premium Quality and Better Agility
                    </p>
                    <button className="softwareqa-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="softwareqa-image">
                    <img src={qaHeroImg} alt="QA Testing Illustration" />
                </div>
            </div>

            {/* QA Services Features Section */}
            <div className="softwareqa-services-section">
                <h2>
                    <span className="highlight-blue">With ample experience in software testing & QA Testing</span>
                    <br />
                    <span className="bold-black">we shall grow your brand with game-changing technologies & tools.</span>
                </h2>

                <div className="softwareqa-grid">
                    {/* Card 1 */}
                    <div className="qa-card rounded-top-left">
                        <span className="qa-card-number">01</span>
                        <h3>Website Testing Services</h3>
                        <p>We test websites of different size, design, & functionalities across devices & browsers. Whether it’s cross-browser, mobile, or more – we do everything!</p>
                    </div>

                    {/* Card 2 */}
                    <div className="qa-card rounded-top-right">
                        <span className="qa-card-number">02</span>
                        <h3>Testing For Mobile Apps</h3>
                        <p>Browser-based or native, Android or iOS – we offer manual & automated mobile testing based on your needs.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="qa-card">
                        <span className="qa-card-number">03</span>
                        <h3>Testing For Software</h3>
                        <p>Whether it’s desktop software or SaaS – we’ve got your back with on-demand flexible automation testing.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="qa-card rounded-bottom-left">
                        <span className="qa-card-number">04</span>
                        <h3>Testing For Performance Analysis</h3>
                        <p>Using load testing tools and automation, we ensure your app performs flawlessly under load or frequent use.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="qa-card">
                        <span className="qa-card-number">05</span>
                        <h3>API Testing Solutions</h3>
                        <p>We test APIs using tools like JMeter, SoapUI, etc., to ensure only clean and reliable data flows into your systems.</p>
                    </div>

                    {/* Card 6 */}
                    <div className="qa-card rounded-bottom-right">
                        <span className="qa-card-number">06</span>
                        <h3>Regression Testing Solutions</h3>
                        <p>Whether single-sprint or ongoing, we automate and test for regressions using customizable frameworks.</p>
                    </div>
                </div>
                <div className="softwareqa-onestop-section">
                    <div className="onestop-image">
                        <img src={testingImg} alt="QA One Stop" />
                    </div>
                    <div className="onestop-content">
                        <h2>
                            <span className="highlight-blue">One-Stop For All Your QA & Testing Needs</span>
                        </h2>
                        <p>
                            <strong>
                                From Automated Testing to Manual Testing to API Testing to Software Testing to Web Testing and Full-Cycle Testing!
                            </strong>
                        </p>
                        <button className="onestop-btn">LET’S GET STARTED!</button>
                    </div>
                </div>
                {/* QA Process Timeline Section */}
                <div className="softwareqa-process-section">
                    <h2>
                        <span className="highlight-blue">Our Way Of</span>
                        <br />
                        <span className="bold-black">Testing & Assuring Quality</span>
                    </h2>
                    <p className="process-subtext">
                        Upon investing a copious amount of time in researching about your brand, we strategize a roadmap for your
                        enterprise requisites. Here’s an insight into our quality assurance & software testing approach.
                    </p>

                    <div className="process-timeline">
                        <div className="process-step">
                            <img src={qaplan} alt="Planning" />
                            <p>Planning For QA & Testing</p>
                        </div>
                        <div className="process-step">
                            <img src={qadesign} alt="Design" />
                            <p>Preparing Test Case Design</p>
                        </div>
                        <div className="process-step">
                            <img src={qareport} alt="Report" />
                            <p>Interim Test Report Preparation</p>
                        </div>
                        <div className="process-step">
                            <img src={qaregression} alt="Regression" />
                            <p>Regression Testing</p>
                        </div>
                        <div className="process-step">
                            <img src={qaexecution} alt="Execution" />
                            <p>Seamless Execution</p>
                        </div>
                    </div>
                </div>

                {/* QA Detailed Description Section */}
                <div className="softwareqa-detailed-section">
                    <div className="qa-left-column">
                        <h2>
                            <span className="highlight-blue">Quality Assurance</span> <span className="bold-black">Services</span>
                        </h2>
                        <p className="qa-subtext-bold">
                            With user-centric QA solutions, we can help you improve consistency of your business perception & decrease response time.
                        </p>
                        <p>
                            We assure to accelerate your testing methodologies with the cutting-edge functions, which encapsulate tool analysis,
                            test automation planning, test script implementation, etc. This helps us expedite the test coverage with premium quality.
                        </p>
                        <button className="qa-explore-btn">EXPLORE MORE</button>
                    </div>

                    <div className="qa-right-column">
                        <div className="qa-tabs">
                            <div className="qa-tab active">GAME-CHANGING QA SERVICES</div>
                            <div className="qa-tab">INDUSTRY-STANDARD TESTING SOLUTIONS</div>
                        </div>
                        <div className="qa-tab-content">
                            <p>
                                The importance of a robust and intuitive Quality Assurance is paramount, especially in today’s digital age when almost
                                every enterprise is hell-bent on streamlining, upgrading and protecting their respective legacy environments.
                                Our experienced and efficient quality analysts are re-vamping QA for your business!
                            </p>
                            <p>
                                Wordsys as a software testing company emphasize on combining end-to-end enterprise ecosystem with advances testing processes i.e.
                                manual testing, automated testing, performance testing & API testing. The main objective of our QA team is to help you obtain quality and
                                agility for fostering your business growth, improving customer experience, and enabling it to adapt to the technological changes.
                                Our testing methodologies own an in-built security net for all the releases.
                            </p>
                            <p>
                                The quality analysts and software testers of our organization have adequate experience and expertise in conducting both manual and automated testing for websites,
                                mobile applications, software solutions, and the likes. Enhanced quality, upgraded delivery cycles, cost-efficiency, etc. are some of the prime USPs of our
                                industry-specific and custom-tailored QA and software testing services.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SoftwareTestingSection;
