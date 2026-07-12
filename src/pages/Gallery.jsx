import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
// Import Featured Gallery
import breadCrumbImg from "../assets/sliderImgs/breadCrumb.jpeg"
import Img_1 from "../assets/imgs/featured/1.jpeg"
import Img_2 from "../assets/imgs/featured/2.jpeg"
import Img_3 from "../assets/imgs/featured/3.jpeg"
import Img_4 from "../assets/imgs/featured/4.jpeg"
import Img_5 from "../assets/imgs/featured/5.jpeg"
import Img_6 from "../assets/imgs/featured/6.jpeg"
import Img_7 from "../assets/imgs/featured/7.jpeg"
import Img_8 from "../assets/imgs/featured/8.jpeg"
import Img_9 from "../assets/imgs/featured/9.jpeg"
import Img_10 from "../assets/imgs/featured/10.jpeg"
import Img_11 from "../assets/imgs/featured/11.jpeg"
import Img_12 from "../assets/imgs/featured/12.jpeg"
import Img_13 from "../assets/imgs/featured/13.jpeg"
import Img_14 from "../assets/imgs/featured/14.jpeg"
import Img_15 from "../assets/imgs/featured/15.jpeg"
import Img_16 from "../assets/imgs/featured/16.jpeg"
import Img_17 from "../assets/imgs/featured/17.jpeg"
import Img_18 from "../assets/imgs/featured/18.jpeg"
import Img_19 from "../assets/imgs/featured/19.jpeg"
import Img_20 from "../assets/imgs/featured/20.jpeg"
import Img_21 from "../assets/imgs/featured/21.jpeg"
import Img_22 from "../assets/imgs/featured/22.jpeg"
import {
    FaChevronRight,
    FaChevronLeft,
    FaTimes,
    FaSearch,
    FaImages,
    FaCalendarAlt,
    FaLayerGroup,
    FaVideo,
    FaPlay,
    FaExpand,
} from "react-icons/fa";
// Import Category Gallery
// Import Sports
import ImgSprt_1 from "../assets/imgs/sports/1.jpeg"
import ImgSprt_2 from "../assets/imgs/sports/2.jpeg"
import ImgSprt_3 from "../assets/imgs/sports/3.jpeg"
import ImgSprt_4 from "../assets/imgs/sports/4.jpeg"
import ImgSprt_5 from "../assets/imgs/sports/5.jpeg"
import ImgSprt_6 from "../assets/imgs/sports/6.jpeg"
import ImgSprt_7 from "../assets/imgs/sports/7.jpeg"

// Import Achievements
import ImgAchv_1 from "../assets/imgs/achievments/1.jpeg"
import ImgAchv_2 from "../assets/imgs/achievments/2.jpeg"

// Import Memorable Moments
import ImgMemo_1 from "../assets//imgs/memorable/1.jpeg"
import ImgMemo_2 from "../assets//imgs/memorable/2.jpeg"
import ImgMemo_3 from "../assets//imgs/memorable/3.jpeg"
import ImgMemo_4 from "../assets//imgs/memorable/4.jpeg"
import ImgMemo_5 from "../assets//imgs/memorable/5.jpeg"
import ImgMemo_6 from "../assets//imgs/memorable/6.jpeg"
import ImgMemo_7 from "../assets//imgs/memorable/7.jpeg"
import ImgMemo_8 from "../assets//imgs/memorable/8.jpeg"
import ImgMemo_9 from "../assets//imgs/memorable/9.jpeg"
import ImgMemo_10 from "../assets//imgs/memorable/10.jpeg"
import ImgMemo_11 from "../assets//imgs/memorable/11.jpeg"
import ImgMemo_12 from "../assets//imgs/memorable/12.jpeg"
import ImgMemo_13 from "../assets//imgs/memorable/13.jpeg"
import ImgMemo_14 from "../assets//imgs/memorable/13.jpeg"
import ImgMemo_15 from "../assets//imgs/memorable/13.jpeg"


