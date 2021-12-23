import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
 function Displayname(props) {
   const {
     listOfValues
   } = props
  
  return (
      <Paper style={{height: '100%'}}variant="outlined"> 
      <Grid container style={{height: '50px', overflowX: "hidden", overflowY: 'scroll'}}> 
       {listOfValues}
      </Grid>
      </Paper>
     )
  }

export default Displayname