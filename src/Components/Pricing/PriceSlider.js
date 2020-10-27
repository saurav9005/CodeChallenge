import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./price.css";

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <p open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </p>
  );
}

const marks = [
  {
    value: 0,
    label: "$20",
  },
  {
    value: 100,
    label: "$300",
  },
];

function valuetext(value) {
  return `$${value}`;
}

class PriceSlider extends Component {
  render() {
    return (
      <div className="Pricing">
        <Typography id="discrete-slider-custom" gutterBottom>
          {ValueLabelComponent}
        </Typography>
        <Slider
          defaultValue={50}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </div>
    );
  }
}
export default PriceSlider;
