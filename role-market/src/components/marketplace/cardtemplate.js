import React, {useState} from 'react';
import BadgeSelection from './badgeselection';
import Image from '../marketplace/badgers.png';

//mui imports
import { CardActionArea, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';


function CardTemplate(){ 
    //variables are declared first then the functions beofre the return statement.
    const [open, setOpen] = useState(false);
    let headerAvatar = <Avatar 
        src= {Image} //Image used for testing for logos
        sx={{ width: 100, height: 100 }} 
    />
    let description = "Your Description here Hey gang,  hhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhh in this Material UI tutorial we'll look at the Card component & make our own variant of it to match our design."
    let applicationName = "Application Name"
    const handleClose = (value) => {
        setOpen(false);
      };
    return(
        <>
        <BadgeSelection 
        open = {open} 
        handleClose = {handleClose}
        description = {description}
        applicationName = {applicationName}
        >

        </BadgeSelection>
        <Card 
            style={{
                 backgroundColor: '#000052',
        }}>
            
            <CardActionArea
            onClick={()=>{setOpen(true)}}> {/**this is dumb, try and remember it */}
                
            <CardHeader 
            titleTypographyProps={{variant:"h4" }}
            avatar={headerAvatar}
            style={{
                color: "white"}}
            
            title= {applicationName} ></CardHeader>
            <CardContent>
            <Grid container
                justifyContent="center"
                alignItems='center'
                direction="column">
                <Grid container
                    xs={10} 
                    style={{color: "white", overflow: "hidden", textOverflow: 'ellipsis'}}>
                    <Typography 
                        noWrap
                        variant= "h10" 
                        style={{
                            fontColor: 'white',
                            color: 'white',
                        }}> 
                            {description}
                        </Typography> 
                </Grid>
            </Grid>
            </CardContent>
            </CardActionArea>
        </Card>
        </>
    )
}
export default CardTemplate
