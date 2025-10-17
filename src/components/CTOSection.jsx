import React from "react";
import "../styles/CTOSection.css";

// Image Imports
import ctoHero from "../assets/cto-hero.png";
import ctoService from "../assets/cto-service.png";
import icontrust from "../assets/icon-trust.png";
import outsourcing from "../assets/icon-outsourcing.png";
import experience from "../assets/icon-experience.png";
import thumbs from "../assets/thumbs-up.png";
import expertise from "../assets/expertise.png";
import quality from "../assets/quality-check.png";
import php from "../assets/php1.png";
import nodejs from "../assets/nodejs.png";
import flutter from "../assets/flutter.png";
import swift from "../assets/swift.png";
import python from "../assets/python1.png";
import cpp from "../assets/cpp.png";

const CTOSection = () => {
    const techStack = [
        {
            title: "PHP Framework",
            desc: "Our full spectrum of PHP programming solutions include custom web app, API integration, CMS, E-commerce solutions, etc.",
            icon: php,
        },
        {
            title: "NodeJS",
            desc: "Avail our NodeJS development solutions to reap agile I/O operations, easy coding, hassle-free data streaming & more!",
            icon: nodejs,
        },
        {
            title: "Flutter",
            desc: "Our Flutter development services include cross-platform application development, UI & API development, app re-engineering & more!",
            icon: flutter,
        },
        {
            title: "Swift",
            desc: "Using this powerful programming language, we shall bring readability, speed, security & overall efficacy to your applications.",
            icon: swift,
        },
        {
            title: "Python",
            desc: "Using this open-source language, we can bring robustness, productivity & better language interpretation to your app.",
            icon: python,
        },
        {
            title: "C++",
            desc: "To bring portability, scalability & compatibility to your apps, we utilize this power-packed programming language.",
            icon: cpp,
        },
    ];

    return (
        <div className="cto-hero-section">

            {/* Hero Section */}
            <div className="cto-hero-left">
                <h1>
                    <span className="blue-text">Our Chief Technology Officer</span>
                    <br />
                    Leading From The Front
                </h1>
                <p>
                    To Help You Start-Scale-Shoot To The Sky With Result-Yielding And Business-Centric Tech Consulting Solutions
                </p>
                <button className="cto-btn">SCHEDULE A MEETING</button>
            </div>

            <div className="cto-hero-right">
                <img src={ctoHero} alt="CTO Consulting" />
            </div>

            {/* CTO Services Section */}
            <div className="cto-service-section">
                <h2>
                    <span className="blue-text">Excellent</span> <span className="orange-text">CTO Consulting Services</span>
                </h2>
                <p className="subtitle">
                    Our Chief Technology Stalwarts Lead Right From The Front To Make Successful In-Roads In Your Projects, Ranging Across IT, Marketing, Development & More!
                </p>
                <img src={ctoService} alt="CTO Services" className="cto-service-image" />
                <p className="service-description">
                    Scaling up your business with optimized results – that’s what our custom <strong>CTO as a service</strong> is aimed for! Whether it’s to foster collaborative efforts between every team involved in a project; eliminate communication gaps; combat challenges with sure-fire risk-management strategies; monitor each phase i.e. consultation, research, development, testing, etc. or deliver in a timely manner – our in-house or <strong>CTO software development</strong> and <strong>virtual CTO services</strong> will handle everything with proficiency.
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
                        <h3>Your Trust, Our Top Priority</h3>
                        <p>
                            Almost a decade of experience in working with the world’s top software outsourcing companies to their utmost satisfaction is one of the most cherished feathers in our cap!
                        </p>
                    </div>
                    <div className="expect-card blue-card">
                        <img src={outsourcing} alt="Outsourcing" />
                        <h3>Expertise In Outsourcing</h3>
                        <p>
                            From risk management to faster software shipment to process improvement and on-time outcome delivery – our CTO developers can handle each phase of software development outsourcing with aplomb!
                        </p>
                    </div>
                    <div className="expect-card blue-card">
                        <img src={experience} alt="Overseas Experience" />
                        <h3>Ample Experience In Overseas Projects</h3>
                        <p>
                            Our CTO software development experts pride in having ample experience handling a multitude of tech and software projects across various skills and technologies.
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
                    <span className="blue-text">Our Tech Stack</span> – <strong>Have A Look!</strong>
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
