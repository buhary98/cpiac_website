import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { createClient } from "contentful";

import FeatureBg from "../../assets/images/service.png";
import TopicImg1 from "../../assets/images/about.png";

import "./Feature.css";

const Feature = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const popupRef = useRef(null);

  const client = createClient({
    space: "3tvfrrjmp3fa",
    environment: "master",
    accessToken: "46iNHGr3UmpPYaEQMtn-_N3ZSqYVHat5SZEEKpgirfQ",
  });

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await client.getEntries({
          content_type: "arbitrationServices",
          order: "sys.createdAt",
        });
        setService(response.items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchService();
  }, [client]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupContent(null);
      }
    };
    if (popupContent !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupContent]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching news: {error.message}</div>;

  const aboutPopupVariant = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        staggerChildren: 0.2,
      },
    },
  };

  const servicePopupVariant = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="featured-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12 mb-4 mb-lg-0">
            <div className="features-custom-block bg-white shadow-lg">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setPopupContent("whoWeAre")}
              >
                <div className="d-flex">
                  <div>
                    <h5 className="mb-2">Who We Are?</h5>
                    <p className="mb-0">
                      We resolve disputes quickly and fairly through
                      arbitration, providing a simple and reliable process that
                      ensures clear results.
                    </p>
                  </div>
                </div>
                <img
                  src={TopicImg1}
                  className="features-custom-block-image img-fluid"
                  alt=""
                />
              </div>
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
                    <h5 className="text-white mb-2">How We Help?</h5>
                    <p className="text-white">
                      We offer a range of arbitration services designed to
                      resolve disputes efficiently and fairly. Our expert team
                      is dedicated to providing clear solutions tailored to your
                      needs, ensuring a smooth process from start to finish.
                    </p>
                    <button
                      onClick={() => setPopupContent("learnMore")}
                      className="custom-btn mt-2 mt-lg-3"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                {/* <div className="social-share">
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
                </div> */}
                <div className="section-overlay"></div>
              </div>
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
          variants={
            popupContent === "whoWeAre"
              ? aboutPopupVariant
              : servicePopupVariant
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="popup-content" ref={popupRef}>
            <button
              className="close-button"
              onClick={() => setPopupContent(null)}
            >
              &times;
            </button>
            <div className="popup-inner container">
              <div className={popupContent === "whoWeAre" ? "descp" : "descp service-decp"}>
                {popupContent === "whoWeAre" && (
                  <>
                    <h4>Our Story</h4>
                    <p>
                      The China-Pakistan Economic Corridor (CPEC) is a project
                      that has the potential to transform the geopolitical
                      landscape of Asia and reshape the economic perspective of
                      the countries in the region. It is expected to create many
                      opportunities for the entire region by boosting economic
                      activities, increasing trade linkages, promoting joint
                      ventures, creating new financial prospects, and enhancing
                      socio-cultural interactions among people in the region.
                      The implementation of this comprehensive investment could
                      bring economic and financial opportunities that can change
                      the fate of the regional states. Therefore, they must
                      enter into multilateral agreements to support their
                      economies and provide investment security and dispute
                      settlement systems.
                      <br />
                      <br />
                      Despite its many advantages, the implementation of CPEC is
                      facing several challenges due to the conflicting interests
                      of some regional and non-regional actors. However, in
                      2020, the China-Pakistan International Arbitration Centre
                      was established to facilitate dispute resolution for
                      investment disputes in CPEC projects. The project was
                      temporarily delayed due to the COVID-19 pandemic, but
                      concrete steps are now being taken to get it started in
                      full swing. With the determination and perseverance of all
                      stakeholders, CPEC can become a reality, and the region
                      can reap the benefits of this transformative investment.
                    </p>
                  </>
                )}

                {popupContent === "learnMore" && (
                  <>
                    <h4>Our Specialties</h4>
                    <div className="service-container">
                      {service.map((item) => (
                        <div key={item.sys.id} className="service-item">
                          <div className="service-card">
                            <h5>{item.fields.heading}</h5>
                            <p className="service-content">
                              {item.fields.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Feature;
