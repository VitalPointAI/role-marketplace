import React from 'react'
import { Grid } from '@mui/material'
import { Link } from '@mui/material'
import Typography from '@mui/material/Typography'

function Contactpage(){
    return(  
        <Grid container direction='column' alignItems="center" rowSpacing={0}>     
            <Grid item>
                <Typography variant="h5" style={{color: "white"}}>
                    <Link href="https://discord.gg/QMbdfPtR7Z" color="#22b0ca">{'Discord Server'}</Link>, 
                    or by email at e.luhning@vitalpoint.ai
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Contactpage
