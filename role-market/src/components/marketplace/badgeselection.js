import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Image from '../marketplace/badgers.png';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material'
import { Grid3x3 } from '@mui/icons-material';
import Card from '@mui/material/Card';
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
                variant='h5'
                style={{
                }}
              >
                {applicationName}
            </Typography>
              <Grid container
              direction="column">
                <Grid item xs={6}>
                <Avatar 
                    src= {Image} //Image used for testing for logos
                    sx={{ width: 150, height: 150 }} 
                  /> 
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    {description} 
                  </Typography>
                </Grid>
              </Grid>

            </DialogTitle>
            <Grid container
              
              spacing={10}
              style={{
                //backgroundColor: "#000094"
              }}
            >
              <Grid item>
              <Card //test card
                style={{
                    backgroundColor: '#000052',
                    width: 150, 
                    height: 150
              }}>
            </Card>
              </Grid>
              {/** test avatars */ }
              <Grid item> 
              <Avatar 
                src= {Image} //Image used for testing for logos
                sx={{ width: 150, height: 150 }} 
              /> 
              <Typography>
                {description}
              </Typography>
              </Grid>     
            </Grid>
            
        </Dialog>
    );
  }
  export default BadgeSelection