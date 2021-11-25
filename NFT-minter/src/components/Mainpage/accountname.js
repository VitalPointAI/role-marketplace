import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@material-ui/core/Grid";

function Encryptionpart (){
return(
<div>
  <center>
<Grid item xs={6}>
<TextField
  id="outlined-basic"
  label="Account Name"
  variant="outlined"
/>
</Grid>
<Grid item xs={2}>
<button>Confirm</button>
</Grid>
</center>
</div>
)
}
export default Encryptionpart