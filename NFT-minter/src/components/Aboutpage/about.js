import React from 'react'
import { Grid } from '@mui/material'
function Aboutpage(){
    
    
    return(
        <Grid container direction='column' alignItems="center" rowSpacing={0}>     
                <Grid item justifyContent='center' alignItems='center' style={{fontFamily: "Bodoni MT", 
                    fontSize: '30px',
                    color: 'white', 
                    fontWeight: 400, 
                    textAlign: 'center',
                    marginTop: '200px',
                    marginLeft: '100px',
                    marginRight: '100px'}}>
                        The Badger application is an NFT minter created by the Catalyst Education Alpha Team, that allows the user to create NFTs that carry customizable permissions within the metadata of the NFT. It then transfers that NFT to the designated account. The account carrying the NFT would then have the right to perform the predetermined abilities on the users own applications or websites.
                </Grid> 
                <Grid item justifyContent='center' alignItems='center' style={{fontFamily: "Bodoni MT", 
                    fontSize: '30px',
                    color: 'white', 
                    fontWeight: 400, 
                    textAlign: 'center',
                    marginTop: '50px',
                    marginLeft: '100px',
                    marginRight: '100px'}}>
                            It would be greatly appreciated if any bugs or problems encountered were reported to the lead dev, Info can be found on the contact page.
                    </Grid>
            </Grid>
            
    )
}

export default Aboutpage