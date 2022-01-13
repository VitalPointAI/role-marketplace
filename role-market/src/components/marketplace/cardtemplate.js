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
    return(
        <CardActionArea
        href="/test"
        >
        <Card
        style={{
            backgroundColor: '#000052',
            
        }}
        raised = {true}
        elevation = {15}
        
        >
            
            <Grid container
                direction= "column"
                justifyContent="center" 
                alignItems="center"
            >
                 <Grid item  
                    xs={12}
                 >
                    <Typography //Application names used for testing
                        variant= "h5"
                        style={{
                            color: 'white'
                        }}>
                        Application Name
                     </Typography>

                    </Grid>
                
                <Grid item 
                    xs={12}
                >
                    <Avatar 
                        src= {Image} //Image used for testing for logos
                        sx={{ width: 150, height: 150 }} 
                    />
                </Grid>
                <Grid item
                    xs={12}
                    style={{
                        textOverflow: "ellipsis",
                        maxHeight: 100,
                        maxWidth: 200,
                        overflow: "ellipsis"
                    }}
                >
                    <Typography //Description used for testing purposes
                        variant= "h10" 
                        
                        
                        style={{
                            color: 'white',
                            
                        }}> 
                            Your Description here Hey gang,  hhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhh in this Material UI tutorial we'll look at the Card component & make our own variant of it to match our design.
                        </Typography> 
                </Grid>
            </Grid>
            
        </Card>
        </CardActionArea>
        
    )
}
export default CardTemplate
