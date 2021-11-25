import React from 'react'
import Titlecard from '../Header/titlecard'
import Linkbar from '../Header/linkbar'
import { Grid } from '@mui/material'

function Header(){
    return(
        <Grid containter spacing={1}>
                <Grid item xs={12}>
                    <Titlecard/>
                </Grid>
                <Grid item xs={12}>
                    <Linkbar />
                </Grid> 
        </Grid>
    )
}

export default Header