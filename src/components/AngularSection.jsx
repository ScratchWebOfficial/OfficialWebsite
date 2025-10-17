import React, { useState } from "react";
import "../styles/AngularSection.css";

import angularHero from "../assets/angularhero.png";
/*import logoShopify from "../assets/logoshopify.png";
import logoOracle from "../assets/logooracle.png";
import logoMTN from "../assets/logomtn.png";
import logoMTU from "../assets/logomtu.png";
import logoBCG from "../assets/logobcg.png";
import logoSancho from "../assets/logosancho.png";
import logoGoogle from "../assets/logoGoogle.png";
import logoWordpress from "../assets/logoWordpress.png";
import logoMagento from "../assets/logoMagento.png";*/

import bespokeIcon from "../assets/bespoke.png";
import realtimeIcon from "../assets/realtime.png";
import apiIcon from "../assets/api.png";
import migrationIcon from "../assets/migration.png";
import pluginIcon from "../assets/plugin.png";
import dedicatedIcon from "../assets/dedicated.png";
import maintenanceIcon from "../assets/maintenance.png";
import consultationIcon from "../assets/consultation.png";
import education from "../assets/education.png";
import transportation from "../assets/transportation.png";
import finance from "../assets/finance.png";
import media from "../assets/media.png";
import healthcare from "../assets/healthcare.png";
import relyicon1 from "../assets/relyicon1.png";
import relyicon2 from "../assets/relyicon2.png";
import relyicon3 from "../assets/relyicon3.png";
import relyicon4 from "../assets/relyicon4.png";

const AngularSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

   /* const logos = [
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

    const offerings = [
        { icon: bespokeIcon, title: "Bespoke App Development", desc: "With our expertise in Angular web development, we build user-friendly apps with scalable codes, lower expenses, and great maintainability." },
        { icon: realtimeIcon, title: "Real-Time Applications", desc: "We develop custom-built real-time apps with high-end backend/frontend logic, enabling smooth interaction and dynamic content updates." },
        { icon: apiIcon, title: "API Development", desc: "Our Angular developers help build powerful APIs and secure architecture, making integration seamless and scalable." },
        { icon: migrationIcon, title: "Seamless Migration", desc: "Migrate your apps to Angular with minimal risk, enhanced security, and reduced downtime using our seamless process." },
        { icon: pluginIcon, title: "Plugin Development", desc: "Custom plugins to meet your niche needs with enhanced features, secure architecture, and simplified integration." },
        { icon: dedicatedIcon, title: "Dedicated Development", desc: "Hire dedicated Angular experts to scale your dev team, boost productivity, and deliver consistent results on time." },
        { icon: maintenanceIcon, title: "A Thorough Maintenance", desc: "We ensure your Angular apps stay updated, secure, and optimized through structured, on-demand support." },
        { icon: consultationIcon, title: "Professional Consultation", desc: "Get expert guidance on Angular architecture, UI, TypeScript structure, or project scalability from our consulting team." },
    ];

    return (
        <div className="angular-hero-section">
            <div className="angular-hero-left">
                <h1>
                    <span className="blue-text">Angular Development</span><br />
                    Services
                </h1>
                <p>
                    Backed by our Angular development services, you can get functional,
                    secure & easy-to-maintain mobile & web apps as per your needs!
                </p>
                <button className="angular-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="angular-hero-right">
                <img src={angularHero} alt="Angular Development Illustration" />
            </div>


            <div className="angular-offerings-wrapper">
                <h2>
                    <span className="blue-text">Let Our Offerings</span> Meet Your Yearnings
                </h2>
                <div className="angular-offerings-grid">
                    {offerings.map((item, index) => (
                        <div
                            className={`offering-card ${activeIndex === index ? "active" : ""}`}
                            key={index}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img src={item.icon} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                            <a href="#">Explore More</a>
                        </div>
                    ))}
                </div>
                <div className="cta-button">
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
            <div className="rely-section">
                <h2 className="rely-title">
                    <span className="blue-text">Why Should You</span> Rely On Us?
                </h2>
                <div className="rely-grid">
                    <div className="rely-card">
                        <img src={relyicon1} alt="Accomplish" />
                        <h4>Accomplish Your Project</h4>
                        <p>
                            From stepping stone to milestones – our experienced, skilled & efficient Angular developers can help your
                            project visions emerge with flying colors – right from the stage of ideation to design to development to
                            management & the final execution!
                        </p>
                    </div>
                    <div className="rely-card">
                        <img src={relyicon2} alt="Small Business" />
                        <h4>Fuel A Small Business</h4>
                        <p>
                            To be a pioneer of success for your small business, we shall nestle a crew of dedicated Angular programmers
                            for scaling your products, upgrading their efficacies with constant maintenance & the inclusion of edgy
                            features, functionalities et al!
                        </p>
                    </div>
                    <div className="rely-card">
                        <img src={relyicon3} alt="Actionable Results" />
                        <h4>Bring Actionable Results</h4>
                        <p>
                            Even an established brand needs a boost to stay put amidst competition! Our experts can help your brand scale
                            better heights with premium Angular development services, via which, you can bring more actionable insights in
                            your enterprise operation, management, etc.
                        </p>
                    </div>
                    <div className="rely-card">
                        <img src={relyicon4} alt="In-House Resources" />
                        <h4>In-House Resources</h4>
                        <p>
                            Our Angular development company will be at the forefront in being the binding force for supporting your
                            in-house business resources & building more efficient tech units to quell your enterprise needs, keeping a tab
                            on your visions, goals & intended audiences!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AngularSection;
