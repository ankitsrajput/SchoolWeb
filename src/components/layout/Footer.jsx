import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaChevronUp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGraduationCap,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/school_logo.png"

const CAMPUS_LABEL_1 = ["About Us", "Gallery", "Facilities", "Contact Us", "Admission"];
const CAMPUS_LINKS_1 = ["/about-us", "/gallery", "/facilities", "/contact-us", "/admission"];
const CAMPUS_LABEL_2 = ["Director's Desk", "Chairman's Desk", "Principal's Desk", "Vice Principal's Desk"];
const CAMPUS_LINKS_2 = ["/director-desk", "/chairman-desk", "/principal-desk", "/vice-principal-desk"];

const SOCIALS = [
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

/* ---------------- Scroll to top (global, appears after scrolling) ---------------- */

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-5 sm:right-8 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#890C25] flex items-center justify-center shadow-lg hover:bg-[#890C25] hover:text-white transition-all duration-300 ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
    >
      <FaChevronUp size={16} />
    </button>
  );
}

/* ---------------- Footer link column ---------------- */

function LinkColumn({ title, label, links }) {
  return (
    <div>
      <h3 className="font-body font-semibold text-white text-[18px] sm:text-[20px] decoration-2  mb-6">
        {title}
      </h3>
      <ul className="flex flex-col gap-3.5">
        {links.map((l) => (
          <li key={l}>
            <NavLink to={l} className="text-[#8b8b8d] text-[15px] hover:text-white transition-colors duration-200">
              {label[links.indexOf(l)]}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Footer ---------------- */

export default function Footer() {
  return (
    <footer className="bg-[#131313] pt-16 sm:pt-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14">
        {/* logo + about */}
        <div className="lg:col-span-1">
          <NavLink to="/" className="flex items-center gap-3 mb-6">
            <span className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-white shrink-0">
              <img src={Logo} alt="school_logo" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-logo font-bold text-white text-[22px] tracking-wide">Sr. LS International</span>
              <span className="font-logo font-semibold text-[#8b8b8d] text-[11px] tracking-[0.25em]">PUBLIC SCHOOL</span>
            </span>
          </NavLink>

          <p className="text-[#8b8b8d] text-[15px] leading-relaxed mb-6 max-w-xs text-justify">
            We are passionate education dedicated to providing high - quality resources learners all backgrounds.
          </p>

          <div className="flex items-center gap-2.5 text-[#8b8b8d] text-[15px] mb-3">
            <FaMapMarkerAlt size={15} className="shrink-0" />
            Kisai Jagdishpur, Kannauj, Uttar Pradesh-209728
          </div>
          <div className="flex items-center gap-2.5 text-[#8b8b8d] text-[15px]">
            <FaPhoneAlt size={14} className="shrink-0" />
            +91-9580900900
          </div>
        </div>

        <LinkColumn title="Useful Links" label={CAMPUS_LABEL_1} links={CAMPUS_LINKS_1} />
        <LinkColumn title="Management" label={CAMPUS_LABEL_2} links={CAMPUS_LINKS_2} />

        {/* social links — replaces "Recent Post" from the reference */}
        <div>
          <h3 className="font-body font-semibold text-white text-[18px] sm:text-[20px] decoration-2 mb-6">
            Follow Us on
          </h3>
          <p className="text-[#8b8b8d] text-[15px] leading-relaxed mb-6 max-w-xs">
            Stay updated with campus news, events, and student stories.
          </p>
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map(({ Icon, label, path }) => (
              <NavLink
                key={label}
                to={path}
                aria-label={label}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-[#890C25] hover:border-[#890C25] transition-colors duration-200"
                target="_blank"
              >
                <Icon size={15} />
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-6 flex flex-col items-center gap-1.5 text-center">
          <p className="text-[#8b8b8d] text-[14px] sm:text-[15px]">
            Copyright © 2026 All Rights Reserved by <span className="text-[#890C25] font-medium">Sr. LS International Public School</span>
          </p>
          <p className="text-[#5f5f61] text-[12.5px]">
            Designed by <span className="text-[#8b8b8d]"><NavLink to="#">Ankit Singh Rajput</NavLink></span>
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}