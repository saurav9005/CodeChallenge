import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import icon1 from "./images/icon1.jpg";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function SubscriptionPlan() {
  const classes = useStyles();
  const [price, setPrice] = React.useState("");

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      {/* <Button className={classes.button} onClick={handleOpen}>
        <div class="whole-wrap">
          <img src="" alt="" />
          <div className="business">
            <h3>Small Business</h3>
            <span>Change Plan</span>
          </div>
          <div className="planprice">8,350</div>
        </div>
      </Button> */}
      <FormControl className={classes.formControl}>
        <Select
          value={price}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            <div class="whole-wrap">
              <img src={icon1} alt="" />
              <div className="business">
                <h3>Small Business</h3>
                <span>Change Plan</span>
              </div>
              <div className="planprice">8,350</div>
            </div>
          </MenuItem>
          <MenuItem value={10}>
            <div class="whole-wrap">
              <img src={icon1} alt="" />
              <div className="business">
                <h3>Small Business</h3>
                <span>Change Plan</span>
              </div>
              <div className="planprice">8,350</div>
            </div>
          </MenuItem>
          <MenuItem value={20}>
            <div class="whole-wrap">
              <img src={icon1} alt="" />
              <div className="business">
                <h3>Small Business</h3>
                <span>Change Plan</span>
              </div>
              <div className="planprice">8,350</div>
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SubscriptionPlan;
