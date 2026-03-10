import React, { useEffect, useState, useMemo } from "react";
import "./Header.css";

const Header = () => {
  const sectionArray = useMemo(
    () => [
      "Home",
      "Browse Topics",
      "How it works",
      "Latest News",
      "FAQs",
      "Contact",
    ],
    []
  );

  const [isSticky, setSticky] = useState(false);
  const [isNavCollapsed, setNavCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos > 75) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      sectionArray.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const offsetSection = sectionElement.offsetTop - 75;
          if (scrollPos >= offsetSection) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionArray]);

  const handleClick = (section, event) => {
    event.preventDefault();
    const offsetClick = document.getElementById(section).offsetTop - 74;
    window.scrollTo({
      top: offsetClick,
      behavior: "smooth",
    });
    setNavCollapsed(true);
  };

  const handleToggle = () => {
    setNavCollapsed(!isNavCollapsed);
  };

  return (
    <div className={`sticky-wrapper ${isSticky ? "is-sticky" : ""}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="bi-back"></i>
            <span>CPIAC</span>
          </a>
          <button
            className={`navbar-toggler ${isNavCollapsed ? "" : "collapsed"}`}
            type="button"
            aria-expanded={!isNavCollapsed}
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
          >
            <ul className="navbar-nav ms-lg-5 me-lg-auto">
              {sectionArray.map((section, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link ${
                      activeSection === section ? "active" : "inactive"
                    }`}
                    href={`#${section}`}
                    onClick={(e) => handleClick(section, e)}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
