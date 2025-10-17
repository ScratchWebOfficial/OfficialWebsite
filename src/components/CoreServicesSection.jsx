/*import React, { useRef, useEffect, useState } from "react";
import "../styles/CoreServicesSection.css";
import card1 from "../assets/customsoftware.png";
import card2 from "../assets/mobile.png";
import card3 from "../assets/digitalmkt.png";
import card4 from "../assets/softwaretesting.png";
import card5 from "../assets/fullstack.png";

const cards = [
    {
        image: card1,
        title: "Custom Software Development"
    },
    {
        image: card2,
        title: "Mobile Application"
    },
    {
        image: card3,
        title: "Digital Marketing"
    },
    {
        image: card4,
        title: "Software Testing & QA"
    },
    {
        image: card5,
        title: "Full Stack Web Development"
    }
];

export default function CoreServicesSection() {
    const [visible, setVisible] = useState(false);
    const secRef = useRef();

    useEffect(() => {
        function onScroll() {
            if (!visible && secRef.current) {
                const { top } = secRef.current.getBoundingClientRect();
                if (top < window.innerHeight - 60) setVisible(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [visible]);

    return (
        <section className={`core-services-section${visible ? " appear" : ""}`} ref={secRef}>
            <div className="core-services-title">
                <h2>
                    <span className="blue">Core Software Development Services and Solutions</span>
                </h2>
                <h3>for Your Business</h3>
                <div className="cs-underline"></div>
            </div>
            <div className="core-services-cards">
                {cards.map((card, idx) => (
                    <div key={idx} className="cs-card">
                        <img src={card.image} alt={card.title} />
                        <div className="cs-label">{card.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}*/

import React, { useRef, useEffect, useState } from "react";
import "../styles/CoreServicesSection.css";
import card1 from "../assets/customsoftware.png";
import card2 from "../assets/mobile.png";
import card3 from "../assets/digitalmkt.png";
import card4 from "../assets/softwaretesting.png";
import card5 from "../assets/fullstack.png";

const cards = [
    { image: card1, label: "Custom Software Development" },
    { image: card2, label: "Mobile Application" },
    { image: card3, label: "Digital Marketing" },
    { image: card4, label: "Software Testing & QA" },
    { image: card5, label: "Full Stack Web Development" }
];

export default function CoreServicesSection() {
    const [visible, setVisible] = useState(false);
    const secRef = useRef();

    useEffect(() => {
        function onScroll() {
            if (!visible && secRef.current) {
                const { top } = secRef.current.getBoundingClientRect();
                if (top < window.innerHeight - 80) setVisible(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [visible]);

    return (
        <section
            ref={secRef}
            className={`core-services-section${visible ? " appear" : ""}`}
            id="core-services"
        >
            <div className="services-title">
                <h2>
                    <span className="blue">Core Software Development Services and Solutions</span>
                </h2>
                <h3>for Your Business</h3>
                <div className="services-underline"></div>
            </div>
            <div className="services-cards">
                {cards.map((card, idx) => (
                    <div className="services-card" key={idx}>
                        <img src={card.image} alt={card.label} />
                        <div className="services-label">{card.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}


/*import React, { useRef, useEffect, useState } from "react";
import "../styles/CoreServicesSection.css";
import card1 from "../assets/customsoftware.png";
import card2 from "../assets/mobile.png";
import card3 from "../assets/digitalmkt.png";
import card4 from "../assets/softwaretesting.png";
import card5 from "../assets/fullstack.png";

// You can expand details for each card as needed
const cards = [
  {
    image: card1,
    label: "Custom Software Development",
    detail: "Boost your business functions, productivity, and operational efficiency with our custom software development solutions."
  },
  {
    image: card2,
    label: "Mobile Application",
    detail: "Innovative and user-friendly mobile applications tailored to your business needs."
  },
  {
    image: card3,
    label: "Digital Marketing",
    detail: "Maximize your digital presence and reach your target audience effectively."
  },
  {
    image: card4,
    label: "Software Testing & QA",
    detail: "Reliability guaranteed through rigorous software testing and quality assurance."
  },
  {
    image: card5,
    label: "Full Stack Web Development",
    detail: "Comprehensive web development solutions from front-end to back-end."
  }
];

export default function CoreServicesSection() {
  const [visible, setVisible] = useState(false);
  const [modalIdx, setModalIdx] = useState(null);
  const secRef = useRef();

  useEffect(() => {
    function onScroll() {
      if (!visible && secRef.current) {
        const { top } = secRef.current.getBoundingClientRect();
        if (top < window.innerHeight - 80) setVisible(true);
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible]);

  // ESC key closes modal
  useEffect(() => {
    function onKeyDown(e) {
      if (modalIdx !== null && e.key === "Escape") setModalIdx(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalIdx]);

  return (
    <section
      ref={secRef}
      className={`core-services-section${visible ? " appear" : ""}`}
      id="core-services"
    >
      <div className="services-title">
        <h2>
          <span className="blue">Core Software Development Services and Solutions</span>
        </h2>
        <h3>for Your Business</h3>
        <div className="services-underline"></div>
      </div>
      <div className="services-cards">
        {cards.map((card, idx) => (
          <div
            className="services-card"
            key={idx}
            onClick={() => setModalIdx(idx)}
            tabIndex={0}
            onKeyPress={e => (e.key === "Enter" || e.key === " ") && setModalIdx(idx)}
            role="button"
            aria-label={`Open details for ${card.label}`}
          >
            <img src={card.image} alt={card.label} />
            <div className="services-label">{card.label}</div>
          </div>
        ))}
      </div>

      {modalIdx !== null && (
        <div className="services-modal-overlay" onClick={() => setModalIdx(null)}>
          <div
            className="services-modal"
            onClick={e => e.stopPropagation()}
            tabIndex={-1}
          >
            <button
              className="modal-close"
              onClick={() => setModalIdx(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              className="modal-img"
              src={cards[modalIdx].image}
              alt={cards[modalIdx].label}
            />
            <div className="modal-title">{cards[modalIdx].label}</div>
            <div className="modal-detail">{cards[modalIdx].detail}</div>
          </div>
        </div>
      )}
    </section>
  );
}*/


