import React, { useRef, useState, useEffect, useCallback } from "react";
import HeroSlider from "../components/slider/Slider";
import SchoolLogo from "../assets/logo/school_logo.png"
import { FEATURED, FEATURED_VISIBLE_COUNT, AnimatedHeading, Lightbox } from "./Gallery";
import Testimonials from "../components/testimonial/Testimonials";
import {
  FaGraduationCap,
  FaArrowRight,
  FaHandsHelping,
  FaUniversity,
  FaExpand,
  FaChalkboardTeacher,
  FaFlask,
  FaLaptop,
  FaBookOpen,
  FaBuilding,
  FaFutbol,
  FaTableTennis,
  FaBus,
  FaBullhorn
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MissionVisionSection } from "./About";
import AboutImg_1 from "../assets/imgs/home/1.jpeg"
import AboutImg_2 from "../assets/imgs/home/2.jpeg"
import ClassImg from "../assets/imgs/facilities/class.jpeg"
import CompLab from "../assets/imgs/facilities/computer_lab.jpeg"
import FacultyImg from "../assets/imgs/facilities/faculty.jpeg"
import FballGImg from "../assets/imgs/facilities/football_ground.jpeg"
import BadMinImg from "../assets/imgs/facilities/badminton_court.jfif"
import LibraryImg from "../assets/imgs/facilities/library.jpeg"
import HallImg from "../assets/imgs/facilities/school_hall.jpg"
import TransportImg from "../assets/imgs/facilities/transport.jpeg"


/* ---------------- Facility panel ---------------- */

const FACILITIES = [
  {
    Icon: FaChalkboardTeacher,
    title: "Qualified Faculty",
    caption: "Experienced teachers who notice every student.",
    img: FacultyImg,
  },
  {
    Icon: FaFlask,
    title: "Science & Computer Labs",
    caption: "Physics, Chemistry, Biology & Computer labs, fully equipped.",
    img: CompLab,
  },
  {
    Icon: FaLaptop,
    title: "Smart Classrooms",
    caption: "100% smart-enabled, interactive digital learning.",
    img: ClassImg,
  },
  {
    Icon: FaBookOpen,
    title: "Well-Stocked Library",
    caption: "Wide reading & sitting area for every grade level.",
    img: LibraryImg,
  },
  {
    Icon: FaBuilding,
    title: "Multipurpose Hall",
    caption: "Indoor space for assemblies, events, and activities.",
    img: HallImg,
  },
  {
    Icon: FaFutbol,
    title: "Football & Cricket Grounds",
    caption: "Full-size grounds for matches and sports meets.",
    img: FballGImg,
  },
  {
    Icon: FaTableTennis,
    title: "Badminton & Volleyball Courts",
    caption: "Dedicated courts for daily practice and play.",
    img: BadMinImg,
  },
  {
    Icon: FaBus,
    title: "GPS-Enabled Transportation",
    caption: "Live-tracked buses, safe pickup and drop every day.",
    img: TransportImg,
  },
];


function FacilityPanel({ Icon, title, caption, img }) {
  return (
    <div className="group relative rounded-xl overflow-hidden h-64 sm:h-72 cursor-pointer">
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* overlay — darker at rest, lightens on hover so the image reads more clearly */}
      <div className="absolute inset-0 bg-[#890C25]/70 group-hover:bg-[#890C25]/25 transition-colors duration-400" />

      <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6">
        <span className="w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white mb-3 group-hover:bg-white group-hover:text-[#890C25] transition-colors duration-300">
          <Icon size={17} />
        </span>
        <h3 className="font-logo font-semibold text-white text-[18px] sm:text-[19px] leading-snug mb-1.5">
          {title}
        </h3>
        <p className="text-white/85 text-[12.5px] leading-relaxed">{caption}</p>
      </div>
    </div>
  );
}

/* ---------------- Facilities section ---------------- */

