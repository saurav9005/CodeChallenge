import React, { Component } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import PriceSlider from "./PriceSlider";

class SetPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      animate: false,
    };

    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display,
    });
    this.setState((prevState) => {
      return { animate: !prevState.animate };
    });
  }
  NottoggleDisplay() {
    this.setState({
      display: this.state.display,
    });
  }
  render() {
    let activeClasses = this.state.animate ? " active" : "";
    return (
      <div className="pricing">
        <h2>Set up your pricing</h2>
        <p>
          Please set up your hourly or fixed rate so thatthe client is aware of
          your Pricing.
        </p>
        <div className="paidby">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button
              className={`button${activeClasses}`}
              onClick={this.toggleDisplay}
            >
              <i class="far fa-clock"></i>Hourly
            </Button>
            <Button onClick={this.toggleDisplay}>
              <i class="fal fa-file-spreadsheet"></i>Fixed
            </Button>
          </ButtonGroup>
          {this.state.display && <PriceSlider />}
        </div>
      </div>
    );
  }
}

export default SetPrice;
