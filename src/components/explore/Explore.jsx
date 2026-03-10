import { useState, useEffect } from "react";

import ArbitrationImg1 from "../../assets/images/arbitration_1.png";
import ArbitrationImg2 from "../../assets/images/arbitration_2.png";
import ArbitrationImg3 from "../../assets/images/arbitration_3.png";

import MediationImg1 from "../../assets/images/mediation_1.png";
import MediationImg2 from "../../assets/images/mediation_2.png";
import MediationImg3 from "../../assets/images/mediation_3.png";

import AdjudicationImg1 from "../../assets/images/adjudication_1.png";
import AdjudicationImg2 from "../../assets/images/adjudication_2.png";
import AdjudicationImg3 from "../../assets/images/adjudication_3.png";

// import MusicImg1 from "../../assets/images/topics/undraw_Compose_music_re_wpiw.png";
// import MusicImg3 from "../../assets/images/topics/undraw_Podcast_audience_re_4i5q.png";

// import EducationImg1 from "../../assets/images/topics/undraw_Graduation_re_gthn.png";
// import EducationImg2 from "../../assets/images/topics/undraw_Educator_re_ju47.png";

import "./Explore.css";

const Explore = () => {
  const [activeTab, setActiveTab] = useState("arbitration");
  const [fadeIn, setFadeIn] = useState(false);

  const topicsData = {
    arbitration: [
      {
        title: "Arbitration Protocol",
        description:
          "Explore CPIAC's innovative arbitration rules, crafted to ensure the efficient resolution of international disputes, particularly those arising from complex transactions, through a fair and transparent process.",
        imgSrc: ArbitrationImg1,
      },
      {
        title: "Preferred Clauses",
        description:
          "Access CPIAC's model clauses to streamline your arbitration agreements. Adopt the recommended language to efficiently incorporate HKIAC's Rules or Procedures for smooth and effective dispute resolution.",
        imgSrc: ArbitrationImg2,
      },
      {
        title: "Choose an Arbitrator",
        description:
          "Choose an arbitrator from CPIAC's Panel of Arbitrators, featuring highly experienced professionals from the global arbitration community, ensuring expertise in resolving complex international disputes efficiently.",
        imgSrc: ArbitrationImg3,
      },
    ],
    mediation: [
      {
        title: "Mediation",
        description:
          "A consensual dispute resolution process where parties negotiate a private contractual settlement agreement, allowing them to resolve their differences amicably without involving external authorities.",
        imgSrc: MediationImg1,
      },
      {
        title: "Selection of Mediators",
        description:
          "The CPIAC can assist in appointing mediators if the parties cannot reach an agreement. For more information about the mediation process and available services, please click here to learn more.",
        imgSrc: MediationImg2,
      },
      {
        title: "Panel of Mediators",
        description:
          "CPIAC maintains a Panel of Mediators. Each mediator on the panel has met HKIAC's strict accreditation requirements, ensuring high standards of professionalism and effective dispute resolution.",
        imgSrc: MediationImg3,
      },
    ],
    adjudication: [
      {
        title: "Adjudication",
        description:
          "Adjudication is a dispute resolution process where a neutral third party reviews evidence and arguments, then issues a binding decision. Commonly used in construction and contract disputes.",
        imgSrc: AdjudicationImg1,
      },
      {
        title: "Adjudication Protocols",
        description:
          "It outline the procedures and standards for resolving disputes through adjudication, providing a structured framework to ensure fair, efficient, and timely decision-making, especially in complex cases.",
        imgSrc: AdjudicationImg2,
      },
      {
        title: "Adjudicators",
        description:
          "Adjudicators make binding decisions, commonly in construction disputes. Their rulings can often be reviewed later in another forum, like arbitration, providing added flexibility in resolving disputes.",
        imgSrc: AdjudicationImg3,
      },
    ],
  };

  const renderTabContent = (category) => {
    /* const isFullWidthCategory =
      (category === "finance" || category === "education") &&
      topicsData[category].length === 2; */

    return (
      <div
        className={`tab-pane ${fadeIn ? "show" : ""}`}
        style={{ display: fadeIn ? "block" : "hidden" }}
      >
        <div className="row">
          {topicsData[category].map((topic, index) => (
            <div
              /* className={`col-lg-${isFullWidthCategory ? "6" : "4"} col-md-${
                isFullWidthCategory ? "6" : "6"
              } col-12 mb-4`} */
              className="col-lg-4 col-md-6 col-12 mb-4"
              key={index}
            >
              <div className="custom-block bg-white shadow-lg">
                <div className="d-flex">
                  <div className="explore-container-text">
                    <h5 className="text-center mb-3">{topic.title}</h5>
                    <p className="text-center px-4 mb-0">{topic.description}</p>
                  </div>
                </div>
                <img
                  src={topic.imgSrc}
                  className="custom-block-image img-fluid"
                  alt={topic.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="explore-section section-padding" id="Browse Topics">
      <div className="container text-center">
        <h2 className="mb-4">Browse Topics</h2>
        <ul className="nav nav-tabs" role="tablist">
          {Object.keys(topicsData).map((category) => (
            <li className="nav-item" key={category}>
              <button
                className={`nav-link ${activeTab === category ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(category);
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="container">{renderTabContent(activeTab)}</div>
    </section>
  );
};

export default Explore;
