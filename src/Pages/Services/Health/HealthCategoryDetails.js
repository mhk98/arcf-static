import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { useGetSinglehealthCategoryDetailsQuery } from "../../../Redux/features/healthCategoryDetails/healthCategoryDetails";
import headerBanner from "../../../image/health/page-header-bg.jpg";
const HealthCategoryDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } =
    useGetSinglehealthCategoryDetailsQuery(id);
  const [healthDetails, setHealthDetails] = useState("");

  useEffect(() => {
    if (isError) {
      console.error("Error fetching projects data", error);
    } else if (!isLoading) {
      if (data) {
        setHealthDetails(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  return (
    <div>
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage: `url(${headerBanner})`,
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
            <h2>Free Friday Clinic</h2>
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
                      src={`http://localhost:5000//${healthDetails.image}`}
                      alt=""
                    />
                    <div className="donation-details__date">
                      <p>Health</p>
                    </div>
                  </div>
                  <div className="donation-details__content">
                    <h3 className="donation-details__title">
                      {healthDetails.title}
                    </h3>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: healthDetails.attributeName,
                      }}
                    />
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
                {/* <div className="sidebar__post">
                  <div
                    className="sidebar-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/sidebar-shape-1.png)",
                    }}
                  />
                  <h3 className="sidebar__title">Latest posts</h3>
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
                </div> */}
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

export default HealthCategoryDetails;
