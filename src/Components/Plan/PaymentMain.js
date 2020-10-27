import React, { Component } from "react";
import SubscriptionPlan from "./SubscriptionPlan";

class PaymentMain extends Component {
  render() {
    return (
      <div className="PaymentMain">
        <h2>Upgrade your plan </h2>
        <p>
          Please make the payment to start enjoying all the features of our
          premium plan as soon as possible
        </p>
        <SubscriptionPlan />
      </div>
    );
  }
}

export default PaymentMain;