// Import Event & Activities
import ImgEA_1 from "../assets/imgs/event_activity/1.jpeg"
import ImgEA_2 from "../assets/imgs/event_activity/2.jpeg"
import ImgEA_3 from "../assets/imgs/event_activity/3.jpeg"
import ImgEA_4 from "../assets/imgs/event_activity/4.jpeg"

// Import Cultural
import ImgCul_1 from "../assets/imgs/cultural/1.jpeg"
import ImgCul_2 from "../assets/imgs/cultural/2.jpeg"
import ImgCul_3 from "../assets/imgs/cultural/3.jpeg"
import ImgCul_4 from "../assets/imgs/cultural/4.jpeg"
import ImgCul_5 from "../assets/imgs/cultural/5.jpeg"
import ImgCul_6 from "../assets/imgs/cultural/6.jpeg"
import ImgCul_7 from "../assets/imgs/cultural/7.jpeg"
import ImgCul_8 from "../assets/imgs/cultural/8.jpeg"
import ImgCul_9 from "../assets/imgs/cultural/9.jpeg"
import ImgCul_10 from "../assets/imgs/cultural/10.jpeg"
import ImgCul_11 from "../assets/imgs/cultural/11.jpeg"

// Import Campus Life
import ImgCamL_1 from "../assets/imgs/campus_life/1.jpeg"
import ImgCamL_2 from "../assets/imgs/campus_life/2.jpeg"
import ImgCamL_3 from "../assets/imgs/campus_life/3.jpeg"
import ImgCamL_4 from "../assets/imgs/campus_life/4.jpeg"
import ImgCamL_5 from "../assets/imgs/campus_life/5.jpeg"
import ImgCamL_6 from "../assets/imgs/campus_life/6.jpeg"
import ImgCamL_7 from "../assets/imgs/campus_life/7.jpeg"
import ImgCamL_8 from "../assets/imgs/campus_life/8.jpeg"
import ImgCamL_9 from "../assets/imgs/campus_life/9.jpeg"
import ImgCamL_10 from "../assets/imgs/campus_life/10.jpeg"
import ImgCamL_11 from "../assets/imgs/campus_life/11.jpeg"
import ImgCamL_12 from "../assets/imgs/campus_life/12.jpeg"
import ImgCamL_13 from "../assets/imgs/campus_life/13.jpeg"
import ImgCamL_14 from "../assets/imgs/campus_life/14.jpeg"
import ImgCamL_15 from "../assets/imgs/campus_life/15.jpeg"
import ImgCamL_16 from "../assets/imgs/campus_life/16.jpeg"
import ImgCamL_17 from "../assets/imgs/campus_life/17.jpeg"
import ImgCamL_18 from "../assets/imgs/campus_life/18.jpeg"
import ImgCamL_19 from "../assets/imgs/campus_life/19.jpeg"
import ImgCamL_20 from "../assets/imgs/campus_life/20.jpeg"
import ImgCamL_21 from "../assets/imgs/campus_life/21.jpeg"
import ImgCamL_22 from "../assets/imgs/campus_life/22.jpeg"
import ImgCamL_23 from "../assets/imgs/campus_life/23.jpeg"
import ImgCamL_24 from "../assets/imgs/campus_life/24.jpeg"
import ImgCamL_25 from "../assets/imgs/campus_life/25.jpeg"
import ImgCamL_26 from "../assets/imgs/campus_life/26.jpeg"
import ImgCamL_27 from "../assets/imgs/campus_life/27.jpeg"
import ImgCamL_28 from "../assets/imgs/campus_life/28.jpeg"
import ImgCamL_29 from "../assets/imgs/campus_life/29.jpeg"
import ImgCamL_30 from "../assets/imgs/campus_life/30.jpeg"
import ImgCamL_31 from "../assets/imgs/campus_life/31.jpeg"
/* ---------------- Data ---------------- */

