import React, { useEffect, useRef, useState } from "react";
import "../styles/MarketingBenefitCard.css";
import aiBg from "../assets/aimarketing.png"; // Place your image here

export default function MarketingBenefitCard() {
    const [visible, setVisible] = useState(false);
    const cardRef = useRef();

    useEffect(() => {
        function onScroll() {
            if (!visible && cardRef.current) {
                const { top } = cardRef.current.getBoundingClientRect();
                if (top < window.innerHeight - 64) setVisible(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [visible]);

    return (
        <section className={`mbc-section${visible ? " appear" : ""}`}>
            <div ref={cardRef} className="mbc-card">
                {/* Card Image & Overlay */}
                <img src={aiBg} alt="" className="mbc-bg" />
                <div className="mbc-card-overlay">
                    <div className="mbc-content">
                        <div className="mbc-title">
                            What are the Major Benefits of AI in Online Marketing?
                        </div>
                        <div className="mbc-desc">
                            The benefits of Artificial Intelligence are galore when it comes to boosting an internet marketing strategy. Read to know more.
                        </div>
                    </div>
                    <button className="mbc-btn">READ MORE</button>
                    <div className="mbc-arrows">
                        {/* Placeholder arrows, static as in your screenshot */}
                        <span className="mbc-arrow left">&#8592;</span>
                        <span className="mbc-arrow right">&#8594;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
