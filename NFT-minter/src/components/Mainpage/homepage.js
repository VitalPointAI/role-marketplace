import React from 'react'
import Titlecard from '../Header/titlecard'
import Linkbar from '../Header/linkbar'
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import Mintingpage from './mintingpage'

function Homepage (){
    return(
            <Grid containter spacing={1}>
                <Grid>
                    <div style={{backgroundColor: '#22b0ca', position:'absolute', left:'20%', right:'20%', top:'50%', bottom:'10%'}}><Mintingpage/></div>
                </Grid>
            </Grid>
    )
}
export default Homepage