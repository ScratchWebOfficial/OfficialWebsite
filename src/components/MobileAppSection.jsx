import React from "react";
import "../styles/MobileAppSection.css";
import mobileAppImage from "../assets/mobileapphero.png";
import mobileTransformationImage from "../assets/mobiletransformation.png"; // use correct path
import business from "../assets/icon-business.png"; // use correct path
import ai from "../assets/icon-ai.png"; // use correct path
import api from "../assets/con-api.png"; // use correct path
import iconr from "../assets/icon-research.png";
import icond from "../assets/icon-research.png";
import icont from "../assets/icon-research.png";
import iconu from "../assets/icon-research.png";
import icona from "../assets/icon-research.png";
import iconc from "../assets/icon-research.png";
import m from "../assets/portfolio-mockup.png";
import icone from "../assets/icone.png";
import icontt from "../assets/icontt.png";
import iconf from "../assets/iconf.png";
import iconm from "../assets/iconm.png";
import iconh from "../assets/iconh.png";
import advanceIcon from "../assets/advance.png";
import countableIcon from "../assets/countable.png";
import secureIcon from "../assets/secure.png";
import scalableIcon from "../assets/scalable.png";
import transparentIcon from "../assets/transparent.png";
import supportIcon from "../assets/supporti.png";
import icontopdev from "../assets/icon-topdev.png";
import icontechnology from "../assets/icon-technology.png";
import iconengineering from "../assets/icon-engineering.png";
import img1 from "../assets/mobilefirst.png";
import img2 from "../assets/featurerich.png";
import img3 from "../assets/costefficiency.png";
import phoneImage from "../assets/phones.png"; // update to match your actual path
import { FaAndroid, FaApple } from "react-icons/fa";

