import React from "react";

const EducationDetails = () => {
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
                <a href="/">Home</a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="active">Pages</li>
            </ul>
            <h2>Projects</h2>
          </div>
        </div>
      </section>
      {/*Donation Details Start*/}
      <section className="donation-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="donation-details__left">
                <div className="donation-details__top">
                  <div className="donation-details__img">
                    <img
                      src="assets/images/resources/donation-details-img-1.jpg"
                      alt=""
                    />
                    <div className="donation-details__date">
                      <p>Medical</p>
                    </div>
                  </div>
                  <div className="donation-details__content">
                    <h3 className="donation-details__title">
                      Let’s education for children get good life
                    </h3>
                    <p className="donation-details__text">
                      Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                      phaedrum. There are many variations of passages of Lorem
                      Ipsum available, but the majority have alteration in some
                      injected or words which don't look even slightly
                      believable. If you are going to use a passage of Lorem
                      Ipsum, you need to be sure there isn't anything embarrang
                      hidden in the middle of text. All the Lorem Ipsum
                      generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first true generator
                      on the Internet. It uses a dictionary of over 200 Latin
                      words, combined with a handful of model sentence
                      structures, to generate Lorem Ipsum which looks
                      reasonable.{" "}
                    </p>
                  </div>
                </div>
                <div className="donation-details__donate">
                  <div
                    className="donation-details__donate-shape"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/donation-details-donate-shape.png)",
                    }}
                  ></div>
                  <div className="donation-details__donate-left">
                    <ul className="list-unstyled donation-details__donate-list">
                      <li>
                        <div className="icon">
                          <span className="icon-solidarity" />
                        </div>
                        <div className="text">
                          <span>Raised</span>
                          <p>$25,270</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-target-1" />
                        </div>
                        <div className="text">
                          <span>Goal</span>
                          <p>$30,000</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="donation-details__donate-btn">
                    <a href="/donate-now" className="thm-btn">
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="donation-details__sidebar">
                <div className="sidebar__post">
                  <div
                    className="sidebar-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/sidebar-shape-1.png)",
                    }}
                  />
                  <h3 className="sidebar__title">Latest Education Project</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-1.jpg" alt="" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle" /> By admin
                          </span>
                          <a href="news-details.html">
                            Night School for Working and Street Children
                          </a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-2.jpg" alt="" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle" /> By admin
                          </span>
                          <a href="news-details.html">Education Scholarship</a>
                        </h3>
                      </div>
                    </li>

                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-3.jpg" alt="" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle" /> By admin
                          </span>
                          <a href="news-details.html">
                            Free Books and Other Educational Goods Distribution
                          </a>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <div className="donation-details__sidebar-shaare-cause">
                  <div
                    className="sidebar-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/sidebar-shape-1.png)",
                    }}
                  />
                  <h3 className="donation-details__sidebar-shaare-cause-title">
                    Share
                  </h3>
                  <div className="donation-details__sidebar-shaare-cause-social">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Donation Details End*/}
    </div>
  );
};

export default EducationDetails;
