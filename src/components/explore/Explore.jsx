import { useState, useEffect } from "react";

import DesignImg1 from "../../assets/images/topics/undraw_Remote_design_team_re_urdx.png";
import DesignImg2 from "../../assets/images/topics/undraw_Redesign_feedback_re_jvm0.png";
import DesignImg3 from "../../assets/images/topics/colleagues-working-cozy-office-medium-shot.png";

import MarketingImg1 from "../../assets/images/topics/undraw_online_ad_re_ol62.png";
import MarketingImg2 from "../../assets/images/topics/undraw_Group_video_re_btu7.png";
import MarketingImg3 from "../../assets/images/topics/undraw_viral_tweet_gndb.png";

import FinanceImg1 from "../../assets/images/topics/undraw_Finance_re_gnv2.png";
import FinanceImg2 from "../../assets/images/topics/undraw_Redesign_feedback_re_jvm0.png";

import MusicImg1 from "../../assets/images/topics/undraw_Compose_music_re_wpiw.png";
import MusicImg2 from "../../assets/images/topics/undraw_happy_music_g6wc.png";
import MusicImg3 from "../../assets/images/topics/undraw_Podcast_audience_re_4i5q.png";

import EducationImg1 from "../../assets/images/topics/undraw_Graduation_re_gthn.png";
import EducationImg2 from "../../assets/images/topics/undraw_Educator_re_ju47.png";

import "./Explore.css";

const Explore = () => {
  const [activeTab, setActiveTab] = useState("design");
  const [fadeIn, setFadeIn] = useState(false);

  const topicsData = {
    design: [
      {
        title: "Web Design",
        description: "Topic Listing Template based on Bootstrap 5",
        badge: "14",
        imgSrc: DesignImg1,
      },
      {
        title: "Graphic",
        description: "Lorem Ipsum dolor sit amet consectetur",
        badge: "75",
        imgSrc: DesignImg2,
      },
      {
        title: "Logo Design",
        description: "Lorem Ipsum dolor sit amet consectetur",
        badge: "100",
        imgSrc: DesignImg3,
      },
    ],
    marketing: [
      {
        title: "Advertising",
        description: "Lorem Ipsum dolor sit amet consectetur",
        badge: "30",
        imgSrc: MarketingImg1,
      },
      {
        title: "Video Content",
        description: "Lorem Ipsum dolor sit amet consectetur",
        badge: "65",
        imgSrc: MarketingImg2,
      },
      {
        title: "Viral Tweet",
        description: "Lorem Ipsum dolor sit amet consectetur",
        badge: "50",
        imgSrc: MarketingImg3,
      },
    ],
    finance: [
      {
        title: "Investment",
        description: "Lorem Ipsum dolor sit amet consectetur",
        badge: "30",
        imgSrc: FinanceImg1,
      },
      {
        title: "Finance",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis",
        badge: "25",
        imgSrc: FinanceImg2,
      },
    ],
    music: [
      {
        title: "Composing Song",
        description: "Lorem Ipsum dolor sit amet consectetur",
        badge: "45",
        imgSrc: MusicImg1,
      },
      {
        title: "Online Music",
        description: "Lorem Ipsum dolor sit amet consectetur",
        badge: "45",
        imgSrc: MusicImg2,
      },
      {
        title: "Podcast",
        description: "Lorem Ipsum dolor sit amet consectetur",
        badge: "20",
        imgSrc: MusicImg3,
      },
    ],
    education: [
      {
        title: "Graduation",
        description: "Lorem Ipsum dolor sit amet consectetur",
        badge: "80",
        imgSrc: EducationImg1,
      },
      {
        title: "Educator",
        description: "Lorem Ipsum dolor sit amet consectetur",
        badge: "75",
        imgSrc: EducationImg2,
      },
    ],
  };

  const renderTabContent = (category) => {
    const isFullWidthCategory =
      (category === "finance" || category === "education") &&
      topicsData[category].length === 2;

    return (
      <div
        className={`tab-pane ${fadeIn ? "show" : ""}`}
        style={{ display: fadeIn ? "block" : "hidden" }}
      >
        <div className="row">
          {topicsData[category].map((topic, index) => (
            <div
              className={`col-lg-${isFullWidthCategory ? "6" : "4"} col-md-${
                isFullWidthCategory ? "6" : "6"
              } col-12 mb-4`}
              key={index}
            >
              <div className="custom-block bg-white shadow-lg">
                <a href="topics-detail.html">
                  <div className="d-flex">
                    <div>
                      <h5 className="mb-2">{topic.title}</h5>
                      <p className="mb-0">{topic.description}</p>
                    </div>
                    <span
                      className={`badge rounded-pill ms-auto bg-${category.toLowerCase()}`}
                    >
                      {topic.badge}
                    </span>
                  </div>
                  <img
                    src={topic.imgSrc}
                    className="custom-block-image img-fluid"
                    alt={topic.title}
                  />
                </a>
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
