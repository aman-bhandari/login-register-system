import { TextField, Box, Button, Typography, styled, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {top100Films} from '../data/Data'
import NavBar from './NavBar';



import React from 'react'

const Leftbox=styled(Typography)`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;


width: 336px;
height: 1080px;
left: 0px;
top: 0px;

background: #FFFFFF;
/* Card Shadow/01 */

box-shadow: 0px 1px 5px rgba(3, 0, 55, 0.08);
`
const Compnay=styled(Box)`
width: 144px;
height: 24px;

font-family: 'Nunito+Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 120%;
/* identical to box height, or 24px */

display: flex;
align-items: center;

/* Sand/100% */

color: #233244;
margin:0 0 20px 20px;
position: relative;
`
const InputWrapper=styled(Box)`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 16px 16px;
gap: 8px;

width: 336px;
height: 56px;

`

function LeftBar() {
  return (
    <>
    <Leftbox>
    <Compnay>Compnay name</Compnay>
    <InputWrapper>
    <Stack spacing={2} sx={{ width: 300 }}>
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={top100Films.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
    />
  </Stack>
  
</InputWrapper>
<NavBar/>
</Leftbox>

    </>
  )
}

export default LeftBar