import React from 'react'
import { Grid } from '@mui/material'
import { Link } from '@mui/material'
function Contactpage(){
    return(  
        <Grid container direction='column' alignItems="center" rowSpacing={0}>     
            <Grid item justifyContent='center' alignItems='center' style={{
                fontFamily: "Bodoni MT", 
                fontSize: '48px',
                color: 'white', 
                fontWeight: 400, 
                textAlign: 'center',
                marginTop: '200px',
                marginLeft: '100px',
                marginRight: '100px'}}>
                    Contact Page
            </Grid>
            <Grid item justifyContent='center' alignItems='center' style={{
                fontFamily: "Bodoni MT", 
                fontSize: '30px',
                color: 'white', 
                fontWeight: 400, 
                textAlign: 'center',
                marginTop: '50px',
                marginLeft: '440px',
                marginRight: '440px'}}>You can contact the Lead dev at the Badger Channel on the <Link href="https://discord.gg/QMbdfPtR7Z" color="#22b0ca">{'Discord Server'}</Link>, or by email at e.luhning@vitalpoint.ai</Grid>
        </Grid>
    )
}

export default Contactpage
