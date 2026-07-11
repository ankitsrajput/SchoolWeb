import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SchoolLogo from "../../../public/school_logo.png"
import {
    FaPlus,
    FaBars,
    FaTimes,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaGraduationCap,
} from "react-icons/fa";

const MENU = [
    {
        label: "Home",
        path: "/",
        dropdown: null
    },
    {
        label: "About",
        path: "/about-us",
        dropdown: null
    },
    {
        label: "Management",
        path: "#",
        dropdown: [
            {
                label: "Director's Message",
                path: "/director-desk"


            },
            {
                label: "Chairman's Message",
                path: "/chairman-desk"
            },
            {
                label: "Principal's Message",
                path: "/principal-desk"
            },
            {
                label: "Vice Principal's Message",
                path: "/vice-principal-desk"
            },
        ],
    },
    {
        label: "Gallery",
        path: "gallery",
        dropdown: null
    },
    {
        label: "facilities",
        path: "facilities",
        dropdown: null
    },
    {
        label: "Contact",
        path: "contact-us",
        dropdown: null
    },
];

const SOCIALS = [
    { Icon: FaFacebookF, label: "Facebook", path: "https://www.facebook.com/share/1d7c9pM6KA/?mibextid=wwXIfr" },
    { Icon: FaInstagram, label: "Instagram", path: "https://www.instagram.com/sr_ls_international_pub_school" },
    { Icon: FaTwitter, label: "Twitter", path: "https://www.x.com/" },
    { Icon: FaLinkedinIn, label: "LinkedIn", path: "https://www.linkedin.com/" },
    { Icon: FaYoutube, label: "YouTube", path: "https://www.youtube.com/" },
];

/* ---------------- Logo ---------------- */

function Logo() {
    return (
        <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <span className="w-11 h-11 rounded-full border-2 border-[#890C25] flex items-center justify-center text-[#890C25] shrink-0">
                <img src={SchoolLogo} alt="School_Logo" />
            </span>
            <span className="flex flex-col leading-none">
                <span className="font-logo font-bold text-[#890C25] text-[22px] tracking-wide">
                    Sr. LS International
                </span>
                <span className="font-logo font-semibold text-[#737477] text-[11px] tracking-[0.25em]">
                    Public School
                </span>
            </span>
        </NavLink>
    );
}

/* ---------------- Desktop dropdown item ---------------- */

function DesktopMenuItem({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => item.dropdown && setOpen(true)}
            onMouseLeave={() => item.dropdown && setOpen(false)}
        >
            <NavLink to={item.path} className="flex items-center gap-1.5 py-2 text-[15px] font-medium text-[#737477] hover:text-[#890C25] transition-colors duration-200 hover:cursor-pointer">
                {item.label}
                {item.dropdown && (
                    <FaPlus
                        size={9}
                        className={`transition-transform duration-300 ${open ? "rotate-45 text-[#890C25]" : ""}`}
                    />
                )}
            </NavLink>

            {item.dropdown && (
                <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 transition-all duration-300 ease-out ${open
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-3 pointer-events-none"
                        }`}
                >
                    <div className="bg-white rounded-lg shadow-xl ring-1 ring-black/5 overflow-hidden py-2">
                        {item.dropdown.map((d, i) => (
                            <NavLink
                                key={i}
                                to={d.path}
                                className="block px-5 py-2.5 text-[14px] text-[#737477] hover:bg-[#890C25] hover:text-white transition-colors duration-200 hover:cursor-pointer"
                            >
                                {d.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------------- Mobile accordion item ---------------- */

function MobileMenuItem({ item, onClose }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-white/15">
            <NavLink to={item.path}
                onClick={() => {
                    if (item.dropdown) {
                        setOpen((v) => !v)
                    } else {
                        onClose();
                    }
                }}

                className="w-full flex items-center justify-between py-4 text-left text-[17px] font-medium text-white"
            >
                {item.label}
                {item.dropdown && (
                    <FaPlus
                        size={12}
                        className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                    />
                )}
            </NavLink>


            {item.dropdown && (
                <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? "max-h-40" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-1 pb-4 pl-2">
                        {item.dropdown.map((d, i, onClose) => (
                            <NavLink
                                key={i}
                                to={d.path}
                                onClick={onClose}
                                className="text-[14.5px] text-white/70 hover:text-white py-1.5 transition-colors duration-200"
                            >
                                {d.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------------- Offcanvas (mobile/tablet) ---------------- */

function Offcanvas({ open, onClose }) {
    return (
        <>
            {/* backdrop */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            />
            {/* panel — full width */}
            <div
                className={`fixed inset-0 z-50 w-full bg-[#890C25] flex flex-col transition-transform duration-400 ease-in-out lg:hidden ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/15">
                    <span className="font-logo font-bold text-white text-xl tracking-wide">
                        Sr. LS International
                        <span className="font-normal text-white/70 text-sm tracking-[0.25em]"> PUBLIC SCHOOL</span>
                    </span>
                    <button onClick={onClose} aria-label="Close menu" className="text-white p-1 hover:cursor-pointer">
                        <FaTimes size={22} />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-6 pt-2" title="Click-to-open">
                    {MENU.map((item) => (
                        <MobileMenuItem key={item.label} item={item} onClick={onClose} />
                    ))}
                </nav>

                <div className="px-6 py-6 border-t border-white/15">
                    <p className="text-white/60 text-[12px] tracking-[0.2em] uppercase mb-4">Follow Us</p>
                    <div className="flex gap-3">
                        {SOCIALS.map(({ Icon, label, path }) => (
                            <NavLink
                                key={label}
                                to={path}
                                aria-label={label}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#890C25] transition-colors duration-200"
                                target="_blank"
                            >
                                <Icon size={15} />
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

/* ---------------- Navbar ---------------- */

export default function Navbar() {
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm relative z-30">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
                <Logo />

                {/* desktop menu — fills remaining space to the right */}
                <nav className="hidden lg:flex items-center gap-9 ml-auto hover:cursor-pointer">
                    {MENU.map((item) => (
                        <DesktopMenuItem key={item.label} item={item} />
                    ))}
                </nav>

                <NavLink
                    to="/admission"
                    className="hidden lg:inline-flex items-center bg-[#890C25] text-white text-[14px] font-medium px-6 py-2.5 rounded-full ml-8 hover:bg-[#6e0a1e] transition-colors duration-200"
                >
                    Admission Open
                </NavLink>

                {/* mobile / tablet hamburger only */}
                <button
                    onClick={() => setOffcanvasOpen(true)}
                    aria-label="Open menu"
                    className="lg:hidden text-[#890C25] p-2 ml-auto  hover:cursor-pointer"
                >
                    <FaBars size={24} />
                </button>
            </div>

            <Offcanvas open={offcanvasOpen} onClose={() => setOffcanvasOpen(false)} />
        </header>
    );
}

