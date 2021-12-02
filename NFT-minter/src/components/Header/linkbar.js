import React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { black } from '@mui/material/colors';

function Linkbar(){
return(
        <Grid container style={{ backgroundColor: '#22b0ca'}}  rowSpacing={6} colomnSpacing={1}>
            <Grid item xs={2}>
            <Button  variant='outlined' style={{color:'#302d2d', border: "1px black solid"}} href='/' fullWidth={true}><h3>Main Page</h3></Button>
            </Grid>
            <Grid item xs={2}>
            <Button  variant='outlined' style={{color:'#302d2d', border: "1px black solid"}} href='/about' fullWidth={true}><h3>About Page</h3></Button>
            </Grid>
            <Grid item xs={2}>
            <Button  variant='outlined' style={{color:'#302d2d', border: "1px black solid"}} href='/contact' fullHeight={true} fullWidth={true}><h3>Contact Page</h3></Button>
            </Grid>
        </Grid>
)
}


export default Linkbar