const MobileAppSection = () => {
    return (
        <div className="mobileapp-wrapper">
            {/* Hero Section */}
            <div className="mobileapp-hero-section">
                <div className="mobileapp-left">
                    <h1>
                        <span className="highlight">Mobile App</span><br />
                        Development Services
                    </h1>
                    <p>Revamp Business Communications.</p>
                    <button className="mobileapp-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="mobileapp-right">
                    <img src={mobileAppImage} alt="Mobile App Development Illustration" />
                </div>
            </div>

            {/* Transformation Section */}
            <div className="mobileapp-transformation-section">
                <div className="transformation-image">
                    <img src={mobileTransformationImage} alt="Mobile Transformation" />
                </div>
                <div className="transformation-content">
                    <h2>
                        <span className="highlight">Navigate Mobile Transformation</span><br />
                        With Gen-Next Mobile App Development Company
                    </h2>
                    <div className="underline"></div>
                    <h4>Watch Your Business Reach The Sky<br />
                        With Robust & Feature-Rich Mobile Apps</h4>
                    <p>
                        Combining our technical cognizance and in-depth domain expertise with an innovative
                        strategy, we deliver gen-next, futuristic mobile applications, which will help you foster
                        audience engagement and drive more conversions.
                    </p>
                    <p>
                        Delivering a remarkable mobile experience is what we strive for! To make your business
                        growth and sales rocket, we narrow down on the cutting-edge technologies for our hybrid
                        and native apps.
                    </p>
                </div>
            </div>
            {/* Feature Card Section */}
            <div className="mobileapp-featurecard-section">
                <div className="feature-card">
                    <img src={business} alt="Business Intelligence" />
                    <p className="feature-label">Mobile App</p>
                    <h3>Business Intelligence</h3>
                    <p className="feature-desc">
                        We are pioneering business intelligence in our mobile app development
                        to help your brand stay ahead of the game.
                    </p>
                </div>
                <div className="feature-card">
                    <img src={ai} alt="AI" />
                    <p className="feature-label">Leveraging</p>
                    <h3>The Boundaries of AI</h3>
                    <p className="feature-desc">
                        From natural language processing to search optimization, our mobile
                        apps are integrated in AI for making the most of your data.
                    </p>
                </div>
                <div className="feature-card">
                    <img src={api} alt="API Integrated" />
                    <p className="feature-label">API-Integrated</p>
                    <h3>Mobile Applications</h3>
                    <p className="feature-desc">
                        An ideal mobile app should work across multiple platforms, devices, etc.
                        Give our API-integrated apps a shot for a better result.
                    </p>
                </div>
            </div>
            {/* Development Process Section */}
            <div className="mobileapp-process-section">
                <h2>
                    <span className="highlight">Our Mobile App</span><br />
                    Development Process
                </h2>
                <div className="underline center"></div>

                <div className="process-grid">
                    <div className="process-card">
                        <img src={iconr} alt="Research" />
                        <h4>A Thorough Research</h4>
                        <p>
                            Our research entails an understanding of the nature of your business,
                            your intended audiences, what kind of app suits your needs, etc.
                            Human interaction & behavior to different apps constitutes a crucial part of the research, too.
                        </p>
                    </div>
                    <div className="process-card">
                        <img src={icond} alt="Development" />
                        <h4>Development – Subsequent Step</h4>
                        <p>
                            We pride in having a crew of experienced & efficient app developers,
                            who strive their best to design & develop responsive, intuitive & practical mobile applications,
                            catering to your business needs, budget, etc.
                        </p>
                    </div>
                    <div className="process-card">
                        <img src={icont} alt="Testing" />
                        <h4>Testing – A Litmus Test!</h4>
                        <p>
                            We thoroughly test every mobile app across multiple hardware for ensuring
                            optimum utility before it’s launched. This helps us track bugs, etc. we might
                            have overlooked at the time of development.
                        </p>
                    </div>
                    <div className="process-card">
                        <img src={iconu} alt="UX" />
                        <h4>Premium UI/UX</h4>
                        <p>
                            User satisfaction tops our priority! Combining unparalleled features and
                            futuristic designs together, we build premium-quality mobile applications,
                            which never fail to render optimum user experience.
                        </p>
                    </div>
                    <div className="process-card">
                        <img src={icona} alt="Adaptability" />
                        <h4>Adaptability Is The Key</h4>
                        <p>
                            The User-Interface of each of our app is made adaptable to variations.
                            We ensure that every text is easy-to-read & the navigation easily fits in
                            the screens across a range of devices.
                        </p>
                    </div>
                    <div className="process-card">
                        <img src={iconc} alt="Delivery" />
                        <h4>Online Delivery, Our USP</h4>
                        <p>
                            We pay utmost value to the time, trust and resources, invested in developing a
                            mobile application. Hence, we leave no stone unturned in ensuring the final
                            delivery in a timely manner.
                        </p>
                    </div>
                </div>
            </div>
            {/* Portfolio Section */}
            <div className="mobileapp-portfolio-section">
                <h2 className="portfolio-heading">
                    <span className="highlight">Here’s A Peek</span> Into Our Portfolio
                </h2>
                <div className="underline center"></div>

                <div className="portfolio-container">
                    <div className="portfolio-card">
                        <h3>Online Salon App</h3>
                        <p>
                            Salospa is an online salon booking app, which we developed for our client.
                            We made sure that the app has all the essential features. Salospa consisted of
                            the part which lets users create their prof...
                        </p>
                        <button className="portfolio-btn">READ MORE</button>
                    </div>
                    <div className="portfolio-image">
                        <img src={m} alt="Salon App Mockup" />
                    </div>
                </div>
            </div>
            {/* Industries Served Section */}
            <div className="mobileapp-industries-section">
                <h2 className="industries-heading">
                    <span className="highlight">Industries</span> We Have Served To Date
                </h2>
                <div className="underline center"></div>

                <div className="industries-grid">
                    <div className="industry-item">
                        <img src={icone} alt="Education" />
                        <p>Education</p>
                    </div>
                    <div className="industry-item">
                        <img src={icontt} alt="Transportation" />
                        <p>Transportation</p>
                    </div>
                    <div className="industry-item">
                        <img src={iconf} alt="Finance" />
                        <p>Finance</p>
                    </div>
                    <div className="industry-item">
                        <img src={iconm} alt="Media & Entertainment" />
                        <p>Media & Entertainment</p>
                    </div>
                    <div className="industry-item">
                        <img src={iconh} alt="Healthcare" />
                        <p>Healthcare</p>
                    </div>
                </div>
            </div>
            <div className="mobileapp-customapps-section">
                <h2 className="mobileapp-customapps-heading">
                    <span className="blue-text">Let Our Custom-Made Mobile Apps</span>
                    <br />
                    Pull Out All the Stops to Help You Make a Mark <br />
                    In Today’s Cut-Throat Market
                </h2>

                <div className="mobileapp-customapps-grid">
                    <div className="mobileapp-feature-box">
                        <img src={advanceIcon} alt="Advance" />
                        <h4>Advance Mobile app Technology</h4>
                        <p>
                            We rely upon the advanced tech stacks to make your mobile
                            applications run quickly, as well as, smoothly.
                        </p>
                    </div>
                    <div className="mobileapp-feature-box">
                        <img src={countableIcon} alt="Countable" />
                        <h4>Countable</h4>
                        <p>
                            Our quality analysts can eliminate even the smallest glitches and
                            bugs in the general codebase and business logic.
                        </p>
                    </div>
                    <div className="mobileapp-feature-box">
                        <img src={secureIcon} alt="Secure" />
                        <h4>Safe & Secure</h4>
                        <p>
                            Using different kinds of protocols and encryptions, we make your
                            mobile applications safer and more secure.
                        </p>
                    </div>
                    <div className="mobileapp-feature-box">
                        <img src={scalableIcon} alt="Scalable" />
                        <h4>Scalable</h4>
                        <p>
                            We invest in a great deal of time and expertise to make the
                            architecture of your mobile application highly scalable.
                        </p>
                    </div>
                    <div className="mobileapp-feature-box">
                        <img src={transparentIcon} alt="Transparent" />
                        <h4>Transparent</h4>
                        <p>
                            We uphold the value of maintaining transparency in all our
                            projects. We take care of each project as if it belongs to us.
                        </p>
                    </div>
                    <div className="mobileapp-feature-box">
                        <img src={supportIcon} alt="Customer Assistance" />
                        <h4>Customer Assistance</h4>
                        <p>
                            Our 24x7 customer support services are meant to serve you during,
                            as well as, post the completion of a project.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mobileapp-highlighted-section">
                <div className="highlighted-item">
                    <img src={icontopdev} alt="Top App Developers" />
                    <h4>Top App Developers</h4>
                </div>
                <div className="blue-divider"></div>
                <div className="highlighted-item">
                    <img src={icontechnology} alt="Advanced Technology" />
                    <h4>Advanced Technology</h4>
                </div>
                <div className="blue-divider"></div>
                <div className="highlighted-item">
                    <img src={iconengineering} alt="Accelerated Engineering" />
                    <h4>Accelerated Engineering</h4>
                </div>
            </div>
            {/* Highlighted Features Section */}
            <div className="mobileapp-transformation-highlighted-section">
                <h2 className="transformation-title">
                    <span className="blue-text">Navigate Your Mobile Transformation</span>
                    <br />
                    With Intuitive, Robust, and User-Friendly Mobile Applications
                </h2>

                <div className="mobileapp-transformation-grid">
                    <div className="transformation-card">
                        <img src={img1} alt="Mobile-First Approach" />
                        <div className="card-overlay">Mobile-First Approach</div>
                    </div>
                    <div className="transformation-card">
                        <img src={img2} alt="Feature-Rich Applications" />
                        <div className="card-overlay">Feature-Rich Applications</div>
                    </div>
                    <div className="transformation-card">
                        <img src={img3} alt="Cost Efficiency" />
                        <div className="card-overlay">Cost Efficiency Is Guaranteed</div>
                    </div>
                </div>
            </div>
            <div className="mobileapp-mechanism-section">
                <h2 className="mechanism-heading">
                    <span className="blue-text">Decoding</span> Our Work Mechanism
                    <div className="underline"></div>
                </h2>
                <div className="mechanism-grid">
                    <div className="mechanism-card">
                        <h1 className="mechanism-number">01</h1>
                        <h3>We Begin</h3>
                        <h4 className="mechanism-subtitle">With A Detailed Research</h4>
                        <p>
                            Before building your app, we shall look into what your brand is all
                            about, and what type of app would fit your needs. Identifying your
                            intended users and gauging the competition with an exploration of
                            similar apps available in the market, we define your app’s
                            objectives and narrow down an appropriate platform to build your
                            application.
                        </p>
                    </div>

                    <div className="mechanism-card">
                        <h1 className="mechanism-number">02</h1>
                        <h3>Development</h3>
                        <h4 className="mechanism-subtitle">The Subsequent Step</h4>
                        <p>
                            We make sure to involve the best of experts of different development
                            teams to delve in API development, front-end app development, and
                            back-end app development. Upon thoroughly analyzing the functional
                            needs and scope of work, we finally distribute the work across
                            multiple development milestones.
                        </p>
                    </div>

                    <div className="mechanism-card">
                        <h1 className="mechanism-number">03</h1>
                        <h3>A Rigorous Testing</h3>
                        <h4 className="mechanism-subtitle">An Integral Part</h4>
                        <p>
                            In a bid to spell the optimum utility and usability, we make sure to
                            test our mobile applications across a bevy of devices before
                            launching them. It enables us to aptly test user-experience, which
                            we might have missed during the development process.
                        </p>
                    </div>

                    <div className="mechanism-card">
                        <h1 className="mechanism-number">04</h1>
                        <h3>An Unbridled</h3>
                        <h4 className="mechanism-subtitle">Customer Assistance</h4>
                        <p>
                            Upon the completion of a detailed testing, we provide the mobile
                            apps to our clientele. Besides, we lay emphasis on a seamless
                            deployment of our mobile apps across multiple app stores. If need
                            be, you shall obtain sincere assistance for fixing bugs. We adhere
                            to the specified timelines of app delivery as well!
                        </p>
                    </div>
                </div>
            </div>
            <div className="mobileapp-legacy-section">
                <div className="mobileapp-legacy-left">
                    <img src={phoneImage} alt="Phones" />
                </div>
                <div className="mobileapp-legacy-right">
                    <h2>
                        <span className="highlight">Re-Write Your Legacy!</span><br />
                        Succeed With Mobile Apps.
                    </h2>
                    <div className="underline" />
                    <div className="legacy-feature">
                        <FaAndroid className="legacy-icon" />
                        <div>
                            <h4>Android App</h4>
                            <p>
                                Industry-standard & premium Android apps at the most competitive rate!
                            </p>
                        </div>
                    </div>
                    <div className="legacy-feature">
                        <FaApple className="legacy-icon" />
                        <div>
                            <h4>App for iOS</h4>
                            <p>
                                Expand your global reach with dynamic, high-performance & feature-rich iOS apps.
                            </p>
                        </div>
                    </div>
                    <button className="legacy-btn">SCHEDULE A MEETING</button>
                </div>
            </div>
        </div>
    );
};

export default MobileAppSection;