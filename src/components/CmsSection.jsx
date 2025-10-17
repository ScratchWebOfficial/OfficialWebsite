import React from "react";
import "../styles/CmsSection.css";
import cmsImage from "../assets/cms-hero.png";
import bb from "../assets/9b.png";
import o from "../assets/orange-icon.png";
import or from "../assets/orange-icon1.png";
import ora from "../assets/orange-icon2.png";
import oran from "../assets/orange-icon3.png";
import customized from "../assets/customized.png";
import feature from "../assets/feature-packed.png";
import manage from "../assets/easy-manage.png";
import cost from "../assets/cost-efficient.png";
import award from "../assets/award.png";
import edit from "../assets/edit.png";
import magnify from "../assets/magnify.png";
import seo from "../assets/seo.png";
import multilingual from "../assets/multilingual.png";
import no from "../assets/no-coding.png";

const CmsSection = () => {
    return (
        <div className="cms-hero-section">
            <div className="cms-hero-left">
                <h1>
                    <span className="blue-text">CMS Development</span><br />
                    Company In USA
                </h1>
                <p>
                    CMS Development Company in USA: Explore our top-notch CMS development services
                    customized to the US market. We design, develop, and optimize content
                    management systems for your online success.
                </p>
                <button className="cms-hero-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="cms-hero-right">
                <img src={cmsImage} alt="CMS Illustration" />
            </div>

            <div className="cms-glimpse-section">
                <h2 className="glimpse-heading">
                    <span className="blue-text">A Glimpse In</span> What We Do
                </h2>
                <div className="glimpse-cards">
                    {[
                        {
                            icon: "🔍",
                            title: "Custom Design & Development",
                            text: "Get a unique website built by our CMS developers, aimed at custom-coding different themes as per your design specifications, needs, etc."
                        },
                        {
                            icon: "🔗",
                            title: "Website Migration",
                            text: "Conducting a thorough website migration, our CMS development experts will improve your site’s agility, traffic management capacities, etc."
                        },
                        {
                            icon: "🛠️",
                            title: "Upgrade & Integrate",
                            text: "Integrating advanced features & several other components, we shall help you upgrade your existing CMS web designs."
                        },
                        {
                            icon: "📱",
                            title: "Plugins Extension",
                            text: "We shall improve your workflow, ROI & efficiency by adding advanced extensions & plugins to your existing CMS."
                        },
                        {
                            icon: "⚙️",
                            title: "Management & Maintenance",
                            text: "Our CMS development services are also extended to migrating your website on edgier CMS to enhance its overall look & feel."
                        }
                    ].map((item, index) => (
                        <div key={index} className="glimpse-card">
                            <div className="icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cms-demands-section">
                <div className="cms-demands-container">
                    <div className="cms-demands-left">
                        <img src={bb} alt="CMS Team" />
                    </div>
                    <div className="cms-demands-right">
                        <h2>
                            <span className="blue-text">Your CMS Demands</span> Our Commands
                        </h2>
                        <p>
                            Quality being the pillar of our, we aim to be instrumental in helping you manage & organize
                            your web contents with our <strong>CMS development services</strong>, pivoted around <strong>Drupal, Joomla,
                                WordPress & Magento development.</strong>
                        </p>
                        <div className="cms-demand-cards">
                            {[{ icon: o, title: "Stay Updated", desc: "Striking a chord between your Google Analytics & CMS, we shall help you keep a close tab on your visitors, conversion rates, etc." },
                            { icon: or, title: "Increase Availability", desc: "We shall help your business reach the growth pivot of customer outreach by making it available 24x7!" },
                            { icon: ora, title: "Affordability Re-Assured!", desc: "Run your website seamlessly, gain more traffic & higher profit margin at a low cost!" },
                            { icon: oran, title: "Safety Ensured!", desc: "With custom CMS solutions, manage backend admin tasks & keep spams/viruses away!" }
                            ].map((item, index) => (
                                <div className="cms-demand-card" key={index}>
                                    <img src={item.icon} alt="icon" />
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="cms-customcms-section">
                <h4 className="cms-customcms-subheading">Stand Steadfast In Today’s Over-Demanding Digital Landscape</h4>
                <h2 className="cms-customcms-heading">With Our Custom CMS</h2>

                <div className="cms-customcms-features">
                    {[{ icon: customized, title: "Fully Customized" },
                    { icon: feature, title: "Feature-Packed" },
                    { icon: manage, title: "Easy-To-Manage" },
                    { icon: cost, title: "Cost-Efficient" }].map((item, i) => (
                        <div className="cms-customcms-feature" key={i}>
                            <img src={item.icon} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>

                <button className="cms-customcms-btn">WANNA TALK? SAY HI!</button>
            </div>

            <div className="cms-invest-section">
                <h2 className="cms-invest-heading">
                    <span className="blue-text">Reasons To Invest In</span> CMS Development Services
                </h2>
                <div className="cms-invest-grid">
                    {[
                        {
                            icon: award,
                            text: "Manage your website spending a nominal maintenance cost",
                        },
                        {
                            icon: edit,
                            text: "Content editing, formatting, upgrading – everything becomes a cake!",
                        },
                        {
                            icon: magnify,
                            text: "Manage important document & media files with greater ease",
                        },
                        {
                            icon: seo,
                            text: "Improve website’s SERP with an SEO-centric coding structure",
                        },
                        {
                            icon: multilingual,
                            text: "Building a multi-lingual site would be easier than ever!",
                        },
                        {
                            icon: no,
                            text: "Manage content even with a zero inkling of Coding",
                        },
                    ].map((item, i) => (
                        <div className="cms-invest-card" key={i}>
                            <img src={item.icon} alt="icon" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <button className="cms-invest-btn">WANNA TALK? SAY HI!</button>
            </div>
        </div>
    );
};

export default CmsSection;