// FEATURED can hold as many photos as you like - only the first FEATURED_VISIBLE_COUNT
// render in the bento grid below. The rest become reachable by opening the lightbox
// and navigating next/previous from any of the visible five.
export const FEATURED = [
    { src: Img_1, caption: "Cultural Event" },
    { src: Img_2, caption: "Cultural Event" },
    { src: Img_3, caption: "Cultural Event" },
    { src: Img_4, caption: "Cultural Event" },
    { src: Img_5, caption: "Cultural Event" },
    { src: Img_6, caption: "Cultural Event" },
    { src: Img_6, caption: "Cultural Event" },
    { src: Img_7, caption: "Cultural Event" },
    { src: Img_8, caption: "Cultural Event" },
    { src: Img_9, caption: "Cultural Event" },
    { src: Img_10, caption: "Cultural Event" },
    { src: Img_11, caption: "Cultural Event" },
    { src: Img_12, caption: "Cultural Event" },
    { src: Img_13, caption: "Cultural Event" },
    { src: Img_14, caption: "Cultural Event" },
    { src: Img_15, caption: "Cultural Event" },
    { src: Img_16, caption: "Cultural Event" },
    { src: Img_17, caption: "Cultural Event" },
    { src: Img_18, caption: "Cultural Event" },
    { src: Img_19, caption: "Cultural Event" },
    { src: Img_20, caption: "Cultural Event" },
    { src: Img_21, caption: "Cultural Event" },
    { src: Img_22, caption: "Cultural Event" },
];

export const FEATURED_VISIBLE_COUNT = 5;

const CATEGORIES = ["All", "Events & Activities", "Sports", "Cultural", "Campus Life", "Achievements", "Memorable Moments"];

// CATEGORY_IMAGES can hold as many photos per category as you like - the grid below
// only renders the first CATEGORY_VISIBLE_COUNT results for whatever tab/search is
// active. The remaining matches for that same filter become reachable inside the
// lightbox via next/previous.
const CATEGORY_IMAGES = [
    { src: ImgSprt_1, caption: "Sports", category: "Sports" },
    { src: ImgSprt_2, caption: "Sports", category: "Sports" },
    { src: ImgSprt_3, caption: "Sports", category: "Sports" },
    { src: ImgSprt_4, caption: "Sports", category: "Sports" },
    { src: ImgSprt_5, caption: "Sports", category: "Sports" },
    { src: ImgSprt_6, caption: "Sports", category: "Sports" },
    { src: ImgSprt_7, caption: "Sports", category: "Sports" },
    { src: ImgAchv_1, caption: "Achievements", category: "Achievements" },
    { src: ImgAchv_2, caption: "Achievements", category: "Achievements" },
    { src: ImgMemo_1, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_2, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_3, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_4, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_5, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_6, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_7, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_8, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_9, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_10, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_11, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_12, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_13, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_14, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgMemo_15, caption: "Memorable Moments", category: "Memorable Moments" },
    { src: ImgEA_1, caption: "Events & Activities", category: "Events & Activities" },
    { src: ImgEA_2, caption: "Events & Activities", category: "Events & Activities" },
    { src: ImgEA_3, caption: "Events & Activities", category: "Events & Activities" },
    { src: ImgEA_4, caption: "Events & Activities", category: "Events & Activities" },
    { src: ImgCul_1, caption: "Cultural", category: "Cultural" },
    { src: ImgCul_2, caption: "Cultural", category: "Cultural" },
    { src: ImgCul_3, caption: "Cultural", category: "Cultural" },
    { src: ImgCul_4, caption: "Cultural", category: "Cultural" },
    { src: ImgCul_5, caption: "Cultural", category: "Cultural" },
    { src: ImgCul_6, caption: "Cultural", category: "Cultural" },
    { src: ImgCul_7, caption: "Cultural", category: "Cultural" },
    { src: ImgCul_8, caption: "Cultural", category: "Cultural" },
    { src: ImgCul_9, caption: "Cultural", category: "Cultural" },
    { src: ImgCul_10, caption: "Cultural", category: "Cultural" },
    { src: ImgCul_11, caption: "Cultural", category: "Cultural" },
    { src: ImgCamL_1, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_2, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_3, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_4, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_5, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_6, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_7, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_8, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_9, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_10, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_11, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_12, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_13, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_14, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_15, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_16, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_17, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_18, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_19, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_20, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_21, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_22, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_23, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_24, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_25, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_26, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_27, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_28, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_29, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_30, caption: "Campus Life", category: "Campus Life" },
    { src: ImgCamL_31, caption: "Campus Life", category: "Campus Life" },
];

