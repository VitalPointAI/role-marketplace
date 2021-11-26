import React from 'react'
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import Mintingpage from './mintingpage'

function Homepage (){
    return(
            <Grid container direction='column' alignItems="center" rowSpacing={0}>     
                <Grid item justifyContent='center' alignItems='center' style={{fontFamily: "Bodoni MT", 
                    fontSize: '33px',
                    color: 'white', 
                    fontWeight: 400, 
                    textAlign: 'center',
                    marginTop: '280px'}}>
                        Delegate roles to your app's users using customizable NFT badges
                </Grid> 
                
                <Grid item>
                    <div style={{backgroundColor: '#22b0ca', position:'absolute', left:'20%', right:'20%', top:'57%', bottom:'3%'}}><Mintingpage/></div>
                </Grid>
            </Grid>
    )
}
export default Homepage