import React from "react";

const Oldhome = () => {
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
                <a href="/">Home</a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="active">Pages</li>
            </ul>
            <h2>Orphanage</h2>
          </div>
        </div>
      </section>
      {/*Donation Details Start*/}
      <section className="donation-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10">
              <div className="donation-details__left">
                <div className="donation-details__top">
                  <div className="donation-details__img">
                    <img src="assets/images/resources/d-1.jpg" alt />
                    <div className="donation-details__date">
                      <p className="mt-2">Orphanage</p>
                    </div>
                  </div>
                  <div className="donation-details__content">
                    <h3 className="donation-details__title">
                      Old home for retuired people get good life
                    </h3>
                    <p className="donation-details__text">
                      The ARC Foundation's Old Home Program is a compassionate
                      initiative aimed at providing care, support, and a
                      dignified living environment for senior citizens. Rooted
                      in the belief that every individual deserves respect and
                      comfort in their golden years, our program addresses the
                      unique needs of the elderly through comprehensive and
                      personalized care.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      1. Comprehensive Elderly Care:
                    </p>
                    <p>
                      Our Old Home program offers a holistic approach to elderly
                      care, addressing not only physical health but also
                      emotional and social well-being. We provide assistance
                      with daily activities, medical care, and recreational
                      opportunities to ensure a fulfilling and enriching
                      experience for residents.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      2. Health and Wellness Initiatives:
                    </p>
                    <p>
                      Recognizing the importance of health in old age, we
                      prioritize health and wellness initiatives. Regular health
                      check-ups, access to medical services, and wellness
                      programs contribute to the overall well-being of
                      residents.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      3. Recreational and Social Activities:
                    </p>
                    <p>
                      We understand the importance of staying socially engaged.
                      Our program includes a variety of recreational and social
                      activities, fostering a sense of community and providing
                      opportunities for residents to pursue hobbies and
                      interests.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      4. Emotional Support and Counseling:
                    </p>
                    <p>
                      Emotional well-being is central to our care philosophy.
                      Trained counselors are available to provide emotional
                      support, companionship, and counseling services to address
                      the psychological needs of residents.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      5. Comfortable Living Spaces:
                    </p>
                    <p>
                      Our Old Home facilities are designed to provide a
                      comfortable and safe living environment. Thoughtful
                      consideration is given to the design and amenities to
                      create a home-like atmosphere where residents can age with
                      dignity.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      6. End-of-Life Care and Dignified Departure:
                    </p>
                    <p>
                      For those in the final stages of life, our program
                      includes end-of-life care, prioritizing comfort, dignity,
                      and compassionate support. We strive to create an
                      environment where residents can peacefully transition with
                      the utmost care and respect.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      Impact and Success Stories:
                    </p>
                    <p>
                      The impact of the ARC Foundation's Old Home Program is
                      evident in the improved quality of life, the contentment
                      of residents, and the positive feedback from families.
                      Success is measured in the smiles, comfort, and sense of
                      belonging experienced by the elderly residents under our
                      care.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Future Aspirations:</p>
                    <p>
                      As we move forward, the ARC Foundation remains committed
                      to expanding our Old Home Program to serve more elderly
                      individuals in need. We aspire to continuously enhance the
                      quality of care, introduce innovative approaches, and
                      advocate for the rights and well-being of senior
                      citizens.b
                    </p>
                  </div>
                </div>

                <div className="donation-details__donate">
                  <div
                    className="donation-details__donate-shape"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/donation-details-donate-shape.png)",
                    }}
                  ></div>
                  <div className="donation-details__donate-left">
                    <ul className="list-unstyled donation-details__donate-list">
                      <li>
                        <div className="icon">
                          <span className="icon-solidarity" />
                        </div>
                        <div className="text">
                          <span>Raised</span>
                          <p>$25,270</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-target-1" />
                        </div>
                        <div className="text">
                          <span>Goal</span>
                          <p>$30,000</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="donation-details__donate-btn">
                    <a href="/donate-now" className="thm-btn">
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Donation Details End*/}
    </div>
  );
};

export default Oldhome;