const CATEGORY_VISIBLE_COUNT = 12;

const VIDEOS = [
    { id: "aqz-KE-bpKQ", title: "Campus Highlights Reel" },
    { id: "YE7VzlLtp-4", title: "Annual Day 2025 Recap" },
    { id: "eRsGyueVLvQ", title: "Founders' Day Celebration" },
    { id: "aqz-KE-bpKQ", title: "Convocation Ceremony Moments" },
];

const STATS = [
    { Icon: FaImages, value: "150+", label: "Photos Archived" },
    { Icon: FaCalendarAlt, value: "5", label: "Events Covered" },
    { Icon: FaLayerGroup, value: CATEGORIES.length - 1, label: "Categories" },
    { Icon: FaVideo, value: VIDEOS.length, label: "Video Albums" },
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

export function AnimatedHeading({ eyebrow, title, center }) {
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
        </div>
    );
}

/* ---------------- Shared Lightbox ---------------- */

export function Lightbox({ images, index, onClose, onPrev, onNext }) {
    const isOpen = index !== null;

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose, onPrev, onNext]);

    if (!isOpen) return null;
    const current = images[index];

    return (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center px-4" onClick={onClose}>
            <button onClick={onClose} aria-label="Close" className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
                <FaTimes size={26} />
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous image"
                className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#890C25] text-white flex items-center justify-center transition-colors duration-200"
            >
                <FaChevronLeft size={18} />
            </button>
            <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
                <img src={current.src} alt={current.caption} className="w-full max-h-[75vh] object-contain rounded-lg" />
                <p className="text-white/70 text-center mt-4 text-[14px]">
                    {current.caption} — {index + 1} / {images.length}
                </p>
            </div>
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next image"
                className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#890C25] text-white flex items-center justify-center transition-colors duration-200"
            >
                <FaChevronRight size={18} />
            </button>
        </div>
    );
}

/* ---------------- Hook: lightbox controller for a given image list ---------------- */

function useLightbox(images) {
    const [index, setIndex] = useState(null);
    const open = useCallback((i) => setIndex(i), []);
    const close = useCallback(() => setIndex(null), []);
    const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
    return { index, open, close, prev, next };
}

/* ---------------- Page header banner ---------------- */

function GalleryHeroBanner() {
    return (
        <section className="relative h-[320px] sm:h-[400px] w-full overflow-hidden bg-[#111]">
            <img
                src={breadCrumbImg}
                alt="school_banner"
                className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
            <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 sm:px-8 flex flex-col justify-end pb-9 sm:pb-12">
                <div className="flex items-center gap-2 text-white/85 text-[14.5px] font-medium mb-4">
                    <span className="hover:text-white transition-colors cursor-pointer">Home</span>
                    <FaChevronRight size={10} className="text-white/50" />
                    <span className="text-white">Gallery</span>
                </div>
                <h1 className="font-logo font-semibold text-white text-[2.4rem] sm:text-[3.2rem] leading-none mb-3">
                    Campus Gallery
                </h1>
                <p className="text-white/75 text-[15px] sm:text-[16px] max-w-lg">
                    Glimps of campus life, events, and milestones captured over the years.
                </p>
            </div>
        </section>
    );
}

/* ---------------- Stats strip ---------------- */

