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


function NewCard(){
    return(
        <Card>
            <CardHeader
            title = "New card title"
            subHeader = "Weap"
            >
                
            </CardHeader>

            <CardContent>
            <Typography //Description used for testing purposes
               variant= "h10" 
                style={{
                    color: 'white',
                    maxWidth: 280,
                    maxLength: 280
                }}> 
                    Your Description here Hey gang, in this Material UI tutorial we'll look at the Card component & make our own variant of it to match our design.
            </Typography> 
            </CardContent>
        </Card>
    )
}
export default NewCard