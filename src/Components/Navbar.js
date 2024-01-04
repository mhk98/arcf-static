import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/resource/logo-1.png";
import shape from "../image/resource/main-menu-shape-1.png";
import BackToTopButton from "./BackToTopButton";
import "./Navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle click on menu item
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      x: "0%",
      transition: {
        delay: 0.5,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      x: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };

  const handleMenuClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <div className="custom-cursor">
      <div className="header-container">
        <header className="main-header ">
          <nav className="main-menu ">
            <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link to="/">
                      <img src={logo} alt="" width={200} />
                    </Link>
                  </div>
                  <div className="main-menu__shape-1 float-bob-x">
                    <img src={shape} alt="" />
                  </div>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__right-top">
                    <div className="main-menu__right-top-left">
                      {/* <div className="main-menu__volunteers">
                      <div className="main-menu__volunteers-icon">
                        <img
                          src="assets/images/icon/main-menu-heart-icon.png"
                          alt
                        />
                      </div>
                      <div className="main-menu__volunteers-text-box">
                        <p className="main-menu__volunteers-text">
                          "become-volunteer.html">
                            Become a<span>volunteers</span>
                          </Link>
                        </p>
                      </div>
                    </div> */}
                    </div>
                    <div className="main-menu__right-top-right">
                      <div className="main-menu__right-top-address">
                        <ul className="list-unstyled main-menu__right-top-address-list">
                          <li>
                            <div className="icon">
                              <span className="icon-phone-call" />
                            </div>
                            <div className="content">
                              {/* <p>Helpline</p> */}
                              <h5 className="">
                                <Link to="tel:980009630">+880 2224412300</Link>
                              </h5>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-message" />
                            </div>
                            <div className="content">
                              {/* <p>Send email</p> */}
                              <h5>
                                <Link
                                  className="mt-4"
                                  to="mailto:needhelp@company.com"
                                >
                                  arcf.society.bd@gmail.com
                                </Link>
                              </h5>
                            </div>
                          </li>
                          {/* <li>
                          <div className="icon">
                            <span className="icon-location" />
                          </div>
                          <div className="content">
                            <p>321 Eidgah Road Pagar BSCIC</p>
                            <h5>Gazipur Bangladesh</h5>
                          </div>
                        </li> */}
                        </ul>
                      </div>
                      <div className="main-menu__right-top-social">
                        <Link to="https://twitter.com/ARCF2009">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-facebook" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="main-menu__right-bottom">
                    <div className="main-menu__main-menu-box">
                      <ul className="main-menu__list">
                        <li
                          className={activeItem === 0 ? "active" : ""}
                          onClick={() => {
                            handleItemClick(0);
                            handleMenuClick();
                          }}
                        >
                          <Link to="/">Home</Link>
                        </li>
                        <li
                          className={activeItem === 1 ? "active" : ""}
                          onClick={() => {
                            handleItemClick(1);
                            handleMenuClick();
                          }}
                        >
                          <Link to="/about-us">About</Link>
                        </li>
                        <li
                          className={activeItem === 2 ? "active" : ""}
                          onClick={() => {
                            handleItemClick(2);
                            handleMenuClick();
                          }}
                        >
                          <Link to="/projects">Project</Link>
                        </li>
                        <li
                          className={activeItem === 3 ? "active" : ""}
                          onClick={() => {
                            handleItemClick(3);
                            handleMenuClick();
                          }}
                        >
                          <Link to="/news">News</Link>
                        </li>
                        <li
                          className={activeItem === 4 ? "active" : ""}
                          onClick={() => {
                            handleItemClick(4);
                            handleMenuClick();
                          }}
                        >
                          <Link to="/events">Events</Link>
                        </li>
                        <li
                          className={activeItem === 5 ? "active" : ""}
                          onClick={() => {
                            handleItemClick(5);
                            handleMenuClick();
                          }}
                        >
                          <Link to="/donate-events">Donation</Link>
                        </li>
                        <li
                          className={activeItem === 6 ? "active" : ""}
                          onClick={() => {
                            handleItemClick(6);
                            handleMenuClick();
                          }}
                        >
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        <li
                          className={activeItem === 7 ? "active" : ""}
                          onClick={() => {
                            handleItemClick(7);
                            handleMenuClick();
                          }}
                        >
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="main-menu__main-menu-content-box">
                      <div className="main-menu__search-cat-btn-box">
                        {/* <div className="main-menu__search-box">
                        <Link
                          to="#"
                          className="main-menu__search search-toggler icon-magnifying-glass"
                        />
                      </div> */}
                        {/* <div className="main-menu__cat-box">
                        <Link
                          to="cart.html"
                          className="main-menu__cart icon-shopping-cart"
                        />
                      </div> */}
                        <div className="main-menu__btn-box">
                          <Link to="/donate-now" className="main-menu__btn">
                            <span className="fa fa-heart" /> Donate now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content" />
          {/* /.sticky-header__content */}
        </div>
      </div>
      <main className="nav-container">
        <motion.nav
          initial="closed"
          animate={mobileNavOpen ? "opened" : "closed"}
        >
          <div className="mobile-navbar">
            <div className="mobile-logo">
              <Link to="/">
                <img src={logo} alt="" width={145} />
              </Link>
            </div>
            <motion.div
              className="open-svg"
              variants={hideNavItemsVariant}
              onClick={() => setMobileNavOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                width="24"
                viewBox="0 0 448 512"
                fill="black"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </motion.div>
          </div>

          <motion.div variants={mobileMenuVariant} className="mobile-menu">
            <div className="top-nav">
              <div>
                <Link to="/">
                  <img src={logo} alt="" width={200} />
                </Link>
                <motion.ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                  }}
                  variants={ulVariant}
                  // style={{ marginTop: "-20px", marginRight: "160px" }}
                >
                  <li
                    whileTap={{ scale: 0.95 }}
                    variants={liVariant}
                    className={activeItem === 0 ? "active" : ""}
                    onClick={() => {
                      handleItemClick(0);
                      setMobileNavOpen(false);
                    }}
                  >
                    <Link style={{ color: "white", textAlign: "left" }} to="/">
                      Home
                    </Link>
                  </li>
                  <li
                    whileTap={{ scale: 0.95 }}
                    variants={liVariant}
                    className={activeItem === 1 ? "active" : ""}
                    onClick={() => {
                      handleItemClick(1);
                      setMobileNavOpen(false);
                    }}
                  >
                    <Link
                      style={{ color: "white", textAlign: "left" }}
                      to="/about-us"
                    >
                      About
                    </Link>
                  </li>
                  <li
                    whileTap={{ scale: 0.95 }}
                    variants={liVariant}
                    className={activeItem === 2 ? "active" : ""}
                    onClick={() => {
                      handleItemClick(2);
                      setMobileNavOpen(false);
                    }}
                  >
                    <Link
                      style={{ color: "white", textAlign: "left" }}
                      to="/projects"
                    >
                      Project
                    </Link>
                  </li>
                  <li
                    whileTap={{ scale: 0.95 }}
                    variants={liVariant}
                    className={activeItem === 3 ? "active" : ""}
                    onClick={() => {
                      handleItemClick(3);
                      setMobileNavOpen(false);
                    }}
                  >
                    <Link
                      style={{ color: "white", textAlign: "left" }}
                      to="/news"
                    >
                      News
                    </Link>
                  </li>
                  <li
                    whileTap={{ scale: 0.95 }}
                    variants={liVariant}
                    className={activeItem === 4 ? "active" : ""}
                    onClick={() => {
                      handleItemClick(4);
                      setMobileNavOpen(false);
                    }}
                  >
                    <Link
                      style={{ color: "white", textAlign: "left" }}
                      to="/events"
                    >
                      Events
                    </Link>
                  </li>
                  <li
                    whileTap={{ scale: 0.95 }}
                    variants={liVariant}
                    className={activeItem === 5 ? "active" : ""}
                    onClick={() => {
                      handleItemClick(5);
                      setMobileNavOpen(false);
                    }}
                  >
                    <Link
                      style={{ color: "white", textAlign: "left" }}
                      to="/donate-events"
                    >
                      Donate
                    </Link>
                  </li>
                  <li
                    whileTap={{ scale: 0.95 }}
                    variants={liVariant}
                    className={activeItem === 6 ? "active" : ""}
                    onClick={() => {
                      handleItemClick(6);
                      setMobileNavOpen(false);
                    }}
                  >
                    <Link
                      style={{ color: "white", textAlign: "left" }}
                      to="/gallery"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li
                    whileTap={{ scale: 0.95 }}
                    variants={liVariant}
                    className={activeItem === 7 ? "active" : ""}
                    onClick={() => {
                      handleItemClick(7);
                      setMobileNavOpen(false);
                    }}
                  >
                    <Link
                      style={{ color: "white", textAlign: "left" }}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </motion.ul>
              </div>
              <motion.button
                className="close-svg"
                variants={fadeInVariant}
                onClick={() => setMobileNavOpen(false)}
                style={{ fontSize: "30px", backgroundColor: "#283734" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  width="24"
                  viewBox="0 0 384 512"
                  fill="white"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.nav>
      </main>

      <BackToTopButton />
    </div>
  );
};

export default Navbar;
