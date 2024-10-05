import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

const Header = () => {
  const sectionArray = [
    "Home",
    "Browse Topics",
    "How it works",
    "FAQs",
    "Contact",
  ];

  const headerRef = useRef(null);
  const [isSticky, setSticky] = useState(false);
  const [isNavCollapsed, setNavCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = headerRef.current.getBoundingClientRect().top;
      const scrollPos =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPos > headerOffset) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      sectionArray.forEach((value, index) => {
        const offsetSection =
          document.getElementById(`${value}`).offsetTop - 75;
        if (scrollPos + 1 >= offsetSection) {
          document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
            link.classList.remove("active");
            link.classList.add("inactive");
          });
          document
            .querySelectorAll(".navbar-nav .nav-link")
            [index].classList.add("active");
          document
            .querySelectorAll(".navbar-nav .nav-link")
            [index].classList.remove("inactive");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      link.classList.add("inactive");
    });
    document
      .querySelectorAll(".navbar-nav .nav-link")[0]
      .classList.add("active");
    document
      .querySelectorAll(".navbar-nav .nav-link")[0]
      .classList.remove("inactive");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionArray]);

  const handleClick = (value, event) => {
    event.preventDefault();
    const offsetClick = document.getElementById(`${value}`).offsetTop - 75;
    window.scrollTo({
      top: offsetClick,
      behavior: "smooth",
    });

    setNavCollapsed(true);
    document.querySelector(".navbar-collapse").classList.remove("show");
  };

  const handleToggle = () => {
    setNavCollapsed(!isNavCollapsed);
  };

  return (
    <div
      className={`sticky-wrapper ${isSticky ? "is-sticky" : ""}`}
      ref={headerRef}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="bi-back"></i>
            <span>Topic</span>
          </a>
          {/* <div className="d-lg-none ms-auto me-4">
            <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
          </div> */}
          <button
            className={`navbar-toggler ${isNavCollapsed ? "" : "collapsed"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-lg-5 me-lg-auto">
              {sectionArray.map((value, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className="nav-link click-scroll"
                    href={`#${value}`}
                    onClick={(e) => handleClick(value, e)}
                  >
                    {value}
                  </a>
                </li>
              ))}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarLightDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-light"
                  aria-labelledby="navbarLightDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="topics-listing.html">
                      Topics Listing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="contact.html">
                      Contact Form
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            {/* <div className="d-none d-lg-block">
              <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