function StatsStrip() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1300px] mx-auto px-5 sm:px-8 -mt-14 sm:-mt-16 relative z-20">
            {STATS.map(({ Icon, value, label }) => (
                <div
                    key={label}
                    className="group bg-white rounded-lg shadow-xl shadow-black/10 border border-black/5 px-6 py-6 flex items-center gap-4 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
                >
                    <span className="w-11 h-11 rounded-full bg-[#890C25]/10 flex items-center justify-center text-[#890C25] shrink-0 group-hover:bg-[#890C25] group-hover:text-white transition-colors duration-300">
                        <Icon size={16} />
                    </span>
                    <div>
                        <p className="font-logo font-semibold text-[#1a1a1a] text-[19px] leading-none">{value}</p>
                        <p className="text-[#737477] text-[12px] mt-1">{label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ---------------- Featured gallery: 1 large + 4 supporting ---------------- */

export default function Gallery() {
    // Lightbox is handed the FULL data set, so next/previous can reach every photo
    // the grid below only ever renders the first FEATURED_VISIBLE_COUNT of them.
    const lb = useLightbox(FEATURED);
    const visible = FEATURED.slice(0, FEATURED_VISIBLE_COUNT);
    const hiddenCount = FEATURED.length - visible.length;

    return (
        <>
            <GalleryHeroBanner />
            <StatsStrip />
            <section className="bg-white px-5 sm:px-8 pt-20 sm:pt-18 pb-20 md:pb-28">
                <div className="max-w-[1300px] mx-auto">
                    <AnimatedHeading eyebrow="Gallery" title="Moments worth a second look" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 auto-rows-[160px] sm:auto-rows-[190px] md:auto-rows-[170px]">
                        {visible.map((img, i) => {
                            const isLast = i === visible.length - 1;
                            return (
                                <button
                                    key={i}
                                    onClick={() => lb.open(i)}
                                    className={`relative rounded-xl overflow-hidden group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-[#890C25]/0 group-hover:bg-[#890C25]/50 transition-colors duration-300 flex items-end p-4">
                                        <span className="flex items-center gap-2 text-white text-[12.5px] sm:text-[13.5px] font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            <FaExpand size={11} /> {img.caption}
                                        </span>
                                    </div>
                                    {isLast && hiddenCount > 0 && (
                                        <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                                            <span className="text-white font-logo font-semibold text-[18px] sm:text-[20px]">
                                                +{hiddenCount} more
                                            </span>
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <Lightbox images={FEATURED} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
            </section>
            <CategoryGallery />
            <VideoCarousel />
        </>
    );
}

/* ---------------- Tab-based, searchable category gallery ---------------- */

function CategoryGallery() {
    const [activeTab, setActiveTab] = useState("All");
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        return CATEGORY_IMAGES.filter((img) => {
            const matchesTab = activeTab === "All" || img.category === activeTab;
            const matchesQuery = img.caption.toLowerCase().includes(query.toLowerCase());
            return matchesTab && matchesQuery;
        });
    }, [activeTab, query]);

    // Lightbox navigates the FULL filtered list for the active tab/search — the grid
    // below only ever renders the first CATEGORY_VISIBLE_COUNT of that same list.
    const visible = filtered.slice(0, CATEGORY_VISIBLE_COUNT);
    const hiddenCount = filtered.length - visible.length;
    const lb = useLightbox(filtered);

    return (
        <section className="bg-[#F7F4EC] px-5 sm:px-8 py-20 md:py-18">
            <div className="max-w-[1300px] mx-auto">
                <AnimatedHeading eyebrow="Browse By Event" title="Explore the full archive" center />

                {/* tabs + search */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-5 py-2.5 rounded-full text-[13.5px] font-medium transition-all duration-300 ${activeTab === cat
                                    ? "bg-[#890C25] text-white shadow-md shadow-[#890C25]/20"
                                    : "bg-white text-[#737477] hover:bg-[#890C25]/10 hover:text-[#890C25]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-72 shrink-0">
                        <FaSearch size={13} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737477]/60" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search photos..."
                            className="w-full rounded-full border border-black/10 bg-white pl-10 pr-4 py-2.5 text-[13.5px] text-[#1a1a1a] placeholder:text-[#737477]/60 focus:outline-none focus:ring-2 focus:ring-[#890C25]/30 transition-all duration-200"
                        />
                    </div>
                </div>

                {/* grid */}
                {filtered.length === 0 ? (
                    <p className="text-center text-[#737477] py-14">No photos match your search.</p>
                ) : (
                    <div key={activeTab + query} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                        {visible.map((img, i) => {
                            const isLast = i === visible.length - 1;
                            return (
                                <button
                                    key={img.src + img.caption}
                                    onClick={() => lb.open(i)}
                                    style={{ animationDelay: `${i * 60}ms` }}
                                    className="animate-fadein relative rounded-xl overflow-hidden h-[190px] sm:h-[220px] group"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <span className="inline-block bg-[#890C25] text-white text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full mb-1.5">
                                            {img.category}
                                        </span>
                                        <p className="text-white text-[12.5px] font-medium leading-snug">{img.caption}</p>
                                    </div>
                                    {isLast && hiddenCount > 0 && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                            <span className="text-white font-logo font-semibold text-[17px] sm:text-[18px]">
                                                +{hiddenCount} more
                                            </span>
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <Lightbox images={filtered} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
        </section>
    );
}

/* ---------------- YouTube video carousel ---------------- */

function VideoCarousel() {
    const trackRef = useRef(null);
    const [activeVideo, setActiveVideo] = useState(null);

    const scrollByCard = (dir) => {
        const card = trackRef.current.querySelector("div");
        const w = card ? card.offsetWidth + 20 : 340;
        trackRef.current.scrollBy({ left: dir * w, behavior: "smooth" });
    };

    return (
        <section className="bg-white px-5 sm:px-8 py-20 md:py-18">
            <div className="max-w-[1300px] mx-auto">
                <div className="flex items-end justify-between mb-2">
                    <AnimatedHeading eyebrow="Watch" title="Video Gallery" />
                    <div className="hidden sm:flex gap-2 mb-14">
                        <button
                            onClick={() => scrollByCard(-1)}
                            aria-label="Scroll left"
                            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#890C25] hover:text-white hover:border-[#890C25] transition-colors duration-200"
                        >
                            <FaChevronLeft size={15} />
                        </button>
                        <button
                            onClick={() => scrollByCard(1)}
                            aria-label="Scroll right"
                            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#890C25] hover:text-white hover:border-[#890C25] transition-colors duration-200"
                        >
                            <FaChevronRight size={15} />
                        </button>
                    </div>
                </div>

                <div ref={trackRef} className="flex gap-5 overflow-x-auto pb-4 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide scrollbar-none">
                    {VIDEOS.map((v, i) => (
                        <div key={i} className="snap-start shrink-0 w-[280px] sm:w-[360px]">
                            <div className="relative rounded-xl overflow-hidden aspect-video bg-black group">
                                {activeVideo === i ? (
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                                        title={v.title}
                                        allow="accelerate-compute; autoplay; encrypted-media"
                                        allowFullScreen
                                    />
                                ) : (
                                    <button onClick={() => setActiveVideo(i)} className="absolute inset-0 w-full h-full" aria-label={`Play ${v.title}`}>
                                        <img
                                            src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                                            alt={v.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300" />
                                        <span className="absolute inset-0 flex items-center justify-center">
                                            <span className="w-14 h-14 rounded-full bg-[#890C25] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <FaPlay size={16} className="ml-0.5" />
                                            </span>
                                        </span>
                                    </button>
                                )}
                            </div>
                            <p className="font-logo font-semibold text-[#1a1a1a] text-[15.5px] mt-3">{v.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}