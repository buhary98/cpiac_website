import React, { useState, useRef, useEffect } from "react";

import FaQImg from "../../assets/images/faq.png";

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
                    What is arbitration?
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
                    Arbitration is a form of alternative dispute resolution
                    where two or more parties agree to resolve their disputes
                    outside of court. An independent arbitrator or panel of
                    arbitrators hears both sides and makes a binding decision.
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
                    How does arbitration differ from court litigation?
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
                    Arbitration is usually faster, more flexible, and less
                    formal than court litigation. Unlike court, the arbitration
                    process is private, and the decision, known as an award, is
                    final and binding with limited grounds for appeal.
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
                    How are arbitrators chosen?
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
                    Arbitrators are typically chosen by agreement between the
                    parties involved, based on their expertise and impartiality.
                    Some arbitration institutions maintain a list of qualified
                    arbitrators from which parties can choose.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className={`accordion-button ${
                      activeIndex === 4 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion(4)}
                    aria-expanded={activeIndex === 4}
                    aria-controls="collapseFour"
                  >
                    What are the costs of arbitration?
                  </button>
                </h2>
                <div
                  ref={(el) => (contentRef.current[3] = el)}
                  id="collapseFour"
                  className={`accordion-collapse collapse ${
                    activeIndex === 4 ? "show" : ""
                  }`}
                  aria-labelledby="headingFour"
                >
                  <div className="accordion-body">
                    The cost of arbitration includes arbitrators' fees,
                    administrative fees, and sometimes legal fees. While it can
                    be less expensive than litigation, costs vary depending on
                    the arbitrator and the complexity of the case.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className={`accordion-button ${
                      activeIndex === 5 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion(5)}
                    aria-expanded={activeIndex === 5}
                    aria-controls="collapseFive"
                  >
                    Is arbitration confidential?
                  </button>
                </h2>
                <div
                  ref={(el) => (contentRef.current[4] = el)}
                  id="collapseFive"
                  className={`accordion-collapse collapse ${
                    activeIndex === 5 ? "show" : ""
                  }`}
                  aria-labelledby="headingFive"
                >
                  <div className="accordion-body">
                    Yes, arbitration is typically a private process. Unlike
                    court cases, arbitration hearings are not open to the
                    public, and the details of the dispute and decision are
                    usually kept confidential.
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
