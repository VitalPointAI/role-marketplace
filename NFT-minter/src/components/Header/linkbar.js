import React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { black } from '@mui/material/colors';

function Linkbar(){
return(
    <div style={{ backgroundColor: '#22b0ca', position: 'absolute', left: '0px', right: '0px', marginTop: '104px'  }}>
        <Grid container rowSpacing={6} colomnSpacing={1}>
            <Grid item xs={2}>
            <Button variant='outlined' style={{}} href='/' fullWidth={true}><h3>Main Page</h3></Button>
            </Grid>
            <Grid item xs={2}>
            <Button variant='outlined' style={{}} href='/about' fullWidth={true}><h3>About Page</h3></Button>
            </Grid>
            <Grid item xs={2}>
            <Button variant='outlined'  style={{}} href='/contact' fullHeight={true} fullWidth={true}><h3>Contact Page</h3></Button>
            </Grid>
        </Grid>
    </div>
)
}


export default Linkbar