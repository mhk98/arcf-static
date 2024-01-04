import React from "react";

const Orphanage = () => {
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
                    <img src="assets/images/resources/d-2.jpg" alt />
                    <div className="donation-details__date">
                      <p className="mt-2">Orphanage</p>
                    </div>
                  </div>
                  <div className="donation-details__content">
                    <h3 className="donation-details__title">
                      Let’s Orphanage for children get good life
                    </h3>
                    <p className="donation-details__text">
                      ARC Foundation supports orphans with care, education, and
                      opportunities for a brighter tomorrow. The ARC Foundation
                      is dedicated to supporting orphanages and providing care,
                      education, and opportunities for children without parental
                      guardianship. Through our initiatives, we aim to create a
                      nurturing environment that fosters the well-being and
                      development of every child, ensuring they have the
                      resources and support needed for a brighter future. At the
                      ARC Foundation, we understand the unique needs of orphaned
                      children and are committed to creating a foundation of
                      love, care, and opportunity for them. Our programs focus
                      not only on meeting their immediate needs but also on
                      providing quality education, mentorship, and life skills
                      to empower them for a successful future. By collaborating
                      with orphanages, we strive to create a supportive
                      community that nurtures these children, helping them
                      overcome challenges and build resilience. Join us in our
                      mission to provide a loving home and a hopeful future for
                      every orphaned child.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      1. Holistic Care and Support:
                    </p>
                    <p>
                      We prioritize the holistic well-being of every child in
                      our care. This includes meeting their basic needs for
                      nutrition, healthcare, and shelter, as well as providing
                      emotional support and a sense of belonging.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      2. Mentorship and Counseling:
                    </p>
                    <p>
                      Recognizing the importance of positive role models, we
                      implement mentorship programs where experienced
                      individuals guide and inspire the children. Additionally,
                      counseling services are provided to address any emotional
                      or psychological challenges they may face.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>3. Social Integration:</p>
                    <p>
                      To ensure a sense of community and belonging, we
                      facilitate social integration activities. These include
                      group outings, events, and collaborations with local
                      communities, fostering a supportive network for the
                      children.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      4. Community Engagement:
                    </p>
                    <p>
                      We actively engage with the broader community to create
                      awareness about the needs of orphaned children. This
                      includes collaboration with local businesses, schools, and
                      individuals who share our commitment to making a positive
                      impact.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      Impact and Success Stories:
                    </p>
                    <p>
                      The ARC Foundation's Orphanage Program has witnessed
                      transformative success stories, with children growing into
                      resilient, confident individuals ready to contribute
                      positively to society. Our impact is measured not just in
                      academic achievements but in the emotional and social
                      well-being of each child.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Future Goals: </p>
                    <p>
                      As we look ahead, the ARC Foundation remains dedicated to
                      expanding the reach and impact of our Orphanage Program.
                      We aspire to create more homes that provide love, support,
                      and opportunities for orphaned children, ensuring they
                      have the foundation they need to lead fulfilling lives.
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

export default Orphanage;
