import React, { useState, useRef, useEffect } from "react";

import FaQImg from "../../assets/images/faq_graphic.jpg";

import "./FaQ.css";

const FaQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    contentRef.current.forEach((el, index) => {
      if (el) {
        if (activeIndex === index + 1) {
          el.style.height = el.scrollHeight + "px";
        } else {
          el.style.height = "0px";
        }
      }
    });
  }, [activeIndex]);

  return (
    <section className="faq-section section-padding" id="FAQs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="clearfix"></div>
          <div className="col-lg-5 col-12">
            <img src={FaQImg} className="img-fluid" alt="FAQs" />
          </div>
          <div className="col-lg-6 col-12 m-auto">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className={`accordion-button ${
                      activeIndex === 1 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion(1)}
                    aria-expanded={activeIndex === 1}
                    aria-controls="collapseOne"
                  >
                    What is Topic Listing?
                  </button>
                </h2>
                <div
                  ref={(el) => (contentRef.current[0] = el)}
                  id="collapseOne"
                  className={`accordion-collapse collapse ${
                    activeIndex === 1 ? "show" : ""
                  }`}
                  aria-labelledby="headingOne"
                >
                  <div className="accordion-body">
                    Topic Listing is free Bootstrap 5 CSS template.{" "}
                    <strong>
                      You are not allowed to redistribute this template
                    </strong>{" "}
                    on any other template collection website without our
                    permission. Please contact TemplateMo for more detail. Thank
                    you.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className={`accordion-button ${
                      activeIndex === 2 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion(2)}
                    aria-expanded={activeIndex === 2}
                    aria-controls="collapseTwo"
                  >
                    How to find a topic?
                  </button>
                </h2>
                <div
                  ref={(el) => (contentRef.current[1] = el)}
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${
                    activeIndex === 2 ? "show" : ""
                  }`}
                  aria-labelledby="headingTwo"
                >
                  <div className="accordion-body">
                    You can search on Google with <strong>keywords</strong> such
                    as templatemo portfolio, templatemo one-page layouts,
                    photography, digital marketing, etc.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className={`accordion-button ${
                      activeIndex === 3 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion(3)}
                    aria-expanded={activeIndex === 3}
                    aria-controls="collapseThree"
                  >
                    Does it need to be paid?
                  </button>
                </h2>
                <div
                  ref={(el) => (contentRef.current[2] = el)}
                  id="collapseThree"
                  className={`accordion-collapse collapse ${
                    activeIndex === 3 ? "show" : ""
                  }`}
                  aria-labelledby="headingThree"
                >
                  <div className="accordion-body">
                    You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>,
                    though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaQ;
