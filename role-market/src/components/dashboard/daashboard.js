import React, {useState} from 'react'
import Background from './background.png'
import About from '../about/about'
import Contact from '../contact/contact'


//material ui imports
import { Grid } from '@mui/material'
import Logo from './logo.png';
import Appbar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs'
import TabPanel from '@mui/lab/TabPanel'




function Header(){
    
    const[value, setValue] = useState('1')
  
   
    const handleTabChange = (event, newValue) => {
        setValue(newValue)
    }
    return(
        <TabContext value={value}>
        <Grid container
         justifyContent='center'
         alignItems='center' 
         style={{
            backgroundImage: `url(${Background})`, 
            overflowY: 'scroll',
            overflowX: 'hidden', 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', 
            height: '100%'}}>
                <Grid item xs={12}>
                    <Appbar style={{backgroundColor: '#000031'}}>
                        <Toolbar>
                                <Grid container justifyContent='center' alignItems='center'>
                                    <Grid item>
                                            <img src={Logo}/>
                                    </Grid>
                                    <Grid item>
                                    <Typography 
                                    variant='h4' fontFamily='Arial' >Badger
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box>
                                            <Tabs value={value} textColor='white' onChange={handleTabChange} 
                                            TabIndicatorProps={{style: {background:'purple'}}}
                                            >
                                                <Tab style={{marginTop: 10}} label='Marketplace' value='1'/>
                                                <Tab style={{marginTop: 10}} label='About' value='2'/>
                                                <Tab style={{marginTop: 10}} label='Contact' value='3'/>
                                            </Tabs>  
                                            </Box>
                                    </Grid>
                            </Grid>
                        </Toolbar>
                    </Appbar>
                    <Grid item xs={12} style={{height: '100%'}}>
                            <TabPanel value='1' >
                                <Grid item>
                                    {/**This is wear marketplace component goes */}
                                </Grid>
                            </TabPanel>
                            <TabPanel value='2' >
                                <About></About>
                            </TabPanel>
                            <TabPanel value='3' >
                                <Contact></Contact>
                            </TabPanel>
                    </Grid>
                </Grid> 
        </Grid>
        </TabContext>
    )
}

export default Header