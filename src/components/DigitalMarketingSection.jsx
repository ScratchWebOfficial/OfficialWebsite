import React, { useState } from "react";
import "../styles/DigitalMarketingSection.css";
import digitalImg from "../assets/digitalmarketing.png";
import stepChart from "../assets/digitalmarketin.png";
import noise1 from "../assets/noise1.png";
import noise2 from "../assets/noise2.png";
import noise3 from "../assets/noise3.png";

import noise5 from "../assets/noise5.png";
import blog1 from "../assets/yourImagePath1.png";
import blog2 from "../assets/yourImagePath2.png";
import blog3 from "../assets/yourImagePath3.png";
import blog4 from "../assets/yourImagePath4.png";
import blog5 from "../assets/yourImagePath5.png";
import blog6 from "../assets/yourImagePath6.png";

const blogPosts = [
    {
        img: blog1,
        title: "Google, Amazon And CTA To Develop 1st Health Care AI Standard",
        date: "March 24, 2020",
        desc: "Collaborating with tech giants Google, Microsoft and Amazon; CTA develops a standard for the usage of Artificial Intelligence in the health care industry."
    },
    {
        img: blog2,
        title: "2020 To Bring A Revolution In Traditional Marketing Style",
        date: "March 24, 2020",
        desc: "Around three quarters of the marketers of the world have implemented personalization strata in 6 or less channels to execute the omni channel strategy."
    },
    {
        img: blog3,
        title: "Google AI Refrain From Using Gender Tags: “Woman” or “Man”",
        date: "March 24, 2020",
        desc: "Google AI to stop unfair gender bias by identifying human being as 'persons' and no more as man or woman."
    },
    {
        img: blog4,
        title: "Why Voice Search Is Taking Over Search Engines in 2025",
        date: "April 1, 2020",
        desc: "Voice-based queries are dominating how users interact with the web, and it's only growing with AI assistants."
    },
    {
        img: blog5,
        title: "How Social Media Has Shifted Brand Trust",
        date: "April 3, 2020",
        desc: "Consumers trust brands more when there's consistent engagement and storytelling via social platforms."
    },
    {
        img: blog6,
        title: "AI in Marketing: Future or Fad?",
        date: "April 5, 2020",
        desc: "We explore how artificial intelligence is transforming how businesses market to customers."
    }
];

const DigitalMarketingSection = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCards = 3;
    const handlePrev = () => setStartIndex((prev) => Math.max(prev - visibleCards, 0));
    const handleNext = () => {
        if (startIndex + visibleCards < blogPosts.length) {
            setStartIndex((prev) => prev + visibleCards);
        }
    };
    const visibleBlogs = blogPosts.slice(startIndex, startIndex + visibleCards);

    return (
        <>
            {/* Hero Section */}
            <div className="digitalmarketing-hero-section">
                <div className="digitalmarketing-content">
                    <h1>
                        <span className="highlight-blue">Redefining The Real Game</span><br />
                        Of Digital Marketing Services
                    </h1>
                    <p>We Provide the Right Digital Marketing Dosage sans Overdosing It!</p>
                    <button className="digitalmarketing-btn">SCHEDULE A MEETING</button>
                </div>
                <div className="digitalmarketing-image">
                    <img src={digitalImg} alt="Digital Marketing Illustration" />
                </div>
            </div>

            {/* Steps Section */}
            <div className="digitalmarketing-steps-section">
                <div className="steps-left">
                    <h2><span className="highlight-blue">Digital Marketing</span> <span className="bold-black">Steps</span></h2>
                    <p>What happens when you combine a robust <strong>digital brand marketing</strong> strategy.</p>
                    <p>To enable your business to win the battle of digital disruption.</p>
                    <p>A decade-long experience coupled with unmatched tech cognizance.</p>
                </div>
                <div className="steps-right">
                    <img src={stepChart} alt="Digital Marketing Steps" />
                </div>
            </div>

            {/* Noise Section */}
            <div className="digitalmarketing-noise-section">
                <h2><span className="highlight-blue">Soar Above The</span> Digital Noise</h2>
                <div className="noise-grid">
                    {[noise1, noise2, noise3, noise5].map((img, idx) => (
                        <div className="noise-item" key={idx}>
                            <img src={img} alt={`Noise ${idx + 1}`} />
                            <div className="noise-caption">
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Upgrade Section */}
            <div className="digitalmarketing-upgrade-section">
                <h2>Upgrade Your <span className="highlight-blue">Digital Benchmarks Now!</span></h2>
                <p>No matter what you are looking to do – start, scale, pivot, or shoot to the sky...</p>
                <div className="upgrade-card-grid">
                    {[
                        ["Search Engine Optimization", "fas fa-search"],
                        ["Social Media Marketing", "fas fa-share-alt"],
                       // ["Pay Per Click", "fas fa-mouse-pointer"],
                        ["Online Reputation Management", "fas fa-star"],
                        ["Content Marketing", "fas fa-pen-nib"],
                        ["Search Engine Marketing", "fas fa-chart-line"]
                    ].map(([title, icon], idx) => (
                        <div className="upgrade-card" key={idx}>
                            <i className={icon}></i>
                            <h4>{title}</h4>
                            <p>Some short description about {title}.</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blog Section */}
            <div className="digitalmarketing-blog-section">
                <div className="blog-cards-wrapper">
                    {visibleBlogs.map((blog, index) => (
                        <div className="blog-card" key={index}>
                            <img src={blog.img} alt={blog.title} />
                            <div className="blog-content">
                                <h4>{blog.title}</h4>
                                <span className="blog-date">{blog.date}</span>
                                <p>{blog.desc}</p>
                              
                            </div>
                        </div>
                    ))}
                </div>
                <div className="blog-slider-nav">
                    <span onClick={handlePrev} className={startIndex === 0 ? "disabled" : ""}>&larr;</span>
                    <span onClick={handleNext} className={startIndex + visibleCards >= blogPosts.length ? "disabled" : ""}>&rarr;</span>
                </div>
            </div>
        </>
    );
};

export default DigitalMarketingSection;
