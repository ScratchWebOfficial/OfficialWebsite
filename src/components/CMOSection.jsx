import React from "react";
import "../styles/CTOSection.css";

// Image Imports
import ctoHero from "../assets/ctohero.png";
import ctoService from "../assets/ctoservice.png";
import icontrust from "../assets/icon-trust.png";
import outsourcing from "../assets/icon-outsourcing.png";
import experience from "../assets/icon-experience.png";
import ex from "../assets/ex.png";
import exp from "../assets/exp.png";
import expe from "../assets/expe.png";
import thumbs from "../assets/thumbs-up.png";
import expertise from "../assets/expertise.png";
import quality from "../assets/quality-check.png";
import php from "../assets/p1.png";
import nodejs from "../assets/n.png";
import flutter from "../assets/f11.png";
import swift from "../assets/s.png";
import python from "../assets/py.png";
import cpp from "../assets/c1.png";

const CTOSection = () => {
    const techStack = [
        {
            title: "Custom Software Development",
            desc: "We could be your one-stop technology partner for custom building market-leading & innovative software solutions.",
            icon: php,
        },
        {
            title: "Mobile App Development",
            desc: "We shall scale your business operations, creating a suite of robust & intuitive mobile apps.",
            icon: nodejs,
        },
        {
            title: "Full Stack Web App Development",
            desc: "Our full stack web development pivots around premium programming practice, proven coding guidelines & edgy frameworks.",
            icon: flutter,
        },
        {
            title: "Start-Up IT Consulting",
            desc: "From consultation to networking to marketing & funding – our start-up IT consulting offers everything.",
            icon: swift,
        },
        {
            title: "Dedicated Development",
            desc: "Using a well-structured development process, we build the best dedicated team to nail your projects.",
            icon: python,
        },
        {
            title: "Digital Marketing",
            desc: "With solutions i.e. SEO, PPC, SMO, etc., we shall give your business a winning edge!",
            icon: cpp,
        },
    ];

    return (
        <div className="cto-hero-section">

            {/* Hero Section */}
            <div className="cto-hero-left">
                <h1>
                    <span className="blue-text">Chief</span>
                    <br />
                    Marketing Officer
                </h1>
                <p>
                   Deploying Suitable Marketing Solutions i.e. SEO, SMO, SEM, Content Management, Marketing Automation, Etc. Exclusively Tailored As Per Your Needs!


Schedule a Meeting
                </p>
                <button className="cto-btn">SCHEDULE A MEETING</button>
            </div>

            <div className="cto-hero-right">
                <img src={ctoHero} alt="CTO Consulting" />
            </div>

            {/* CTO Services Section */}
            <div className="cto-service-section">
                <h2>
                    <span className="blue-text">Why Your Business</span> <span className="orange-text">Needs CMO Consulting?</span>
                </h2>
                <p className="subtitle">
                   Construct & Streamline Your Business Operations With Customized Business Plan Development Services.
                </p>
                <img src={ctoService} alt="CTO Services" className="cto-service-image" />
                <p className="service-description">
                    To help your business rise meteorically & disrupt its intended industry, our CMO shall be hands on in delivering suitable marketing skills & solutions including, Digital Marketing, Analytics, Search Engine Optimization, Social Media Optimization & more<strong></strong>  Being instrumental in critical enterprise decision making, which includes business management, investment, talent acquisition, etc., our business development consulting services will help you rewrite or reinvent the narratives around your business growth, besides optimizing & integrating your marketing arsenal with more robust marketing systems, strategies et al.
                </p>
                <button className="talk-btn">WANNA TALK? FIX A TIME!</button>
            </div>

            {/* What to Expect Section */}
            <div className="cto-expect-section">
                <h2 className="expect-heading">
                    <span className="blue-text">What To Expect</span> From Us?
                    <div className="expect-underline"></div>
                </h2>

                <div className="expect-card-container">
                    <div className="expect-card blue-card">
                        <img src={icontrust} alt="Trust" />
                        <h3>Impactful Strategies</h3>
                        <p>
                          The business development & consulting experts, supervised by our CMO, are committed to seeing that your business and teams work more effectively with more informed decisions. Clubbing edgier technologies and razor-sharp marketing strategies together, we shall help you bring better and bigger changes in your performance, productivity and profitability.
                        </p>
                    </div>
                    <div className="expect-card blue-card">
                        <img src={outsourcing} alt="Outsourcing" />
                        <h3>Surge In Traffic</h3>
                        <p>
                           Using Google Analytics, Adwords & the robust PPC models of advertisement, our professional business development experts will bring a surge in your traffic, thereby helping your business get discovered by more and more prospects, as or when they seek services or products similar to what you provide.
                        </p>
                    </div>
                    <div className="expect-card blue-card">
                        <img src={experience} alt="Overseas Experience" />
                        <h3>A Seamless Integration</h3>
                        <p>
                           Pin your faith in us, if you are looking for a smooth and seamless integration your existing marketing team or system. Integrating with your marketing personnel and advertising strategies, our business development assistants will help you conduct your business operations without any hassle.
                        </p>
                    </div>
                     <div className="expect-card blue-card">
                        <img src={ex} alt="Overseas Experience" />
                        <h3>Skills Diversified</h3>
                        <p>
                         As “One skill does not fit all”, we shall hand-pick the right skills or talents from our teams, meticulously define their scope of work in your respective project, and benchmark their distinct strength to determine a successful execution of your work.
                        </p>
                    </div>
                     <div className="expect-card blue-card">
                        <img src={exp} alt="Overseas Experience" />
                        <h3>An Extensive CRM Expertise</h3>
                        <p>
                         Weighing our strategies vis-à-vis your expectations, we shall pick the right marketing platforms & customer relationship management systems to benefit your business. Thanks to our diverse expertise, we can work on any CRM or marketing platform as per your choice.
                        </p>
                    </div>
                    <div className="expect-card blue-card">
                        <img src={expe} alt="Overseas Experience" />
                        <h3>Impactful Sales Funnel</h3>
                        <p>
                        Harnessing the best sales funnel services, we shall help you foster more user-centric interactions for drawing in more potential clients and influence their purchase decisions. Backed by our industry-specific funnel services, we can help you reach out to more prospects worldwide!
                        </p>
                    </div>
                </div>
            </div>

            {/* Progress Section */}
            <div className="cto-progress-section">
                <h2>
                    <span className="blue-text">Cultivate More Progress</span> In Your Projects
                </h2>
                <div className="cto-progress-cards">
                    <div className="progress-card">
                        <img src={thumbs} alt="Tech Cognizance" />
                        <h3>Unbeatable Tech Cognizance</h3>
                        <p>
                            Our consulting CTO stays updated on the latest tech to ensure success in architecture, product roadmaps, team building, system monitoring, and more!
                        </p>
                    </div>
                    <div className="progress-card">
                        <img src={expertise} alt="Cauldron Of Expertise" />
                        <h3>A Cauldron Of Expertise</h3>
                        <p>
                            We analyze market trends and client needs before diving into projects, ensuring strategic decisions and high-quality outcomes.
                        </p>
                    </div>
                    <div className="progress-card">
                        <img src={quality} alt="Top Quality" />
                        <h3>Quality Our Top Priority</h3>
                        <p>
                            We focus on premium quality tech, scope planning, and benchmarking to ensure consistent project success and high performance.
                        </p>
                    </div>
                </div>
                <button className="talk-btn">WANNA TALK? FIX A TIME!</button>
            </div>

            {/* Tech Stack Section */}
            <section className="cto-techstack-section">
                <h2>
                    <span className="blue-text">Our Services</span> – <strong>In A Nutshell</strong>
                </h2>
                <div className="cto-techstack-grid">
                    {techStack.map((item, i) => (
                        <div className="cto-tech-card" key={i}>
                            <img src={item.icon} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <div className="arrow-btn">➔</div>
                        </div>
                    ))}
                </div>
                <button className="talk-btn">WANNA TALK? FIX A TIME!</button>
            </section>

        </div>
    );
};

export default CTOSection;
