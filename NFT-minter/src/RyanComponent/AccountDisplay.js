import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

 function DisplayNames() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,
        },
      }}
    >
      <Paper variant="outlined" />
      
    </Box>
  );
}

export default function DisplayNames