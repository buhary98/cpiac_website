import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./WorkFlow.css";

const WorkFlow = () => {
  const [popupContent, setPopupContent] = useState(null);
  const popupRef = useRef(null);
  const workflowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const workflowItems = Array.from(
        workflowRef.current.querySelectorAll("li")
      );
      const windowHeight = window.innerHeight;

      const isScrollIntoView = (elem) => {
        const docViewTop = window.scrollY;
        const docViewBottom = docViewTop + windowHeight;
        const elemTop = elem.getBoundingClientRect().top + docViewTop;
        const elemBottom = elemTop + windowHeight * 0.67;

        if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        }
      };

      workflowItems.forEach(isScrollIntoView);
    };

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupContent(null);
      }
    };
    if (popupContent !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [popupContent]);

  const workFlowPopupVariant = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="workflow-section section-padding" id="How it works">
      <div className="section-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white mb-4">How does it work?</h2>
          </div>
          <div className="col-lg-10 col-12 mx-auto">
            <div className="workflow-container">
              <ul
                className="vertical-scrollable-workflow"
                ref={workflowRef}
                id="vertical-scrollable-workflow"
              >
                <li>
                  <div className="icon-holder">
                    <i className="fa-regular fa-handshake"></i>
                  </div>
                  <div className="cont">
                    <h4 className="text-white mb-3">Agreement to Arbitrate</h4>
                    <p className="text-white">
                      Parties agree to resolve disputes through arbitration,
                      typically outlined in a contract clause. This agreement
                      specifies the process, including selecting arbitrators and
                      rules, replacing the need for court litigation with a
                      private process.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-holder">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="cont">
                    <h4 className="text-white mb-3">Choosing Arbitrators</h4>
                    <p className="text-white">
                      A neutral arbitrator or panel, often selected for their
                      expertise, is chosen by mutual agreement or appointed by
                      an arbitration institution. This ensures a fair, impartial
                      decision-maker for the dispute resolution process,
                      maintaining transparency.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-holder">
                    <i className="fa-regular fa-file-lines"></i>
                  </div>
                  <div className="cont">
                    <h4 className="text-white mb-3">
                      Submission of Evidence and Arguments
                    </h4>
                    <p className="text-white">
                      Both parties submit their claims, defenses, and evidence,
                      including contracts, documents, and witness statements.
                      The arbitrator reviews all submissions, ensuring each
                      side’s arguments and supporting materials are understood
                      before the hearing.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-holder">
                    <i className="fa-solid fa-gavel"></i>
                  </div>
                  <div className="cont">
                    <h4 className="text-white mb-3">The Arbitration Hearing</h4>
                    <p className="text-white">
                      At the hearing, both parties present their cases,
                      including arguments, evidence, and witness testimony. The
                      arbitrator asks questions to clarify issues, and the
                      process is typically more informal and flexible than
                      traditional court proceedings.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-holder">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div className="cont">
                    <h4 className="text-white mb-3">Final Award</h4>
                    <p className="text-white">
                      After reviewing the evidence and hearing the arguments,
                      the arbitrator makes a final, binding decision, known as
                      the award. The decision is typically enforceable by law
                      and offers limited options for appeal, providing a clear
                      resolution to the dispute.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 text-center mt-5 d-flex justify-content-center align-items-center learn-mroe-btn">
            <p className="text-white m-0">Want to learn more?</p>
            <div
              className="custom-btn custom-border-btn"
              onClick={() => setPopupContent()}
              style={{ cursor: "pointer" }}
            >
              Check out Here
            </div>
          </div>
        </div>
      </div>
      {popupContent !== null && (
        <motion.div
          className="popup-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={workFlowPopupVariant}
        >
          <div className="popup-content" ref={popupRef}>
            <button
              className="close-button"
              onClick={() => setPopupContent(null)}
            >
              &times;
            </button>
            <div
              className="popup-inner container"
              variants={workFlowPopupVariant}
            >
              <div className="workflow-content">
                <h3>Arbitration Process Explained</h3>
                <div>
                  <h4>Agreement to Arbitrate</h4>
                  <h6>Arbitration Clause</h6>
                  <p>
                    In most cases, arbitration begins because the parties have a
                    pre-existing arbitration clause in their contract, which
                    requires disputes to be settled through arbitration rather
                    than litigation. This clause outlines how arbitrators will
                    be chosen and the rules governing the arbitration process.
                  </p>
                  <h6>Voluntary Arbitration</h6>
                  <p>
                    If no prior agreement exists, parties can still voluntarily
                    agree to arbitration after a dispute arises, bypassing court
                    proceedings.
                  </p>
                </div>
                <div>
                  <h4>Selection of Arbitrators</h4>
                  <h6>Single Arbitrator or Panel</h6>
                  <p>
                    Arbitration can be conducted by a single arbitrator or a
                    panel of arbitrators (typically three). The parties may
                    agree on who will serve as arbitrator(s), or an arbitration
                    institution may provide a list of qualified arbitrators.
                  </p>
                  <h6>Qualifications</h6>
                  <p>
                    Arbitrators are often experts in the relevant field (e.g.,
                    commercial law, construction, finance) to ensure an informed
                    decision. They are selected for their impartiality and
                    expertise.
                  </p>
                </div>
                <div>
                  <h4>Arbitration Rules and Procedures</h4>
                  <h6>Institutional vs. Ad Hoc Arbitration</h6>
                  <p>
                    Arbitration can be administered by an established
                    institution (e.g., ICC, AAA, HKIAC) with formal rules, or it
                    can be ad hoc, where parties and arbitrators create their
                    own process based on agreements or industry standards.
                  </p>
                  <h6>Arbitration Rules</h6>
                  <p>
                    Institutions provide a set of rules governing everything
                    from the appointment of arbitrators to the conduct of
                    hearings and submission of evidence. Commonly used rules
                    include the UNCITRAL Arbitration Rules or the ICC Rules.
                  </p>
                  <h6>Venue and Language</h6>
                  <p>
                    Parties often agree on the location (the "seat" of
                    arbitration) and the language in which arbitration will be
                    conducted.
                  </p>
                </div>
                <div>
                  <h4>Commencement of Arbitration</h4>
                  <h6>Notice of Arbitration</h6>
                  <p>
                    To begin the process, the claimant submits a Notice of
                    Arbitration to the other party and the arbitration
                    institution (if applicable). This document outlines the
                    dispute, the relief sought, and the basis for the claim.
                  </p>
                  <h6>Response to Notice</h6>
                  <p>
                    The respondent must reply within a set period, typically
                    detailing their defense and any counterclaims.
                  </p>
                </div>
                <div>
                  <h4>Preliminary Meetings and Timelines</h4>
                  <h6>Initial Hearing or Conference</h6>
                  <p>
                    The arbitrator(s) will often hold a preliminary meeting to
                    set out the procedural timetable, including deadlines for
                    submitting documents, witness statements, and the hearing
                    date.
                  </p>
                  <h6>Document Disclosure</h6>
                  <p>
                    Each party will exchange relevant documents that support
                    their claims or defenses. Unlike litigation, arbitration is
                    less formal, and discovery (evidence collection) is usually
                    limited in scope.
                  </p>
                </div>
                <div>
                  <h4>Submission of Evidence and Arguments</h4>
                  <h6>Written Statements</h6>
                  <p>
                    Both parties will submit written statements of their claims,
                    defenses, and evidence. This often includes witness
                    statements, expert reports, and documentary evidence such as
                    contracts and financial records.
                  </p>
                  <h6>Expert Witnesses</h6>
                  <p>
                    Depending on the nature of the dispute, parties may engage
                    expert witnesses to provide specialized opinions on
                    technical or complex issues, such as accounting,
                    engineering, or industry practices.
                  </p>
                </div>
                <div>
                  <h4>The Arbitration Hearing</h4>
                  <h6>Hearing Format</h6>
                  <p>
                    Arbitration hearings can take place in person, via video
                    conference, or a mix of both. During the hearing, each party
                    presents their arguments, evidence, and witnesses. The
                    process is less formal than court, with relaxed rules of
                    evidence.
                  </p>
                  <h6>Questioning Witnesses</h6>
                  <p>
                    Parties have the opportunity to question witnesses and
                    present rebuttals. The arbitrator(s) may also ask questions
                    to clarify certain points.
                  </p>
                  <h6>Final Submissions</h6>
                  <p>
                    After the evidence is presented, each party makes closing
                    submissions, summarizing their case and explaining why they
                    should prevail based on the facts and legal principles.
                  </p>
                </div>
                <div>
                  <h4>Deliberation and Award</h4>
                  <h6>Deliberation</h6>
                  <p>
                    After the hearing, the arbitrator(s) review the evidence and
                    arguments, deliberate privately, and reach a decision. In a
                    panel, decisions are typically by majority vote.
                  </p>
                  <h6>Arbitral Award</h6>
                  <p>
                    The final decision, called an "award," is issued in writing.
                    It includes the reasoning behind the decision, details of
                    any damages or remedies, and how the costs of arbitration
                    are to be allocated between the parties.
                  </p>
                  <h6>Binding Nature</h6>
                  <p>
                    The award is binding on the parties and enforceable in
                    court. Unlike court judgments, arbitration awards are final
                    and can only be appealed under very limited circumstances,
                    such as if there was evidence of bias or misconduct by the
                    arbitrator.
                  </p>
                </div>
                <div>
                  <h4>Enforcement of the Award</h4>
                  <h6>Recognition and Enforcement</h6>
                  <p>
                    Once the award is issued, the winning party may need to
                    enforce the award if the other party does not comply
                    voluntarily. Under international treaties like the New York
                    Convention, arbitration awards are enforceable in over 160
                    countries, making it easier to enforce across borders.
                  </p>
                  <h6>Court Involvement</h6>
                  <p>
                    While arbitration avoids most court involvement, parties may
                    approach the court to enforce the award or, in rare cases,
                    to challenge it if there are grounds (e.g., fraud, bias, or
                    procedural irregularities).
                  </p>
                </div>
                <div>
                  <h4>Costs of Arbitration</h4>
                  <h6>Arbitrators’ Fees</h6>
                  <p>
                    Arbitrators charge fees based on their time spent on the
                    case, and in some institutional arbitrations, the fees are
                    based on the amount in dispute.
                  </p>
                  <h6>Administrative Costs</h6>
                  <p>
                    Institutional arbitration involves administrative fees
                    charged by the arbitration body. These are often based on a
                    sliding scale depending on the size and complexity of the
                    case.
                  </p>
                  <h6>Legal and Expert Fees</h6>
                  <p>
                    Each party usually pays its own legal fees, although the
                    arbitrator may order the losing party to pay the prevailing
                    party’s costs, depending on the rules and circumstances.
                  </p>
                </div>
                <div>
                  <h4>Advantages of Arbitration</h4>
                  <h6>Speed</h6>
                  <p>
                    Arbitration is generally faster than litigation, avoiding
                    the lengthy timelines of court cases.
                  </p>
                  <h6>Confidentiality</h6>
                  <p>
                    Unlike court proceedings, arbitration is private, and the
                    details of the case are not publicly disclosed.
                  </p>
                  <h6>Expert Decision-Makers</h6>
                  <p>
                    Arbitrators are often specialists in the relevant field,
                    ensuring a more informed decision on technical matters.
                  </p>
                  <h6>Finality</h6>
                  <p>
                    Arbitration awards are binding and enforceable, with very
                    limited grounds for appeal, providing finality to the
                    dispute.
                  </p>
                </div>
                <div>
                  <h4>Disadvantages of Arbitration</h4>
                  <h6>Cost</h6>
                  <p>
                    Arbitration can be expensive, especially for complex cases
                    requiring multiple arbitrators or expert witnesses.
                  </p>
                  <h6>Limited Appeal Options</h6>
                  <p>
                    While finality is often an advantage, the lack of appeal
                    options can be a downside if the decision is unfavorable.
                  </p>
                  <h6>No Precedent</h6>
                  <p>
                    Arbitration decisions do not create legal precedents, which
                    means they may lack the predictability of court decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default WorkFlow;
