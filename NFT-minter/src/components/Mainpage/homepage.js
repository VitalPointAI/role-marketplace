import React from 'react'
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import Mintingpage from './mintingpage'

function Homepage (){
    return(
            <Grid style={{marginTop: 10}} container justifyContent='center' alignItems="center" spacing={10}>     
                <Grid item style={{fontFamily: "Bodoni MT", 
                    fontSize: '33px',
                    color: 'white', 
                    fontWeight: 400, 
                    textAlign: 'center'}}>
                        Delegate roles to your app's users using customizable NFT badges
                 </Grid> 
                 <Grid container justifyContent='center' style={{maxWidth: '60%', backgroundColor: '#22b0ca'}}>
                        <Mintingpage/>
                </Grid>
            </Grid>
    )
}
export default Homepage