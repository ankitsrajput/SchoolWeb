import React, { useState, useRef, useEffect } from "react";
import breadCrumbImg from "../assets/sliderImgs/1.jpeg"
import SideImg_1 from "../assets/imgs/campus_life/1.jpeg"
import SideImg_2 from "../assets/imgs/campus_life/17.jpeg"
import SideImg_3 from "../assets/imgs/cultural/9.jpeg"
import SideImg_4 from "../assets/imgs/event_activity/3.jpeg"
import { NavLink } from "react-router-dom";
import {
    FaChevronRight,
    FaUser,
    FaCalendarAlt,
    FaVenusMars,
    FaGraduationCap,
    FaUserTie,
    FaUserFriends,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaCommentDots,
    FaPaperPlane,
    FaFileAlt,
    FaClipboardCheck,
    FaHandshake,
    FaCheckCircle,
    FaArrowRight,
} from "react-icons/fa";

const QUICK_INFO = [
    { value: "2026–27", label: "Session Open" },
    { value: "I · VI · IX · XI", label: "Classes Enrolling" },
    { value: "31 Aug", label: "Last Date to Apply" },
    { value: "Limited", label: "Seats Remaining" },
];

const PROCESS_STEPS = [
    { Icon: FaFileAlt, title: "Submit Enquiry", body: "Fill the admission form with student, parent, and contact details." },
    { Icon: FaClipboardCheck, title: "Document Verification", body: "Our team reviews the application and requests supporting documents." },
    { Icon: FaHandshake, title: "Interaction & Visit", body: "A short interaction with the admissions team, plus a campus walk-through." },
    { Icon: FaCheckCircle, title: "Confirmation", body: "Seat confirmation and fee payment details are shared over email/call." },
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

function AdmissionHeroBanner() {
    return (
        <section className="relative h-[300px] sm:h-[380px] w-full overflow-hidden bg-[#111]">
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
                    <span className="text-white">Admission Enquiry</span>
                </div>
                <h1 className="font-logo font-semibold text-white text-[2.3rem] sm:text-[3.1rem] leading-none mb-3">
                    Admission Enquiry
                </h1>
                <p className="text-white/75 text-[15px] sm:text-[16px] max-w-lg">
                    Fill in the details below and our admission team will contact you shortly.
                </p>
            </div>
        </section>
    );
}

/* ---------------- Quick info strip ---------------- */

function QuickInfoStrip() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1300px] mx-auto px-5 sm:px-8 -mt-14 sm:-mt-16 relative z-20">
            {QUICK_INFO.map(({ value, label }) => (
                <div
                    key={label}
                    className="group bg-white rounded-lg shadow-xl shadow-black/10 border border-black/5 px-6 py-6 text-center hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
                >
                    <p className="font-logo font-semibold text-[#890C25] text-[1.4rem] sm:text-[1.6rem] leading-none">{value}</p>
                    <p className="text-[#737477] text-[12px] mt-2">{label}</p>
                </div>
            ))}
        </div>
    );
}

/* ---------------- Form field ---------------- */

