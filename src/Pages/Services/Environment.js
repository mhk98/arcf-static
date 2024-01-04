import React from "react";

const Environment = () => {
  return (
    <div>
      {/*Donation Details Start*/}

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
            <h2>Environment</h2>
          </div>
        </div>
      </section>
      <section className="donation-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10">
              <div className="donation-details__left">
                <div className="donation-details__top">
                  <div className="donation-details__img">
                    <img src="assets/images/resources/d-3.jpg" alt />
                    <div className="donation-details__date">
                      <p className="mt-2">Environment</p>
                    </div>
                  </div>
                  <div className="donation-details__content">
                    <h3 className="donation-details__title">
                      Let’s Environment for children get good life
                    </h3>
                    <p className="donation-details__text">
                      The ARC Foundation recognizes the profound impact of
                      environmental well-being on the overall health and
                      prosperity of communities. Our commitment to environmental
                      sustainability is embedded in various initiatives that
                      address ecological challenges, promote conservation, and
                      foster a sense of responsibility toward the planet.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      1. Reforestation and Green Spaces:
                    </p>
                    <p>
                      We actively engage in reforestation projects to restore
                      and preserve natural ecosystems. Creating green spaces
                      within communities contributes not only to biodiversity
                      but also enhances the overall quality of life for
                      residents.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      2. Waste Management and Recycling Programs:
                    </p>
                    <p>
                      To mitigate environmental degradation, we implement waste
                      management initiatives, including recycling programs.
                      These efforts aim to reduce waste, promote responsible
                      disposal practices, and create a cleaner, healthier
                      environment.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      3. Environmental Education and Awareness:
                    </p>
                    <p>
                      Education is a cornerstone of sustainable change. Our
                      foundation conducts awareness campaigns and educational
                      programs to promote environmental stewardship, climate
                      change awareness, and the adoption of eco-friendly
                      practices within communities.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      4. Water Conservation and Clean Water Access:
                    </p>
                    <p>
                      Access to clean water is essential for both human
                      well-being and environmental health. Our programs include
                      initiatives for water conservation, promoting responsible
                      water usage, and ensuring communities have access to safe
                      and clean water sources.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      Impact and Sustainability:{" "}
                    </p>
                    <p>
                      The ARC Foundation's work in environmental conservation
                      has resulted in tangible improvements, from increased
                      green cover to heightened awareness about sustainable
                      practices. The long-term impact is evident in communities
                      that are more resilient, environmentally conscious, and
                      better equipped to address climate-related challenges.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Future Initiatives: </p>
                    <p>
                      As we look to the future, the ARC Foundation remains
                      committed to expanding its environmental initiatives,
                      collaborating with communities, and advocating for
                      policies that prioritize environmental sustainability. By
                      empowering individuals to be stewards of the environment,
                      we aim to create a legacy of ecological balance and
                      resilience for generations to come.
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

export default Environment;
