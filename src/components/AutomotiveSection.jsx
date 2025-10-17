import React from "react";
import "../styles/AutomotiveSection.css";
import automotiveHero from "../assets/automotiveHero.png"; // use the image shown in your UI
import supplyIcon from "../assets/supplyIcon.png";
import dataIcon from "../assets/dataIcon.png";
import userIcon from "../assets/userIcon.png";
import require from "../assets/automotiveInterior.png";
import ChainIcon from "../assets/supplyChainIcon.png";
import iotIcon from "../assets/iotIcon.png";
import analyticsIcon from "../assets/analyticsIcon.png";
import logisticsIcon from "../assets/logisticsIcon.png";
import integrationIcon from "../assets/integrationIcon.png";
import dataManagementIcon from "../assets/dataManagementIcon.png";
import visualizationIcon from "../assets/visualizationIcon.png";
import warehouseIcon from "../assets/warehouseIcon.png";
import decisionIcon from "../assets/decisionIcon.png";
import turnaroundIcon from "../assets/turnaroundIcon.png";
import blog1 from "../assets/b1.png";
import blog2 from "../assets/b2.png";
import blog3 from "../assets/b3.png";
import blog4 from "../assets/b4.png";
import blog5 from "../assets/b5.png";
import blog6 from "../assets/b6.png";
import blog7 from "../assets/b7.png";
import blog8 from "../assets/b8.png";
import blog9 from "../assets/b9.png";
import blog10 from "../assets/b10.png";

