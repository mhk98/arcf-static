import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllFaqQuery } from "../../Redux/features/faq/faq";
import banner from "../../image/about-us/about-banner.jpg";
import developmentDirector from "../../image/about-us/development-director.jpg";
import adirector from "../../image/about-us/director-administrator.jpg";
import edudirector from "../../image/about-us/education-director.jpg";
import { default as exdirector } from "../../image/about-us/executive-director.jpg";
import fdirector from "../../image/about-us/finance-director.jpg";
import foreignDirector from "../../image/about-us/foreign-appears.jpg";
import founder from "../../image/about-us/founder.jpg";
import hdirector from "../../image/about-us/health-director.jpg";
import md from "../../image/about-us/managing-director.jpg";
import pdirector from "../../image/about-us/project-director.jpg";
import pbdirector from "../../image/about-us/public-relation-director.jpg";
import welfareDirector from "../../image/about-us/social-welfare-director.jpg";
import t1 from "../../image/about-us/t1.jpg";
import t2 from "../../image/about-us/t2.jpg";
import t3 from "../../image/about-us/t3.jpg";
import t4 from "../../image/about-us/t4.jpg";
import vchairman from "../../image/about-us/vice-chairman.jpg";
import v1 from "../../image/volunteer/v1.jpg";
import v2 from "../../image/volunteer/v2.jpg";

