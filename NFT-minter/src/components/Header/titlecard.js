import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';
import { Grid } from '@mui/material';
import Logo from './logo.png';
import ButtonBase from '@mui/material/ButtonBase';
function Titlecard (){
    return(
        <>
        <div style={{backgroundColor:'#22b0ca', position:'absolute', left:'0px', right:'0px', top:'0px', marginBottom:'1px'}}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
                <Grid item>
                    <img src={Logo} alt="Logo" />
                </Grid>
                <Grid item>
                    <h1 style={{fontFamily: "Bodoni MT", 
                     fontSize: '44px', 
                     fontStyle: 'normal', 
                     fontVariant: 'normal', 
                     fontWeight: 200, 
                     lineHeight: '44px'}}>Badger</h1>
                </Grid>
                
            </Grid>
        </div>
        
        </>

    )
};

export default Titlecard