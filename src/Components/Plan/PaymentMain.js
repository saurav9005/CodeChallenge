import React, { Component } from "react";
import SubscriptionPlan from "./SubscriptionPlan";
import PaymentDetails from "./PaymentDetails";
import "./plan.css";

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
        <PaymentDetails />
      </div>
    );
  }
}

export default PaymentMain;
