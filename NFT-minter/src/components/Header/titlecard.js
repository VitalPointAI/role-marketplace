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
        <Grid
             style={{backgroundColor:'#22b0ca'}}
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
      
        
        </>

    )
};

export default Titlecard