import "./About.css";
const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const [faqes, setFaqes] = useState([]);
  const {
    data: faqData,
    isLoading: faqLoading,
    isError: faqError,
    error: error1,
  } = useGetAllFaqQuery();

  useEffect(() => {
    if (faqError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching cart data:", error1);
    } else if (!faqLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (faqData && faqData.data) {
        setFaqes(faqData.data);
      }
    }
  }, [faqData, faqLoading, faqError, error1]);

  console.log("faq", faqes);

  const handleMenuClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <div>
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              // "url(assets/images/backgrounds/About-Us-top-banner.jpg)",
              `url(${banner})`,
          }}
        />
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/" onClick={() => handleMenuClick()}>
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="active">Pages</li>
            </ul>
            <h2>About us</h2>
          </div>
        </div>
      </section>

      {/*About Four Start*/}
      <section className="about-four">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-four__left">
                <div className="about-four__img-box">
                  <div className="about-four__img">
                    <img
                      src="assets/images/resources/about-one-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="about-four__img-two">
                    <img
                      src="assets/images/resources/about-four-img-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-four__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    About Arc Foundation
                  </span>
                  <h2 className="section-title__title">
                    Get to know about our Arc Foundation
                  </h2>
                </div>
                <p className="about-four__text">
                  The ARC Foundation is a non-government, non-profitable,
                  non-political, voluntary, and charitable organization wishing
                  to impact and change people’s lives towards sustainable
                  self-reliance, influencing people not to lose hope but to step
                  up & claim their place and space in all spheres of life
                  through information, empowerment, skills development and
                  providing the necessary resources and mentorship. Our focus is
                  to mobilize communities toward sustainable and responsible
                  development. At ARC Foundation we believe in transformation
                  from poverty to hope, obstacles to opportunities, and from
                  oppression to triumph. At ARC Foundation we celebrate the rich
                  diversity of our country and praise many individuals and
                  organizations who steadfastly remained committed to breaking
                  the cycle of marginalization and poverty in Bangladesh.
                </p>
                <ul className="list-unstyled about-four__points">
                  <li>
                    <div className="icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="text">
                      <p>
                        Overcoming poverty is not a task of charity, it is an
                        act of justice.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="text">
                      <p>Like slavery and apartheid, poverty is not natural.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="text">
                      <p>Sometimes it falls on a generation to be great.</p>
                    </div>
                  </li>
                </ul>
                <div className="about-four__btn-box">
                  <Link
                    to="/contact"
                    onClick={() => handleMenuClick()}
                    className="thm-btn about-four__btn"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Four End*/}

      <section class="product-details">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-xl-6">
              <div class="product-details__img">
                <img src={founder} alt="" width={570} height={570} />
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <div class="product-details__top">
                <h3 class="product-details__title">Founder & Ex Chairman</h3>
                <p style={{ fontWeight: "bold" }}>
                  Mohammad Abdur Rahim Chisti
                </p>
              </div>

              <div class="product-details__content">
                <p class="product-details__content-text1">
                  I am honored to welcome you to the ARC Foundation, a beacon of
                  hope and positive change. As the Chairman and Founder, it is
                  my privilege to lead an organization dedicated to transforming
                  lives through education, empowerment, and community support.
                </p>
                <p class="product-details__content-text1">
                  Our journey began with a simple yet profound belief – that
                  every individual, regardless of their circumstances, deserves
                  the opportunity to thrive. At the ARC Foundation, we are
                  committed to breaking barriers, providing a helping hand to
                  the vulnerable, and fostering sustainable solutions.
                </p>
                <p class="product-details__content-text1">
                  Together, we can inspire change, empower the underserved, and
                  build a future where everyone has the chance to claim their
                  space in the world. Join us in our mission to make a lasting
                  impact and create a brighter, more equitable tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-details">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-xl-6">
              <div class="product-details__top">
                <h3 class="product-details__title">Chairman </h3>

                <p style={{ fontWeight: "bold" }}>Abdul Quddus Pathan</p>
              </div>

              <div class="product-details__content">
                <p class="product-details__content-text1">
                  I am honored to welcome you to the ARC Foundation, a beacon of
                  hope and positive change. As the Chairman and Founder, it is
                  my privilege to lead an organization dedicated to transforming
                  lives through education, empowerment, and community support.
                  Our journey began with a simple yet profound belief – that
                  every individual, regardless of their circumstances, deserves
                  the opportunity to thrive. At the ARC Foundation, we are
                  committed to breaking barriers, providing a helping hand to
                  the vulnerable, and fostering sustainable solutions. Together,
                  we can inspire change, empower the underserved, and build a
                  future where everyone has the chance to claim their space in
                  the world. Join us in our mission to make a lasting impact and
                  create a brighter, more equitable tomorrow.
                </p>
              </div>
            </div>

            <div class="col-lg-6 col-xl-6">
              <div class="product-details__img">
                <img src={md} alt="" width={570} height={570} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-details">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-xl-6">
              <div class="product-details__img">
                <img src={vchairman} alt="" width={570} height={570} />
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <div class="product-details__top">
                <h3 class="product-details__title">Vice Chairman</h3>
                <p style={{ fontWeight: "bold" }}>Saiful Islam</p>
              </div>

              <div class="product-details__content">
                <p class="product-details__content-text1">
                  I am honored to welcome you to the ARC Foundation, a beacon of
                  hope and positive change. As the Chairman and Founder, it is
                  my privilege to lead an organization dedicated to transforming
                  lives through education, empowerment, and community support.
                  Our journey began with a simple yet profound belief – that
                  every individual, regardless of their circumstances, deserves
                  the opportunity to thrive. At the ARC Foundation, we are
                  committed to breaking barriers, providing a helping hand to
                  the vulnerable, and fostering sustainable solutions. Together,
                  we can inspire change, empower the underserved, and build a
                  future where everyone has the chance to claim their space in
                  the world. Join us in our mission to make a lasting impact and
                  create a brighter, more equitable tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-details">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-xl-6">
              <div class="product-details__top">
                <h3 class="product-details__title">Executive Director</h3>

                <p style={{ fontWeight: "bold" }}> Mokter Hossain</p>
              </div>

              <div class="product-details__content">
                <p class="product-details__content-text1">
                  I am honored to welcome you to the ARC Foundation, a beacon of
                  hope and positive change. As the Chairman and Founder, it is
                  my privilege to lead an organization dedicated to transforming
                  lives through education, empowerment, and community support.
                  Our journey began with a simple yet profound belief – that
                  every individual, regardless of their circumstances, deserves
                  the opportunity to thrive. At the ARC Foundation, we are
                  committed to breaking barriers, providing a helping hand to
                  the vulnerable, and fostering sustainable solutions. Together,
                  we can inspire change, empower the underserved, and build a
                  future where everyone has the chance to claim their space in
                  the world. Join us in our mission to make a lasting impact and
                  create a brighter, more equitable tomorrow.
                </p>
              </div>
            </div>

            <div class="col-lg-6 col-xl-6">
              <div class="product-details__img">
                <img src={exdirector} alt="" width={570} height={570} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Team One Start*/}
      <section className="team-one">
        <div className="container">
          <div className="row">
            <h2 className="product-details__title mb-5 text-center">
              Our Management Team
            </h2>

            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={fdirector} alt />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">Jahid Hasan</Link>
                  </h3>
                  <p className="team-one__sub-title">Finance Director</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={pdirector} alt />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">kamrul Islam</Link>
                  </h3>
                  <p className="team-one__sub-title">Project Director</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}

            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={edudirector} alt />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">Md. Nazmol Hoque Rasel</Link>
                  </h3>
                  <p className="team-one__sub-title">Education Director</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={hdirector} alt />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">Dr. Ruksana Akter</Link>
                  </h3>
                  <p className="team-one__sub-title">Health Director</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={adirector} alt />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">MD Rokeybul Hasan khan </Link>
                  </h3>
                  <p className="team-one__sub-title">Director Administrator</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={pbdirector} alt />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">MD. Saiful Islam</Link>
                  </h3>
                  <p className="team-one__sub-title">
                    Public Relation Director
                  </p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={foreignDirector} alt />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">Tarek Hassan</Link>
                  </h3>
                  <p className="team-one__sub-title">
                    Director Foreign Appears
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={developmentDirector} alt />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">Suleman Bhuiyan</Link>
                  </h3>
                  <p className="team-one__sub-title">Development Director</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={welfareDirector} alt />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">Social welfare director</Link>
                  </h3>
                  <p className="team-one__sub-title">Social Welfare Director</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}

            {/*Team One Single End*/}
          </div>
        </div>
      </section>
      {/*Team One End*/}
      {/*Team One Start*/}
      <section className="team-one" style={{ marginTop: "-80px" }}>
        <div className="container">
          <div className="row">
            <h2 className="product-details__title mb-5 text-center">
              Our Volunteer Team
            </h2>

            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={t1} alt />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" "> Tanjila Akter</Link>
                  </h3>
                  <p className="team-one__sub-title">Volunteer</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={t2} alt="" />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" "> Jannatul Ferdaus</Link>
                  </h3>
                  <p className="team-one__sub-title">Volunteer</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={t3} alt="" />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">Yesmin Akter</Link>
                  </h3>
                  <p className="team-one__sub-title">Volunteer</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={t4} alt="" />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">Mahfuz Ahamed</Link>
                  </h3>
                  <p className="team-one__sub-title">Vice Chairman</p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={v1} alt="" />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">MD. Sobuj</Link>
                  </h3>
                  <p className="team-one__sub-title">Volunteer</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={v2} alt="" />
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <Link to=" ">MD. Mostafijur Rahman Shawon</Link>
                  </h3>
                  <p className="team-one__sub-title">Volunteer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Team One End*/}

      {/*Become Volunteer One Start*/}
      <section className="become-volunteer-one">
        <div className="become-volunteer-one__bg-box">
          <div
            className="become-volunteer-one__bg jarallax"
            data-jarallax
            data-speed="0.2"
            data-imgposition="50% 0%"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/become-volunteer-one-bg.jpg)",
            }}
          />
        </div>
        <div
          className="become-volunteer-one__shape-1"
          style={{
            backgroundImage:
              "url(assets/images/shapes/become-volunteer-shape-1.png)",
          }}
        />
        <div className="container">
          <div className="become-volunteer-one__inner">
            <p className="become-volunteer-one__sub-title">
              Become a Volunteers
            </p>
            <h3 className="become-volunteer-one__title">
              Join your hand with us for a <br /> better life and future
            </h3>
            <div className="become-volunteer-one__btn-box">
              <Link
                to="/contact"
                onClick={() => handleMenuClick()}
                className="thm-btn become-volunteer-one__btn"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*Become Volunteer One End*/}
      {/*FAQ One Start*/}
      {/*FAQ One Start*/}
      <section className="faq-one">
        <div
          className="faq-one-shape-1"
          style={{
            backgroundImage: "url(assets/images/shapes/faq-one-shape-1.png)",
          }}
        />
        <div
          className="faq-one-bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/faq-one-bg.png)",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="faq-one__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    Recently asked questions
                  </span>
                  <h2 className="section-title__title">
                    People are frequently ask some questions from us.
                  </h2>
                </div>
                <p className="faq-one__text-1">
                  ARC Foundation, a non-profit organization, aims to empower
                  individuals for self-reliance through information, skills
                  development, and mentorship.
                </p>
                <Link
                  to="/contact"
                  onClick={() => handleMenuClick()}
                  className="thm-btn faq-one__btn"
                >
                  Learn how to get help
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="faq-one__right">
                <div
                  className="accrodion-grp"
                  data-grp-name="faq-one-accrodion"
                >
                  {faqes.map((item, index) => (
                    <div
                      key={item.Id}
                      className={`accrodion ${
                        activeAccordion === index ? "active" : ""
                      }`}
                    >
                      <div
                        className="accrodion-title"
                        onClick={() => toggleAccordion(index)}
                      >
                        <h4>{item.question}</h4>
                        <div className="question-icon">
                          {activeAccordion === index ? (
                            // Minus icon when the accordion is open
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="18" y1="12" x2="6" y2="12"></line>
                            </svg>
                          ) : (
                            // Plus icon when the accordion is closed
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*FAQ One End*/}
      {/*FAQ One End*/}
    </div>
  );
};

export default About;
