import React from "react";
import Encryptionpart from "./accountname";
import Badgezone from "./badgezone";
import Displayname from "./accountdisplay";
import Grid from "@material-ui/core/Grid";

function Mintingpage (){
return(
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Badgezone></Badgezone>   
            </Grid>
            <Grid item xs={12}>
                <Encryptionpart></Encryptionpart>
            </Grid>
        </Grid>
)
}
export default Mintingpage