import React, { useRef, useState, useEffect } from "react";
import breadCrumbImg from "../assets/sliderImgs/1.jpeg"
import CTASection from "../components/CTASection/CTASection"
import {
    FaChevronRight,
    FaChalkboardTeacher,
    FaFlask,
    FaLaptop,
    FaBuilding,
    FaBookOpen,
    FaTableTennis,
    FaFutbol,
    FaBus,
    FaChild,
    FaTrophy,
    FaUsers,
    FaVideo,
    FaArrowRight,
    FaSchool,
} from "react-icons/fa";

/* ---------------- Data (deduplicated across both flyers) ---------------- */

const ACADEMIC = [
    { Icon: FaChalkboardTeacher, title: "Highly Qualified & Experienced Faculty", body: "A dedicated teaching staff experienced in delivering the CBSE curriculum with real classroom attention." },
    { Icon: FaFlask, title: "Fully-Equipped Labs", body: "Separate, well-stocked labs for Physics, Chemistry, Biology, Mathematics, and a multimedia Computer Lab." },
    { Icon: FaLaptop, title: "100% Smart Digital Classrooms", body: "Every classroom is smart-enabled, replacing chalk-and-talk with interactive, visual learning." },
    { Icon: FaBuilding, title: "Multipurpose Hall", body: "A dedicated indoor hall for assemblies, indoor activities, and events regardless of weather." },
    { Icon: FaBookOpen, title: "Well-Stocked Library", body: "A wide collection spanning textbooks, reference material, and recreational reading for every grade." },
    { Icon: FaChild, title: "Dedicated Primary Classrooms", body: "Purpose-built, kid-friendly classrooms designed specifically for our youngest learners." },
    { Icon: FaUsers, title: "Ideal Teacher–Student Ratio", body: "Small class sizes that keep every student visible, not just the ones who ask questions." },
];

const SPORTS = [
    { Icon: FaTableTennis, title: "Badminton & Volleyball Courts", body: "Dedicated outdoor courts with coaching support for both recreational and competitive play." },
    { Icon: FaFutbol, title: "Football & Cricket Grounds", body: "Full-size grounds for inter-house matches, practice sessions, and annual sports meets." },
    { Icon: FaChild, title: "Playground Full of Swings", body: "A dedicated play area for younger students to build motor skills through open, active play." },
    { Icon: FaTrophy, title: "Sports & Extra-Curricular Activities", body: "Structured programs beyond the field — clubs, competitions, and skill-building activities year-round." },
];

const SAFETY = [
    { Icon: FaBus, title: "GPS-Enabled Transportation", body: "Live-tracked school buses so parents always know exactly where their child's ride is." },
    { Icon: FaVideo, title: "Audio-Enabled CCTV Surveillance", body: "Campus-wide audio-visual monitoring across classrooms, corridors, and grounds for everyday safety." },
];

const STATS = [
    { value: "13", label: "Campus Facilities" },
    { value: "5", label: "Dedicated Labs" },
    { value: "100%", label: "Smart Classrooms" },
    { value: "GPS", label: "Tracked Transport" },
];

/* ---------------- Scroll-reveal hook ---------------- */

function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);
    return [ref, visible];
}

function AnimatedHeading({ eyebrow, title, sub, center }) {
    const [ref, visible] = useReveal();
    return (
        <div ref={ref} className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
            {eyebrow && (
                <p
                    className={`font-semibold text-[13.5px] tracking-wide text-[#890C25] mb-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                        }`}
                >
                    {eyebrow}
                </p>
            )}
            <h2
                className={`font-logo font-semibold text-[#1a1a1a] text-[2rem] sm:text-[2.5rem] leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
            >
                {title}
            </h2>
            {sub && (
                <p
                    className={`text-[#737477] text-[15px] max-w-xl mt-4 transition-all duration-700 delay-200 ${center ? "mx-auto" : ""
                        } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                    {sub}
                </p>
            )}
        </div>
    );
}

/* ---------------- Page header banner ---------------- */

function FacilitiesHeroBanner() {
    return (
        <section className="relative h-[320px] sm:h-[400px] w-full overflow-hidden bg-[#111]">
            <img
                src={breadCrumbImg}
                alt="school_banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
            <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 sm:px-8 flex flex-col justify-end pb-9 sm:pb-12">
                <div className="flex items-center gap-2 text-white/85 text-[14.5px] font-medium mb-4">
                    <span className="hover:text-white transition-colors cursor-pointer">Home</span>
                    <FaChevronRight size={10} className="text-white/50" />
                    <span className="text-white">Facilities</span>
                </div>
                <h1 className="font-logo font-semibold text-white text-[2.4rem] sm:text-[3.2rem] leading-none mb-3">
                    Our Facilities
                </h1>
                <p className="text-white/75 text-[15px] sm:text-[16px] max-w-lg">
                    Everything a student needs, on one campus - from science labs to sports grounds.
                </p>
            </div>
        </section>
    );
}

/* ---------------- Stats strip ---------------- */

function StatsStrip() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1300px] mx-auto px-5 sm:px-8 -mt-14 sm:-mt-16 relative z-20">
            {STATS.map(({ value, label }) => (
                <div
                    key={label}
                    className="group bg-white rounded-lg shadow-xl shadow-black/10 border border-black/5 px-6 py-6 text-center hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
                >
                    <p className="font-logo font-semibold text-[#890C25] text-[1.9rem] leading-none">{value}</p>
                    <p className="text-[#737477] text-[12px] mt-2">{label}</p>
                </div>
            ))}
        </div>
    );
}

/* ---------------- Facility card ---------------- */

function FacilityCard({ Icon, title, body, index }) {
    const [ref, visible] = useReveal();
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${(index % 4) * 90}ms` }}
            className={`group bg-white rounded-xl border border-black/5 p-6 sm:p-7 hover:border-[#890C25]/25 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
        >
            <span className="inline-flex w-12 h-12 rounded-full bg-[#890C25]/10 text-[#890C25] items-center justify-center mb-5 group-hover:bg-[#890C25] group-hover:text-white transition-colors duration-300">
                <Icon size={19} />
            </span>
            <p className="font-logo font-semibold text-[#1a1a1a] text-[17px] mb-2 leading-snug">{title}</p>
            <p className="text-[#737477] text-[13.5px] leading-relaxed">{body}</p>
        </div>
    );
}

/* ---------------- Facility category section ---------------- */

function Facility({ eyebrow, title, sub, items, tint }) {
    return (
        <>
            <section className={`px-5 sm:px-8 py-16 md:py-20 ${tint ? "bg-[#F7F4EC]" : "bg-white"}`}>
                <div className="max-w-[1300px] mx-auto">
                    <AnimatedHeading eyebrow={eyebrow} title={title} sub={sub} center />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {items.map((item, i) => (
                            <FacilityCard key={item.title} {...item} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default function Facilities() {
    return (
        <>
            <FacilitiesHeroBanner />
            <StatsStrip />
            <div className="pt-16 sm:pt-20">
                <Facility
                    eyebrow="Academics"
                    title="Built for serious learning"
                    sub="Labs, classrooms, and staff structured around getting the fundamentals right."
                    items={ACADEMIC}
                />
                <Facility
                    eyebrow="Sports & Recreation"
                    title="Beyond the classroom"
                    sub="Courts, grounds, and activities that keep students active, not just enrolled."
                    items={SPORTS}
                    tint
                />
                <Facility
                    eyebrow="Safety & Convenience"
                    title="Peace of mind, built in"
                    sub="Systems that quietly work in the background so families don't have to worry."
                    items={SAFETY}
                />
            </div>
            <CTASection />

        </>
    );
}