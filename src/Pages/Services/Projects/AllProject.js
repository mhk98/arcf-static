import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllProjectsBannerQuery } from "../../../Redux/features/projectBanner/projectBanner";
import { useGetAllProjectsQuery } from "../../../Redux/features/projects/projects";
import { useGetAllProjectsDetailsQuery } from "../../../Redux/features/projectsDetails/projectsDetails";
import project2 from "../../../image/education/Education and Child Program.jpg";
import project3 from "../../../image/environment/Environment.jpg";
import inside from "../../../image/health/Health-Care-Program-(Inside).jpg";
import project1 from "../../../image/health/Health-Care-Program.jpg";
import project5 from "../../../image/old-home/Old-Home.jpg";
import project4 from "../../../image/orphanage/Orphanage.jpg";
import project6 from "../../../image/quality-life/Improving-Quality-Of-Life.jpg";

const AllProject = () => {
  const [projects, setProjects] = useState([]);

  const { data, isLoading, isError, error } = useGetAllProjectsQuery();

  useEffect(() => {
    if (isError) {
      console.error("Error fetching projects data", error);
    } else if (!isLoading) {
      if (data) {
        setProjects(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  const [banner, setBanner] = useState("");

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useGetAllProjectsBannerQuery();

  useEffect(() => {
    if (isError1) {
      console.error("Error fetching projects data", error1);
    } else if (!isLoading1) {
      if (data1) {
        setBanner(data1.data);
      }
    }
  }, [data1, isLoading1, isError1, error1]);

  const [projectDetails, setProjectDetails] = useState("");
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useGetAllProjectsDetailsQuery();

  useEffect(() => {
    if (isError2) {
      console.error("Error fetching projects data", error2);
    } else if (!isLoading2) {
      if (data2) {
        setProjectDetails(data2.data);
      }
    }
  }, [data2, isLoading2, isError2, error2]);

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
        <Swiper
          className="page-header-bg"
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0} // Adjust space between slides if needed
          slidesPerView={1}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <div
              className="page-header-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/page-header-bg.jpg)",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="page-header-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/project-banner.jpg)",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="page-header-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/page-header-bg.jpg)",
              }}
            ></div>
          </SwiperSlide>
          {/* Add more SwiperSlides if needed */}
        </Swiper>

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
            <h2>Projects</h2>
          </div>
        </div>
      </section>

      <section className="product-details">
        <div className="container">
          <div
            className="row"
            style={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="col-lg-6 col-xl-6">
              <div className="product-details__top">
                <h3 className="product-details__title">Activities</h3>
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
                <img src={inside} alt="" style={{ width: 370, height: 382 }} />
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
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <Link to="/health" onClick={() => handleMenuClick()}>
                    <img src={project1} alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Health</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/health">Health Care Program</Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.
                    <span className="ms-2">
                      <Link
                        to="/health"
                        onClick={() => handleMenuClick()}
                        style={{ fontWeight: "bold" }}
                      >
                        see more...
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <Link to="/education" onClick={() => handleMenuClick()}>
                    <img src={project2} alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Education</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/education" onClick={() => handleMenuClick()}>
                      Education Program
                    </Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.
                    <span className="ms-2">
                      <Link
                        to="/education"
                        style={{ fontWeight: "bold" }}
                        onClick={() => handleMenuClick()}
                      >
                        see more...
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <Link to="/quality-life" onClick={() => handleMenuClick()}>
                    <img src={project6} alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Health</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/health" onClick={() => handleMenuClick()}>
                      Improving Quality Of Life
                    </Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.
                    <span className="ms-2">
                      <Link
                        to="/quality-life"
                        onClick={() => handleMenuClick()}
                        style={{ fontWeight: "bold" }}
                      >
                        see more...
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <Link onClick={() => handleMenuClick()} to="/environment">
                    <img src={project3} alt="" />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Environment</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link onClick={() => handleMenuClick()} to="/environment">
                      Environment
                    </Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.{" "}
                    <span className="ms-2">
                      <Link
                        to="/environment"
                        style={{ fontWeight: "bold" }}
                        onClick={() => handleMenuClick()}
                      >
                        see more...
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <Link to="/orphanage" onClick={() => handleMenuClick()}>
                    <img src={project4} alt="" />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Orphanage</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link onClick={() => handleMenuClick()} to="/orphanage">
                      Orphanage
                    </Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.{" "}
                    <span className="ms-2">
                      <Link
                        onClick={() => handleMenuClick()}
                        to="/orphanage"
                        style={{ fontWeight: "bold" }}
                      >
                        see more...
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <Link onClick={() => handleMenuClick()} to="/oldhome">
                    <img src={project5} alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Old Home</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link onClick={() => handleMenuClick()} to="/oldhome">
                      Old Home
                    </Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.{" "}
                    <span className="ms-2">
                      <Link
                        onClick={() => handleMenuClick()}
                        to="/oldhome"
                        style={{ fontWeight: "bold" }}
                      >
                        see more...
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Team One End*/}
    </div>
  );
};

export default AllProject;
