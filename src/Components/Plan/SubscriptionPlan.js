import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

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
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        <div class="whole-wrap">
          <img src="" alt="" />
          <div className="business">
            <h3>Small Business</h3>
            <span>Change Plan</span>
          </div>
          <div className="planprice">8,350</div>
        </div>
      </Button>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-controlled-open-select-label">Age</InputLabel> */}
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={price}
          onChange={handleChange}
        >
          <MenuItem value="1">
            <div class="whole-wrap">
              <img src="" alt="" />
              <div className="business">
                <h3>Small Business</h3>
                <span>Change Plan</span>
              </div>
              <div className="planprice">8,350</div>
            </div>
          </MenuItem>
          <MenuItem value="2">
            <div class="whole-wrap">
              <img src="" alt="" />
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