function FormField({ label, Icon, type = "text", textarea, select, options, placeholder, value, onChange, name, required }) {
    return (
        <div>
            <label className="block text-[#1a1a1a] text-[13.5px] font-medium mb-2">
                {label} {required && <span className="text-[#890C25]">*</span>}
            </label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#890C25]/60 pointer-events-none">
                    <Icon size={15} />
                </span>
                {textarea ? (
                    <textarea
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        rows={4}
                        required={required}
                        className="w-full resize-none rounded-md border border-black/10 bg-[#F7F4EC]/50 pl-11 pr-4 pt-3.5 pb-3 text-[14.5px] text-[#1a1a1a] placeholder:text-[#737477]/60 focus:outline-none focus:ring-2 focus:ring-[#890C25]/30 focus:border-[#890C25] transition-colors duration-200"
                    />
                ) : select ? (
                    <select
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        className="w-full appearance-none rounded-md border border-black/10 bg-[#F7F4EC]/50 pl-11 pr-4 py-3.5 text-[14.5px] text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#890C25]/30 focus:border-[#890C25] transition-colors duration-200"
                    >
                        <option value="" disabled>{placeholder}</option>
                        {options.map((o) => (
                            <option key={o} value={o}>{o}</option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                        className="w-full rounded-md border border-black/10 bg-[#F7F4EC]/50 pl-11 pr-4 py-3.5 text-[14.5px] text-[#1a1a1a] placeholder:text-[#737477]/60 focus:outline-none focus:ring-2 focus:ring-[#890C25]/30 focus:border-[#890C25] transition-colors duration-200"
                    />
                )}
            </div>
        </div>
    );
}

/* ---------------- Form section title ---------------- */

function FormSectionTitle({ index, title }) {
    return (
        <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-7 rounded-full bg-[#890C25] text-white text-[12.5px] font-semibold flex items-center justify-center shrink-0">
                {index}
            </span>
            <h3 className="font-logo font-semibold text-[#1a1a1a] text-[18px] sm:text-[19px]">{title}</h3>
            <span className="flex-1 h-px bg-black/8" />
        </div>
    );
}

/* ---------------- Admission form ---------------- */

const INITIAL_FORM = {
    studentName: "", dob: "", gender: "", classFor: "",
    fatherName: "", motherName: "",
    mobile: "", email: "", address: "",
    message: "", confirmed: false,
};

function AdmissionForm() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm(INITIAL_FORM);
    };

    return (
        <div className="relative bg-white rounded-xl shadow-lg shadow-black/5 border border-black/5 p-6 sm:p-9">
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#890C25]/10 blur-xl" aria-hidden="true" />

            <p className="text-[#890C25] font-semibold text-[13.5px] tracking-wide mb-2 relative">Get Started</p>
            <h3 className="font-logo font-semibold text-[#1a1a1a] text-[1.6rem] sm:text-[1.9rem] mb-8 relative">
                Admission Enquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-9 relative">
                {/* Student Information */}
                <div>
                    <FormSectionTitle index={1} title="Student Information" />
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                            <FormField label="Student Full Name" Icon={FaUser} name="studentName" placeholder="Enter student's full name" value={form.studentName} onChange={handleChange} required />
                        </div>
                        <FormField label="Date of Birth" Icon={FaCalendarAlt} type="date" name="dob" value={form.dob} onChange={handleChange} required />
                        <FormField
                            label="Gender" Icon={FaVenusMars} select name="gender" placeholder="Select gender"
                            options={["Male", "Female", "Other"]} value={form.gender} onChange={handleChange} required
                        />
                        <div className="sm:col-span-2">
                            <FormField
                                label="Class Applying For" Icon={FaGraduationCap} select name="classFor" placeholder="Select class"
                                options={["Class I", "Class VI", "Class IX", "Class XI"]} value={form.classFor} onChange={handleChange} required
                            />
                        </div>
                    </div>
                </div>

                {/* Parent Information */}
                <div>
                    <FormSectionTitle index={2} title="Parent Information" />
                    <div className="grid sm:grid-cols-2 gap-5">
                        <FormField label="Father's Name" Icon={FaUserTie} name="fatherName" placeholder="Father's full name" value={form.fatherName} onChange={handleChange} required />
                        <FormField label="Mother's Name" Icon={FaUserFriends} name="motherName" placeholder="Mother's full name" value={form.motherName} onChange={handleChange} />
                    </div>
                </div>

                {/* Contact Information */}
                <div>
                    <FormSectionTitle index={3} title="Contact Information" />
                    <div className="grid sm:grid-cols-2 gap-5">
                        <FormField label="Mobile Number" Icon={FaPhoneAlt} type="tel" name="mobile" placeholder="+91 00000 00000" value={form.mobile} onChange={handleChange} required />
                        <FormField label="Email Address" Icon={FaEnvelope} type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                        <div className="sm:col-span-2">
                            <FormField label="Complete Address" Icon={FaMapMarkerAlt} textarea name="address" placeholder="House no., street, city, state, PIN" value={form.address} onChange={handleChange} required />
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div>
                    <FormSectionTitle index={4} title="Additional Information" />
                    <FormField label="Message / Query" Icon={FaCommentDots} textarea name="message" placeholder="Anything specific you'd like us to know..." value={form.message} onChange={handleChange} />
                </div>

                {/* confirm + submit */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2 border-t border-black/8">
                    <label className="flex items-start gap-2.5 text-[13px] text-[#737477] cursor-pointer">
                        <input
                            type="checkbox"
                            name="confirmed"
                            checked={form.confirmed}
                            onChange={handleChange}
                            required
                            className="mt-0.5 w-4 h-4 accent-[#890C25] shrink-0"
                        />
                        I confirm that the information provided above is correct.
                    </label>

                    <button
                        type="submit"
                        className="sm:ml-auto inline-flex items-center justify-center gap-3 bg-[#890C25] text-white font-medium text-[14.5px] px-7 py-3.5 rounded-md hover:bg-[#6e0a1e] transition-colors duration-300 group w-full sm:w-fit shrink-0"
                    >
                        {sent ? "Submitted ✓" : "Submit Admission"}
                        {!sent && <FaPaperPlane size={13} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />}
                    </button>
                </div>
            </form>
        </div>
    );
}

/* ---------------- Supporting image / highlights panel ---------------- */

function AdmissionSidePanel() {
    return (
        <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden h-[260px] sm:h-[300px]">
                <img
                    src={SideImg_1}
                    alt="Students at Unipix University"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="font-logo font-semibold text-[19px] mb-1">Join 1000+ students</p>
                    <p className="text-white/75 text-[13px]">Across undergraduate, graduate, and lifelong - learning programs.</p>
                </div>
            </div>

            <div className="bg-[#890C25] rounded-xl p-7 text-white relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />
                <p className="font-logo font-semibold text-[18px] mb-4 relative">Need help with the form?</p>
                <div className="flex items-center gap-3 mb-3 relative">
                    <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                        <FaPhoneAlt size={13} />
                    </span>
                    <p className="text-[14px]">+91-9935920525</p>
                </div>
                <div className="flex items-center gap-3 relative">
                    <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                        <FaEnvelope size={13} />
                    </span>
                    <p className="text-[14px]">Srlsinternationalpublicschool@gmail.com</p>
                </div>
            </div>

            <div className="relative rounded-xl overflow-hidden h-[260px] sm:h-[300px]">
                <img
                    src={SideImg_3}
                    alt="Students at Unipix University"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="font-logo font-semibold text-[19px] mb-1">Established in 2014</p>
                    <p className="text-white/75 text-[13px]">Committed to excellence in education and holistic development since 2014.</p>
                </div>
            </div>

            <div className="relative rounded-xl overflow-hidden h-[260px] sm:h-[300px]">
                <img
                    src={SideImg_2}
                    alt="Students at Unipix University"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="font-logo font-semibold text-[19px] mb-1">10+ Facilities</p>
                    <p className="text-white/75 text-[13px]">Modern facilities designed to enhance learning, creativity, safety, and student development.</p>
                </div>
            </div>
        </div>
    );
}

/* ---------------- Main form section ---------------- */

export default function Admission() {
    return (
        <>
            <AdmissionHeroBanner />
            <ProcessSteps />
            <section className="relative bg-[#F7F4EC] px-5 sm:px-8 pt-24 pb-20 md:pb-28 overflow-hidden">
                <div className="absolute top-24 -left-24 w-72 h-72 rounded-full bg-[#890C25]/5 blur-3xl" aria-hidden="true" />
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#890C25]/5 blur-3xl" aria-hidden="true" />
                <div className="max-w-[1300px] mx-auto relative grid lg:grid-cols-[1.5fr_1fr] gap-8">
                    <AdmissionForm />
                    <AdmissionSidePanel />
                </div>
            </section>
            <CTASection />
        </>
    );
}

/* ---------------- Admission process steps ---------------- */

function ProcessSteps() {
    return (
        <section className="bg-white px-5 sm:px-8 py-20 md:py-28">
            <div className="max-w-[1300px] mx-auto">
                <AnimatedHeading eyebrow="What Happens Next" title="Our Admission Process" center />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {PROCESS_STEPS.map(({ Icon, title, body }, i) => (
                        <div key={title} className="relative bg-[#F7F4EC] rounded-xl p-7 text-center">
                            <span className="inline-flex w-12 h-12 rounded-full bg-[#890C25] text-white items-center justify-center mb-5">
                                <Icon size={18} />
                            </span>
                            <p className="font-logo font-semibold text-[#1a1a1a] text-[17px] mb-2">
                                <span className="text-[#890C25] mr-1.5">{i + 1}.</span>{title}
                            </p>
                            <p className="text-[#737477] text-[13.5px] leading-relaxed">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- CTA ---------------- */

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
                <p className="text-white/70 font-semibold text-[13.5px] tracking-wide mb-4">Still Deciding?</p>
                <h2 className="font-logo font-semibold text-white text-[2rem] sm:text-[2.6rem] leading-tight mb-6">
                    Book a campus visit before you apply.
                </h2>
                <p className="text-white/75 text-[15px] mb-9 max-w-lg mx-auto">
                    Walk through the labs, courts, and classrooms in person - no obligation to enrol.
                </p>
                <NavLink
                    to="/contact-us"
                    className="inline-flex items-center gap-2 bg-white text-[#890C25] font-semibold text-[14.5px] px-8 py-3.5 rounded-md hover:bg-[#F7F4EC] transition-colors duration-300"
                >
                    Schedule a Visit <FaArrowRight size={13} />
                </NavLink>
            </div>
        </section>
    );
}
