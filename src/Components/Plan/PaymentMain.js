import React, { Component } from "react";
import SubscriptionPlan from "./SubscriptionPlan";
import PaymentDetails from "./PaymentDetails";
import AddPayment from "./AddPayment";
import ProceedForm from "./ProceedForm";
import "./plan.css";

class PaymentMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };

    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: false,
      display: !this.state.display,
    });
  }
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
        <button className="add-btn" onClick={this.toggleDisplay}>
          Add Payment Method{" "}
        </button>
        {!this.state.display && <AddPayment />}
        <ProceedForm />
      </div>
    );
  }
}

export default PaymentMain;
