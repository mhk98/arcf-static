import React from "react";
import { Link } from "react-router-dom";

const NewsDetails = () => {
  return (
    <div>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="active">Pages</li>
            </ul>
            <h2>Events</h2>
          </div>
        </div>
      </section>
      {/*News details Start*/}
      <section className="news-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="news-details__left">
                <div className="news-details__img">
                  <img src="assets/images/blog/news-details-img-1.jpg" alt />
                  <div className="news-details__date">
                    <p>23 May, 2022</p>
                  </div>
                </div>
                <div className="news-details__content">
                  <ul className="list-unstyled news-details__meta">
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
                  <h3 className="news-details__title">
                    How does the malnutrition affect children?
                  </h3>
                  <p className="news-details__text-1">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.
                    Vestibulum sollicitudin varius mauris non dignissim. Sed
                    quis iaculis est. Nulla quam neque, interdum vitae fermentum
                    lacinia, interdum eu magna. Mauris non posuere tellus. Donec
                    quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan
                    vitae vitae nibh. Nam nec eros id magna hendrerit sagittis.
                    Nullam sed mi non odio feugiat volutpat sit amet nec elit.
                    Maecenas id hendrerit ipsum. Sed eget auctor metus, ac
                    dapibus dolor. Mauris gravida lacus metus, ac sagittis
                    tortor hendrerit sit amet. Aenean dictum eget nulla in
                    pharetra. Vestibulum vulputate vehicula mattis. Vivamus
                    dictum nec dui porta rutrum. Nam erat felis, mattis ac massa
                    at, aliquet tincidunt eros.
                  </p>
                  <p className="news-details__text-2">
                    Nulla quam neque, interdum vitae fermentum lacinia, interdum
                    eu magna. Mauris non posuere tellus. Donec quis euismod
                    tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae
                    nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed
                    mi non odio feugiat volutpat sit amet nec elit. Maecenas id
                    hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor.
                    Mauris gravida lacus metus, ac sagittis tortor hendrerit sit
                    simply free text amet.
                  </p>
                </div>
                <div className="news-details__bottom">
                  <p className="news-details__tags">
                    <span>Tags</span>
                    <a href="#">fundraising</a>
                    <a href="#">charity</a>
                  </p>
                  <div className="news-details__social-list">
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
                <div className="news-details__pagenation-box">
                  <ul className="list-unstyled news-details__pagenation">
                    <li>Why is it important to support them</li>
                    <li>Survived not only five centuries</li>
                  </ul>
                </div>
                <div className="comment-one">
                  <h3 className="comment-one__title">2 comments</h3>
                  <div className="comment-one__single">
                    <div className="comment-one__image">
                      <img src="assets/images/blog/comment-1-1.jpg" alt />
                    </div>
                    <div className="comment-one__content">
                      <h3>Kevin martin</h3>
                      <p>
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting unchanged. It was
                        popularised in the sheets containing lorem ipsum is
                        simply free text.
                      </p>
                      <a
                        href="news-details.html"
                        className="thm-btn comment-one__btn"
                      >
                        Reply
                      </a>
                    </div>
                  </div>
                  <div className="comment-one__single">
                    <div className="comment-one__image">
                      <img src="assets/images/blog/comment-1-2.jpg" alt />
                    </div>
                    <div className="comment-one__content">
                      <h3>Sarah albert</h3>
                      <p>
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting unchanged. It was
                        popularised in the sheets containing lorem ipsum is
                        simply free text.
                      </p>
                      <a
                        href="news-details.html"
                        className="thm-btn comment-one__btn"
                      >
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <div className="comment-form">
                  <h3 className="comment-form__title">Leave a comment</h3>
                  <form
                    action="assets/inc/sendemail.php"
                    className="comment-one__form contact-form-validated"
                    noValidate="novalidate"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="comment-form__input-box">
                          <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="comment-form__input-box">
                          <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Write a message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="comment-form__btn-box">
                          <button
                            type="submit"
                            className="thm-btn comment-form__btn"
                          >
                            Submit comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                {/* <div className="sidebar__single sidebar__search">
              <form action="#" className="sidebar__search-form">
                <input type="search" placeholder="Search here" />
                <button type="submit"><i className="icon-magnifying-glass" /></button>
              </form>
            </div> */}
                <div className="sidebar__single sidebar__post">
                  <div
                    className="sidebar-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/sidebar-shape-1.png)",
                    }}
                  />
                  <h3 className="sidebar__title">Latest News</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-1.jpg" alt />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle" /> By admin
                          </span>
                          <a href="news-details.html">
                            Promoting the rights of children
                          </a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-2.jpg" alt />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle" /> By admin
                          </span>
                          <a href="news-details.html">
                            There are many variations of
                          </a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-3.jpg" alt />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle" /> By admin
                          </span>
                          <a href="news-details.html">
                            Bring to the table win-win survival
                          </a>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*News details End*/}
    </div>
  );
};

export default NewsDetails;
