import React from "react";
import Encryptionpart from "./accountname";
import Badgezone from "./badgezone";
import Grid from "@material-ui/core/Grid";

function Mintingpage (){
return(
    <div>
    <Grid container="true" rowSpacing={4}>
<Grid item xs={12}>
<Badgezone></Badgezone>
</Grid>
<Grid item xs={12}>
<div style={{ backgroundColor: '#22b0ca', position: 'absolute', left: '0px', right: '0px', marginTop: '50px'  }}><Encryptionpart/></div>

</Grid>
</Grid>
</div>
)
}
export default Mintingpage