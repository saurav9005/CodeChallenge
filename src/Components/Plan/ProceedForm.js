import React from "react";

class ProceedForm extends React.Component {
  render() {
    return (
      <form>
        <input className="email" type="email" placeholder="Email Address" />
        <input className="submit" type="submit" value="Proceed to Payment" />
      </form>
    );
  }
}
export default ProceedForm;
