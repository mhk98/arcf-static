import React from "react";

const OnlinePayment = () => {
  return (
    <div>
      <form className="donate-now__payment-info-form">
        <div className="row">
          <div className="col-xl-6">
            <div className="donate-now__payment-info-input">
              <input type="text" placeholder="Card number" name="number" />
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
              <input type="text" placeholder="Card code ( CVC )" name="code" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="donate-now__payment-info-input">
              <input type="text" placeholder="Billing address" name="Billing" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="donate-now__payment-info-input">
              <input type="text" placeholder="City" name="City" />
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
            Donate
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnlinePayment;
