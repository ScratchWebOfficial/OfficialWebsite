import React from "react";
import "../styles/DataAsServiceSection.css";
import daasImage from "../assets/daashero.png";
/*import logoShopify from "../assets/logoshopify.png";
import logoOracle from "../assets/logooracle.png";
import logoMTN from "../assets/logomtn.png";
import logoMTU from "../assets/logomtu.png";
import logoBCG from "../assets/logobcg.png";
import logoSancho from "../assets/logosancho.png";
import logoGoogle from "../assets/logoGoogle.png";
import logoWordpress from "../assets/logoWordpress.png";
import logoMagento from "../assets/logoMagento.png";*/
import inform from "../assets/inform.png";
import feasibility from "../assets/feasibility.png";
import pay from "../assets/pay.png";
import deliver from "../assets/deliver.png";
import clean from "../assets/clean.png";
import release from "../assets/release.png";
import education from "../assets/education.png";
import transportation from "../assets/transportation.png";
import finance from "../assets/finance.png";
import media from "../assets/media.png";
import healthcare from "../assets/healthcare.png";
import d from "../assets/daaschoose.png";
import c from "../assets/c.png";
import r from "../assets/r.png";
import f from "../assets/f.png";
import i from "../assets/ii.png";
import de from "../assets/de.png";
import p from "../assets/pi.png";

