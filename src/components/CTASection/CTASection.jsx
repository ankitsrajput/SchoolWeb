import { FaArrowRight } from "react-icons/fa";
import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
/* ---------------- CTA ---------------- */

function CTASection() {
    const [ref, visible] = useReveal();
    const now = new Date();
    const year =
        now.getMonth() >= 3 // April = 3 (0-based)
            ? now.getFullYear()
            : now.getFullYear() - 1;

    const session = `${year}-${String((year + 1) % 100).padStart(2, "0")}`;
    return (
        <section ref={ref} className="relative bg-[#890C25] px-5 sm:px-8 py-20 md:py-24 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
            <div
                className={`relative max-w-2xl mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <p className="text-white/70 font-semibold text-[13.5px] tracking-wide mb-4">Join Us</p>
                <h2 className="font-logo font-semibold text-white text-[2rem] sm:text-[2.6rem] leading-tight mb-6">
                    Ready to be part of our story?
                </h2>
                <p className="text-white/75 text-[15px] mb-9 max-w-lg mx-auto">
                    Admissions for the {session} session are open across every program.
                </p>
                <NavLink
                    to="/admission"
                    className="inline-flex items-center gap-2 bg-white text-[#890C25] font-semibold text-[14.5px] px-8 py-3.5 rounded-md hover:bg-[#F7F4EC] transition-colors duration-300"
                >
                    Explore Admissions <FaArrowRight size={13} />
                </NavLink>
            </div>
        </section>
    );
}
export default CTASection;