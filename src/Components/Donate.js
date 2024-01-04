import React from "react";

const Donate = () => {
  return (
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
                            <h3 className="donate-now__title">Personal info</h3>
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
                                      <option selected>Country</option>
                                      <option value={1}>USA</option>
                                      <option value={2}>England</option>
                                      <option value={3}>Australia</option>
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
                            <h3 className="donate-now__title">Payment info</h3>
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
                                      <option selected>Country</option>
                                      <option value={1}>USA</option>
                                      <option value={2}>England</option>
                                      <option value={3}>Australia</option>
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
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                style={{ border: "none" }}
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
