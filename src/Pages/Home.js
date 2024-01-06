import { jarallax } from "jarallax";
import React, { useEffect, useState } from "react";
import { WOW } from "wowjs";
import { useGetAllFaqQuery } from "../Redux/features/faq/faq";
import { useGetAllSliderQuery } from "../Redux/features/slider/slider";
import bg from "../assets/images/backgrounds/become-volunteer-one-bg.jpg";
import h2 from "../image/Helping-each-other-can-make-world-better.png";
import h1 from "../image/What-We-Do.png";
import p2 from "../image/education/Education and Child Program.jpg";
import project2 from "../image/education/Street-Children-Night-School.jpg";
import p5 from "../image/environment/Environment.jpg";
import project4 from "../image/health/Free-friday-clinic.jpg";
import p1 from "../image/health/Health-Care-Program.jpg";
import project1 from "../image/health/Medical-treatment-low-cot.jpg";
import p3 from "../image/micocredit/Microcredit-Program.jpg";
import project6 from "../image/old-home/Old-Home.jpg";
import banner from "../image/What-We-Do.png";
import {
  default as p6,
  default as project5,
} from "../image/orphanage/Orphanage.jpg";
import project3 from "../image/quality-life/Improving-Quality-Of-Life.jpg";
import p4 from "../image/quality-life/Improving-Quality-Of-Life.jpg";

// import Swiper core and required modules
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Register from "../Components/Register";
import { useGetAllaboutQuery } from "../Redux/features/about/about";

