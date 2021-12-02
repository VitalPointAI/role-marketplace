import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import Displayname from "./AccountDisplay";

function Encryptionpart() {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [displayArray, setDisplayArray] = useState([]);

  function handleChange(TextField) {
    setTextFieldValue(TextField.target.value);
  }
  function handleClick() {
    let tempDisplayArray = [];
    tempDisplayArray.push(displayArray);
    tempDisplayArray.push(" " + textFieldValue);
    setDisplayArray(tempDisplayArray);
    setTextFieldValue("");
  }
  let list = displayArray.map((value) => (
    <Grid>
      <Grid item xs={12}>
        {value}
      </Grid>
    </Grid>
  ));

  return (
    <div>
      <center>
        <Grid item xs={6}>
          <TextField onChange={handleChange} value={textFieldValue} />
          <Button onClick={handleClick} variant="outlined">
            Submit
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button>Confirm</Button>
        </Grid>

        <Grid item xs={6}>
          <Displayname listOfValues={list} />
        </Grid>
      </center>
    </div>
  );
}
export default Encryptionpart;
