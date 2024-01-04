import React from "react";
import banner from "../../image/health/Health-Awareness-&-Medical-Details.jpg";

const DonateDetails = () => {
  return (
    <div>
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage: `url(assets/images/backgrounds/Free-friday-clinic-Details.jpg)`,
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
                    <img src={banner} alt="" />
                    <div className="donation-details__date">
                      <p>Health</p>
                    </div>
                  </div>
                  <div className="donation-details__content">
                    <h3 className="donation-details__title">
                      Let’s education for children get good life
                    </h3>
                    <p className="donation-details__text">
                      In a world marked by health disparities, ARC Foundation's
                      Health Care Program emerges as a catalyst for change,
                      championing the belief that quality healthcare is a
                      fundamental right for all. This initiative is a proactive
                      response to health inequities, providing accessible
                      medical services and specialized treatments for vulnerable
                      populations.
                    </p>
                    <p className="donation-details__text">
                      Emphasizing preventive healthcare, the program conducts
                      awareness campaigns and educational initiatives to empower
                      individuals to take charge of their well-being. Financial
                      support is extended for critical treatments, ensuring that
                      those facing life-threatening conditions receive care
                      without added economic strain.
                    </p>
                    <p className="donation-details__text">
                      ARC Foundation actively engages with communities through
                      collaborations with local healthcare providers, awareness
                      workshops, and community health drives. These efforts
                      foster a sense of collective responsibility for
                      well-being.
                    </p>
                    <p className="donation-details__text">
                      The blog shares impactful stories of individuals whose
                      lives have been transformed through the Health Care
                      Program, highlighting real-world impact. Readers are
                      invited to become part of the movement by exploring
                      volunteer opportunities within the program, contributing
                      to the creation of healthier communities.
                    </p>
                    <p className="donation-details__text">
                      As the Health Care Program evolves, ARC Foundation
                      envisions expanding its reach, introducing innovative
                      healthcare solutions, and advocating for policies that
                      prioritize health equity. The program stands as a
                      testament to the organization's commitment to creating a
                      healthier, more equitable world, where well-being knows no
                      boundaries. Join the journey towards a healthier, happier
                      world.
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
                  <h3 className="sidebar__title">Latest health posts</h3>
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
                <div className="donation-details__sidebar-shaare-cause">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Donation Details End*/}
    </div>
  );
};

export default DonateDetails;
