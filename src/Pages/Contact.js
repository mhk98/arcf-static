import React from "react";

const Contact = () => {
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
        />
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="active">Contact</li>
            </ul>
            <h2>Contact us</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}
      {/*Contact Three Start*/}
      <section className="contact-three">
        <div
          className="contact-three-shape"
          style={{
            backgroundImage:
              "url(assets/images/shapes/contact-three-shape.png)",
          }}
        />
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Contact with us</span>
            <h2 className="section-title__title">
              Feel free to write us <br />
              anytime
            </h2>
          </div>
          <div className="contact-page__form-box">
            <form
              action="assets/inc/sendemail.php"
              className="contact-page__form contact-form-validated"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input type="text" placeholder="Your name" name="name" />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input type="text" placeholder="Phone" name="phone" />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input type="text" placeholder="Subject" name="subject" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="contact-form__input-box text-message-box">
                    <textarea
                      name="message"
                      placeholder="Write a message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="contact-form__btn-box">
                    <button type="submit" className="thm-btn contact-form__btn">
                      Send a message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*Contact Three End*/}
      {/*Contact One Start*/}
      <section className="contact-one">
        <div className="container">
          <div className="contact-one__inne">
            <ul className="list-unstyled contact-one__list">
              <li className="contact-one__single">
                <div className="contact-one__icon">
                  <span className="icon-phone-call" />
                </div>
                <div className="contact-one__content">
                  <p className="contact-one__sub-title">Helpline</p>
                  <h3 className="contact-one__number">
                    <a href="tel:980009630">+880 2224412300</a>
                  </h3>
                </div>
              </li>
              <li className="contact-one__single">
                <div className="contact-one__icon">
                  <span className="icon-message" />
                </div>
                <div className="contact-one__content">
                  <p className="contact-one__sub-title">Send email</p>
                  <h3 className="contact-one__number">
                    <a href="mailto:needhelp@company.com">
                      arcf.society.bd@gmail.com
                    </a>
                  </h3>
                </div>
              </li>
              <li className="contact-one__single">
                <div className="contact-one__icon">
                  <span className="icon-location" />
                </div>
                <div className="contact-one__content">
                  <p className="contact-one__sub-title">
                    321, Fatema Manjil, Fakir Market, Pagar, BSCIC,
                  </p>
                  <h3 className="contact-one__number">
                    Tongi, Gazipur-1710, Bangladesh
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Contact One End*/}
      {/*Google Map Start*/}
      <section className="google-map google-map-two">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="google-map__one"
          allowFullScreen
        />
      </section>
      {/*Google Map End*/}
    </div>
  );
};

export default Contact;
