import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PrincipalImg from "../assets/management/principal.jpeg"
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

const PRINCIPAL_SECTIONS = [
    {
        heading: "Welcome to SR. L.S. International Public School!",
        body:
            "We're delighted you're exploring our vibrant learning community. At SR. L.S., We're passionate about providing a nurturing and stimulating environment where every student thrives. We believe in fostering a love of learning and empowering students to reach their full potential.",
    },
    {
        heading: "Nurturing Dreams, Shaping Futures",
        body:
            "Our dedicated faculty and staff are committed to a holistic education, preparing students for success in the 21st century. We encourage exploration, discovery, and the development of essential skills. We value collaboration with parents and the community to support our students' growth. Explore our website to discover the opportunities SR.L.S. offers. We're confident it's a place where dreams are nurtured and futures are built.",
    },
];

export default function PrincipalMessage() {
    return (
        <>
        <PageHeaderBanner crumbs={["Management", "Principal Desk"]} title="Message from Principal" />
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
                                        src={PrincipalImg}
                                        alt="Principals_image"
                                        className="w-full h-[420px] sm:h-[480px] object-cover bg-[#890C25]"
                                    />
                                </div>
                                <div className="mt-5">
                                    <p className="font-logo font-semibold text-[#1a1a1a] text-[22px] sm:text-[24px]">
                                        Mrs. Gunjan Yadav
                                    </p>
                                    <p className="text-[#737477] text-[15px] mt-1">Principal</p>
                                </div>
                            </div>
                        </div>

                        {/* text content */}
                        <div className="flex flex-col gap-9">
                            {PRINCIPAL_SECTIONS.map((s) => (
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
