import React from "react";
import Grid from "@material-ui/core/Grid";
import BadgeIcon from '@mui/icons-material/Badge';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);}
function Badgezone () {
    return (
        <Grid container rowSpacing={1} columnSpacing={1}>
       
        <Grid item xs={3}>
           <Item>Badge1</Item>
         </Grid>
         <Grid item xs={3}>
           <Item>Badge2</Item>
         </Grid>
         <Grid item xs={3}>
           <Item>Badge3</Item>
         </Grid>
         <Grid item xs={3}>
           <Item>Badge4</Item>
         </Grid>
         <Grid item xs={1}>
         <Radio
         checked={selectedValue === 'a'}
         onChange={handleChange}
         value="a"
         name="radio-buttons"
         inputProps={{ 'aria-label': 'A' }}
       />
         </Grid>
         <Grid item xs={2}>
           <BadgeIcon/>
         </Grid>
         <Grid item xs={1}>
           <Radio
         checked={selectedValue === 'b'}
         onChange={handleChange}
         value="b"
         name="radio-buttons"
         inputProps={{ 'aria-label': 'B' }}
       />
         </Grid>
         <Grid item xs={2}>
           <BadgeIcon/>
         </Grid>
         <Grid item xs={1}>
           <Radio
         checked={selectedValue === 'c'}
         onChange={handleChange}
         value="c"
         name="radio-buttons"
         inputProps={{ 'aria-label': 'C' }}
       />
         </Grid>
         <Grid item xs={2}>
           <BadgeIcon/>
         </Grid>
         <Grid item xs={1}>
           <Radio
         checked={selectedValue === 'd'}
         onChange={handleChange}
         value="d"
         name="radio-buttons"
         inputProps={{ 'aria-label': 'D' }}
       />
         </Grid>
         <Grid item xs={2}>
           <BadgeIcon/>
         </Grid>
         <Grid item xs={3}>
           <Item>Description zone1</Item>
         </Grid>
         <Grid item xs={3}>
           <Item>Description zone2</Item>
         </Grid>
         <Grid item xs={3}>
           <Item>Description zone3</Item>
         </Grid>
         <Grid item xs={3}>
           <Item>Description zone4</Item>
         </Grid>
       </Grid>
     
   );
 }
export default Badgezone 
        

    
