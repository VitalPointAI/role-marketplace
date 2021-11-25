import React from "react";
import Encryptionpart from "./AccountName";
import Badgezone from "./Badgezone";
import Displayname from "./AccountDisplay";
import Grid from "@material-ui/core/Grid";

function Mintingpage (){
return(
    <div>
        <center>
    <Grid container="true" rowSpacing={4}>
<Grid item xs={12}>
<Badgezone></Badgezone>   
</Grid>
<Grid item xs={12}>
<Encryptionpart></Encryptionpart>
</Grid>
<Grid item xs={12}>
<Displayname></Displayname>
</Grid>
</Grid>
</center>
</div>
)
}
export default Mintingpage