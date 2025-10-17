import React from "react";
import "../styles/ITSection.css";

// Hero image and icons
import itHeroImage from "../assets/itconsultinghero.png";
import efficiency from "../assets/efficiency.png";
import partnership from "../assets/partnership.png";
import assistance from "../assets/assistance.png";
import tech from "../assets/tech.png";
import confidentiality from "../assets/confidentiality.png";
import cost from "../assets/cost.png";
import magnifier from "../assets/magnifier.png";
import proposal from "../assets/proposal.png";
import rocket from "../assets/rocket.png";
import growth from "../assets/growth.png";
import businessImage2 from "../assets/business2.png";

// Brand Growth Icons
import icon1 from "../assets/thrust.png";
import icon2 from "../assets/mvp.png";
import icon3 from "../assets/testing.png";
import icon4 from "../assets/cloud.png";

// Execution Section Icons
import heart from "../assets/heart.png";
import wrench from "../assets/wrench.png";
import umbrella from "../assets/umbrella.png";
import marketing from "../assets/marketing.png";
import funding from "../assets/funding.png";
import support from "../assets/support.png";
import blockchain from "../assets/blockchain.png";
import ai from "../assets/ais.png";
import iot from "../assets/iot.png";
import cloud from "../assets/clouds.png";
import ppp from "../assets/ppp.png"
import showcase from "../assets/showcase.png"

