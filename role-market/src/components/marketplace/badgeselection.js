import React, {useState} from 'react';
//@mui imports
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material'
//local imports
import Image from '../marketplace/badgers.png';
import AppBadges from '../marketplace/appbadges'


function BadgeSelection(props) {
    const {
      open,
      handleClose,
      description,
      applicationName
    } = props
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    

    return (
        <Dialog onClose={handleClose} open={open} maxWidth = "xl">
            <DialogTitle >
                <Typography //title for the badges page
                  variant='h4'
                >
                  {applicationName}
                </Typography> 
              </DialogTitle>

              <Grid container /** Applications main info and picture */ 
                justifyContent='center'
                alignItems='center'
              >
                <Grid item
                  xs= {2}
                >
                  <Grid container
                    justifyContent='center'>
                    <Avatar 
                        src= {Image} //Image used for testing for logos
                        sx={{ width: 150, height: 150 }} 
                    /> 
                  </Grid>
                </Grid>
                <Grid item 
                  xs= {10}
                >
                  <Typography 
                  variant='h6'>
                    {description} 
                  </Typography>
                </Grid>
              </Grid>
            

            <Grid container 
              
              justifyContent='center'
              spacing={2.5}
              style={{
                
                //backgroundColor: "#000094"
              }}
            >
              <Grid item>
                <AppBadges></AppBadges>
              </Grid>
              {/** test badges */ }
              <Grid item>
                <AppBadges></AppBadges>
              </Grid>
              <Grid item>
                <AppBadges></AppBadges>
              </Grid> 
              <Grid item>
                <AppBadges></AppBadges>
              </Grid>
              <Grid item>
                <AppBadges></AppBadges>
              </Grid>
              <Grid item>
                <AppBadges></AppBadges>
              </Grid>
              <Grid item>
                <AppBadges></AppBadges>
              </Grid>
              <Grid item>
                <AppBadges></AppBadges>
              </Grid>
              <Grid item>
                <AppBadges></AppBadges>
              </Grid>
              <Grid item>
                <AppBadges></AppBadges>
              </Grid>
              <Grid item>
                <AppBadges></AppBadges>
              </Grid>  
            </Grid>
            
        </Dialog>
    );
  }
  export default BadgeSelection