import React from "react";

const BecomeVolunteer = () => {
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
                <a href="index.html">Home</a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="active">Pages</li>
            </ul>
            <h2>Become a volunteer</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      {/*Become Volunteer Page Start*/}
      <section className="become-volunteer-page">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">
              Register yourself With Us
            </span>
            <h2 className="section-title__title">
              How to Become a Volunteer and <br /> Make a Difference
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="become-volunteer-page__left">
                <div className="become-volunteer-page__img">
                  <img
                    src="assets/images/team/become-volunteer-img-1.jpg"
                    alt
                  />
                </div>
                <div className="become-volunteer-page__content">
                  <h3 className="become-volunteer-page__title">Requirements</h3>
                  <p className="become-volunteer-page__text">
                    Are you passionate about making a difference in your
                    community? Join us in our mission to ARC Foundation. We
                    welcome individuals who are enthusiastic, committed, and
                    eager to contribute their time and skills. To become a
                    volunteer, follow these simple steps.
                  </p>
                  <ul className="list-unstyled become-volunteer__points">
                    <li>
                      <div className="icon">
                        <i className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Explore Opportunities</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Complete the Application</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="become-volunteer__call">
                  <div className="become-volunteer__call-icon">
                    <span className="icon-chat" />
                  </div>
                  <div className="become-volunteer__call-content">
                    <span>Call Anytime</span>
                    <p>
                      <a href="tel:980009630">+98 (000) - 9630</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="become-volunteer-page__right">
                <form className="become-volunteer-page__form">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="become-volunteer-page__input">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="become-volunteer-page__input">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="become-volunteer-page__input">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="become-volunteer-page__input">
                        <input
                          type="text"
                          placeholder="Address"
                          name="Address"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="become-volunteer-page__input">
                        <input
                          type="text"
                          placeholder="Date of Birth"
                          name="date"
                          id="datepicker"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="become-volunteer-page__input">
                        <input
                          type="text"
                          placeholder="Occupation"
                          name="Occupation"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="become-volunteer-page__input become-volunteer__message-box">
                        <textarea
                          name="message"
                          placeholder="Write a Comment"
                          defaultValue={""}
                        />
                      </div>
                      <div className="become-volunteer-page__btn-box">
                        <button
                          type="submit"
                          className="thm-btn become-volunteer-page__btn"
                        >
                          Send a message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Become Volunteer Page End*/}
    </div>
  );
};

export default BecomeVolunteer;