const AutomotiveSection = () => {
    return (
        <div className="automotive-hero-section">
            <div className="automotive-left">
                <h1><span className="blue">AUTOMOTIVE & LOGISTICS</span><br />SOFTWARE SOLUTIONS</h1>
                <p>Digitized Logistics and Automotive Solutions to Orchestrate Your Business Operations</p>
                <button className="meeting-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="automotive-right">
                <img src={automotiveHero} alt="Automotive Logistics Illustration" />
            </div>
            <div className="automotive-feature-section">
                <div className="automotive-feature-card">
                    <img src={supplyIcon} alt="Supply Chain Icon" />
                    <h3>Scalable <br />Supply Chain</h3>
                    <p>
                        Digitized Logistics and Automotive Solutions to <br />
                        Orchestrate Your Business Operations
                    </p>
                </div>
                <div className="automotive-feature-card">
                    <img src={dataIcon} alt="Data Icon" />
                    <h3>Data-Driven <br />Solutions</h3>
                    <p>
                        Combining the cutting-edge logistics and automotive software solutions with Big Data, AI & ML, we collect the relevant and result-yielding data from sensors to help you achieve your goals pertaining to business operations and growth.
                    </p>
                </div>
                <div className="automotive-feature-card">
                    <img src={userIcon} alt="UX Icon" />
                    <h3>Enhanced <br />User Experience</h3>
                    <p>
                        Upon integration of the custom-embedded and fully automotive software solutions into multiple auto platforms, we ensure to take the overall user-experience of your business eco-system to another height.
                    </p>
                </div>
            </div>
            <div className="automotive-tailored-section">
                <div className="tailored-left">
                    <h3>|It’s Time To Analyze The Flow Of Information And Goods Across Multiple Sections Of Supply Chain With Our Robust Logistics And Automotive Software Solutions</h3>
                    <p>
                        Are you in need of the customized automotive and logistics software solutions? We are here to assist you.
                        For any kind of assistance regarding your automotive and logistics needs, feel free to contact us.
                        Whether you want to streamline your business operations or enhance the value chain, we are there at your assistance 24x7.
                    </p>
                    <button className="begin-btn">LET’S BEGIN!</button>
                </div>
                <div className="tailored-right">
                    <h2><span className="blue">CUSTOM-TAILORED EXCLUSIVELY</span> FOR YOU</h2>
                    <p>
                        Right from managing your business with IoT to adding insights into your operations and streamlining the
                        process of employee on-boarding, our customized, cutting-edge and cost-efficient logistics and automotive
                        software solutions can give your brand an edge over your competitors.
                    </p>
                    <img src={require} alt="Car Dashboard" />
                </div>
            </div>
            <div className="automotive-needs-section">
                <h3 className="needs-highlight"><span className="blue">It’s Time</span></h3>
                <h2 className="needs-heading">That You Talked Us Through Your Needs</h2>
                <div className="underline"></div>
                <p className="needs-subheading">
                    Being your one-stop logistics and automotive partner, we shall fulfill your <br />
                    business needs with customized solutions.
                </p>
                <p className="needs-description">
                    The entire cycle is characterized by some independent activities i.e. transportation delivery, pick-up, etc.
                    Upon integrating these systems, you can efficiently exchange your business information across different channels
                    to bolster the value chain. <br />
                    Backed by our logistics and automotive business intelligence services, you can analyze the flow of goods across
                    different sectors of the supply chain.
                </p>
                <div className="needs-points">
                    <div className="point">
                        <span>01</span>
                        <p><strong className="blue">Industry Specific</strong></p>
                    </div>
                    <div className="point">
                        <span>02</span>
                        <p><strong className="blue">Quality Driven</strong></p>
                    </div>
                    <div className="point">
                        <span>03</span>
                        <p><strong className="blue">Cost Efficient</strong></p>
                    </div>
                </div>
            </div>
            <div className="automotive-icon-section">
                <div className="icon-item">
                    <img src={ChainIcon} alt="Supply Chain" />
                    <p>Supply Chain<br />Management</p>
                </div>
                <div className="icon-item">
                    <img src={iotIcon} alt="IoT Solutions" />
                    <p>Customized<br />IoT Solutions</p>
                </div>
                <div className="icon-item">
                    <img src={analyticsIcon} alt="Analytics Icon" />
                    <p>It’s Time</p>
                </div>
                <div className="icon-item">
                    <img src={logisticsIcon} alt="Logistics Software" />
                    <p>Custom<br />Logistics Software</p>
                </div>
            </div>
            <div className="automotive-benefits-section">
                <div className="benefit-card">
                    <img src={integrationIcon} alt="Integration" />
                    <h3 className="blue">Integration</h3>
                    <p>
                        With the usage of our industry-specific web services, we integrate the advanced disparate systems with service oriented architecture. Our adroit across global regions shall help us meet your specific needs with tailor-made business solutions.
                    </p>
                </div>
                <div className="benefit-card">
                    <img src={dataManagementIcon} alt="Data Management" />
                    <h3 className="blue">Data Management</h3>
                    <p>
                        Backed by cutting-edge and industry-specific Big Data platforms, our automotive and logistics experts will help manage and explore voluminous unstructured and raw data.
                    </p>
                </div>
                <div className="benefit-card">
                    <img src={visualizationIcon} alt="Data Visualization" />
                    <h3 className="blue">Data Visualization</h3>
                    <p>
                        We indulge in reporting a bevy of services including collaborating reports, standard report creation, and the likes after thorough data visualization.
                    </p>
                </div>
                <div className="benefit-card">
                    <img src={warehouseIcon} alt="Warehouse" />
                    <h3 className="blue">Warehouse Management</h3>
                    <p>
                        Based upon in-depth analysis of incoming and outgoing data, we aptly manage your warehouse spaces with precision.
                    </p>
                </div>
                <div className="benefit-card">
                    <img src={decisionIcon} alt="Decision Making" />
                    <h3 className="blue">Decision Making</h3>
                    <p>
                        Our logistics experts streamline the decision-making process using integrated intelligence data to ensure seamless operations.
                    </p>
                </div>
                <div className="benefit-card">
                    <img src={turnaroundIcon} alt="Faster Turnaround" />
                    <h3 className="blue">Faster Turnaround</h3>
                    <p>
                        Our automotive experts help reduce your operating cost and ensure faster turn-around with competitive, qualitative logistics solutions.
                    </p>
                </div>
            </div>
            <div className="automotive-blog-section">
                <h2 className="blog-title"><span className="blue">READY</span> TO READ?</h2>
                <div className="blog-underline"></div>
                <p className="blog-subtext">
                    Carve out some time to delve into our informative and engaging blogs to get an insight into our business,
                    services, product details and several other interesting facts!
                </p>
                <div className="blog-cards-container">
                    <div className="blog-card">
                        <img src={blog1} alt="Blog 1" />
                        <p className="blog-date">July 08, 2025</p>
                        <h3>Is Your Website Future Ready? Signs You Need a Redesign</h3>
                        <p>Is your website ready for the future? Discover the key signs that it’s time for a redesign to boost performance, user experience, and SEO in today’s...</p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>
                    <div className="blog-card">
                        <img src={blog2} alt="Blog 2" />
                        <p className="blog-date">May 07, 2025</p>
                        <h3>AI-Powered Web Design: How Tools Like ChatGPT & Midjourney Are Reshaping the Process</h3>
                        <p>Discover how AI tools like ChatGPT and Midjourney are revolutionizing web design—streamlining workflows, enhancing creativity, and enabling...</p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>
                    <div className="blog-card">
                        <img src={blog3} alt="Blog 3" />
                        <p className="blog-date">October 03, 2024</p>
                        <h3>Here’s How You Can Create Designs for Your Target Audience ?</h3>
                        <p>Almost every web designer knows who their target audiences are and how to design to tug at their heartstrings. And, if you don’t, reading this blog...</p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>
                    <div className="blog-card">
                        <img src={blog4} alt="Blog 4" />
                        <p className="blog-date">October 03, 2024</p>
                        <h3>Here’s How You Can Create Designs for Your Target Audience ?</h3>
                        <p>Almost every web designer knows who their target audiences are and how to design to tug at their heartstrings. And, if you don’t, reading this blog...</p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>
                    <div className="blog-card">
                        <img src={blog5} alt="Blog 5" />
                        <p className="blog-date">October 03, 2024</p>
                        <h3>Here’s How You Can Create Designs for Your Target Audience ?</h3>
                        <p>Almost every web designer knows who their target audiences are and how to design to tug at their heartstrings. And, if you don’t, reading this blog...</p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>
                    <div className="blog-card">
                        <img src={blog6} alt="Blog 6" />
                        <p className="blog-date">October 03, 2024</p>
                        <h3>Here’s How You Can Create Designs for Your Target Audience ?</h3>
                        <p>Almost every web designer knows who their target audiences are and how to design to tug at their heartstrings. And, if you don’t, reading this blog...</p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>
                    <div className="blog-card">
                        <img src={blog7} alt="Blog 7" />
                        <p className="blog-date">October 03, 2024</p>
                        <h3>Here’s How You Can Create Designs for Your Target Audience ?</h3>
                        <p>Almost every web designer knows who their target audiences are and how to design to tug at their heartstrings. And, if you don’t, reading this blog...</p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>
                    <div className="blog-card">
                        <img src={blog8} alt="Blog 8" />
                        <p className="blog-date">October 03, 2024</p>
                        <h3>Here’s How You Can Create Designs for Your Target Audience ?</h3>
                        <p>Almost every web designer knows who their target audiences are and how to design to tug at their heartstrings. And, if you don’t, reading this blog...</p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>
                    <div className="blog-card">
                        <img src={blog9} alt="Blog 9" />
                        <p className="blog-date">October 03, 2024</p>
                        <h3>Here’s How You Can Create Designs for Your Target Audience ?</h3>
                        <p>Almost every web designer knows who their target audiences are and how to design to tug at their heartstrings. And, if you don’t, reading this blog...</p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>
                    <div className="blog-card">
                        <img src={blog10} alt="Blog 10" />
                        <p className="blog-date">October 03, 2024</p>
                        <h3>Here’s How You Can Create Designs for Your Target Audience ?</h3>
                        <p>Almost every web designer knows who their target audiences are and how to design to tug at their heartstrings. And, if you don’t, reading this blog...</p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AutomotiveSection;