function FacilitiesSection() {
  return (
    <section className="bg-white px-5 sm:px-8 py-20 md:py-18">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-[#890C25] font-semibold text-[13.5px] tracking-wide mb-3">Campus Facilities</p>
          <h2 className="font-logo font-semibold text-[#1a1a1a] text-[2rem] sm:text-[2.5rem] leading-tight">
            Everything a student needs, on campus
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FACILITIES.map((f) => (
            <FacilityPanel key={f.title} {...f} />
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-14">
          <NavLink
            to="/facilities"
            className="inline-flex items-center gap-3 bg-[#890C25] text-white font-medium text-[14.5px] px-8 py-3.5 rounded-sm hover:bg-[#6e0a1e] transition-colors duration-300 group"
          >
            Explore More Facilities
            <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Scroll-reveal hook (no external library needed) ---------------- */

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

const MESSAGE = "Admission Closing Soon";

function MarqueeItem() {
  return (
    <span className="flex items-center gap-3 shrink-0 px-8">
      <FaBullhorn size={16} className="text-white/80 shrink-0" />
      <span className="text-white font-medium text-[12px] sm:text-[12px] tracking-wide uppercase whitespace-nowrap">
        {MESSAGE}
      </span>
    </span>
  );
}

function Marquee() {
  // render the item list twice back-to-back so the loop can reset seamlessly
  const items = Array.from({ length: 8 });

  return (
    <div className="w-full bg-[#890C25] overflow-hidden py-1.5">
      <div className="flex w-max marquee-track">
        <div className="flex">
          {items.map((_, i) => <MarqueeItem key={`a-${i}`} />)}
        </div>
        <div className="flex" aria-hidden="true">
          {items.map((_, i) => <MarqueeItem key={`b-${i}`} />)}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Logo badge — replaces the rotating-text seal ---------------- */

function LogoBadge() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#fff] border-4 border-white shadow-xl flex flex-col items-center justify-center gap-1.5">
        <img src={SchoolLogo} alt="School_Logo" className="w-34 h-34" />
      </div>
    </div>
  );
}

/* ---------------- Info card ---------------- */

function InfoCard({ Icon, title }) {
  return (
    <div
      className="group flex items-center gap-4 bg-[#F5F5F5] border-b-2 border-[#890C25] px-6 py-6 hover:bg-[#890C25]/5 transition-colors duration-200"
    >
      <Icon size={30} className="text-[#890C25] shrink-0" />
      <span className="font-logo font-semibold text-[#890C25] text-[18px] sm:text-[19px] leading-snug">
        {title}
      </span>
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

/* ---------------- Featured gallery: 1 large + 4 supporting ---------------- */

function Gallery() {
  // Lightbox is handed the FULL data set, so next/previous can reach every photo
  // the grid below only ever renders the first FEATURED_VISIBLE_COUNT of them.
  const lb = useLightbox(FEATURED);
  const visible = FEATURED.slice(0, FEATURED_VISIBLE_COUNT);
  const hiddenCount = FEATURED.length - visible.length;

  return (
    <>
      <section className="bg-white px-5 sm:px-8 pt-20 sm:pt-24 pb-20 md:pb-18">
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
          <div className="mt-8">
            <NavLink
              to="/gallery"
              className="inline-flex items-center gap-3 bg-[#890C25] text-white font-medium text-[14.5px] px-7 py-3.5 rounded-sm hover:bg-[#6e0a1e] transition-colors duration-300 group"
            >
              Explore Full Gallery <FaArrowRight size={13} />
            </NavLink>
          </div>
        </div>

        <Lightbox images={FEATURED} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
      </section>
    </>
  );
}

/* ---------------- About section ---------------- */

const Home = () => {
  const [ref, visible] = useReveal();
  return (
    <>
      <Marquee />
      <HeroSlider />
      <section className="bg-white px-5 sm:px-8 py-16 md:py-14 overflow-hidden">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* image cluster */}
          <div className="relative grid grid-cols-2 gap-5 sm:gap-6">
            <img
              src={AboutImg_2}
              alt="University clock tower"
              className="w-full h-[300px] sm:h-[420px] md:h-[480px] object-cover rounded-sm"
            />
            <img
              src={AboutImg_1}
              alt="Graduating students"
              className="w-full h-[260px] sm:h-[380px] md:h-[430px] object-cover rounded-sm mt-6 sm:mt-8"
            />
            <LogoBadge />
          </div>

          {/* content */}
          <div>
            <p className="flex items-center gap-2.5 text-[#890C25] font-semibold text-[14px] sm:text-[15px] mb-5">
              <FaGraduationCap size={20} />
              knowledge meets innovation
            </p>

            <h2 className="font-logo font-semibold text-[#1a1a1a] text-[2.4rem] sm:text-[3rem] leading-tight mb-6">
              About School
            </h2>

            <p className="text-[#737477] text-[15.5px] sm:text-[16.5px] leading-relaxed mb-5">
              SR. L.S. International Public School Kisai Jagdishpur, Kannauj, is passionately committed to pursue excellence in every conceivable field. For us every child is a leader of tomorrow and we leave no stone unturned to ensure that every LS's is given an opportunity to excel.
            </p>
            <p className="text-[#737477] text-[15.5px] sm:text-[16.5px] leading-relaxed mb-10">
              The Four Segments of the Shield represent different aspects of learning: The GLOBE signifies the global outlook necessary for the leaders of tomorrow. The BOOK stands for knowledge. The TORCH embodies hope and integrity that ignite the minds of young people and light their path towards brilliance and accomplishment. The VEENA belongs to Sarasvati, the Goddess of learning and speech. It is the symbol of creativity, culture and refinement.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
              <InfoCard Icon={FaUniversity} title={<>Established In 2014</>} />
              <InfoCard Icon={FaHandsHelping} title={<>Empowering Minds</>} />
            </div>

            <NavLink
              to="/about-us"
              className="inline-flex items-center gap-3 bg-[#890C25] text-white font-medium text-[14.5px] px-7 py-3.5 rounded-sm hover:bg-[#6e0a1e] transition-colors duration-300 group"
            >
              Explore About Us
              <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </NavLink>
          </div>
        </div>
      </section>

      <MissionVisionSection />
      <Gallery />
      <FacilitiesSection />
      <Testimonials />
      {/* ---------------- CTA section ---------------- */}
      <section ref={ref} className="relative bg-[#890C25] px-5 sm:px-8 py-20 md:py-24 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />

        <div
          className={`relative max-w-2xl mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <p className="text-white/70 font-semibold text-[13.5px] tracking-wide mb-4">Still Have Questions?</p>
          <h2 className="font-logo font-semibold text-white text-[2rem] sm:text-[2.6rem] leading-tight mb-6">
            Our admissions team is one call away.
          </h2>
          <p className="text-white/75 text-[15px] mb-9 max-w-lg mx-auto">
            Whether it's about programs, fees, or a campus visit - talk to someone who can actually help,
            today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:9935920525" className="bg-white text-[#890C25] font-semibold text-[14.5px] px-7 py-3.5 rounded-md hover:bg-[#F7F4EC] transition-colors duration-300">
              Call +91-9935920525
            </a>
            <NavLink to="/contact-us" className="border border-white/40 text-white font-semibold text-[14.5px] px-7 py-3.5 rounded-md hover:bg-white/10 transition-colors duration-300">
              Schedule a Visit
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;