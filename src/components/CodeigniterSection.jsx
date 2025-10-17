import React from "react";
import "../styles/CodeigniterSection.css";
import codeigniterImage from "../assets/code.png";
import codeigniterLogo from "../assets/code1.png";
import solutionIcon1 from "../assets/code-solution1.png";
import solutionIcon2 from "../assets/code-solution2.png";
import cakePhpLogo from "../assets/cakeph.png";
import symfonyLogo from "../assets/symfony.png";
import codeigniterLogo2 from "../assets/codeignite.png";
import laravelLogo from "../assets/laravel1.png";
import yiiLogo from "../assets/yii.png";
import zendLogo from "../assets/zend.png";
import educationIcon from "../assets/education1.png";
import transportIcon from "../assets/transport1.png";
import financeIcon from "../assets/finance1.png";
import mediaIcon from "../assets/media1.png";
import healthcareIcon from "../assets/healthcare1.png";
import { FaShieldAlt, FaCogs, FaTools, FaCode, FaExpand, FaBolt } from "react-icons/fa";

const CodeigniterSection = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="codeigniter-hero-section">
                <div className="codeigniter-left">
                    <h1>
                        <span className="blue-text">Fully Custom</span><br />
                        CodeIgniter Development <br />
                        Services
                    </h1>
                    <p>
                        Backed By Our CodeIgniter Developers, You Can Now Build Edgier PHP-Based
                        Websites & Apps Harnessing The Robust CodeIgniter Framework
                    </p>
                    <button className="codeigniter-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="codeigniter-right">
                    <img src={codeigniterImage} alt="CodeIgniter Illustration" />
                </div>
            </div>

            {/* Game Changer Section */}
            <div className="codeigniter-gamechanger-section">
                <div className="codeigniter-gamechanger-left">
                    <img src={codeigniterLogo} alt="CodeIgniter Logo" />
                </div>
                <div className="codeigniter-gamechanger-right">
                    <h2>
                        <span className="highlight-text">CodeIgniter</span> The Ultimate Game Changer!
                    </h2>
                    <div className="gamechanger-grid">
                        <div className="feature-card">
                            <FaShieldAlt className="icon" />
                            <h4>Fully Secure</h4>
                            <p>
                                Enhance your web app's overall efficacy using CodeIgniter’s built-in
                                security against XSS, CSRF & more!
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaCogs className="icon" />
                            <h4>Agile Development</h4>
                            <p>
                                Agility at its best! Speed up development with fewer configurations and
                                faster execution.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaTools className="icon" />
                            <h4>Hassle-Free Customization</h4>
                            <p>
                                Customize any existing library without hassle. Write new libraries easily
                                & shorten code time.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaCode className="icon" />
                            <h4>Easy HTML Code Maintenance</h4>
                            <p>
                                Build & manage HTML codes using MVC architecture to streamline processes.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaExpand className="icon" />
                            <h4>Flexible & Scalable</h4>
                            <p>
                                Highly interactive, scalable web apps to suit all your dynamic
                                requirements.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaBolt className="icon" />
                            <h4>Optimum Performance</h4>
                            <p>
                                Unparalleled speed, light-weight & precision — take development to the
                                next level!
                            </p>
                        </div>
                    </div>
                    <button className="codeigniter-btn">WANNA TALK? FIX TIME NOW!</button>
                </div>
            </div>

            {/* CodeIgniter Solutions Section */}
            <div className="codeigniter-solutions-section">
                <h2>
                    <span className="highlight-text">Our CodeIgniter Solutions</span> All Inclusive!
                </h2>

                <div className="solution-grid">
                    <div className="solution-card">
                        <img src={solutionIcon1} alt="Smooth Maintenance" />
                        <h4>Smooth Maintenance</h4>
                        <p>
                            Hire CodeIgniter developers from Wordsys Tech to let your web applications function
                            smoothly, albeit, without any hassle! Backed by our experts, you can bring betterment in
                            your business operations, overall performance, product safety, fixing bugs, back-up
                            arrangement, change implementation & more!
                        </p>
                    </div>
                    <div className="solution-card">
                        <img src={solutionIcon2} alt="Seamless Development" />
                        <h4>Seamless Development</h4>
                        <p>
                            Foster your business growth with scalable, intuitive & errorless web applications. Our
                            customized app development services deliver bespoke apps exactly as per your requisites!
                        </p>
                    </div>
                    <div className="solution-card">
                        <img src={solutionIcon1} alt="Cloud-Based Apps" />
                        <h4>Cloud-Based Apps</h4>
                        <p>
                            Expertise being the pillar of our services, we build intuitive & result-yielding cloud-based
                            apps across enterprise verticals, needs, budget choices, & the likes!
                        </p>
                    </div>
                    <div className="solution-card">
                        <img src={solutionIcon2} alt="Website Development" />
                        <h4>Website Development</h4>
                        <p>
                            Backed by cutting-edge CI frameworks, we spruce up the brand value of your business or
                            E-commerce store with a great website!
                        </p>
                    </div>
                    <div className="solution-card">
                        <img src={solutionIcon1} alt="Database Development" />
                        <h4>Database Development</h4>
                        <p>
                            Our developers can custom-build databases & conduct development across multiple databases
                            like Microsoft SQL, Oracle & more!
                        </p>
                    </div>
                    <div className="solution-card">
                        <img src={solutionIcon2} alt="Automated Testing" />
                        <h4>Automated Testing</h4>
                        <p>
                            Get error-free bespoke apps using PHPUnit or Unit Testing class. Our developers can even run
                            automated tests for your apps!
                        </p>
                    </div>
                </div>

                <div className="solution-cta">
                    <button className="codeigniter-btn">WANNA TALK? FIX TIME NOW!</button>
                </div>
                <div className="codeigniter-phpframeworks-section">
                    <h2>
                        <span className="highlight-text">The Different PHP frameworks</span> We Work With
                    </h2>

                    <div className="framework-grid">
                        <div className="framework-card"><img src={cakePhpLogo} alt="CakePHP" /></div>
                        <div className="framework-card"><img src={symfonyLogo} alt="Symfony" /></div>
                        <div className="framework-card"><img src={codeigniterLogo2} alt="CodeIgniter" /></div>
                        <div className="framework-card"><img src={laravelLogo} alt="Laravel" /></div>
                        <div className="framework-card"><img src={yiiLogo} alt="Yii Framework" /></div>
                        <div className="framework-card"><img src={zendLogo} alt="Zend" /></div>
                    </div>

                    <button className="codeigniter-btn framework-cta">WANT TO TALK? SAY HI!</button>
                </div>
                <div className="codeigniter-industries-section">
                    <h2>
                        <span className="highlight-text">Industries</span> We Have Served To Date
                    </h2>

                    <div className="industries-grid">
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
                            <img src={mediaIcon} alt="Media & Entertainment" />
                            <p>Media & Entertainment</p>
                        </div>
                        <div className="industry-card">
                            <img src={healthcareIcon} alt="Healthcare" />
                            <p>Healthcare</p>
                        </div>
                    </div>
                </div>
                {/* Why Rely On Us Section */}
                <div className="codeigniter-rely-section">
                    <h2><span className="highlight-text">Why Should You</span> Rely On Us?</h2>

                    <div className="rely-card-grid">
                        <div className="rely-card">
                            <h4>Accomplish Your Project</h4>
                            <p>
                                From stepping stone to milestones – our experienced, skilled & efficient CodeIgniter developers
                                can help your project visions emerge with flying colors – right from the stage of ideation to
                                design to development to management and the final execution!
                            </p>
                        </div>
                        <div className="rely-card">
                            <h4>Fuel A Small Business</h4>
                            <p>
                                To be a pioneer of success for your small business, we shall nestle a crew of dedicated
                                CodeIgniter developers for scaling your products, upgrading their efficacies with constant
                                maintenance & the inclusion of edgy features, functionalities et al!
                            </p>
                        </div>
                        <div className="rely-card">
                            <h4>Bring Actionable Results</h4>
                            <p>
                                Even an established brand needs a boost to stay put amidst competition! Our CodeIgniter
                                programmers can help your brand scale better heights with more affordable yet result-yielding
                                solutions, via which you can bring more actionable insights in your enterprise operation,
                                management, etc.
                            </p>
                        </div>
                        <div className="rely-card">
                            <h4>In-House Resources</h4>
                            <p>
                                Our efficient & technically-cognizant CodeIgniter service providers will be at the forefront
                                in being the binding force for supporting your in-house business resources & building more
                                efficient tech units for addressing your enterprise needs, keeping your visions, goals &
                                intended audiences in mind!
                            </p>
                        </div>
                    </div>

                    <div className="rely-cta">
                        <button className="codeigniter-btn">WANNA TALK? FIX TIME NOW!</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CodeigniterSection;
