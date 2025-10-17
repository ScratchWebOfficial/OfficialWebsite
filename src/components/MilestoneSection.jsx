import React, { useEffect, useRef, useState } from "react";
import "../styles/MilestoneSection.css";
import logoNasscom from "../assets/nasscom.png";
import logoDatastream from "../assets/datastream.png";
import logoArtizone from "../assets/artizone.png";
import logoWhitecastle from "../assets/whitecastle.png";
import logoIndian from "../assets/indian.png";
import logoFutura from "../assets/futura.png";
import logoClutch from "../assets/clutch.png";
import logoGood from "../assets/good.png";
//import logoAws from "../assets/aws.png";
//import logoGoogle from "../assets/google.png";

const allLogos = [
    { src: logoNasscom, alt: "NASSCOM" },
    { src: logoDatastream, alt: "DataStream" },
    { src: logoArtizone, alt: "Artizone" },
    { src: logoWhitecastle, alt: "White Castle" },
    { src: logoIndian, alt: "Indian" },
    { src: logoFutura, alt: "Futura" },
    { src: logoClutch, alt: "Clutch" },
    { src: logoGood, alt: "Good" },
    //{ src: logoAws, alt: "Aws" },
    //{ src: logoGoogle, alt: "Google" },

];

// Number of logos visible at once (you may tune this based on design)
const SLIDE_COUNT = 4;
const SLIDE_INTERVAL = 2500; // ms

export default function MilestonesSection() {
    const [visible, setVisible] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const secRef = useRef();
    const intervalRef = useRef();

    useEffect(() => {
        function onScroll() {
            if (!visible && secRef.current) {
                const { top } = secRef.current.getBoundingClientRect();
                if (top < window.innerHeight - 50) setVisible(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [visible]);

    useEffect(() => {
        // Automatic sliding
        intervalRef.current = setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % allLogos.length);
        }, SLIDE_INTERVAL);
        return () => clearInterval(intervalRef.current);
    }, []);

    // Allow continuous loop for infinite feel
    function getVisibleLogos() {
        let result = [];
        for (let i = 0; i < SLIDE_COUNT; i++) {
            result.push(allLogos[(slideIndex + i) % allLogos.length]);
        }
        return result;
    }

    return (
        <section
            ref={secRef}
            className={`milestones-section${visible ? " appear" : ""}`}
            id="milestones"
        >
            <div className="milestones-title">
                <div>Together, We Shall Create</div>
                <div className="milestones-blue">
                    Greater Benchmarks Conquering Bigger Milestones!
                </div>
                <div className="milestones-underline" />
            </div>
            <div className="milestones-desc">
                Being led by a fortitude, which empowers our services with cutting edge technologies, an in-depth digital know-how, and indelible commitment to quality, we have successfully become one of the best digital marketing agency, IT and top software development companies in India! Today, we take pride in having collaborated with the world’s top-tier organizations that include Amazon Web Services, Clutch, GoodFirms, AppFutura, and many more!
            </div>
            <div className="milestones-logos">
                {getVisibleLogos().map((logo, idx) => (
                    <img key={logo.alt + idx} src={logo.src} alt={logo.alt} className="milestone-logo" />
                ))}
            </div>
        </section>
    );
}