import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div
          className="site-footer-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/site-footer-bg.jpg)",
          }}
        ></div>
        <div className="site-footer__top">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <Link to="/">
                      <img
                        src="assets/images/resources/logo-2.png"
                        alt=""
                        width={200}
                      />
                    </Link>
                  </div>
                  <div
                    className="footer-widget__about-text-box"
                    style={{ marginTop: "-50px" }}
                  >
                    <p className="footer-widget__about-text">
                      ARC Foundation empowers lives through education,
                      healthcare, and community programs. Join us in creating
                      positive change and transforming communities. Together, we
                      rise for a brighter future.
                    </p>
                  </div>
                  <div className="footer-widget__btn">
                    <a href="donate-now">
                      {" "}
                      <span className="fa fa-heart" />
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__links clearfix">
                  <h3 className="footer-widget__title">Quick Links</h3>
                  <ul className="footer-widget__links-list list-unstyled clearfix">
                    <li>
                      <a href="/about-us">About us</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a href="/news">Latest News</a>
                    </li>

                    <li>
                      <a href="/donate-now">Donations</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__non-profit clearfix">
                  <h3 className="footer-widget__title">Non profit</h3>
                  <ul className="footer-widget__non-profit-list list-unstyled clearfix">
                    <li>
                      <Link to="/health/Health">Health Care Program</Link>
                    </li>
                    <li>
                      <Link to="/education/Education">
                        Education Child Program
                      </Link>
                    </li>
                    <li>
                      <Link to="/microcredit/Microcredit">
                        Microcredit Program
                      </Link>
                    </li>
                    <li>
                      <Link to="/quality-life/Quality-Life">
                        Improving Quality Of Life
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__contact">
                  <h3 className="footer-widget__title">Contact</h3>
                  {/* <p className="footer-widget__contact-text">
                    321 Eidgah Road Pagar BSCIC <br /> Gazipur Bangladesh
                  </p> */}
                  <ul className="list-unstyled footer-widget__contact-list">
                    <li>
                      <div className="icon">
                        <i className="fa fa-envelope" />
                      </div>
                      <div className="text">
                        <p>
                          <a href="mailto:needhelp@company.com ">
                            arcf.society.bd@gmail.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="text">
                        <p>
                          <a href="tel:980009630">+880 2224412300</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="text">
                        <p>
                          <a href="tel:980009630">+880 1922694910</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="site-footer__social">
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
        <div className="site-footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <p className="site-footer__bottom-text">
                    © All Copyright 2023 by <a href="#">Arcfbd.org</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
