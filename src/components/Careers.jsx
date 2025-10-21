import React from "react";
import "../styles/Careers.css";
import { FaMapMarkerAlt, FaPen, FaClock, FaTags } from "react-icons/fa";
import careerhighlight from "../assets/careerhighlight.png";
import perksimage from "../assets/perksimage.png";

const jobList = [
     {
        title: "Business Development Executive",
        location: "Kolkata",
        department: "Marketing",
        experience: "1-2 Years",
        skills: "marketing, sales",
        date: "16 August, 2023",
        description:
            "Wordsys is hiring passionate Business Development Executives who can work with our Marketing and Sales teams...",
    },

    
    {
        title: "Backend Developer",
        location: "Kolkata",
        department: "Development",
        experience: "2-5 Years",
        skills: "development, web development, design",
        date: "1 December, 2021",
        description:
            "Solid stack exposure with NodeJS, MongoDB, and API integrations",
    },
    {
        title: "SEO Team Lead",
        location: "Kolkata",
        department: "Marketing",
        experience: "5-8 Years",
        skills: "marketing, web development, design",
        date: "8 November, 2021",
        description:
            "A SEO expert with excellent communication skills and vast knowledge on web development products...",
    },
    {
        title: "Frontend Developer",
        location: "Kolkata",
        department: "Development",
        experience: "0-2 Years",
        skills: "development, programming, web development",
        date: "5 November, 2021",
        description:
            "Experienced professionals having good command over react tools and UI design",
    },
    {
        title: "Frontend Developer",
        location: "Kolkata",
        department: "Development",
        experience: "0-2 Years",
        skills: "development, programming, web development",
        date: "5 November, 2021",
        description:
            "Experienced professionals having good command over react tools and UI design",
    },
    {
        title: "Frontend Developer",
        location: "Kolkata",
        department: "Development",
        experience: "0-2 Years",
        skills: "development, programming, web development",
        date: "5 November, 2021",
        description:
            "Experienced professionals having good command over react tools and UI design",
    },
    {
        title: "Frontend Developer",
        location: "Kolkata",
        department: "Development",
        experience: "0-2 Years",
        skills: "development, programming, web development",
        date: "5 November, 2021",
        description:
            "Experienced professionals having good command over react tools and UI design",
    },
];

const Careers = () => {
    return (
        <div className="careers-page">
            <div className="careers-search">
                <input type="text" placeholder="Select City" />
                <input type="text" placeholder="Job title / keywords" />
                <button className="search-btn">Search</button>
            </div>

            <div className="careers-heading">
                <h2>
                    LATEST JOBS IN <span className="blue">WORDSYS</span>
                </h2>
                <div className="sort-options">
                    <span>SORT BY: </span>
                    <a href="#recent" className="active">
                        MOST RECENT
                    </a>
                    <a href="#popular">MOST POPULAR</a>
                </div>
            </div>

            <div className="job-grid">
                {jobList.map((job, index) => (
                    <div className="job-card" key={index}>
                        <p className="post-date">Posted: {job.date}</p>
                        <h3>{job.title}</h3>
                        <ul className="job-meta">
                            <li>
                                <FaMapMarkerAlt /> {job.location}
                            </li>
                            <li>
                                <FaPen /> {job.department}
                            </li>
                            <li>
                                <FaClock /> {job.experience}
                            </li>
                            <li>
                                <FaTags /> {job.skills}
                            </li>
                        </ul>
                        <p className="job-desc">{job.description}</p>
                        <button className="view-btn">VIEW JOB</button>
                    </div>
                ))}
            </div>
            <div className="career-perks-section">
                <p className="career-subtitle">Whatever Be Your Goals</p>
                <h2 className="career-title">
                    Grab The Right Opportunities To Hone Your Craft
                </h2>
                <div className="career-perks-grid">
                    <div className="perk-item">
                        <span className="perk-number">01</span>
                        <p className="perk-label">Amazing Work Culture</p>
                    </div>
                    <div className="perk-item">
                        <span className="perk-number">02</span>
                        <p className="perk-label">Competitive Pay Package</p>
                    </div>
                    <div className="perk-item">
                        <span className="perk-number">03</span>
                        <p className="perk-label">Employee-Friendly HR Policies</p>
                    </div>
                </div>
            </div>
            <div className="career-highlight-section">
                <div className="career-highlight-image">
                    <img
                        src={careerhighlight}
                        alt="Career Collaboration"
                        className="highlight-img"
                    />
                </div>
                <div className="career-highlight-content">
                    <h3>
                        <span className="blue-text">Get Set To Hone Your Craft</span>{" "}
                        <span className="bold-text">With A Lucrative Career At Wordsys</span>
                    </h3>
                    <div className="underline"></div>
                    <p>
                        In today’s competitive digital era, there are aspiring talents galore with distinct skills and prowess, who are ready to combat any challenge with utmost aplomb! Being India’s leading IT and marketing company, we aim to underscore such talents, and lend them the right platforms and opportunities to hone their crafts.
                    </p>
                    <p>
                        We remain true to our commitment to valuing the differences and strengths of every employee, individually. We provide a healthy work environment, which once experienced, is hard to forget! Over the years, we have delighted clients worldwide to their utmost satisfaction with – sharing knowledge, handling complex challenges, and driving innovation in their businesses.
                    </p>
                    <p>Come, join us to add wings to your dreams and an edge to your career!</p>
                    <button className="join-btn">JOIN US</button>
                </div>
            </div>
            <div className="career-perks-detail-section">
                <div className="perks-left">
                    <h3>
                        <span className="blue-text">Perks</span>{" "}
                        <span className="bold-text">Of Working With Us</span>
                    </h3>
                    <div className="underline"></div>
                    <p>
                        “Employee-friendly” – is our watchword at Wordsys! To fuel up productivity and our employees’ spirits, we keep up with a stress-free work environment.
                        Some of our major perks include Flexible Work Hours, Work-From-Home Facilities, Competitive Pay-Scale,
                        Performance Appraisal Hikes, Yearly Increment, Generous Leaves, and more!
                    </p>

                    <h4 className="career-link-title">Build Your Career with Wordsys:</h4>
                    <ul className="career-roles-list">
                        <li>Senior Software Developer (PHP)</li>
                        <li>Website Designer</li>
                        <li>SEO Content Writer</li>
                    </ul>
                </div>

                <div className="perks-right">
                    <img src={perksimage} alt="Perks" className="perks-img" />
                </div>
            </div>

        </div>
    );
};

export default Careers;
