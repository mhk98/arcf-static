import React from "react";
import { Link } from "react-router-dom";
import m3 from "../../image/micocredit/Entrepreneurship-Program.jpg";
import m1 from "../../image/micocredit/Free-computer-training.jpg";
import m2 from "../../image/micocredit/Free-sewing-training.jpg";
const MicroCredit = () => {
  return (
    <div>
      {/*Page Header Start*/}
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
                <span className="ms-2">/</span>
              </li>
              <li className="active">Pages</li>
            </ul>
            <h2>Microcredit Program</h2>
          </div>
        </div>
      </section>

      {/*Page Header End*/}

      <Link to="/projects">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#FBD45A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
            }}
          >
            <i
              style={{
                fontSize: "25px",
                color: "black",
                cursor: "pointer",
              }}
              className="icon-left-arrow"
            />
          </div>
        </div>
      </Link>
      <section className="product-details">
        <div className="container">
          <div className="row" style={{ alignItems: "center", gap: "50px" }}>
            <div className="col-lg-6 col-xl-4">
              <div className="product-details__img">
                <img
                  src="assets/images/shop/product-details-img-1.webp"
                  alt
                  style={{ width: 370, height: 382 }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="product-details__top">
                <h3 className="product-details__title">
                  Education and Child Development Program
                </h3>
              </div>
              <div className="product-details__reveiw" />
              <div className="product-details__content">
                <p className="product-details__content-text1">
                  Dive into the heart of impactful change with ARC Foundation
                  Events. Our events serve as powerful platforms for bringing
                  communities together in the spirit of empowerment, education,
                  and sustainable development. From engaging workshops to
                  thought-provoking symposiums, each event is a catalyst for
                  positive transformation. Discover a space where like-minded
                  individuals, partners, and supporters unite to amplify our
                  mission. Whether it's a fundraiser, awareness campaign, or
                  collaborative initiative, ARC Foundation Events offer a
                  dynamic showcase of our commitment to creating lasting impact.
                  Join us at these inspiring gatherings as we collectively
                  strive to build a brighter, more inclusive future for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Team One Start*/}
      <section className="team-one">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <Link to="/micro-details">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/micro-details">
                      <img src={m1} alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Free Computer Training</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/micro-details">Free Computer Training</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      Free computer training is provided for the skill
                      development of the Educated and Unemployed population with
                      a view to converting them into public resources.
                      <span className="ms-2">
                        <Link
                          to="/micro-details"
                          style={{ fontWeight: "bold" }}
                        >
                          see more...
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <Link to="/micro-details">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/micro-details">
                      <img src={m2} alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Free Sewing Training</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/micro-details">Free Sewing Training</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      Free sewing training is given to women to make them
                      self-reliant. And to improve the meaning of life by
                      increasing the employment of women by providing free
                      sewing machines.
                      <span className="ms-2">
                        <Link
                          to="/micro-details"
                          style={{ fontWeight: "bold" }}
                        >
                          see more...
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <Link to="/micro-details">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/micro-details">
                      <img src={m3} alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Entrepreneurship Program</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/micro-details">Entrepreneurship Program</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      A small entrepreneurship program for disadvantaged working
                      men and women to succeed in life through their developed
                      skills and financial support to entrepreneurs.
                      <span className="ms-2">
                        <Link
                          to="/micro-details"
                          style={{ fontWeight: "bold" }}
                        >
                          see more...
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*Team One End*/}
    </div>
  );
};

export default MicroCredit;
