import React, { useEffect, useRef } from "react";
import "./TimeLine.css";

const TimeLine = () => {
  const timelineRef = useRef(null);
  //   const listProgressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = Array.from(
        timelineRef.current.querySelectorAll("li")
      );
      const windowHeight = window.innerHeight;

      const isScrollIntoView = (elem) => {
        const docViewTop = window.scrollY;
        const docViewBottom = docViewTop + windowHeight;
        const elemTop = elem.getBoundingClientRect().top + docViewTop;
        const elemBottom = elemTop + windowHeight * 0.5;

        if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        }

        /* const mainTimelineContainerBottom =
          timelineRef.current.getBoundingClientRect().bottom -
          windowHeight * 0.5;

        if (listProgressRef.current) {
          listProgressRef.current.style.height = `${mainTimelineContainerBottom}px`;
        } */
      };

      timelineItems.forEach(isScrollIntoView);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="timeline-section section-padding" id="How it works">
      <div className="section-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white mb-4">How does it work?</h2>
          </div>
          <div className="col-lg-10 col-12 mx-auto">
            <div className="timeline-container">
              <ul
                className="vertical-scrollable-timeline"
                ref={timelineRef}
                id="vertical-scrollable-timeline"
              >
                {/* <div className="list-progress" ref={listProgressRef}>
                  <div className="inner"></div>
                </div> */}
                <li>
                  <div className="icon-holder">
                    <i className="bi-search"></i>
                  </div>
                  <div className="cont">
                    <h4 className="text-white mb-3">
                      Search your favourite topic
                    </h4>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis, cumque magnam? Sequi, cupiditate quibusdam
                      alias illum sed esse ad dignissimos libero sunt, quisquam
                      numquam aliquam? Voluptas, accusamus omnis?
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-holder">
                    <i className="bi-bookmark"></i>
                  </div>
                  <div className="cont">
                    <h4 className="text-white mb-3">
                      Bookmark &amp; Keep it for yourself
                    </h4>
                    <p className="text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sint animi necessitatibus aperiam repudiandae nam omnis
                      est vel quo, nihil repellat quia velit error modi earum
                      similique odit labore. Doloremque, repudiandae?
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-holder">
                    <i className="bi-book"></i>
                  </div>
                  <div className="cont">
                    <h4 className="text-white mb-3">Read &amp; Enjoy</h4>
                    <p className="text-white">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Animi vero quisquam, rem assumenda similique voluptas
                      distinctio, iste est hic eveniet debitis ut ducimus beatae
                      id? Quam culpa deleniti officiis autem?
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 text-center mt-5">
            <p className="text-white">
              Want to learn more?
              <a href="#" className="custom-btn custom-border-btn">
                Check out Youtube
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