const DataAsServiceSection = () => {
    /*const logos = [
        logoShopify,
        logoOracle,
        logoMTN,
        logoMTU,
        logoBCG,
        logoSancho,
        logoGoogle,
        logoWordpress,
        logoMagento,
    ];*/

    return (
        <div>
            {/* Hero Section */}
            <div className="daas-hero-section">
                <div className="daas-left">
                    <h2><span className="blue-text">DAAS</span></h2>
                    <h1>Data As A Service</h1>
                    
                    <button className="daas-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="daas-right">
                    <img src={daasImage} alt="Data As A Service Illustration" />
                </div>
            </div>

            {/* Partner Logos Carousel */}
            
            {/* Services Section */}
            <div className="opd-services-section">
                <p className="opd-services-subtitle">End-To-End</p>
                <h2 className="opd-services-title">Outsourced Product Development Services</h2>

                <div className="opd-services-grid">
                    <div className="opd-service-card">
                        <i className="fas fa-heart"></i>
                        <h4>Product Testing</h4>
                        <p>
                            Our software development company comprises an experienced team of testing experts who will take your business to all new heights...
                        </p>
                        <a href="#">Discover More</a>
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-tools"></i>
                        <h4>Maintenance and Product Support</h4>
                        <p>
                            The experts of our IT solutions company will ensure the best customer service possible by updating your applications...
                        </p>
                        <a href="#">Discover More</a>
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-cloud-upload-alt"></i>
                        <h4>Software Deployment</h4>
                        <p>
                            Our developers ensure timely deployment of software products to expedite the development process...
                        </p>
                        <a href="#">Discover More</a>
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-pencil-ruler"></i>
                        <h4>Designing and Engineering</h4>
                        <p>
                            Our skilled developers ensure top-notch UI, UX, and technical soundness for robust software across platforms...
                        </p>
                        <a href="#">Discover More</a>
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-cubes"></i>
                        <h4>MVP Development</h4>
                        <p>
                            We build Minimum Viable Products for your brand, helping you test early assumptions and iterate fast...
                        </p>
                        <a href="#">Discover More</a>
                    </div>

                    <div className="opd-service-card">
                        <i className="fas fa-sync-alt"></i>
                        <h4>Re-engineering and Transformation</h4>
                        <p>
                            We re-engineer old systems with premium technologies, improving performance, design, and functionality...
                        </p>
                        <a href="#">Discover More</a>
                    </div>
                </div>
            </div>
            <div className="data-function-section">
                <h2><span className="blue-text">How Do</span> We Function?</h2>

                <div className="function-icons">
                    <div><img src={inform} alt="" /><p>You inform us<br />about your needs</p></div>
                    <div><img src={feasibility} alt="" /><p>We offer feasibility</p></div>
                    <div><img src={pay} alt="" /><p>You pay us</p></div>
                    <div><img src={deliver} alt="" /><p>We deliver data in<br />your preferred format</p></div>
                    <div><img src={clean} alt="" /><p>We clean your<br />data up</p></div>
                    <div><img src={release} alt="" /><p>We release<br />the crawlers</p></div>
                </div>

                <div className="function-details">
                    <ul>
                        <li>When you continuously extract a particular list of data fields from multiple websites, our Hadoop consulting agency provides you with the most efficient data as a service Solutions.</li>
                        <li>Our data as a service expert analyzes unlimited websites and provides you data from them. There is no limit to our data speed frequency or data fields.</li>
                        <li>Our cloud data protection company also provides you the benefit of converting data into accessible formats like JSON, XML, and CSV.</li>
                    </ul>
                    <ul>
                        <li>Our cloud database management systems company’s services also include helping you upload your data on various popular databases like Google Drive, Dropbox, Amazon S3, and Azure Accounts.</li>
                        <li>Our big data management service consulting experts take full responsibility for the end-to-end maintenance of the structural modifications in your website. So all you need to keep in mind is feeding data to your business continuously.</li>
                    </ul>
                </div>

                <div className="function-cta">
                    <button>SCHEDULE A MEETING</button>
                </div>
            </div>
            <div className="industries-served-section">
                <h2 className="industries-title">
                    <span className="blue-text">Industries</span> We Have Served To Date
                </h2>
                <div className="industries-grid">
                    <div className="industry-card">
                        <img src={education} alt="Education" />
                        <p>Education</p>
                    </div>
                    <div className="industry-card">
                        <img src={transportation} alt="Transportation" />
                        <p>Transportation</p>
                    </div>
                    <div className="industry-card">
                        <img src={finance} alt="Finance" />
                        <p>Finance</p>
                    </div>
                    <div className="industry-card">
                        <img src={media} alt="Media & Entertainment" />
                        <p>Media & Entertainment</p>
                    </div>
                    <div className="industry-card">
                        <img src={healthcare} alt="Healthcare" />
                        <p>Healthcare</p>
                    </div>
                </div>
            </div>
            <div className="why-choose-section">
                <div className="why-choose-container">
                    <div className="why-choose-left">
                        <img src={d} alt="Why Choose Us" />
                    </div>
                    <div className="why-choose-right">
                        <h2>
                            <span className="blue-text">Why Should You Choose Wordsys As Your</span><br />
                            Data As a Service Company
                        </h2>

                        <div className="features-grid">
                            <div className="feature-box">
                                <img src={c} alt="Icon" />
                                <h4>Curated Scrapping Solutions</h4>
                                <p>Our data security services company understands that different clients have different requirements for their business...</p>
                            </div>
                            <div className="feature-box">
                                <img src={r} alt="Icon" />
                                <h4>Rotational IP</h4>
                                <p>Our data warehouse makes sure your data travels from one proxy server to another to avoid detection or bans.</p>
                            </div>
                            <div className="feature-box">
                                <img src={f} alt="Icon" />
                                <h4>We Have Ample Expertise</h4>
                                <p>Our data experts are highly skilled and recognized in the industry for delivering efficient solutions.</p>
                            </div>
                            <div className="feature-box">
                                <img src={i} alt="Icon" />
                                <h4>Smooth Service</h4>
                                <p>We ensure hassle-free data collection without worrying about backend infrastructure or technology issues.</p>
                            </div>
                            <div className="feature-box">
                                <img src={de} alt="Icon" />
                                <h4>Ultimate Data Protection</h4>
                                <p>All projects are securely deployed to prevent any risk of data leakage or loss.</p>
                            </div>
                            <div className="feature-box">
                                <img src={p} alt="Icon" />
                                <h4>Mobility</h4>
                                <p>Access your data anytime and make necessary modifications through our cloud-to-cloud services.</p>
                            </div>
                        </div>

                        <div className="why-choose-cta">
                            <button>SCHEDULE A MEETING</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DataAsServiceSection;
