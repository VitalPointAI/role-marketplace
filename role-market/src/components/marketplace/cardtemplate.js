import React from 'react'
import { CardActionArea, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Image from '../marketplace/badgers.png'
import Link from '@mui/material/Link'

function CardTemplate(){
    let headerAvatar = <Avatar 
        src= {Image} //Image used for testing for logos
        sx={{ width: 75, height: 75 }} 
    />
    return(
        <Card style={{
                 backgroundColor: '#000052',
             }}>
            <CardHeader 
            avatar={headerAvatar}
            style={{color: "white"}}
            title="Application Name"></CardHeader>
            <CardContent>
            <Grid container
                justifyContent="center"
                alignItems='center'
                direction="column">
                <Grid 
                    xs={10} 
                    style={{color: "white", overflow: "hidden", textOverflow: 'ellipsis'}}>
                    <Typography 
                        noWrap
                        variant= "h10" 
                        style={{
                            fontColor: 'white',
                            color: 'white',
                        }}> 
                            Your Description here Hey gang,  hhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhh in this Material UI tutorial we'll look at the Card component & make our own variant of it to match our design.
                        </Typography> 
                </Grid>
            </Grid>
            </CardContent>
        </Card>
    )
}
export default CardTemplate
