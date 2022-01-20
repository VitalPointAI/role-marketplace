import React from 'react'
//@mui imports
import { CardActionArea, Grid } from '@mui/material'
import { Link } from '@mui/material'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

//local imports
import Image from '../marketplace/badgers.png';


function AppBadges(props){
    const{
        open,
        handleClose,
    } = props

    let badgeName = "Badge Name filler";
     
    
    

    const handleClickOpen = () => {
        setOpen(true);
      };


    return(
        <Card  
            style={{
            backgroundColor: '#000094',
            width: 250, 
            height: 250
        }}>
            <CardHeader
                titleTypographyProps={{variant: 'h6' }}
                style={{
                    color: "white"
                }}
                title = {badgeName}
            ></CardHeader>

            <CardActionArea>
                <CardMedia
                    component = 'img'
                    height= '125'
                    image= {Image}
                    
                >
                </CardMedia>
            </CardActionArea>

            <CardContent>
                <Grid container
                    justifyContent='center'
                >
                    <Grid item>
                        <Button variant="contained" color="error" >Purchase</Button>
                    </Grid>
                </Grid>
            </CardContent>
                
        </Card>

    )
}
export default AppBadges