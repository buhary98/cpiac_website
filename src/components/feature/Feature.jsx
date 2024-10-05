import React from "react";

import FeatureBg from "../../assets/images/businesswoman-using-tablet-analysis.jpg";
import TopicImg1 from "../../assets/images/topics/undraw_Remote_design_team_re_urdx.png";

import "./Feature.css";

const Feature = () => {
  return (
    <section className="featured-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12 mb-4 mb-lg-0">
            <div className="features-custom-block bg-white shadow-lg">
              <a href="topics-detail.html">
                <div className="d-flex">
                  <div>
                    <h5 className="mb-2">Web Design</h5>
                    <p className="mb-0">
                      When you search for free CSS templates, you will notice
                      that TemplateMo is one of the best websites.
                    </p>
                  </div>
                  <span className="badge bg-design rounded-pill ms-auto">
                    14
                  </span>
                </div>
                <img
                  src={TopicImg1}
                  className="features-custom-block-image img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="features-custom-block features-custom-block-overlay">
              <div className="d-flex flex-column h-100">
                <img
                  src={FeatureBg}
                  className="features-custom-block-image img-fluid"
                  alt=""
                />
                <div className="features-custom-block-overlay-text d-flex">
                  <div>
                    <h5 className="text-white mb-2">Finance</h5>
                    <p className="text-white">
                      Topic Listing Template includes homepage, listing page,
                      detail page, and contact page. You can feel free to edit
                      and adapt for your CMS requirements.
                    </p>
                    <a
                      href="topics-detail.html"
                      className="custom-btn mt-2 mt-lg-3"
                    >
                      Learn More
                    </a>
                  </div>
                  <span className="badge bg-finance rounded-pill ms-auto">
                    25
                  </span>
                </div>
                <div className="social-share">
                  <p className="text-white me-4">Share:</p>
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-twitter"></a>
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-facebook"></a>
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-pinterest"></a>
                    </li>
                  </ul>
                  <a href="#" className="custom-icon bi-bookmark ms-auto"></a>
                </div>
                <div className="section-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
