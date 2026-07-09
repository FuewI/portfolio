import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../../hooks/useApp";
import { useActiveSection } from "../../hooks/useActiveSection";
import { LANGUAGES } from "../../i18n";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "../icons/Icons";
import "./Navbar.css";

const SECTION_IDS = ["about", "skills", "projects", "education", "contact"];

function Navbar() {
  const { theme, toggleTheme, lang, setLang, t } = useApp();
  const active = useActiveSection(SECTION_IDS);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const containerRef = useRef(null);
  const linksRef = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const node = linksRef.current[active];
    const container = containerRef.current;
    if (!node || !container) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const rect = node.getBoundingClientRect();
    setIndicator({ left: rect.left - containerRect.left, width: rect.width, opacity: 1 });
  }, [active]);

  useEffect(() => {
    const onResize = () => setMenuOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <a href="#top" className="logo">
          Ivan Dimitrov
        </a>

        <div className="nav-links" ref={containerRef}>
          <motion.span
            className="nav-indicator"
            animate={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
            transition={{ type: "spring", stiffness: 340, damping: 32 }}
          />
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              ref={(el) => (linksRef.current[id] = el)}
              className={active === id ? "active" : ""}
            >
              {t.nav[id]}
            </a>
          ))}
        </div>

        <div className="nav-controls">
          <div className="lang-switch" role="group" aria-label={t.aria.language}>
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                className={`lang-btn ${lang === l.code ? "active" : ""}`}
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.aria.lightMode : t.aria.darkMode}
          >
            {theme === "dark" ? <SunIcon key="sun" /> : <MoonIcon key="moon" />}
          </button>

          <button
            className="icon-btn menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t.aria.menuClose : t.aria.menuOpen}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {SECTION_IDS.map((id) => (
              <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={closeMenu}>
                {t.nav[id]}
              </a>
            ))}
            <div className="lang-switch" role="group" aria-label={t.aria.language}>
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  className={`lang-btn ${lang === l.code ? "active" : ""}`}
                  onClick={() => setLang(l.code)}
                  aria-pressed={lang === l.code}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
