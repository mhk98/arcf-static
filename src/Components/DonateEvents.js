import React from "react";
import { Link } from "react-router-dom";
import project1 from "../image/health/Health-Care-Program.jpg"
import project2 from "../image/education/Education and Child Program.jpg"
import project3 from "../image/environment/Environment.jpg"
import project4 from "../image/orphanage/Orphanage.jpg"
import project5 from "../image/old-home/Old-Home.jpg"
import project6 from "../image/quality-life/Human-Aid.jpg"
const DonateEvents = () => {
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
              <li className="active">Donation</li>
            </ul>
            <h2>Donation</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      <section className="product-details">
        <div className="container">
          <div
            className="row"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
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
                <h3 className="product-details__title">Donation</h3>
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

      {/*Causes One Start*/}
      <section className="causes-one">
        <div className="container">
          <h3 className="causes-one__title mb-3">Latest Events</h3>

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
                    <Link to="/health">Health Care Program</Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.
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
                                            ARC Foundation's Health Care Program
                                            is a lifeline for those in need. We
                                            provide vital medical assistance,
                                            support for treatments, and ensure
                                            access to essential healthcare
                                            services. Join us in promoting
                                            well-being and creating a healthier,
                                            more resilient community.
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
                    <Link to="/health">Education Program</Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.
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
                                            ARC Foundation's Health Care Program
                                            is a lifeline for those in need. We
                                            provide vital medical assistance,
                                            support for treatments, and ensure
                                            access to essential healthcare
                                            services. Join us in promoting
                                            well-being and creating a healthier,
                                            more resilient community.
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
                    <p className="mt-2">Health</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/health">Improving Quality Of Life</Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.
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
                                            ARC Foundation's Health Care Program
                                            is a lifeline for those in need. We
                                            provide vital medical assistance,
                                            support for treatments, and ensure
                                            access to essential healthcare
                                            services. Join us in promoting
                                            well-being and creating a healthier,
                                            more resilient community.
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
                    <p className="mt-2">Environment</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/health">Environment</Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.
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
                                            ARC Foundation's Health Care Program
                                            is a lifeline for those in need. We
                                            provide vital medical assistance,
                                            support for treatments, and ensure
                                            access to essential healthcare
                                            services. Join us in promoting
                                            well-being and creating a healthier,
                                            more resilient community.
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
                    <p className="mt-2">Orphanage</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/health">Orphanage</Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.
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
                                            ARC Foundation's Health Care Program
                                            is a lifeline for those in need. We
                                            provide vital medical assistance,
                                            support for treatments, and ensure
                                            access to essential healthcare
                                            services. Join us in promoting
                                            well-being and creating a healthier,
                                            more resilient community.
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
                    <p className="mt-2">Old Home</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/health">Old Home</Link>
                  </h3>
                  <p className="causes-one__text">
                    ARC Foundation's Health Care Program is a lifeline for those
                    in need. We provide vital medical assistance.
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
                                            ARC Foundation's Health Care Program
                                            is a lifeline for those in need. We
                                            provide vital medical assistance,
                                            support for treatments, and ensure
                                            access to essential healthcare
                                            services. Join us in promoting
                                            well-being and creating a healthier,
                                            more resilient community.
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
      {/*Causes One End*/}
    </div>
  );
};

export default DonateEvents;
