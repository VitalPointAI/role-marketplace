import React from 'react'
import { Grid } from '@mui/material'
import { Link } from '@mui/material'
import Typography from '@mui/material/Typography'
import CardTemplate from '../marketplace/cardtemplate'
import NewCard from '../marketplace/newCard'


function Marketplace(){
    return(
        <Grid container
            justifyContent="center" 
            alignItems="center"
            spacing={2}
            >
            <Grid item xs={12}>
                <Typography
                    variant= "h4" 
                    style={{
                        color: 'white'
                }}>
                    Select Your Application 
                </Typography>
            </Grid>
            <Grid item
             xs={3}
            >
                <CardTemplate></CardTemplate>   
            </Grid>
            <Grid item
              xs={3}
            >
                <CardTemplate></CardTemplate>
            </Grid>
            <Grid item
              xs={3}
            >   
                <CardTemplate></CardTemplate>
            </Grid>
            
        </Grid>
    )
}

export default Marketplace
