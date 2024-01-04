import React from "react";
import { Link } from "react-router-dom";
import q1 from "../../image/quality-life/Human-Aid.jpg";
import q5 from "../../image/quality-life/Improving-Quality-Of-Life--Banner-.jpg";
import q4 from "../../image/quality-life/Improving-Quality-Of-Life.jpg";
import q3 from "../../image/quality-life/Support-for-Making-House.jpg";
import q2 from "../../image/quality-life/Support-permanently-disabled.jpg";
const QualityLife = () => {
  return (
    <div>
      {/*Page Header Start*/}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage: `url(${q5})`,
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
            <h2>Men & Women </h2>
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
            <div className="col-lg-6 col-xl-4">
              <div className="product-details__img">
                <img src={q4} alt style={{ width: 370, height: 382 }} />
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
              <Link to="/quality-life-details">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/quality-life-details">
                      <img src={q1} alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Human Aid</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/quality-life-details">Human Aid</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      Regular food, and winter clothing among the helpless,
                      destitute, and orphaned children, and always standing by
                      natural disasters.
                      <span className="ms-2">
                        <Link
                          to="/quality-life-details"
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
              <Link to="/quality-life-details">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/quality-life-details">
                      <img src={q2} alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Provide support</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/quality-life-details">
                        Support permanently disabled
                      </Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      Financial support initiative for old age people or
                      permanently disabled persons to survive and meet their
                      basic needs.
                      <span className="ms-2">
                        <Link
                          to="/quality-life-details"
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
              <Link to="/quality-life-details">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/quality-life-details">
                      <img src={q3} alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Making House</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/quality-life-details">
                        Support for Making House
                      </Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      Helped with manpower and money to build houses for the
                      poor, helpless and the homeless affected by natural
                      calamities.
                      <span className="ms-2">
                        <Link
                          to="/quality-life-details"
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

export default QualityLife;
