import React, { useState, useEffect, useRef, useCallback } from "react";
import SliderImg1 from "../../assets/sliderImgs/1.jpeg"
import SliderImg2 from "../../assets/sliderImgs/2.jpeg"
import SliderImg3 from "../../assets/sliderImgs/3.jpeg"
import SliderImg4 from "../../assets/sliderImgs/4.jpeg"
import SliderImg5 from "../../assets/sliderImgs/5.jpeg"
import {
    FaGraduationCap,
    FaArrowRight,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const SLIDES = [
    {
        eyebrow: "Welcome to SRLS International Public School",
        title: ["Where Learning", "Creates Leaders"],
        cta: "About School",
        path: "/about-us",
        img: SliderImg1,
    },
    {
        eyebrow: "CBSE Curriculum",
        title: ["Academic Excellence", "& Moral Values"],
        cta: "Vision & Mission",
        path: "/about-us#mission-vision",
        img: SliderImg2,
    },
    {
        eyebrow: "Beyond Academics",
        title: ["Sports, Arts &", "Co-Curricular Activities"],
        cta: "Campus Life",
        path: "/gallery",
        img: SliderImg3,
    },
    {
        eyebrow: "Modern Infrastructure",
        title: ["Smart Classrooms", "& Advanced Laboratories"],
        cta: "Our Facilities",
        path: "/facilities",
        img: SliderImg4,
    },
    {
        eyebrow: "Admissions Open",
        title: ["Your Child's Future", "Starts Here"],
        cta: "Admission Enquiry",
        path: "/admission",
        img: SliderImg5,
    },
];

/* ---------------- Hero Slider ---------------- */

export default function HeroSlider() {
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    const go = useCallback((i) => setIndex((i + SLIDES.length) % SLIDES.length), []);

    useEffect(() => {
        timerRef.current = setInterval(() => go(index + 1), 6000);
        return () => clearInterval(timerRef.current);
    }, [index, go]);

    return (
        <section className="relative h-[560px] sm:h-[620px] md:h-[680px] w-full overflow-hidden bg-[#111]">
            {SLIDES.map((slide, i) => (
                <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <img src={slide.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                </div>
            ))}

            <div className="relative z-20 h-full max-w-[1400px] mx-auto px-5 sm:px-8 flex items-center">
                <div className="max-w-xl">
                    <p className="flex items-center gap-2.5 text-white font-medium text-[14px] sm:text-[15px] mb-5">
                        <FaGraduationCap size={20} />
                        {SLIDES[index].eyebrow}
                    </p>
                    <h1 className="font-logo font-semibold text-white text-[2.4rem] leading-[1.12] sm:text-[3.1rem] md:text-[3.6rem] mb-8">
                        {SLIDES[index].title[0]}
                        <br />
                        {SLIDES[index].title[1]}
                    </h1>
                    <NavLink
                        to={`${SLIDES[index].path.toLowerCase().replace(/ /g, "-")}`}
                        className="inline-flex items-center gap-3 bg-[#890C25] text-white font-medium text-[14.5px] px-7 py-3.5 rounded-sm hover:bg-white hover:text-[#890C25] transition-colors duration-300 group"
                    >
                        {SLIDES[index].cta}
                        <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </NavLink>
                </div>
            </div>

            {/* arrows */}
            <button
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-[#890C25] backdrop-blur text-white items-center justify-center transition-colors duration-200"
            >
                <FaChevronLeft size={15} />
            </button>
            <button
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-[#890C25] backdrop-blur text-white items-center justify-center transition-colors duration-200"
            >
                <FaChevronRight size={15} />
            </button>

            {/* dots */}
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => go(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-7 bg-[#890C25]" : "w-2 bg-white/40 hover:bg-white/70"}`}
                    />
                ))}
            </div>
        </section>
    );
}

