import React from "react";
import { Link } from "react-router-dom";

const EventDetails = () => {
  return (
    <div>
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="active">Pages</li>
            </ul>
            <h2>Events</h2>
          </div>
        </div>
      </section>
      {/*Event Details Start*/}
      <section className="event-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="event-details__left">
                <div className="event-details__top">
                  <div className="event-details__date">
                    <p>23 May, 2022</p>
                  </div>
                  <h3 className="event-details__title">Play for the world</h3>
                  <p className="event-details__text-1">
                    Neque porro est qui dolorem ipsum quia quaed inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Aelltes port lacus quis enim var sed efficitur
                    turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                  </p>
                  <p className="event-details__text-2">
                    Biophilia is the idea that humans possess an innate tendency
                    to seek connections with nature. The term translates
                  </p>
                  <p className="event-details__text-3">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. Aelltes port
                    lacus quis enim var sed efficitur turpis gilla sed sit amet
                    finibus eros.
                  </p>
                </div>
                <div className="event-details__img-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="event-details__img-single">
                        <img
                          src="assets/images/events/event-details-img-1.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="event-details__img-single">
                        <img
                          src="assets/images/events/event-details-img-2.jpg"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="event-details__bottom">
                  <p className="event-details__text-4">
                    Neque porro est qui dolorem ipsum quia quaed inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Aelltes port lacus quis enim var sed efficitur
                    turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                  </p>
                  <p className="event-details__text-5">
                    Biophilia is the idea that humans possess an innate tendency
                    to seek connections with nature. The term translates
                  </p>
                  <p className="event-details__text-6">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. Aelltes port
                    lacus quis enim var sed efficitur turpis gilla sed sit amet
                    finibus eros. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                  {/* <div className="event-details__btn-box">
                    <a
                      href="contact.html"
                      className="thm-btn event-details__btn"
                    >
                      Register yourself
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                {/* <div className="sidebar__single sidebar__search">
              <form action="#" className="sidebar__search-form">
                <input type="search" placeholder="Search here" />
                <button type="submit"><i className="icon-magnifying-glass" /></button>
              </form>
            </div> */}
                <div className="sidebar__single sidebar__post">
                  <div
                    className="sidebar-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/sidebar-shape-1.png)",
                    }}
                  />
                  <h3 className="sidebar__title">Latest Events</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-1.jpg" alt />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle" /> By admin
                          </span>
                          <a href="news-details.html">
                            Promoting the rights of children
                          </a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-2.jpg" alt />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle" /> By admin
                          </span>
                          <a href="news-details.html">
                            There are many variations of
                          </a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-3.jpg" alt />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle" /> By admin
                          </span>
                          <a href="news-details.html">
                            Bring to the table win-win survival
                          </a>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Event Details End*/}
    </div>
  );
};

export default EventDetails;
