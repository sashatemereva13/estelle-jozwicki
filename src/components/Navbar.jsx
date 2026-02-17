import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Mail, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Navbar.css";
import { useLanguage } from "../i18n/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -10,
      filter: "blur(4px)",
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1], // premium cubic-bezier
      },
    },
  };

  return (
    <header className="navWrapper">
      {/* LEFT */}
      <div className="navLeft">
        <button className="menuButton" onClick={() => setOpen(!open)}>
          <div className={`lines ${open ? "open" : ""}`}>
            <span />
            <span />
          </div>
        </button>

        <NavLink to="/" className="brandName">
          Estelle Jozwicki
        </NavLink>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="dropdown"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <NavLink to="/" onClick={() => setOpen(false)}>
                {t("nav.home")}
              </NavLink>
              <NavLink to="/a-propos" onClick={() => setOpen(false)}>
                {t("nav.about")}
              </NavLink>
              <NavLink to="/oeuvres" onClick={() => setOpen(false)}>
                {t("nav.works")}
              </NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)}>
                {t("nav.contact")}
              </NavLink>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* RIGHT */}
      <div className="navRight">
        {/* language */}
        <div className="langSwitch">
          <button
            className={`langItem ${lang === "fr" ? "active" : ""}`}
            onClick={() => {
              if (lang !== "fr") toggle();
            }}
          >
            FR
          </button>

          <span className="langDivider">/</span>

          <button
            className={`langItem ${lang === "en" ? "active" : ""}`}
            onClick={() => {
              if (lang !== "en") toggle();
            }}
          >
            EN
          </button>
        </div>

        {/* <span className="divider">|</span> */}

        {/* contact */}
        <div className="contactWrapper">
          <a className="contactButton" href="mailto:jozwickiestelle@gmail.com">
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
