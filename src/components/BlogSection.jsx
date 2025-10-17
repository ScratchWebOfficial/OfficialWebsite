import React from 'react';
import '../styles/BlogSection.css';
import blogHeroImage from '../assets/blogheroimage.png';
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";
import b6 from "../assets/b6.png";
import b7 from "../assets/b7.png";
import b8 from "../assets/b8.png";
import b9 from "../assets/b9.png";
const BlogSection = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="blog-hero-section">
                <div className="blog-container">
                    <div className="blog-text-content">
                        <h1 className="blog-heading-blue">Ready For Some</h1>
                        <h2 className="blog-heading-black">Engaging Read?</h2>
                        <p className="blog-description">
                            Stimulate Your Knowledge With Our Information-Rich, Engaging, And Up-Dated Blog Posts
                            Pertaining To Multiple Facets Of Business, Technology, And Marketing.
                        </p>
                        <button className="blog-button">Schedule a Meeting</button>
                    </div>

                    <div className="blog-image-container">
                        <img src={blogHeroImage} alt="Blog Typewriter" className="blog-image" />
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="blog-intro-section">
                <div className="blog-intro-container">
                    <h2 className="blog-intro-heading">
                        <span className="blue-text">A Peep Into </span>Our Blogs
                    </h2>
                    <div className="blog-underline"></div>
                    <p className="blog-intro-description">
                        Unless you want to live under a rock, consider rummaging through blog posts to get an insight into
                        the rapidly evolving landscapes of digital marketing, world business, technologies, and more!
                    </p>
                </div>
            </section>



            <section className="blog-cards-wrapper">
                <div className="blog-main-layout">
                    {/* Blog Cards Section */}
                    <div className="blog-cards-grid">
                        {/* Keep your existing blog cards here */}
                        {/* Example: */}
                        <div className="blog-card">
                            <div className="card-image">
                                <img src={b1} alt="Blog 1" />
                                <div className="date-badge">
                                    <span>JUL</span>
                                    <span>8TH</span>
                                    <span>2025</span>
                                </div>
                            </div>
                            <h3 className="card-title">Is Your Website Future Ready? Signs You Need a Redesign</h3>
                            <p className="card-desc">Is your website ready for the future? Discover the key signs...</p>
                        </div>
                        {/* Repeat all cards */}
                    </div>
                    <div className="blog-cards-grid">
                        {/* Keep your existing blog cards here */}
                        {/* Example: */}
                        <div className="blog-card">
                            <div className="card-image">
                                <img src={b2} alt="Blog 1" />
                                <div className="date-badge">
                                    <span>JUL</span>
                                    <span>8TH</span>
                                    <span>2025</span>
                                </div>
                            </div>
                            <h3 className="card-title">Is Your Website Future Ready? Signs You Need a Redesign</h3>
                            <p className="card-desc">Is your website ready for the future? Discover the key signs...</p>
                        </div>
                        {/* Repeat all cards */}
                    </div>
                    <div className="blog-cards-grid">
                        {/* Keep your existing blog cards here */}
                        {/* Example: */}
                        <div className="blog-card">
                            <div className="card-image">
                                <img src={b3} alt="Blog 1" />
                                <div className="date-badge">
                                    <span>JUL</span>
                                    <span>8TH</span>
                                    <span>2025</span>
                                </div>
                            </div>
                            <h3 className="card-title">Is Your Website Future Ready? Signs You Need a Redesign</h3>
                            <p className="card-desc">Is your website ready for the future? Discover the key signs...</p>
                        </div>
                        {/* Repeat all cards */}
                    </div>
                    <div className="blog-cards-grid">
                        {/* Keep your existing blog cards here */}
                        {/* Example: */}
                        <div className="blog-card">
                            <div className="card-image">
                                <img src={b4} alt="Blog 1" />
                                <div className="date-badge">
                                    <span>JUL</span>
                                    <span>8TH</span>
                                    <span>2025</span>
                                </div>
                            </div>
                            <h3 className="card-title">Is Your Website Future Ready? Signs You Need a Redesign</h3>
                            <p className="card-desc">Is your website ready for the future? Discover the key signs...</p>
                        </div>

                        {/* Repeat all cards */}
                    </div>
                    <div className="blog-cards-grid">
                        {/* Keep your existing blog cards here */}
                        {/* Example: */}
                        <div className="blog-card">
                            <div className="card-image">
                                <img src={b5} alt="Blog 1" />
                                <div className="date-badge">
                                    <span>JUL</span>
                                    <span>8TH</span>
                                    <span>2025</span>
                                </div>
                            </div>
                            <h3 className="card-title">Is Your Website Future Ready? Signs You Need a Redesign</h3>
                            <p className="card-desc">Is your website ready for the future? Discover the key signs...</p>
                        </div>

                        {/* Repeat all cards */}
                    </div>
                    <div className="blog-cards-grid">
                        {/* Keep your existing blog cards here */}
                        {/* Example: */}
                        <div className="blog-card">
                            <div className="card-image">
                                <img src={b6} alt="Blog 1" />
                                <div className="date-badge">
                                    <span>JUL</span>
                                    <span>8TH</span>
                                    <span>2025</span>
                                </div>
                            </div>
                            <h3 className="card-title">Is Your Website Future Ready? Signs You Need a Redesign</h3>
                            <p className="card-desc">Is your website ready for the future? Discover the key signs...</p>
                        </div>

                        {/* Repeat all cards */}
                    </div>
                    <div className="blog-cards-grid">
                        {/* Keep your existing blog cards here */}
                        {/* Example: */}
                        <div className="blog-card">
                            <div className="card-image">
                                <img src={b7} alt="Blog 1" />
                                <div className="date-badge">
                                    <span>JUL</span>
                                    <span>8TH</span>
                                    <span>2025</span>
                                </div>
                            </div>
                            <h3 className="card-title">Is Your Website Future Ready? Signs You Need a Redesign</h3>
                            <p className="card-desc">Is your website ready for the future? Discover the key signs...</p>
                        </div>

                        {/* Repeat all cards */}
                    </div>
                    <div className="blog-cards-grid">
                        {/* Keep your existing blog cards here */}
                        {/* Example: */}
                        <div className="blog-card">
                            <div className="card-image">
                                <img src={b8} alt="Blog 1" />
                                <div className="date-badge">
                                    <span>JUL</span>
                                    <span>8TH</span>
                                    <span>2025</span>
                                </div>
                            </div>
                            <h3 className="card-title">Is Your Website Future Ready? Signs You Need a Redesign</h3>
                            <p className="card-desc">Is your website ready for the future? Discover the key signs...</p>
                        </div>

                        {/* Repeat all cards */}
                    </div>
                    <div className="blog-cards-grid">
                        {/* Keep your existing blog cards here */}
                        {/* Example: */}
                        <div className="blog-card">
                            <div className="card-image">
                                <img src={b9} alt="Blog 1" />
                                <div className="date-badge">
                                    <span>JUL</span>
                                    <span>8TH</span>
                                    <span>2025</span>
                                </div>
                            </div>
                            <h3 className="card-title">Is Your Website Future Ready? Signs You Need a Redesign</h3>
                            <p className="card-desc">Is your website ready for the future? Discover the key signs...</p>
                        </div>

                        {/* Repeat all cards */}
                    </div>










                </div>
            </section>



        </>
    );
};

export default BlogSection;
