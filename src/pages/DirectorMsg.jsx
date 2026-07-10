import React from "react";
import { FaChevronRight } from "react-icons/fa";
import DirectorImg from "../assets/management/director.png"
import breadCrumbImg from "../assets/sliderImgs/1.jpeg"

/* ---------------- Page header banner ---------------- */

function PageHeaderBanner({ crumbs, title }) {
    return (
        <section className="relative h-[200px] sm:h-[280px] md:h-[240px] w-full overflow-hidden bg-[#111]">
            <img
                src={breadCrumbImg}
                alt="school_banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />

            <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 sm:px-8 flex flex-col justify-end pb-10 sm:pb-14">
                <div className="flex items-center gap-2 text-white/85 text-[14.5px] font-medium mb-4">
                    {crumbs.map((c, i) => (
                        <React.Fragment key={c}>
                            {i > 0 && <FaChevronRight size={10} className="text-white/50" />}
                            <span className={i === crumbs.length - 1 ? "text-white" : "hover:text-white transition-colors cursor-pointer"}>
                                {c}
                            </span>
                        </React.Fragment>
                    ))}
                </div>
                <h1 className="font-logo font-semibold text-white text-[2.4rem] sm:text-[3.2rem] md:text-[3.6rem] leading-none">
                    {title}
                </h1>
            </div>
        </section>
    );
}

/* ---------------- Message from Principal ---------------- */

const DIRECTOR_SECTIONS = [
    {
        heading: "Welcome to SR. L.S. International Public School!",
        body:
            "As Founder and Director, I'm proud to welcome you. Established in 2014, SR. L.S. is committed to fostering a dynamic and innovative learning environment where every student experiences significant growth.",
    },
    {
        heading: "Empowering Future Leaders",
        body:
            "We believe in igniting a passion for learning, empowering students to discover their unique strengths, and preparing them for the challenges and opportunities of the future. We blend academic excellence with character development, guided by dedicated faculty in a supportive and stimulating setting. We encourage exploration, creativity, and the development of essential 21st-century skills. Explore our website to learn about our curriculum, facilities, and values. We believe SR.L.S. is where innovation and inspiration meet, and where dreams are nurtured for a brighter tomorrow. Contact us to learn more or schedule a visit.",
    },
];

export default function DirectorMessage() {
    return (
        <>
        <PageHeaderBanner crumbs={["Management", "Director Desk"]} title="Message from Director" />
            <section className="bg-white px-5 sm:px-8 py-16 md:py-20">
                <div className="max-w-[1300px] mx-auto">
                    {/* <h2 className="font-logo font-semibold text-[#1a1a1a] text-[2.1rem] sm:text-[2.6rem] mb-14">
                        Message from Principal
                    </h2> */}
                    <div className="grid md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr] gap-10 lg:gap-16">
                        {/* photo card — tilts on hover */}
                        <div className="[perspective:1200px]">
                            <div className="group cursor-pointer">
                                <div className="overflow-hidden rounded-sm transition-transform duration-500 ease-out group-hover:-rotate-2 group-hover:scale-[1.03] will-change-transform">
                                    <img
                                        src={DirectorImg}
                                        alt="directors_img"
                                        className="w-full h-[420px] sm:h-[480px] object-cover bg-[#890C25]"
                                    />
                                </div>
                                <div className="mt-5">
                                    <p className="font-logo font-semibold text-[#1a1a1a] text-[22px] sm:text-[24px]">
                                        Mr. Vijay Vidrohi
                                    </p>
                                    <p className="text-[#737477] text-[15px] mt-1">Director</p>
                                </div>
                            </div>
                        </div>

                        {/* text content */}
                        <div className="flex flex-col gap-9">
                            {DIRECTOR_SECTIONS.map((s) => (
                                <div key={s.heading}>
                                    <h3 className="font-logo font-semibold text-[#1a1a1a] text-[22px] sm:text-[25px] mb-3">
                                        {s.heading}
                                    </h3>
                                    <p className="text-[#737477] text-[15.5px] sm:text-[16px] text-justify leading-relaxed max-w-3xl">
                                        {s.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
