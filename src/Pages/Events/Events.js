import React from "react";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Events = () => {
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
                <Link to="index.html">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="active">Events</li>
            </ul>
            <h2>Events</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      <section className="product-details">
        <div className="container">
          <div
            className="row"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div className="col-lg-6 col-xl-6">
              <div className="product-details__top">
                <h3 className="product-details__title">Events</h3>
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
                <img
                  src="assets/images/shop/product-details-img-1.webp"
                  alt
                  style={{ width: 370, height: 382 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Events Page Start*/}
      <section className="events-page">
        <div className="container">
          <div className="row">
            <h3 className="causes-one__title mb-3">Upcoming Events</h3>

            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-1.jpg" alt="" />

                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          Play for the world with us
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              {/*Events One Single End*/}
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-2.jpg" alt />
                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          Contrary to popular belief
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-3.jpg" alt />
                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          There are many variations of
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-4.jpg" alt />
                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          Play for the world with us
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-5.jpg" alt />
                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          Contrary to popular belief
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-6.jpg" alt />
                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          There are many variations of
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              {/*Events One Single End*/}
            </div>
          </div>
          <div className="row">
            <h3 className="causes-one__title mb-3">Ongoing Events</h3>

            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-1.jpg" alt="" />

                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          Play for the world with us
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              {/*Events One Single End*/}
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-2.jpg" alt />
                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          Contrary to popular belief
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-3.jpg" alt />
                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          There are many variations of
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-4.jpg" alt />
                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          Play for the world with us
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-5.jpg" alt />
                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          Contrary to popular belief
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <Link to="/event-details">
                <div className="events-one__single">
                  <div className="events-one__img">
                    <img src="assets/images/resources/p-6.jpg" alt />
                    <div className="events-one__date">
                      <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                      <ul className="list-unstyled events-one__meta">
                        <li>
                          <i className="fas fa-clock" />
                          8:00pm
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                      <h3 className="events-one__title">
                        <Link to="/event-details">
                          There are many variations of
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              {/*Events One Single End*/}
            </div>
          </div>
        </div>
      </section>
      {/*Events Page End*/}
    </div>
  );
};

export default Events;
