import React, { useEffect, useRef, useState } from "react";
import "../styles/Test.css";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
import test4 from "../assets/test4.png";
import test5 from "../assets/test5.png";
import test6 from "../assets/test6.png";
import test7 from "../assets/test7.png";
import test8 from "../assets/test8.png";

const testimonials = [
    {
        img: test1,
        name: "Tim Carter",
        company: "Ask The Builder",
        quote:
            "Your professionalism in building my custom software has been immensely valuable for my business project."
    },
    {
        img: test2,
        name: "Jennifer Wilson",
        company: "Simple Scrapper",
        quote:
            "It's such a pleasure to work with you to accomplish my online business project with ease."
    },
    {
        img: test3,
        name: "Nikki McGonigal",
        company: "Nikki, In Stitches",
        quote:
            "I sincerely appreciate the work of Wordsys to develop my mobile app in a short time."
    },
    {
        img: test4,
        name: "Laura Hagan",
        company: "Janewear Jewelry",
        quote:
            "Wordsys is transparent in delivering what it promises to develop my business website diligently."
    },
    // EXTRA testimonials for demo and "next 4"
    {
        img: test5,
        name: "Maria Smith",
        company: "Acme Corp",
        quote:
            "Amazing work – met expectations and deadlines every time!"
    },
    {
        img: test6,
        name: "James Lee",
        company: "Tech Innovators",
        quote:
            "Their expertise and service made a crucial difference to our digital presence."
    },
    {
        img: test7,
        name: "Akash Patel",
        company: "IndoWeb",
        quote:
            "Professional, fast and reliable software delivery. Highly recommend!"
    },
    {
        img: test8,
        name: "Linda Brown",
        company: "Brown Photography",
        quote:
            "Wordsys is my go-to team for new sites and ongoing support. Excellent!"
    }
];

const SLIDESHOW_SIZE = 4; // show 4 at a time

export default function TestimonialsSection() {
    const [visible, setVisible] = useState(false);
    const [startIdx, setStartIdx] = useState(0);
    const secRef = useRef();

    // Scroll in animation
    useEffect(() => {
        function onScroll() {
            if (!visible && secRef.current) {
                const { top } = secRef.current.getBoundingClientRect();
                if (top < window.innerHeight - 100) setVisible(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        onScroll(); // In case already in view
        return () => window.removeEventListener("scroll", onScroll);
    }, [visible]);

    // Carousel prev/next functions
    const goNext = () => {
        setStartIdx((start) =>
            (start + SLIDESHOW_SIZE) % testimonials.length
        );
    };
    const goPrev = () => {
        setStartIdx((start) =>
            (start - SLIDESHOW_SIZE + testimonials.length) % testimonials.length
        );
    };

    // Compute which testimonials to show
    const displayTestimonials = [];
    for (let i = 0; i < SLIDESHOW_SIZE; i++) {
        displayTestimonials.push(
            testimonials[(startIdx + i) % testimonials.length]
        );
    }

    return (
        <section
            className={`testimonials-section${visible ? " appear" : ""}`}
            ref={secRef}
            id="testimonials"
        >
            <div className="testimonials-pane">
                {/* LEFT: Testimonial cards */}
                <div className="testimonials-cards">
                    <div className="cards-grid">
                        {displayTestimonials.map((t, i) => (
                            <div className="testimonial-card" key={i}>
                                <div className="testi-profile">
                                    <img src={t.img} alt={t.name} className="testi-img" />
                                    <div>
                                        <div className="testi-name">{t.name}</div>
                                        <div className="testi-company">{t.company}</div>
                                    </div>
                                </div>
                                <div className="testi-quote">{t.quote}</div>
                            </div>
                        ))}
                    </div>
                    {/* Functional Arrows */}
                    <div className="testimonials-arrows">
                        <span className="arrow" onClick={goPrev}>&larr;</span>
                        <span className="arrow" onClick={goNext}>&rarr;</span>
                    </div>
                </div>
                {/* RIGHT: Sidebar */}
                <div className="testimonials-sidebar">
                    <div className="testimonials-qmark">“</div>
                    <div className="testimonials-right-title">
                        <span className="testimonials-client-blue">Client</span> Testimonials
                    </div>
                    <div className="testimonials-side-desc">
                        Having delivered across different verticals, varying from IT to digital marketing & software development, we’ve built a certain level of proficiency the world across.
                    </div>
                    <button className="testimonials-btn">SCHEDULE A MEETING</button>
                </div>
            </div>
        </section>
    );
}