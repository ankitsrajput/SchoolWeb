import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import DummyImg  from "../../assets/management/feedback_user.png"

const TESTIMONIALS = [
  {
    name: "Meera Kapoor",
    role: "Parent, Class VIII",
    img: DummyImg,
    quote: "Our daughter used to dread maths. Two years here and she's tutoring her friends now. It's the teachers, not luck.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    role: "Alumnus, Batch of 2022",
    img: DummyImg,
    quote: "I still use the note-taking method my Class XI chemistry teacher taught us. That's not something you get everywhere.",
    rating: 5,
  },
  {
    name: "Ayesha Siddiqui",
    role: "Parent, Class III",
    img: DummyImg,
    quote: "The primary wing teachers actually call you back. Small thing, but it tells you they're paying attention.",
    rating: 5,
  },
  {
    name: "Vikram Nair",
    role: "Parent, Class XI",
    img: DummyImg,
    quote: "The stream counselling before Class XI was more useful than anything a paid consultant offered us.",
    rating: 4,
  },
  {
    name: "Priya Raghavan",
    role: "Alumna, Batch of 2021",
    img: DummyImg,
    quote: "Debate club here is the reason I can speak in front of a room without shaking. That stays with you.",
    rating: 5,
  },
  {
    name: "Sanjay Bhatt",
    role: "Parent, Class VI",
    img: DummyImg,
    quote: "Transparent fee structure, no surprise charges. In this city, that alone is worth mentioning.",
    rating: 4,
  },
];

/* ---------------- Helpers ---------------- */

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function useCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setCardsPerView(1);
      else if (w < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return cardsPerView;
}

/* ---------------- Testimonial card ---------------- */

function TestimonialCard({ t }) {
  return (
    <div className="relative bg-white rounded-2xl p-7 sm:p-8 h-full flex flex-col border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400">
      <FaQuoteLeft className="text-[#890C25]/15 absolute top-6 right-7" size={34} />

      <div className="flex items-center gap-0.5 mb-5 relative">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} size={13} className={i < t.rating ? "text-[#890C25]" : "text-black/10"} />
        ))}
      </div>

      <p className="text-[#737477] text-[14.5px] leading-relaxed flex-1 relative mb-7">"{t.quote}"</p>

      <div className="flex items-center gap-3.5 pt-5 border-t border-black/5 relative">
        <img
          src={t.img}
          alt={t.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-[#890C25]/15 shrink-0"
        />
        <div>
          <p className="font-logo font-semibold text-[#1a1a1a] text-[15px] leading-none mb-1">{t.name}</p>
          <p className="text-[#890C25] text-[12px] font-medium">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Carousel ---------------- */

function TestimonialCarousel() {
  const cardsPerView = useCardsPerView();
  const slides = useMemo(() => chunk(TESTIMONIALS, cardsPerView), [cardsPerView]);
  const slideCount = slides.length;

  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // --- drag / swipe state ---
  const outerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragState = useRef({ startX: 0, width: 0, active: false });

  // keep page within range whenever the number of slides changes (e.g. on resize)
  useEffect(() => {
    setPage((p) => Math.min(p, slideCount - 1));
  }, [slideCount]);

  const goTo = useCallback((i) => setPage((i + slideCount) % slideCount), [slideCount]);

  useEffect(() => {
    if (isPaused || isDragging || slideCount <= 1) return;
    timerRef.current = setInterval(() => setPage((p) => (p + 1) % slideCount), 5000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, isDragging, slideCount]);

  const handlePointerDown = (e) => {
    if (slideCount <= 1) return;
    const width = outerRef.current.getBoundingClientRect().width;
    dragState.current = { startX: e.clientX, width, active: true };
    setIsDragging(true);
    outerRef.current.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragState.current.active) return;
    const dx = e.clientX - dragState.current.startX;
    setDragOffset(dx);
  };

  const endDrag = () => {
    if (!dragState.current.active) return;
    const { width } = dragState.current;
    const threshold = width * 0.15;
    if (dragOffset < -threshold) goTo(page + 1);
    else if (dragOffset > threshold) goTo(page - 1);
    dragState.current.active = false;
    setDragOffset(0);
    setIsDragging(false);
  };

  const trackStyle = {
    transform: `translateX(calc(-${page * 100}% + ${dragOffset}px))`,
    transition: isDragging ? "none" : "transform 0.7s ease-out",
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative"
    >
      <div
        ref={outerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        className={`overflow-hidden select-none touch-pan-y ${slideCount > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : ""}`}
      >
        <div className="flex" style={trackStyle}>
          {slides.map((group, si) => (
            <div key={si} className="w-full shrink-0 grid gap-6" style={{ gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))` }}>
              {group.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* bottom circle buttons — no arrows, dots only */}
      {slideCount > 1 && (
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial group ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === page ? "w-8 h-2.5 bg-[#890C25]" : "w-2.5 h-2.5 bg-[#890C25]/20 hover:bg-[#890C25]/40"
              }`}
            />
          ))}
        </div>
      )}
      {slideCount > 1 && (
        <p className="text-center text-[12px] text-[#737477]/60 mt-3 sm:hidden">← Drag to browse →</p>
      )}
    </div>
  );
}

/* ---------------- Section wrapper ---------------- */

export default function Testimonials() {
  return (
    <section className="relative bg-[#F7F4EC] px-5 sm:px-8 py-20 md:py-18 overflow-hidden">
      <div className="absolute top-10 -left-24 w-72 h-72 rounded-full bg-[#890C25]/5 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#890C25]/5 blur-3xl" aria-hidden="true" />

      <div className="max-w-[1300px] mx-auto relative">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#890C25] font-semibold text-[13.5px] tracking-wide mb-3">Voices</p>
          <h2 className="font-logo font-semibold text-[#1a1a1a] text-[2rem] sm:text-[2.5rem] leading-tight">
            What our families say
          </h2>
        </div>

        <TestimonialCarousel />
      </div>
    </section>
  );
}