const ITSection = () => {
    const features = [
        {
            icon: efficiency,
            title: "Efficiency Ensured",
            desc:
                "Our experienced & efficient IT experts can scale up your start-up with premium tech solutions as per your need & budget.",
        },
        {
            icon: partnership,
            title: "Premium Partnership",
            desc:
                "To manage your business operations & regulatory compliances with utmost efficiency, we shall partner with reputed organizations worldwide.",
        },
        {
            icon: assistance,
            title: "Professional Assistance",
            desc:
                "Understanding your start-up’s objectives, we shall offer you comprehensive services i.e. accounting, project advisory, etc.",
        },
        {
            icon: tech,
            title: "Advanced Tech Solutions",
            desc:
                "Using advanced reporting systems & data management, we deliver premium web-centric doc management services, workflow approval solutions, etc.",
        },
        {
            icon: confidentiality,
            title: "Data Confidentiality",
            desc:
                "We strictly uphold data confidentiality & protect customer information from being accessed by any unauthorized party.",
        },
        {
            icon: cost,
            title: "Cost-Effective",
            desc:
                "We provide premium start-up IT solutions at competitive pricing embracing optimum practices, accuracy & operation quality.",
        },
    ];

    const successSteps = [
        {
            icon: magnifier,
            title: "Your Idea; Our Implementation",
            desc:
                "By combining your visions with our missions, we can validate prospective business ideas to empower your start-up.",
        },
        {
            icon: proposal,
            title: "Your Business; Our Proposal",
            desc:
                "Valuing your ideas & project requirements, we shall conceptualize result-yielding action plans to scale up your booming business.",
        },
        {
            icon: rocket,
            title: "Committed To Your Growth",
            desc:
                "Our tech & IT mavericks are hell-bent on remaining committed, agile & always accessible to cater to your needs.",
        },
        {
            icon: growth,
            title: "Your Growth; Our Promise",
            desc:
                "To boost our start-up IT solutions’ performance, we ensure to upgrade them with cutting-edge features in the near future, too!",
        },
    ];

    const executionItems = [
        {
            icon: heart,
            title: "Analyzation",
            desc:
                "We shall analyze the viability of your vision & ideas to custom-tailor suitable IT solutions for promoting your start-up’s growth.",
        },
        {
            icon: wrench,
            title: "Consultation",
            desc:
                "Conducting a consultation, we shall try to gauge the success probability of your vision, how much fund you need, and more!",
        },
        {
            icon: umbrella,
            title: "Design Your UI/UX",
            desc:
                "We shall create upgraded, clean & visually-appealing UI to ensure a better UX & drive more engagements thereby.",
        },
        {
            icon: marketing,
            title: "Marketing Strategies",
            desc:
                "We shall cover everything including SEO, SEM, SMO & more to promote your start-up to wider audiences.",
        },
        {
            icon: funding,
            title: "Funding For Start-Up",
            desc:
                "We make sure to invest in the right organizations in regards to capital investments, sweat equality & more!",
        },
        {
            icon: support,
            title: "Full Support & Maintenance",
            desc:
                "We ensure seamless business operations by providing full support & maintenance for your start-up.",
        },
    ];

    return (
        <section className="itconsulting-hero-section">
            {/* Hero */}
            <div className="itconsulting-container">
                <div className="itconsulting-left">
                    <p className="itconsulting-subheading">IT Managed Services</p>
                    <h1 className="itconsulting-heading">IT Consulting Services</h1>
                    <button className="itconsulting-btn">START A CAMPAIGN</button>
                </div>
                <div className="itconsulting-right">
                    <img src={itHeroImage} alt="IT Consulting Illustration" />
                </div>
            </div>

            {/* Brand Section */}
            <section className="itconsulting-brand-section">
                <p className="brand-subtitle">TURN YOUR START-UP</p>
                <h2 className="brand-title">
                    Into An <span className="highlighted-text">Established Brand!</span>
                </h2>
                <hr className="blue-line" />
                <p className="brand-description">
                    With next-generation IT & tech solutions, we could be the pioneer for every start-up that dreams big to fly high & touch the crest of success.
                </p>
            </section>

            {/* Features */}
            <section className="itconsulting-features-section">
                <div className="features-grid">
                    {features.map((item, index) => (
                        <div className="feature-card" key={index}>
                            <img src={item.icon} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Steps */}
            <section className="itconsulting-steps-section">
                <p className="steps-subtitle">SCALE UP YOUR START-UP</p>
                <h2 className="steps-heading">With Next Generation IT Innovations!</h2>
                <hr className="blue-line" />
                <div className="steps-grid">
                    {[
                        { number: "01", text: "Customized IT Services" },
                        { number: "02", text: "Expand Your Customer Base" },
                        { number: "03", text: "Double Up Your Profits" },
                    ].map((item, index) => (
                        <div className="step-card" key={index}>
                            <div className="step-number">
                                {item.number}
                                <span className="dot" />
                            </div>
                            <p className="step-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Success */}
            <section className="itconsulting-success-section">
                <p className="success-subtitle">Customized IT Managed Services</p>
                <h2 className="success-heading">To Make Your Start-Up Business A Grand Success</h2>
                <hr className="blue-line" />
                <div className="success-grid">
                    {successSteps.map((item, index) => (
                        <div className="success-card" key={index}>
                            <div className="success-icon">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Brand Growth */}
            <section className="itconsulting-brandgrowth-section">
                <div className="brandgrowth-container">
                    <div className="brandgrowth-images">
                        <img src={businessImage2} alt="Woman on Laptop" className="brand-img-bottom" />
                    </div>
                    <div className="brandgrowth-content">
                        <p className="brandgrowth-subtitle">Turn Your Dream Into A Reality</p>
                        <h2 className="brandgrowth-heading">
                            Transforming Your Booming Business <br /> Into A Coveted Brand!
                        </h2>
                        <hr className="blue-line" />
                        <p className="brandgrowth-intro">Let’s Give Wings To Your Start-Up Visions To Help It Fly Sky High</p>
                        <div className="brandgrowth-points">
                            <div className="point">
                                <img src={icon1} alt="Thrust" />
                                <div>
                                    <h4>Gain Initial Thrust</h4>
                                    <p>Finding the growth bottlenecks & sure-fire solutions to combat them, we shall give your business the initial thrust.</p>
                                </div>
                            </div>
                            <div className="point">
                                <img src={icon2} alt="MVP" />
                                <div>
                                    <h4>MVP Determination</h4>
                                    <p>Determining your products’ viability, we can help you combat the real-world challenges & fulfil consumer needs with ease.</p>
                                </div>
                            </div>
                            <div className="point">
                                <img src={icon3} alt="Usability" />
                                <div>
                                    <h4>Product Usability Testing</h4>
                                    <p>Backed by cutting-edge technologies, we ensure fulfilling & intuitive user-experience of your business products, etc.</p>
                                </div>
                            </div>
                            <div className="point">
                                <img src={icon4} alt="Future" />
                                <div>
                                    <h4>Bring Your Start-Up</h4>
                                    <p>Into A Promising Future</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Execution Section */}
            <section className="itconsulting-execution-section">
                <p className="execution-subtitle">Your Ideas; Our Execution!</p>
                <h2 className="execution-heading">
                    Empower Your Start-Up With Premium Business IT Solutions
                </h2>
                <hr className="blue-line" />
                <div className="execution-grid">
                    {executionItems.map((item, index) => (
                        <div className="execution-card" key={index}>
                            <img src={item.icon} alt={item.title} className="execution-icon" />
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                            <a href="#" className="discover-link">Discover More</a>
                        </div>
                    ))}
                </div>
            </section>
            <section className="itconsulting-growth-section">
                <div className="growth-container">
                    {/* Left Content */}
                    <div className="growth-left">
                        <p className="growth-subheading">Grow Your Start-Up –</p>
                        <h2 className="growth-heading">From The Ground To The Sky!</h2>
                        <hr className="blue-line" />
                        <p className="growth-description">
                            Wordsys as a it solutions company in India shall work in tandem with your start-up business,
                            incorporating our expertise and visions in each stage of building it from the seed level – right
                            from ideating to conceptualizing to developing enterprise models to marketing to creating
                            value propositions and the final product development. After all, powering up your start-up –
                            that’s what we strive for!
                        </p>
                        <button className="growth-btn">EXPLORE MORE</button>
                    </div>

                    {/* Right Features */}
                    <div className="growth-right">
                        <div className="growth-feature">
                            <img src={blockchain} alt="Blockchain" />
                            <div>
                                <h4>Blockchain Technology</h4>
                                <p>To make your start-up more secure & transparent, we shall use cutting-edge Blockchain technology.</p>
                            </div>
                        </div>
                        <div className="growth-feature">
                            <img src={ai} alt="AI Solutions" />
                            <div>
                                <h4>AI-Integrated Solutions</h4>
                                <p>To help you tackle big data & make the most of it, we shall provide AI-integrated tech solutions.</p>
                            </div>
                        </div>
                        <div className="growth-feature">
                            <img src={iot} alt="IoT" />
                            <div>
                                <h4>Internet of Things</h4>
                                <p>To monitor your business operations & bring higher efficiency, we shall offer you premium IoT solutions.</p>
                            </div>
                        </div>
                        <div className="growth-feature">
                            <img src={cloud} alt="Cloud" />
                            <div>
                                <h4>Cloud Platform</h4>
                                <p>To foster a scalable, connected & flexible business environment, we shall use the best cloud platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects Section */}
            <section className="itconsulting-projects-section">
                <h2 className="projects-heading">
                    An Insight <span className="highlight-blue">Into Our Projects</span>
                </h2>
                <p className="projects-subheading">
                    Run a glance through some of our projects to unearth the reasons why our clients’ adulation & applause are well deserved!
                </p>

                <div className="projects-grid">
                    {[1, 2, 3].map((item, index) => (
                        <div className="project-card" key={index}>
                            <img
                                src={ppp}
                                alt="Project"
                                className="project-image"
                            />
                            <div className="project-content">
                                <p className="project-tag">TECHNOLOGY</p>
                                <h4 className="project-title">Onda MX App : Mexico City art guide & living archive.</h4>
                                <hr className="blue-line short" />
                                <div className="project-info">
                                    <div>
                                        <p>$4567</p>
                                        <span>Budget</span>
                                    </div>
                                    <div>
                                        <p>12.3.2021</p>
                                        <span>Date</span>
                                    </div>
                                </div>
                                <div className="project-footer">
                                    <span><strong>BY ROMADA D.</strong></span>
                                    <span>AT <span className="highlight-blue">LONDON</span></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Vouch Section */}
            <section className="itconsulting-vouch-section">
                <div className="vouch-container">
                    {/* Left Cards */}
                    <div className="vouch-left">
                        {[
                            { icon: "📱", title: "We Build Effective MVP" },
                            { icon: "🎧", title: "Product Engineering" },
                            { icon: "👍", title: "Complete Tech Migration" },
                            { icon: "💎", title: "Conclusive Product Advisory" },
                        ].map((item, idx) => (
                            <div className="vouch-card" key={idx}>
                                <div className="vouch-icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <a href="#">Read More</a>
                            </div>
                        ))}
                    </div>

                    {/* Right Content */}
                    <div className="vouch-right">
                        <p className="vouch-subheading">Wondering</p>
                        <h2 className="vouch-heading">Why Should You Vouch For Us?</h2>
                        <hr className="blue-line" />
                        <p className="vouch-desc">
                            Backed by an unmatchable domain-specific knowledge, we can beef up your start-up with
                            effective development strategies, business consultation, marketing solutions, networking &
                            funding assistance. We aim to be your one-stop choice rather than an option, when it comes
                            to lending your start-up the fodder & fortitude for further growth & success!
                        </p>

                        <div className="progress-bars">
                            {[
                                { label: "Web Development", value: 95 },
                                { label: "Web Design", value: 93 },
                                { label: "Digital Marketing", value: 80 },
                                { label: "Market Analysis", value: 90 },
                            ].map((item, index) => (
                                <div className="progress-item" key={index}>
                                    <label>{item.label}</label>
                                    <div className="progress-bar">
                                        <div className="fill" style={{ width: `${item.value}%` }} />
                                        <span className="percent">{item.value}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="vouch-btn">MORE DETAILS</button>
                    </div>
                </div>
            </section>
            <section className="itconsulting-growth-banner">
                <div className="growth-banner-wrapper">
                    {/* First Image with hover effect */}
                    <div className="growth-banner">
                        <img src={showcase} alt="Showcase" />
                        <div className="overlay-content">
                            <h2>Start Growing</h2>
                            <p>
                                Executing your start-up vision is what we are committed to! Grow your business with our tech expertise & industry knowledge.
                            </p>
                            <button className="growth-btn">CREATE A PROJECT</button>
                        </div>
                    </div>

                    {/* Second Image with its own overlay content */}
                    <div className="growth-banner">
                        <img src={showcase} alt="Showcase" />
                        <div className="overlay-content">
                            <h2>Level Up</h2>
                            <p>
                                With top technologies, flexible engagement plans & seamless communication, we could be the one-stop IT partner for your start-up.
                            </p>
                            <button className="growth-btn">CREATE A PROJECT</button>
                        </div>
                    </div>
                </div>
            </section>

        </section>

    );
};

export default ITSection;
