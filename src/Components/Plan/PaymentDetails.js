import React, { Component } from "react";
import icon2 from "./images/icon2.jpg";
import icon3 from "./images/icon3.jpg";

class PaymentDetails extends Component {
  render() {
    return (
      <div className="Payment">
        <h2>Payment details</h2>
        <ul>
          <li>
            <img src={icon2} alt="" />
            <div className="cardInfo">
              <h2>Credit Card</h2>
              <span>2344 XXXX XXXX 8880</span>
            </div>
            <input type="text" placeholder="CVC" />
          </li>
          <li>
            <img src={icon3} alt="" />
            <div className="cardInfo">
              <h2>Credit Card</h2>
              <span>2344 XXXX XXXX 8880</span>
            </div>
            <input type="text" placeholder="CVC" />
          </li>
        </ul>
      </div>
    );
  }
}
export default PaymentDetails;
