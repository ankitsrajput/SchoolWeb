import React, { useState, useRef, useEffect } from "react";
import breadCrumbImg from "../assets/sliderImgs/1.jpeg"
import {
    FaChevronRight,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaPaperPlane,
    FaUser,
    FaCommentDots,
    FaHeadset,
    FaBuilding,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

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

/* ---------------- Animated heading ---------------- */

function AnimatedHeading({ eyebrow, title, light, center }) {
    const [ref, visible] = useReveal();
    return (
        <div ref={ref} className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
            {eyebrow && (
                <p
                    className={`font-semibold text-[14px] tracking-wide mb-3 transition-all duration-700 ${light ? "text-[#f2c9d2]" : "text-[#890C25]"
                        } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                >
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
        <section className="relative h-[180px] sm:h-[240px] w-full overflow-hidden bg-[#111]">
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
                    <span className="text-white">Contact Us</span>
                </div>
                <h1 className="font-logo font-semibold text-white text-[2.4rem] sm:text-[3.2rem] leading-none">
                    Contact Us
                </h1>
            </div>
        </section>
    );
}

/* ---------------- Quick contact cards ---------------- */

const QUICK_CARDS = [
    { Icon: FaPhoneAlt, title: "Call Us", detail: "+91-9935920525", sub: "Mon - Sat, 9AM - 5PM" },
    { Icon: FaEnvelope, title: "Email Us", detail: "Srlsinternational@gmail.com", sub: "We reply within 24 hrs" },
    { Icon: FaMapMarkerAlt, title: "Visit Campus", detail: "Kisai Jagdishpur, Kannauj, Uttar Pradesh-209728", sub: "Front office, Building A" },
    { Icon: FaHeadset, title: "Student Helpdesk", detail: "+91-9580900900", sub: "For enrolled students" },
];

function QuickContactCards() {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1300px] mx-auto px-5 sm:px-8 -mt-16 sm:-mt-20 relative z-20">
            {QUICK_CARDS.map(({ Icon, title, detail, sub }) => (
                <div
                    key={title}
                    className="group bg-white rounded-lg shadow-xl shadow-black/10 border border-black/5 px-6 py-7 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
                >
                    <div className="w-12 h-12 rounded-full bg-[#890C25]/10 flex items-center justify-center text-[#890C25] mb-4 group-hover:bg-[#890C25] group-hover:text-white transition-colors duration-300">
                        <Icon size={18} />
                    </div>
                    <p className="font-logo font-semibold text-[#1a1a1a] text-[17px] mb-1">{title}</p>
                    <p className="text-[#890C25] text-[14.5px] font-medium mb-0.5">{detail}</p>
                    <p className="text-[#737477] text-[13px]">{sub}</p>
                </div>
            ))}
        </div>
    );
}

/* ---------------- Form field ---------------- */

function FormField({ label, Icon, type = "text", textarea, placeholder, value, onChange, name }) {
    return (
        <div>
            <label className="block text-[#1a1a1a] text-[13.5px] font-medium mb-2">{label}</label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#890C25]/60">
                    <Icon size={15} />
                </span>
                {textarea ? (
                    <textarea
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        rows={5}
                        className="w-full resize-none rounded-md border border-black/10 bg-[#F7F4EC]/50 pl-11 pr-4 pt-3.5 pb-3 text-[14.5px] text-[#1a1a1a] placeholder:text-[#737477]/60 focus:outline-none focus:ring-2 focus:ring-[#890C25]/30 focus:border-[#890C25] transition-colors duration-200"
                    />
                ) : (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="w-full rounded-md border border-black/10 bg-[#F7F4EC]/50 pl-11 pr-4 py-3.5 text-[14.5px] text-[#1a1a1a] placeholder:text-[#737477]/60 focus:outline-none focus:ring-2 focus:ring-[#890C25]/30 focus:border-[#890C25] transition-colors duration-200"
                    />
                )}
            </div>
        </div>
    );
}

/* ---------------- Contact form ---------------- */

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    return (
        <div className="relative bg-white rounded-xl shadow-lg shadow-black/5 border border-black/5 p-7 sm:p-10">
            {/* decorative accent */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#890C25]/10 blur-xl" aria-hidden="true" />

            <p className="text-[#890C25] font-semibold text-[13.5px] tracking-wide mb-2">Get In Touch</p>
            <h3 className="font-logo font-semibold text-[#1a1a1a] text-[1.7rem] sm:text-[2rem] mb-8">
                Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Full Name" Icon={FaUser} name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
                    <FormField label="Email Address" Icon={FaEnvelope} type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Phone Number" Icon={FaPhoneAlt} type="tel" name="phone" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
                    <FormField label="Subject" Icon={FaCommentDots} name="subject" placeholder="Admissions enquiry" value={form.subject} onChange={handleChange} />
                </div>
                <FormField label="Message" Icon={FaCommentDots} textarea name="message" placeholder="Tell us how we can help..." value={form.message} onChange={handleChange} />

                <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-3 bg-[#890C25] text-white font-medium text-[14.5px] px-7 py-3.5 rounded-md hover:bg-[#6e0a1e] transition-colors duration-300 group w-full sm:w-fit"
                >
                    {sent ? "Message Sent ✓" : "Send Message"}
                    {!sent && <FaPaperPlane size={13} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />}
                </button>
            </form>
        </div>
    );
}

/* ---------------- Contact info panel ---------------- */

function ContactInfoPanel() {
    const socials = [
        { 
            Icon: FaFacebookF,
            label: "Facebook",
            path: "https://www.facebook.com/share/1d7c9pM6KA/?mibextid=wwXIfr" 
        },
        { 
            Icon: FaInstagram,
            label: "Instagram",
            path: "https://www.instagram.com/sr_ls_international_pub_school" 
        },
        { 
            Icon: FaTwitter,
            label: "Twitter",
            path: "https://x.com/"
        },
        { 
            Icon: FaLinkedinIn,
            label: "LinkedIn",
            path: "https://www.linkedin.com/"
        },
        { 
            Icon: FaYoutube,
            label: "YouTube",
            path: "https://www.youtube.com/"
        },
    ];

    const info = [
        { Icon: FaMapMarkerAlt, label: "Address", value: "Kisai Jagdishpur, Kannauj, Uttar Pradesh-209728" },
        { Icon: FaPhoneAlt, label: "Phone", value: "+91-9935920525, 9580900900, 9415146050" },
        { Icon: FaEnvelope, label: "Email", value: "Srlsinternationalpublicschool@gmail.com" },
        { Icon: FaClock, label: "Office Hours", value: "Mon - Sat, 9:00 AM - 5:00 PM" },
    ];

    return (
        <div className="relative bg-[#890C25] rounded-xl p-7 sm:p-10 text-white overflow-hidden h-full">
            {/* decorative shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />

            <p className="text-white/70 font-semibold text-[13.5px] tracking-wide mb-2 relative">Contact Information</p>
            <h3 className="font-logo font-semibold text-[1.7rem] sm:text-[2rem] mb-8 relative">
                We'd love to hear from you
            </h3>

            <div className="flex flex-col gap-6 relative mb-10">
                {info.map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                        <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                            <Icon size={15} />
                        </span>
                        <div>
                            <p className="text-white/60 text-[12.5px] uppercase tracking-wide mb-0.5">{label}</p>
                            <p className="text-[15px] font-medium">{value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative">
                <p className="text-white/60 text-[12.5px] uppercase tracking-wide mb-3">Follow Us</p>
                <div className="flex gap-3">
                    {socials.map(({ Icon, label, path }) => (
                        <NavLink
                            key={label}
                            to={path}
                            aria-label={label}
                            className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center hover:bg-white hover:text-[#890C25] hover:border-white transition-colors duration-200"
                            target="_blank"
                        >
                            <Icon size={15} />
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ---------------- Form + Info section ---------------- */

export default function Contact() {
    return (
        <>
            <PageHeaderBanner />
            <QuickContactCards />
            <section className="relative bg-[#F7F4EC] px-5 sm:px-8 pt-24 pb-20 md:pb-28 overflow-hidden">
                {/* decorative background blobs */}
                <div className="absolute top-24 -left-24 w-72 h-72 rounded-full bg-[#890C25]/5 blur-3xl" aria-hidden="true" />
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#890C25]/5 blur-3xl" aria-hidden="true" />

                <div className="max-w-[1300px] mx-auto relative">
                    <AnimatedHeading eyebrow="Let's Talk" title="Reach out to us" center />
                    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
                        <ContactForm />
                        <ContactInfoPanel />
                    </div>
                </div>
            </section>
            <CampusMapSection />
            <CTASection />
        </>
    );
}

/* ---------------- Campus + Map section ---------------- */

function CampusMapSection() {
    return (
        <section className="bg-white px-5 sm:px-8 py-20 md:py-28">
            <div className="max-w-[1300px] mx-auto">
                <AnimatedHeading eyebrow="Find Us" title="Visit Our Campus" center />
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    <div className="relative rounded-xl overflow-hidden h-[340px] sm:h-[420px] group">
                        <img
                            src={breadCrumbImg}
                            alt="Sr. LS International"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                            <span className="w-10 h-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                                <FaBuilding size={16} />
                            </span>
                            <div>
                                <p className="font-logo font-semibold text-[18px]">Main Campus</p>
                                <p className="text-white/75 text-[13px]">Kisai Jagdishpur, Kannauj, Uttar Pradesh-209728</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden h-[340px] sm:h-[420px] shadow-lg shadow-black/5 border border-black/5">
                        <iframe
                            title="Sr. LS International Public School"
                            src="https://www.google.com/maps/embed?pb=!4v1783534863311!6m8!1m7!1s_vVjxSboYY5wUHjjgecI0Q!2m2!1d26.9952233281951!2d79.57777475622501!3f47.37341001379911!4f8.339172016695528!5f3.3212142054231815"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- CTA section ---------------- */

function CTASection() {
    const [ref, visible] = useReveal();
    return (
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
                </div>
            </div>
        </section>
    );
}
