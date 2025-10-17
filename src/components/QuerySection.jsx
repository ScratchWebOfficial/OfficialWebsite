import React, { useEffect, useRef, useState } from "react";
import "../styles/QuerySection.css";
import queryImage from "../assets/query-section.png"; // rename your image to this

export default function QuerySection() {
    const [visible, setVisible] = useState(false);
    const secRef = useRef();

    useEffect(() => {
        function onScroll() {
            if (!visible && secRef.current) {
                const { top } = secRef.current.getBoundingClientRect();
                const trigger = window.innerHeight - 100;
                if (top < trigger) setVisible(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [visible]);

    return (
        <section
            className={`query-section${visible ? " appear" : ""}`}
            ref={secRef}
        >
            <div className="query-container">
                {/* LEFT TEXT COLUMN */}
                <div className="query-left">
                    <div className="query-heading">
                        <span className="blue">Do You Have</span> Any Query?
                    </div>
                    <div className="query-paragraph">
                        We are looking forward to quelling them! As a <b>software product development company</b>, we only provide practical & result-driven IT, <b>software product development services</b> and best digital marketing services to meet your business goals & help you rise above the competition. We strictly adhere to your preferred schedule and assure timely delivery of every work. Feel free to reach out to us with your requisite details, queries, etc.
                    </div>
                    <div className="query-paragraph">
                        With our years-long experience as the <b>best software development company</b>, we understand that a meticulously-built brand image is essential to boost your business. And we try to enhance that image through our qualitative offerings. With our business-driven and result-yielding marketing services, we seek to raise the bar for assertive online communication and boost your digital presence as India's <b>top software development company</b>.
                    </div>
                    <button className="query-btn">SUBMIT YOUR QUERY</button>
                    {/* STATS BAR */}
                    <div className="query-stats">
                        <div>
                            <span className="stat-number">200</span>
                            <span className="stat-label">Happy Customers</span>
                        </div>
                        <div>
                            <span className="stat-number">50</span>
                            <span className="stat-label">Highly trained employees</span>
                        </div>
                        <div>
                            <span className="stat-number">500</span>
                            <span className="stat-label">Customized Software products</span>
                        </div>

                    </div>
                </div>
                {/* RIGHT IMAGE & OVERLAY */}
                <div className="query-right">
                    <img src={queryImage} alt="" />
                    <div className="query-overlay">
                        <div className="overlay-title">Grow Your Brand</div>
                        <div className="overlay-desc">
                            Reach a height of global acclaim with our custom-tailored, best software development services and top digital marketing services!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
