import React from "react";

import Grid from "@mui/material/Grid";
import Typography  from "@mui/material/Typography";
import Paper from '@mui/material/Paper'

function Minter (){
return(
        <Grid container spacing={8} alignItem='flex-start' justifyContent='center'>
            <Grid item >
                <Paper elevation={10} 
                style={{backgroundColor: "#0d0d54", width: '280px',  padding: 10}}>
                    <Grid container direction='column' alignItems='center'>
                        <Grid item>
                            <Typography
                                variant='h5'
                                fontFamily='Arial'
                                style={{color: 'white', fontWeight: 'bold'}}>
                                    Step One 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                fontFamily='Arial'
                                style={{color: 'white', fontWeight: 'bold'}}>
                                    Specify Contract Methods
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={10} 
                style={{backgroundColor: "#0d0d54",  width: '280px', padding: 10}}>
                    <Grid container direction='column' alignItems='center'>
                        <Grid item>
                            <Typography 
                                variant='h5'
                                fontFamily='Arial'
                                style={{color: 'white', fontWeight: 'bold'}}>
                                    Step Two
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography 
                                fontFamily='Arial'
                                style={{color: 'white', fontWeight: 'bold'}}>
                                    Choose Recipients
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={10} 
                style={{backgroundColor: "#0d0d54", width: '280px', padding: 10}}>
                    <Grid container direction='column' alignItems='center'>
                        <Grid item>
                            <Typography 
                                variant='h5'
                                fontFamily='Arial'
                                style={{color: 'white',  fontWeight: 'bold'}}>
                                    Step Three
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography 
                                fontFamily='Arial'
                                style={{color: 'white', fontWeight: 'bold'}}>
                                    Select badge design
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
)
}
export default Minter