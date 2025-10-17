import React from "react";
import "../styles/NewsSection.css";
import newsHeroImage from "../assets/newshero.png"; // make sure this image path is correct
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";

const NewsSection = () => {
    return (
        <div className="news-hero-section">
            <div className="news-content">
                <h2>
                    <span className="blue-text">Stay Alert!</span>
                    <br />
                    <span className="black-text">Be Updated!</span>
                </h2>
                <p>
                    Unearth All The Exclusive, Updated, And Riveting Insights Into Marketing,
                    Business And Tech Scoop Through Our Daily News Posts.
                </p>
                <button className="news-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="news-image">
                <img src={newsHeroImage} alt="News Visual" />
            </div>
            <div className="news-latest-section">
                <h2 className="news-latest-heading">
                    <span className="blue-text">Latest</span> <span className="black-text">Scoop</span>
                </h2>
                <p className="news-latest-subtext">
                    The swift pace at which the tech and marketing landscapes are evolving has increased the importance of learnability.
                    Rummage through our daily dose of tech and business news to stay up-to-dated!
                </p>

                <div className="news-card-grid">
                    <div className="news-card">
                        <img src={news1} alt="AR Tech" />
                        <div className="news-card-content">
                            <h4>AR Tech “Seek” To Provide Seamless E-Commerce Experience</h4>
                            <p className="news-date">March 24th, 2020</p>
                            <p className="news-desc">
                                AR in e-commerce proves out to be the mainstream sector of augmented reality giving the most delightful experience to online shoppers.
                            </p>
                            <button className="read-more-btn">READ MORE</button>
                        </div>
                    </div>

                    <div className="news-card">
                        <img src={news2} alt="Android App Mistakes" />
                        <div className="news-card-content">
                            <h4>Android App Development Mistakes Causing Your Failure</h4>
                            <p className="news-date">March 24th, 2020</p>
                            <p className="news-desc">
                                Are you paying the price for your developers' mistake in coding and designing the Android App for you?
                            </p>
                            <button className="read-more-btn">READ MORE</button>
                        </div>
                    </div>

                    <div className="news-card">
                        <img src={news3} alt="Google Assistant Hack" />
                        <div className="news-card-content">
                            <h4>Google Assistant And Siri Become The Next Target Of Hackers</h4>
                            <p className="news-date">March 24th, 2020</p>
                            <p className="news-desc">
                                Using hard back covers can save your smartphones from the smartness of hackers accessing your device via Google Assistant and Siri.
                            </p>
                            <button className="read-more-btn">READ MORE</button>
                        </div>
                    </div>
                    <div className="news-card">
                        <img src={news3} alt="Google Assistant Hack" />
                        <div className="news-card-content">
                            <h4>Google Assistant And Siri Become The Next Target Of Hackers</h4>
                            <p className="news-date">March 24th, 2020</p>
                            <p className="news-desc">
                                Using hard back covers can save your smartphones from the smartness of hackers accessing your device via Google Assistant and Siri.
                            </p>
                            <button className="read-more-btn">READ MORE</button>
                        </div>
                    </div>
                    <div className="news-card">
                        <img src={news3} alt="Google Assistant Hack" />
                        <div className="news-card-content">
                            <h4>Google Assistant And Siri Become The Next Target Of Hackers</h4>
                            <p className="news-date">March 24th, 2020</p>
                            <p className="news-desc">
                                Using hard back covers can save your smartphones from the smartness of hackers accessing your device via Google Assistant and Siri.
                            </p>
                            <button className="read-more-btn">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsSection;
