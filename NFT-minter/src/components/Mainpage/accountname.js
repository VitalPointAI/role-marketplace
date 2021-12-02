import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import Displayname from "./accountdisplay";

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
   
      <Grid item xs={12}>
        {value}
      </Grid>
    
  ));

  return (
     <>
      <Grid container justifyContent='flex-start'>
        <Grid item xs={4}>
          <TextField onChange={handleChange} value={textFieldValue} />
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleClick} variant="outlined">
            Add
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Displayname  listOfValues={list} />
        </Grid>
        <Grid item xs={2}>
          <Button>MINT</Button>
        </Grid>
      </Grid>
      </>
  );
}
export default Encryptionpart;