const Home = () => {
  useEffect(() => {
    // Initialize WOW.js
    const wow = new WOW();
    wow.init();
  }, []);

  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      imgPosition: "50% 0%",
    });
  }, []);

  const [slides, setSlides] = useState([]);
  const { data, isLoading, isError, error } = useGetAllSliderQuery();

  useEffect(() => {
    if (isError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching slides data:", error);
    } else if (!isLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data && data.data) {
        setSlides(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  console.log("slides");

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

  const [abouts, setAbouts] = useState([]);
  const {
    data: aboutData,
    isLoading: aboutLoading,
    isError: aboutError,
    error: error2,
  } = useGetAllaboutQuery();

  useEffect(() => {
    if (aboutError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching cart data:", error2);
    } else if (!aboutLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (aboutData && aboutData.data) {
        setAbouts(aboutData.data);
      }
    }
  }, [aboutData, aboutLoading, aboutError, error2]);

  console.log("aboutData", aboutData);

  return (
    <div className="custom-cursor">
      {/* /.preloader */}
      <div className="page-wrapper">
        {/* /.stricky-header */}

        <section className="main-slider clearfix" style={{ height: "100%" }}>
          <div className="swiper-container thm-swiper__slider">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              slidesPerView={1}
              loop={true}
              effect="fade"
              direction="horizontal"
              pagination={{
                clickable: true,
                el: "#main-slider-pagination",
              }}
              navigation={{
                nextEl: ".swiper-button-next", // Use class selector
                prevEl: ".swiper-button-prev", // Use class selector
              }}
              autoplay={{
                delay: 5000,
              }}
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div
                    className="image-layer"
                    // style={{
                    //   backgroundImage: `url(http://localhost:5000//${slide?.image})`,
                    // }}

                    style={{
                      backgroundImage:
                        "url(assets/images/backgrounds/main-slider-1-1.png)",
                    }}
                  >
                    {/* <img
                            src={`http://localhost:5000//${slide.image}`}
                            alt=""
                          /> */}
                  </div>

                  <div className="main-slider-shape-2 float-bob-x">
                    <img
                      src="assets/images/shapes/main-slider-shape-2.png"
                      alt
                    />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-8">
                        <div className="main-slider__content">
                          <p className="main-slider__sub-title">
                            {/* {slide.title} */}
                            Always donate for childrens
                          </p>
                          <h2 className="main-slider__title">
                            {/* {slide.text} */}
                            Empowering Lives, Transforming Futures
                          </h2>
                          <div className="main-slider__btn-box">
                            <a
                              href="about.html"
                              className="thm-btn main-slider__btn"
                            >
                              {" "}
                              Discover more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div
                    className="image-layer"
                    // style={{
                    //   backgroundImage: `url(http://localhost:5000//${slide?.image})`,
                    // }}

                    style={{
                      backgroundImage:
                        "url(assets/images/backgrounds/main-slider-1-2.png)",
                    }}
                  >
                    {/* <img
                            src={`http://localhost:5000//${slide.image}`}
                            alt=""
                          /> */}
                  </div>

                  <div className="main-slider-shape-2 float-bob-x">
                    <img
                      src="assets/images/shapes/main-slider-shape-2.png"
                      alt
                    />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-8">
                        <div className="main-slider__content">
                          <p className="main-slider__sub-title">
                            {/* {slide.title} */}
                            Always donate for childrens
                          </p>
                          <h2 className="main-slider__title">
                            {/* {slide.text} */}
                            Creating Impact, One Community at a Time
                          </h2>
                          <div className="main-slider__btn-box">
                            <a
                              href="about.html"
                              className="thm-btn main-slider__btn"
                            >
                              {" "}
                              Discover more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div
                    className="image-layer"
                    // style={{
                    //   backgroundImage: `url(http://localhost:5000//${slide?.image})`,
                    // }}

                    style={{
                      backgroundImage:
                        "url(assets/images/backgrounds/main-slider-1-3.png)",
                    }}
                  >
                    {/* <img
                            src={`http://localhost:5000//${slide.image}`}
                            alt=""
                          /> */}
                  </div>

                  <div className="main-slider-shape-2 float-bob-x">
                    <img
                      src="assets/images/shapes/main-slider-shape-2.png"
                      alt
                    />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-8">
                        <div className="main-slider__content">
                          <p className="main-slider__sub-title">
                            {/* {slide.title} */}
                            Always donate for childrens
                          </p>
                          <h2 className="main-slider__title">
                            {/* {slide.text} */}
                            Rise for Equality, Education, and Development
                          </h2>
                          <div className="main-slider__btn-box">
                            <a
                              href="about.html"
                              className="thm-btn main-slider__btn"
                            >
                              {" "}
                              Discover more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* If we need navigation buttons */}
            <div className="main-slider__nav">
              <div className="swiper-button-prev">
                <i className="icon-left-arrow" />
              </div>
              <div className="swiper-button-next">
                <i className="icon-right-arrow" />
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* <h2 className="section-title__title text-center">
            Welcome to ARC Foundation
          </h2> */}

          <div className="about-one">
            <div className="container">
              {/* {abouts.length > 0
                ? abouts.map((about) => ( */}
              <div className="row" style={{ alignItems: "center" }}>
                <div
                  className="col-xl-6 wow fadeInUp"
                  data-wow-delay="100ms"
                  // data-wow-duration="2500ms"
                  style={{ marginTop: "-20px" }}
                >
                  <div className="about-one__right">
                    <div className="section-title text-left">
                      <h2 className="section-title__title">
                        {/* {about.title} */}
                        What We Do
                      </h2>
                    </div>
                    <p className="about-one__text">
                      {/* {about.text1} */}
                      ARC Foundation provides services in entrepreneurship and
                      development, information technology training and
                      empowerment, health education and education in HIV & AIDS
                      management and awareness, malaria and TB awareness and
                      advocacy, Rehabilitation of street children, supporting
                      orphans and vulnerable children, deployment of both local
                      and international volunteers to various community
                      projects, community entrepreneurship/ community
                      microfinance training and monitoring (Community Savings
                      and loaning), Capacity Building sessions to youth groups,
                      vocational schools, primary and secondary schools, organic
                      farming and agricultural activities, Eco-Tourism,
                      Environmental Education and Management.
                    </p>
                    {/* <div className="about-one__fund">
                      <p className="about-one__fund-text">
                        Helped fund <span>24,537</span> Projects in
                        <span>24</span> Countries, Benefiting over <br />{" "}
                        <span>8.2</span> Million people.
                      </p>
                    </div> */}
                    {/* <ul className="list-unstyled about-one__points">
                      <li>
                        <div className="icon">
                          <span className="icon-volunteer" />
                        </div>
                        <div className="text">
                          <h5>
                            <a href="become-volunteer.html">Join ARCF Team</a>
                          </h5>
                          <p>Lorem ipsum dolor sit amet not quis mis notted.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-solidarity" />
                        </div>
                        <div className="text">
                          <h5>
                            <a href="donate-now.html">Start Donate</a>
                          </h5>
                          <p>Lorem ipsum dolor sit amet not quis mis notted.</p>
                        </div>
                      </li>
                    </ul> */}
                  </div>
                </div>
                <div className="col-xl-6 ">
                  <div className="about-one__left ">
                    <div
                      className="col-xl-6 col-lg-6 wow fadeInUp"
                      data-wow-delay="100ms"
                    >
                      <div className="what_we_do">
                        {/* <img className="imageWithShadow" src={h1} alt="" /> */}

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          slidesPerView={1}
                          effect="fade"
                          loop={true}
                          autoplay={{
                            delay: 2000,
                          }}
                          // breakpoints={{
                          //   // Define breakpoints for different screen sizes
                          //   0: {
                          //     slidesPerView: 2, // Show 2 slides on smaller screens like mobile devices
                          //     spaceBetween: 10, // Adjust spacing for smaller screens
                          //   },
                          //   768: {
                          //     slidesPerView: 4, // Show 4 slides on tablets
                          //     spaceBetween: 15,
                          //   },
                          //   1024: {
                          //     slidesPerView: 6, // Show 6 slides on larger screens like desktops
                          //     spaceBetween: 20,
                          //   },
                          // }}
                        >
                          <SwiperSlide>
                            <img src={h1} alt="" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={h1} alt="" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={h1} alt="" />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ))
                : null} */}
            </div>
          </div>
        </section>
        <section>
          {/* <h2 className="section-title__title text-center">
            Welcome to ARC Foundation
          </h2> */}

          <div className="about-one">
            <div className="about-one__shape-box-1">
              <div
                className="about-one__shape-1"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/about-one-shape-1.png)",
                }}
              />
            </div>
            <div className="container">
              <div className="row" style={{ alignItems: "center" }}>
                <div className="col-xl-6">
                  <div className="about-one__left">
                    <div
                      className="about-one__img-box wow slideInLeft"
                      data-wow-delay="100ms"
                      data-wow-duration="2500ms"
                    >
                      <div className="about-one__img">
                        <img src={h2} alt="" />
                      </div>
                      <div className="about-one__img-border" />
                      <div className="about-one__curved-circle-box">
                        {/* <div className="curved-circle">
                          <span className="curved-circle--item">
                            25 YEARS EXPERIENCE OXPINS CHARITY CENTER
                          </span>
                        </div> */}
                        {/* /.curved-circle */}
                        <div className="about-one__curved-circle-icon">
                          <img
                            src="assets/images/icon/curved-circle-icon.png"
                            alt
                          />
                        </div>
                      </div>
                      <div className="about-one__shape-2 zoom-fade">
                        <img
                          src="assets/images/shapes/about-one-shape-2.png"
                          alt
                        />
                      </div>
                      <div className="about-one__shape-3 float-bob-y">
                        <img
                          src="assets/images/shapes/about-one-shape-3.png"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6" style={{ marginTop: "-20px" }}>
                  <div className="about-one__right">
                    <div className="section-title text-left">
                      <h2 className="section-title__title">
                        Helping each other can make world better
                      </h2>
                    </div>
                    <p className="about-one__text">
                      Transforming Lives Through Research, and Changes. Body
                      Text: We are delighted to have you join our community
                      dedicated to Advocacy, Research, and Change. Together,
                      let's embark on a journey of positively impacting,
                      fostering resilience, and creating a better world. Your
                      presence enriches our mission, and we look forward to
                      achieving meaningful milestones together.
                    </p>
                    {/* <div className="about-one__fund">
                      <p className="about-one__fund-text">
                        Helped fund <span>24,537</span> Projects in
                        <span>24</span> Countries, Benefiting over <br />{" "}
                        <span>8.2</span> Million people.
                      </p>
                    </div> */}
                    {/* <ul className="list-unstyled about-one__points">
                      <li>
                        <div className="icon">
                          <span className="icon-volunteer" />
                        </div>
                        <div className="text">
                          <h5>
                            <a href="become-volunteer.html">Join ARCF Team</a>
                          </h5>
                          <p>Lorem ipsum dolor sit amet not quis mis notted.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-solidarity" />
                        </div>
                        <div className="text">
                          <h5>
                            <a href="donate-now.html">Start Donate</a>
                          </h5>
                          <p>Lorem ipsum dolor sit amet not quis mis notted.</p>
                        </div>
                      </li>
                    </ul> */}
                    <a href="/donate-now" className="thm-btn about-one__btn">
                      Donate Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About One End*/}

        {/*Feature One Start*/}
        <section className="feature-one">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6  wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="feature-one__single">
                  <div
                    className="feature-one__single-bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/feature-one-shape-1.png)",
                    }}
                  />
                  <div className="feature-one__top">
                    <div className="feature-one__top-inner">
                      <div className="feature-one__top-icon">
                        <span className="icon-help" />
                      </div>
                      <div className="feature-one__top-title-box">
                        <h3 className="feature-one__top-title">
                          <a href="become-volunteer.html">Our Mission</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="feature-one__text">
                    ARC Foundation endeavors to unleash the potential of
                    disadvantaged youth, men, women, people with disabilities,
                    and children to succeed in life through providing education,
                    specialized creche, health care, livelihood skills, and
                    community development services.
                  </p>

                  {/* <ul className="list-unstyled feature-one__point">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Old age people.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Children & Women.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Enlightened lives.</p>
                      </div>
                    </li>
                  </ul>
                  <a
                    href="become-volunteer.html"
                    className="thm-btn feature-one__btn"
                  >
                    View details
                  </a> */}
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6  wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="feature-one__single feature-one__single--two">
                  <div
                    className="feature-one__single-bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/feature-one-shape-1.png)",
                    }}
                  />
                  <div className="feature-one__top">
                    <div className="feature-one__top-inner">
                      <div className="feature-one__top-icon feature-one__top-icon--two">
                        <span className="icon-gift-box" />
                      </div>
                      <div className="feature-one__top-title-box">
                        <h3 className="feature-one__top-title">
                          <a href="about.html">Our Vision</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="feature-one__text">
                    ARC Foundation envisions a society where old age people,
                    children, women & deprived people enjoy secure, healthy,
                    enlightened lives and a responsive environment that promotes
                    their social, economic, cultural, and moral development.
                  </p>
                  {/* <ul className="list-unstyled feature-one__point">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Providing education.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Livelihood skills.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Community development services</p>
                      </div>
                    </li>
                  </ul>
                  <a href="about.html" className="thm-btn feature-one__btn">
                    View details
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Feature One End*/}

        {/*Causes One Start*/}
        <section className="causes-one">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">Our Projects</h2>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/health">
                      <img src={p1} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Health</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">Health Care Program</h3>
                    <p className="causes-one__text">
                      ARC Foundation's Health Care Program is a lifeline for
                      those in need. We provide vital medical assistance.
                    </p>

                    <Link to="/health" className="thm-btn about-one__btn">
                      See More
                    </Link>
                    {/* <div
                      className="donate-now__payment-info-btn-box"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <button
                        type="submit"
                        className="thm-btn donate-now__payment-info-btn"
                      >
                        Donate now
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/health">
                      <img src={p2} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Education</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">Education Program</h3>
                    <p className="causes-one__text">
                      ARC Foundation's Health Care Program is a lifeline for
                      those in need. We provide vital medical assistance.
                    </p>
                    <Link to="/education" className="thm-btn about-one__btn">
                      See More
                    </Link>
                    {/* <div
                      className="donate-now__payment-info-btn-box"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <button
                        type="submit"
                        className="thm-btn donate-now__payment-info-btn"
                      >
                        Donate now
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/microcredit">
                      <img src={p3} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Microcredit Program</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">Microcredit Program</h3>
                    <p className="causes-one__text">
                      ARC Foundation's Health Care Program is a lifeline for
                      those in need. We provide vital medical assistance.
                    </p>
                    <Link to="/microcredit" className="thm-btn about-one__btn">
                      See More
                    </Link>
                    {/* <div
                      className="donate-now__payment-info-btn-box"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <button
                        type="submit"
                        className="thm-btn donate-now__payment-info-btn"
                      >
                        Donate now
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/quality-life">
                      <img src={p4} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Improving Quality Of Life</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      Improving Quality Of Life
                    </h3>
                    <p className="causes-one__text">
                      ARC Foundation Elevating Lives, Enhancing Futures. Through
                      diverse programs, we focus on improving quality of life,
                      fostering positive
                    </p>

                    <Link to="/quality-life" className="thm-btn about-one__btn">
                      See More
                    </Link>
                    {/* <div
                      className="donate-now__payment-info-btn-box"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <button
                        type="submit"
                        className="thm-btn donate-now__payment-info-btn"
                      >
                        Donate now
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/environment">
                      <img src={p5} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Environment</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">Environment</h3>
                    <p className="causes-one__text">
                      ARC Foundation Nurturing Nature, Building Sustainability.
                      Join us in our commitment to environmental stewardship
                    </p>
                    <Link to="/environment" className="thm-btn about-one__btn">
                      See More
                    </Link>
                    {/* <div
                      className="donate-now__payment-info-btn-box"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <button
                        type="submit"
                        className="thm-btn donate-now__payment-info-btn"
                      >
                        Donate now
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/orphanage">
                      <img src={p6} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Orphanage</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">Orphanage</h3>
                    <p className="causes-one__text">
                      ARC Foundation's Orphanage Program is a haven of care and
                      opportunity. We provide love, education, and support for
                      orphaned children.
                    </p>
                    <Link to="/orphanage" className="thm-btn about-one__btn">
                      See More
                    </Link>
                    {/* <div
                      className="donate-now__payment-info-btn-box"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <button
                        type="submit"
                        className="thm-btn donate-now__payment-info-btn"
                      >
                        Donate now
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Causes One End*/}

        {/*Become Volunteer One Start*/}
        <section className="become-volunteer-one">
          <div className="become-volunteer-one__bg-box">
            <div
              className="become-volunteer-one__bg jarallax"
              data-jarallax
              data-speed="0.2"
              data-imgposition="50% 0%"
              style={{
                backgroundImage: `url(${bg})`,
              }}
            />
          </div>
          <div
            className="become-volunteer-one__shape-1"
            style={{
              backgroundImage: `url('assets/images/shapes/become-volunteer-shape-1.png')`,
            }}
          />
          <div className="container">
            <div className="become-volunteer-one__inner">
              <p className="become-volunteer-one__sub-title">
                Become a Volunteer
              </p>
              <h3 className="become-volunteer-one__title">
                Join us for a better life and <br /> future for poor people.
              </h3>
              <Register />
            </div>
          </div>
        </section>
        {/*Become Volunteer One End*/}

        <section className="causes-one">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">Donation</h2>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/health">
                      <img src={project1} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Health</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/health">Cancer Treatment</Link>
                    </h3>
                    <p className="causes-one__text">
                      Financial assistance is provided for the treatment of poor
                      and indigent patients suffering from Blood Cancer, and
                      other cancer patients.
                    </p>

                    <div>
                      <div
                        className="donate-now__payment-info-btn-box"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <button
                          type="submit"
                          className="thm-btn donate-now__payment-info-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                        >
                          Donate now
                        </button>
                      </div>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message to @getbootstrap
              </h1> */}
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <section className="donate-now">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-xl-12 col-lg-11">
                                        <div className="donate-now__left">
                                          <div>
                                            <h3 className="donate-now__title">
                                              Health Support
                                            </h3>
                                            <p>
                                              ARC Foundation's Health Care
                                              Program is a lifeline for those in
                                              need. We provide vital medical
                                              assistance, support for
                                              treatments, and ensure access to
                                              essential healthcare services.
                                              Join us in promoting well-being
                                              and creating a healthier, more
                                              resilient community.
                                            </p>
                                            <p></p>
                                          </div>
                                          <div className="donate-now__enter-donation">
                                            <h3 className="donate-now__title">
                                              Enter your donation
                                            </h3>
                                            <div className="donate-now__enter-donation-input">
                                              <select className="selectpicker">
                                                <option>$</option>
                                                <option>₤</option>
                                                <option>¥</option>
                                              </select>
                                              <input
                                                type="text"
                                                name="donation-money"
                                                defaultValue=".00"
                                              />
                                            </div>
                                          </div>
                                          <div className="donate-now__personal-info-box">
                                            <h3 className="donate-now__title">
                                              Personal info
                                            </h3>
                                            <form className="donate-now__personal-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="First name"
                                                      name="name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Last name"
                                                      name="last-name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="email"
                                                      placeholder="Email address"
                                                      name="email"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Phone"
                                                      name="phone"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Address"
                                                      name="Address"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="row">
                                                <div className="col-xl-12">
                                                  <div className="donate-now__personal-info-input donate-now__personal-info-message-box">
                                                    <textarea
                                                      name="message"
                                                      placeholder="Write message"
                                                      defaultValue={""}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div className="donate-now__payment-info">
                                            <h3 className="donate-now__title">
                                              Payment info
                                            </h3>
                                            <form className="donate-now__payment-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card number"
                                                      name="number"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="MM / YY"
                                                      name="date"
                                                      id="datepicker"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card code ( CVC )"
                                                      name="code"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Billing address"
                                                      name="Billing"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="City"
                                                      name="City"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="donate-now__payment-info-btn-box">
                                                <button
                                                  type="submit"
                                                  className="thm-btn donate-now__payment-info-btn"
                                                >
                                                  Donate now
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/health">
                      <img src={project2} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Education</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/health">Night School</Link>
                    </h3>
                    <p className="causes-one__text">
                      A night school is conducted every day from 6 pm to 9 pm
                      for the education of poor and street children completely
                      free of charge.
                    </p>
                    <div>
                      <div
                        className="donate-now__payment-info-btn-box"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <button
                          type="submit"
                          className="thm-btn donate-now__payment-info-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                        >
                          Donate now
                        </button>
                      </div>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message to @getbootstrap
              </h1> */}
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <section className="donate-now">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-xl-12 col-lg-11">
                                        <div className="donate-now__left">
                                          <div>
                                            <h3 className="donate-now__title">
                                              Education Support
                                            </h3>
                                            <p>
                                              ARC Foundation's Health Care
                                              Program is a lifeline for those in
                                              need. We provide vital medical
                                              assistance, support for
                                              treatments, and ensure access to
                                              essential healthcare services.
                                              Join us in promoting well-being
                                              and creating a healthier, more
                                              resilient community.
                                            </p>
                                            <p></p>
                                          </div>
                                          <div className="donate-now__enter-donation">
                                            <h3 className="donate-now__title">
                                              Enter your donation
                                            </h3>
                                            <div className="donate-now__enter-donation-input">
                                              <select className="selectpicker">
                                                <option>$</option>
                                                <option>₤</option>
                                                <option>¥</option>
                                              </select>
                                              <input
                                                type="text"
                                                name="donation-money"
                                                defaultValue=".00"
                                              />
                                            </div>
                                          </div>
                                          <div className="donate-now__personal-info-box">
                                            <h3 className="donate-now__title">
                                              Personal info
                                            </h3>
                                            <form className="donate-now__personal-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="First name"
                                                      name="name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Last name"
                                                      name="last-name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="email"
                                                      placeholder="Email address"
                                                      name="email"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Phone"
                                                      name="phone"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Address"
                                                      name="Address"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="row">
                                                <div className="col-xl-12">
                                                  <div className="donate-now__personal-info-input donate-now__personal-info-message-box">
                                                    <textarea
                                                      name="message"
                                                      placeholder="Write message"
                                                      defaultValue={""}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div className="donate-now__payment-info">
                                            <h3 className="donate-now__title">
                                              Payment info
                                            </h3>
                                            <form className="donate-now__payment-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card number"
                                                      name="number"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="MM / YY"
                                                      name="date"
                                                      id="datepicker"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card code ( CVC )"
                                                      name="code"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Billing address"
                                                      name="Billing"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="City"
                                                      name="City"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="donate-now__payment-info-btn-box">
                                                <button
                                                  type="submit"
                                                  className="thm-btn donate-now__payment-info-btn"
                                                >
                                                  Donate now
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/health">
                      <img src={project3} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Improving Quality Of Life</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/health">Human Aid</Link>
                    </h3>
                    <p className="causes-one__text">
                      Regular food, and winter clothing among the helpless,
                      destitute, and orphaned children, and always standing by
                      the side by supporting relief.
                    </p>

                    <div>
                      <div
                        className="donate-now__payment-info-btn-box"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <button
                          type="submit"
                          className="thm-btn donate-now__payment-info-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                        >
                          Donate now
                        </button>
                      </div>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message to @getbootstrap
              </h1> */}
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <section className="donate-now">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-xl-12 col-lg-11">
                                        <div className="donate-now__left">
                                          <div>
                                            <h3 className="donate-now__title">
                                              Health Support
                                            </h3>
                                            <p>
                                              ARC Foundation's Health Care
                                              Program is a lifeline for those in
                                              need. We provide vital medical
                                              assistance, support for
                                              treatments, and ensure access to
                                              essential healthcare services.
                                              Join us in promoting well-being
                                              and creating a healthier, more
                                              resilient community.
                                            </p>
                                            <p></p>
                                          </div>
                                          <div className="donate-now__enter-donation">
                                            <h3 className="donate-now__title">
                                              Enter your donation
                                            </h3>
                                            <div className="donate-now__enter-donation-input">
                                              <select className="selectpicker">
                                                <option>$</option>
                                                <option>₤</option>
                                                <option>¥</option>
                                              </select>
                                              <input
                                                type="text"
                                                name="donation-money"
                                                defaultValue=".00"
                                              />
                                            </div>
                                          </div>
                                          <div className="donate-now__personal-info-box">
                                            <h3 className="donate-now__title">
                                              Personal info
                                            </h3>
                                            <form className="donate-now__personal-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="First name"
                                                      name="name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Last name"
                                                      name="last-name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="email"
                                                      placeholder="Email address"
                                                      name="email"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Phone"
                                                      name="phone"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Address"
                                                      name="Address"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="row">
                                                <div className="col-xl-12">
                                                  <div className="donate-now__personal-info-input donate-now__personal-info-message-box">
                                                    <textarea
                                                      name="message"
                                                      placeholder="Write message"
                                                      defaultValue={""}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div className="donate-now__payment-info">
                                            <h3 className="donate-now__title">
                                              Payment info
                                            </h3>
                                            <form className="donate-now__payment-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card number"
                                                      name="number"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="MM / YY"
                                                      name="date"
                                                      id="datepicker"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card code ( CVC )"
                                                      name="code"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Billing address"
                                                      name="Billing"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="City"
                                                      name="City"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="donate-now__payment-info-btn-box">
                                                <button
                                                  type="submit"
                                                  className="thm-btn donate-now__payment-info-btn"
                                                >
                                                  Donate now
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/health">
                      <img src={project4} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Health</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/health">Free Friday Clinic</Link>
                    </h3>
                    <p className="causes-one__text">
                      A Free Friday Clinic for poor families to be aware or
                      provide doctor’s advice or prescription free of cost and
                      providing free medicine.
                    </p>
                    <div>
                      <div
                        className="donate-now__payment-info-btn-box"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <button
                          type="submit"
                          className="thm-btn donate-now__payment-info-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                        >
                          Donate now
                        </button>
                      </div>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message to @getbootstrap
              </h1> */}
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <section className="donate-now">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-xl-12 col-lg-11">
                                        <div className="donate-now__left">
                                          <div>
                                            <h3 className="donate-now__title">
                                              Education Support
                                            </h3>
                                            <p>
                                              ARC Foundation's Health Care
                                              Program is a lifeline for those in
                                              need. We provide vital medical
                                              assistance, support for
                                              treatments, and ensure access to
                                              essential healthcare services.
                                              Join us in promoting well-being
                                              and creating a healthier, more
                                              resilient community.
                                            </p>
                                            <p></p>
                                          </div>
                                          <div className="donate-now__enter-donation">
                                            <h3 className="donate-now__title">
                                              Enter your donation
                                            </h3>
                                            <div className="donate-now__enter-donation-input">
                                              <select className="selectpicker">
                                                <option>$</option>
                                                <option>₤</option>
                                                <option>¥</option>
                                              </select>
                                              <input
                                                type="text"
                                                name="donation-money"
                                                defaultValue=".00"
                                              />
                                            </div>
                                          </div>
                                          <div className="donate-now__personal-info-box">
                                            <h3 className="donate-now__title">
                                              Personal info
                                            </h3>
                                            <form className="donate-now__personal-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="First name"
                                                      name="name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Last name"
                                                      name="last-name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="email"
                                                      placeholder="Email address"
                                                      name="email"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Phone"
                                                      name="phone"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Address"
                                                      name="Address"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="row">
                                                <div className="col-xl-12">
                                                  <div className="donate-now__personal-info-input donate-now__personal-info-message-box">
                                                    <textarea
                                                      name="message"
                                                      placeholder="Write message"
                                                      defaultValue={""}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div className="donate-now__payment-info">
                                            <h3 className="donate-now__title">
                                              Payment info
                                            </h3>
                                            <form className="donate-now__payment-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card number"
                                                      name="number"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="MM / YY"
                                                      name="date"
                                                      id="datepicker"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card code ( CVC )"
                                                      name="code"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Billing address"
                                                      name="Billing"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="City"
                                                      name="City"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="donate-now__payment-info-btn-box">
                                                <button
                                                  type="submit"
                                                  className="thm-btn donate-now__payment-info-btn"
                                                >
                                                  Donate now
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/health">
                      <img src={project5} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Orphanage</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/health">Orphanage</Link>
                    </h3>
                    <p className="causes-one__text">
                      ARC Foundation's Health Care Program is a lifeline for
                      those in need. We provide vital medical assistance.
                    </p>
                    <div>
                      <div
                        className="donate-now__payment-info-btn-box"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <button
                          type="submit"
                          className="thm-btn donate-now__payment-info-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                        >
                          Donate now
                        </button>
                      </div>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message to @getbootstrap
              </h1> */}
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <section className="donate-now">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-xl-12 col-lg-11">
                                        <div className="donate-now__left">
                                          <div>
                                            <h3 className="donate-now__title">
                                              Microcredit Support
                                            </h3>
                                            <p>
                                              ARC Foundation's Health Care
                                              Program is a lifeline for those in
                                              need. We provide vital medical
                                              assistance, support for
                                              treatments, and ensure access to
                                              essential healthcare services.
                                              Join us in promoting well-being
                                              and creating a healthier, more
                                              resilient community.
                                            </p>
                                            <p></p>
                                          </div>
                                          <div className="donate-now__enter-donation">
                                            <h3 className="donate-now__title">
                                              Enter your donation
                                            </h3>
                                            <div className="donate-now__enter-donation-input">
                                              <select className="selectpicker">
                                                <option>$</option>
                                                <option>₤</option>
                                                <option>¥</option>
                                              </select>
                                              <input
                                                type="text"
                                                name="donation-money"
                                                defaultValue=".00"
                                              />
                                            </div>
                                          </div>
                                          <div className="donate-now__personal-info-box">
                                            <h3 className="donate-now__title">
                                              Personal info
                                            </h3>
                                            <form className="donate-now__personal-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="First name"
                                                      name="name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Last name"
                                                      name="last-name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="email"
                                                      placeholder="Email address"
                                                      name="email"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Phone"
                                                      name="phone"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Address"
                                                      name="Address"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="row">
                                                <div className="col-xl-12">
                                                  <div className="donate-now__personal-info-input donate-now__personal-info-message-box">
                                                    <textarea
                                                      name="message"
                                                      placeholder="Write message"
                                                      defaultValue={""}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div className="donate-now__payment-info">
                                            <h3 className="donate-now__title">
                                              Payment info
                                            </h3>
                                            <form className="donate-now__payment-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card number"
                                                      name="number"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="MM / YY"
                                                      name="date"
                                                      id="datepicker"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card code ( CVC )"
                                                      name="code"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Billing address"
                                                      name="Billing"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="City"
                                                      name="City"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="donate-now__payment-info-btn-box">
                                                <button
                                                  type="submit"
                                                  className="thm-btn donate-now__payment-info-btn"
                                                >
                                                  Donate now
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/health">
                      <img src={project6} alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Old Home</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/health">Old Home</Link>
                    </h3>
                    <p className="causes-one__text">
                      ARC Foundation's Health Care Program is a lifeline for
                      those in need. We provide vital medical assistance.
                    </p>
                    <div>
                      <div
                        className="donate-now__payment-info-btn-box"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <button
                          type="submit"
                          className="thm-btn donate-now__payment-info-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                        >
                          Donate now
                        </button>
                      </div>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message to @getbootstrap
              </h1> */}
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <section className="donate-now">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-xl-12 col-lg-11">
                                        <div className="donate-now__left">
                                          <div>
                                            <h3 className="donate-now__title">
                                              Microcredit Support
                                            </h3>
                                            <p>
                                              ARC Foundation's Health Care
                                              Program is a lifeline for those in
                                              need. We provide vital medical
                                              assistance, support for
                                              treatments, and ensure access to
                                              essential healthcare services.
                                              Join us in promoting well-being
                                              and creating a healthier, more
                                              resilient community.
                                            </p>
                                            <p></p>
                                          </div>
                                          <div className="donate-now__enter-donation">
                                            <h3 className="donate-now__title">
                                              Enter your donation
                                            </h3>
                                            <div className="donate-now__enter-donation-input">
                                              <select className="selectpicker">
                                                <option>$</option>
                                                <option>₤</option>
                                                <option>¥</option>
                                              </select>
                                              <input
                                                type="text"
                                                name="donation-money"
                                                defaultValue=".00"
                                              />
                                            </div>
                                          </div>
                                          <div className="donate-now__personal-info-box">
                                            <h3 className="donate-now__title">
                                              Personal info
                                            </h3>
                                            <form className="donate-now__personal-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="First name"
                                                      name="name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Last name"
                                                      name="last-name"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="email"
                                                      placeholder="Email address"
                                                      name="email"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Phone"
                                                      name="phone"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Address"
                                                      name="Address"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__personal-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="row">
                                                <div className="col-xl-12">
                                                  <div className="donate-now__personal-info-input donate-now__personal-info-message-box">
                                                    <textarea
                                                      name="message"
                                                      placeholder="Write message"
                                                      defaultValue={""}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div className="donate-now__payment-info">
                                            <h3 className="donate-now__title">
                                              Payment info
                                            </h3>
                                            <form className="donate-now__payment-info-form">
                                              <div className="row">
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card number"
                                                      name="number"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="MM / YY"
                                                      name="date"
                                                      id="datepicker"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Card code ( CVC )"
                                                      name="code"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="Billing address"
                                                      name="Billing"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <input
                                                      type="text"
                                                      placeholder="City"
                                                      name="City"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-xl-6">
                                                  <div className="donate-now__payment-info-input">
                                                    <select
                                                      className="selectpicker"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Country
                                                      </option>
                                                      <option value={1}>
                                                        USA
                                                      </option>
                                                      <option value={2}>
                                                        England
                                                      </option>
                                                      <option value={3}>
                                                        Australia
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="donate-now__payment-info-btn-box">
                                                <button
                                                  type="submit"
                                                  className="thm-btn donate-now__payment-info-btn"
                                                >
                                                  Donate now
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Brand One Start*/}

        <section className="brand-one">
          <div className="container">
            <div className="thm-swiper__slider swiper-container">
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={20} // Adjust spacing between slides for different devices
                slidesPerView={6}
                loop={true}
                autoplay={{
                  delay: 2000,
                }}
                breakpoints={{
                  // Define breakpoints for different screen sizes
                  0: {
                    slidesPerView: 2, // Show 2 slides on smaller screens like mobile devices
                    spaceBetween: 10, // Adjust spacing for smaller screens
                  },
                  768: {
                    slidesPerView: 4, // Show 4 slides on tablets
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 6, // Show 6 slides on larger screens like desktops
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-4.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-3.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/*Brand One End*/}
        {/*Testimonial One Start*/}

        {/*Testimonial One End*/}
        {/*Gallery One Start*/}
        <section className="gallery-one">
          <div className="gallery-one__top">
            <h3 className="gallery-one__top-title">Our Photo Gallery</h3>
          </div>
          <div className="gallery-one__bottom">
            <div className="gallery-one__container">
              <ul className="list-unstyled gallery-one__list">
                <li
                  className="gallery-one__single wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="gallery-one__img">
                    <img src="assets/images/resources/p-1.jpg" alt />
                    <a
                      href="assets/images/gallery/gallery-1-1.jpg"
                      className="img-popup"
                    />
                    <div className="gallery-one__content">
                      {/* /.img-popup */}
                      <p className="gallery-one__sub-title">Charity</p>
                      <h5 className="gallery-one__title">
                        <a href="gallery.html">Free Friday Clinic</a>
                      </h5>
                    </div>
                  </div>
                </li>
                <li
                  className="gallery-one__single wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="gallery-one__img">
                    <img src="assets/images/resources/p-2.jpg" alt />
                    <a
                      href="assets/images/gallery/gallery-1-2.jpg"
                      className="img-popup"
                    />
                    <div className="gallery-one__content">
                      {/* /.img-popup */}
                      <p className="gallery-one__sub-title">Charity</p>
                      <h5 className="gallery-one__title">
                        <a href="gallery.html">Cancer Treatment</a>
                      </h5>
                    </div>
                  </div>
                </li>
                <li
                  className="gallery-one__single wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="gallery-one__img">
                    <img src="assets/images/resources/p-3.jpg" alt />
                    <a
                      href="assets/images/gallery/gallery-1-3.jpg"
                      className="img-popup"
                    />
                    <div className="gallery-one__content">
                      {/* /.img-popup */}
                      <p className="gallery-one__sub-title">Charity</p>
                      <h5 className="gallery-one__title">
                        <a href="gallery.html">Night School</a>
                      </h5>
                    </div>
                  </div>
                </li>
                <li
                  className="gallery-one__single wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="gallery-one__img">
                    <img src="assets/images/resources/p-4.jpg" alt />
                    <a
                      href="assets/images/gallery/gallery-1-4.jpg"
                      className="img-popup"
                    />
                    <div className="gallery-one__content">
                      {/* /.img-popup */}
                      <p className="gallery-one__sub-title">Charity</p>
                      <h5 className="gallery-one__title">
                        <a href="gallery.html">Free Computer Training</a>
                      </h5>
                    </div>
                  </div>
                </li>
                <li
                  className="gallery-one__single wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <div className="gallery-one__img">
                    <img src="assets/images/resources/p-5.jpg" alt />
                    <a
                      href="assets/images/gallery/gallery-1-5.jpg"
                      className="img-popup"
                    />
                    <div className="gallery-one__content">
                      {/* /.img-popup */}
                      <p className="gallery-one__sub-title">Charity</p>
                      <h5 className="gallery-one__title">
                        <a href="gallery.html">Free Sewing Training</a>
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*Gallery One End*/}
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
                  <a href="/contact" className="thm-btn faq-one__btn">
                    Learn More
                  </a>
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
        {/*Counter One Start*/}
        <section className="counter-one">
          <div className="container">
            <div className="counter-one__inner">
              <div
                className="counter-one-bg"
                data-jarallax
                data-speed="0.2"
                data-imgposition="50% 0%"
                // style={{
                //   backgroundImage:
                //     "url(assets/images/backgrounds/counter-one-bg.jpg)",
                // }}

                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/site-footer-bg_1920x1200.jpg)",
                }}
              />
              <ul className="list-unstyled counter-one__list">
                <li className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count={70}>
                      00
                    </h3>
                    <span className="counter-one__letter">m</span>
                  </div>
                  <p className="counter-one__text">Total donation</p>
                </li>
                <li className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count={48}>
                      00
                    </h3>
                    <span className="counter-one__letter">k</span>
                  </div>
                  <p className="counter-one__text">Projects funded</p>
                </li>
                <li className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count={38}>
                      00
                    </h3>
                    <span className="counter-one__letter">%</span>
                  </div>
                  <p className="counter-one__text">Kids need help</p>
                </li>
                <li className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count={230}>
                      00
                    </h3>
                    <span className="counter-one__letter" />
                  </div>
                  <p className="counter-one__text">Our volunteers</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*Counter One End*/}
        {/*News One Start*/}
        <section className="news-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">News &amp; Blog</span>
              <h2 className="section-title__title">
                Our Latest & News and Blog
              </h2>
            </div>
            <div className="row">
              {/*News One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-1.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <a href="news-details.html">
                              <i className="far fa-user-circle" /> Admin
                            </a>
                          </li>
                          <li>
                            <a href="news-details.html">
                              <i className="fas fa-comments" /> 2 Comments
                            </a>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <a href="news-details.html">How we Work?</a>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <a href="#">
                            <i className="fas fa-share-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*News One Single End*/}
              {/*News One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-2.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <a href="news-details.html">
                              <i className="far fa-user-circle" /> Admin
                            </a>
                          </li>
                          <li>
                            <a href="news-details.html">
                              <i className="fas fa-comments" /> 2 Comments
                            </a>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <a href="news-details.html">
                            Collaboration & Partnership
                          </a>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <a href="#">
                            <i className="fas fa-share-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*News One Single End*/}
              {/*News One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-3.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <a href="news-details.html">
                              <i className="far fa-user-circle" /> Admin
                            </a>
                          </li>
                          <li>
                            <a href="news-details.html">
                              <i className="fas fa-comments" /> 2 Comments
                            </a>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <a href="news-details.html">Future Plane</a>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <a href="#">
                            <i className="fas fa-share-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*News One Single End*/}
            </div>
          </div>
        </section>
        {/*News One End*/}
      </div>

      {/* /.search-popup */}
      {/* <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="icon-up-arrow" />
      </a> */}
    </div>
  );
};

export default Home;
