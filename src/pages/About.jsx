import React, { useRef, useState, useEffect } from "react";
import breadCrumbImg from "../assets/sliderImgs/1.jpeg"
import CTASection from "../components/CTASection/CTASection";
import {
    FaChevronRight,
    FaGraduationCap,
    FaBullseye,
    FaEye,
    FaUsers,
    FaAward,
    FaGlobeAmericas,
    FaBookOpen,
} from "react-icons/fa";


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
            { threshold: 0.2 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return [ref, visible];
}

function AnimatedHeading({ eyebrow, title, light, center }) {
    const [ref, visible] = useReveal();
    return (
        <div ref={ref} className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
            {eyebrow && (
                <p
                    className={`flex items-center gap-2.5 font-semibold text-[14px] tracking-wide mb-3 transition-all duration-700 ${center ? "justify-center" : ""
                        } ${light ? "text-[#f2c9d2]" : "text-[#890C25]"} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                        }`}
                >
                    <FaGraduationCap size={16} />
                    {eyebrow}
                </p>
            )}
            <h2
                className={`font-logo font-semibold text-[2rem] sm:text-[2.6rem] leading-tight transition-all duration-700 delay-100 ${light ? "text-white" : "text-[#1a1a1a]"
                    } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                {title}
            </h2>
        </div>
    );
}

/* ---------------- Page header banner ---------------- */

function PageHeaderBanner() {
    return (
        <section className="relative h-[280px] sm:h-[340px] w-full overflow-hidden bg-[#111]">
            <img
                src={breadCrumbImg}
                alt="school_banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/40 to-black/20" />
            <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 sm:px-8 flex flex-col justify-end pb-9 sm:pb-12">
                <div className="flex items-center gap-2 text-white/85 text-[14.5px] font-medium mb-4">
                    <span className="hover:text-white transition-colors cursor-pointer">Home</span>
                    <FaChevronRight size={10} className="text-white/50" />
                    <span className="text-white">About Us</span>
                </div>
                <h1 className="font-logo font-semibold text-white text-[2.4rem] sm:text-[3.2rem] leading-none">
                    About Us
                </h1>
            </div>
        </section>
    );
}

/* ---------------- Intro: image left, text right ---------------- */

export default function About() {
    const [ref, visible] = useReveal();
    return (
        <>
            <PageHeaderBanner />
            <section ref={ref} className="bg-white px-5 sm:px-8 py-20 md:py-28 overflow-hidden">
                <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
                    {/* image — left */}
                    <div
                        className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                            }`}
                    >
                        <img
                            src={breadCrumbImg}
                            alt="school_img"
                            className="w-full h-[340px] sm:h-[440px] md:h-[500px] object-cover rounded-xl"
                        />
                        <div className="absolute -bottom-7 -right-6 sm:-right-10 bg-[#890C25] text-white rounded-xl p-6 w-44 shadow-xl">
                            <p className="font-logo font-semibold text-3xl">12+</p>
                            <p className="text-white/70 text-[11px] tracking-wide mt-1 uppercase">Years of academic legacy</p>
                        </div>
                    </div>

                    {/* text — right */}
                    <div
                        className={`transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                            }`}
                    >
                        <p className="flex items-center gap-2.5 text-[#890C25] font-semibold text-[14px] tracking-wide mb-4">
                            <FaGraduationCap size={16} />
                            Who We Are
                        </p>
                        <h2 className="font-logo font-semibold text-[#1a1a1a] text-[2.2rem] sm:text-[2.7rem] leading-tight mb-6">
                            School Emblem
                        </h2>
                        <p className="text-[#737477] text-[15.5px] leading-relaxed mb-5 text-justify">
                            SR. L.S. International Public School Kisai Jagdishpur, Kannauj, is passionately committed to pursue excellence in every conceivable field. For us every child is a leader of tomorrow and we leave no stone unturned to ensure that every LS's is given an opportunity to excel.
                        </p>
                        <p className="text-[#737477] text-[15.5px] leading-relaxed mb-9 text-justify">
                            The Four Segments of the Shield represent different aspects of learning: The GLOBE signifies the global outlook necessary for the leaders of tomorrow. The BOOK stands for knowledge. The TORCH embodies hope and integrity that ignite the minds of young people and light their path towards brilliance and accomplishment. The VEENA belongs to Sarasvati, the Goddess of learning and speech. It is the symbol of creativity, culture and refinement.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-5 mb-9">
                            <div className="flex items-start gap-3">
                                <span className="w-10 h-10 rounded-full bg-[#890C25]/10 text-[#890C25] flex items-center justify-center shrink-0">
                                    <FaUsers size={16} />
                                </span>
                                <div>
                                    <p className="font-logo font-semibold text-[#1a1a1a] text-[17px]">1000+</p>
                                    <p className="text-[#737477] text-[13px]">Students enrolled</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-10 h-10 rounded-full bg-[#890C25]/10 text-[#890C25] flex items-center justify-center shrink-0">
                                    <FaAward size={16} />
                                </span>
                                <div>
                                    <p className="font-logo font-semibold text-[#1a1a1a] text-[17px]">Top 50</p>
                                    <p className="text-[#737477] text-[13px]">Ranked State</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={ref} className="relative bg-[#890C25] px-5 sm:px-8 py-20 md:py-24 overflow-hidden">

                <div
                    className={`relative max-w-auto mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <p className="text-white/75 text-[15px] text-center mb-9 max-w-auto mx-auto">
                        The school emblem draws inspiration from the five classical elements - EARTH, WATER, FIRE, AIR and SKY. We endeavor to instill in our learners the attributes of the five great elements. With the LS’s of transcendence flanked by two swans at the top, the crest highlights the subtlety of sky and swan’s unique ability to separate milk from water, just like the discovering minds we inculcate in our learners. The color BLUE reminds us of the flowing nature of water and motivates learners to keep advancing towards their goals. The color YELLOW brings alive the spirit of fire along with its strong will and energy while the GOLDEN color represents nurturing and stable quality of earth. The flags with the initials of the school are the omnipresent ambassadors of direction like the ever-present air.
                    </p>
                </div>
            </section>
            <MissionVisionSection />
            <CoreValues />
            <CTASection />

        </>
    );
}

/* ---------------- Mission & Vision ---------------- */

function MissionVisionCard({ Icon, label, title, body, index }) {
    const [ref, visible] = useReveal();
    return (
        <div
            ref={ref}
            className={`relative bg-white rounded-xl p-8 sm:p-10 overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#890C25]/5" aria-hidden="true" />
            <span className="relative inline-flex w-14 h-14 rounded-full bg-[#890C25] text-white items-center justify-center mb-6">
                <Icon size={22} />
            </span>
            <p className="relative text-[#890C25] font-bold text-[1.5rem] tracking-wide uppercase mb-2">
                {label}
            </p>
            <p className="relative text-[#737477] text-[15px] leading-relaxed">{body}</p>
        </div>
    );
}

function MissionVisionSection() {
    return (
        <section id="mission-vision" className="bg-[#F7F4EC] px-5 sm:px-8 py-20 md:py-28">
            <div className="max-w-[1300px] mx-auto">
                <AnimatedHeading eyebrow="What Drives Us" title="Our Mission & Vision" center />
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    <MissionVisionCard
                        Icon={FaBullseye}
                        label="Our Mission"
                        title="Cultivating Compassionate and Resilient Individuals"
                        body="Our mission is to develop good human beings, capable of independent rational thought and action, with compassion and humaneness, with courage and resilience, with scientific temper and creative groundbreaking imagination, with a manifestation of a progressive and peaceful society"
                        index={0}
                    />
                    <MissionVisionCard
                        Icon={FaEye}
                        label="Our Vision"
                        title="Crafting Responsible Global Citizens"
                        body="At Sr. L.S. International Public School Kisai Jagdishpur,Kannauj. We aspire to craft socially conscious, self-aware and responsible global citizens who will construct, shape, and serve society. The school proposes to create a system that is aligned with the aspirational goals of state-of-the-art education, including SDG4 while building upon India’s traditions and value systems. The school lays particular emphasis on the development of the creative potential of each individual based on the principle that education must develop not only cognitive capacities but also social, ethical, and emotional dimensions and dispositions."
                        index={1}
                    />
                </div>
            </div>
        </section>
    );
}

/* ---------------- Core values ---------------- */
const VALUES = [
    {
        Icon: FaBookOpen,
        title: "Quality Education",
        body: "Delivering a comprehensive CBSE curriculum that builds strong academic foundations and lifelong learning skills."
    },
    {
        Icon: FaUsers,
        title: "Student-Centric Learning",
        body: "Every child receives individual attention in a caring environment that encourages creativity, confidence, and curiosity."
    },
    {
        Icon: FaGlobeAmericas,
        title: "Modern Education",
        body: "Technology-enabled classrooms, experiential learning, and innovation prepare students for future opportunities."
    },
    {
        Icon: FaAward,
        title: "Excellence & Character",
        body: "Committed to academic success while fostering discipline, ethics, leadership, and strong moral values."
    },
];

function CoreValues() {
    return (
        <section className="bg-white px-5 sm:px-8 py-20 md:py-28">
            <div className="max-w-[1300px] mx-auto">
                <AnimatedHeading eyebrow="Our Values" title="What we hold ourselves to" center />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {VALUES.map(({ Icon, title, body }) => (
                        <div
                            key={title}
                            className="group text-center px-5 py-9 rounded-xl border border-black/25 hover:border-[#890C25]/20 hover:shadow-lg transition-all duration-300"
                        >
                            <span className="inline-flex w-14 h-14 rounded-full bg-[#890C25]/10 text-[#890C25] items-center justify-center mb-5 group-hover:bg-[#890C25] group-hover:text-white transition-colors duration-300">
                                <Icon size={22} />
                            </span>
                            <p className="font-logo font-semibold text-[#1a1a1a] text-[18px] mb-2">{title}</p>
                            <p className="text-[#737477] text-[14px] leading-relaxed">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { MissionVisionSection };