import AllUsers from "./AllUsers"
import React from 'react'
import styled from "@emotion/styled"
import { Box } from "@mui/material"
import LeftBar from "./LeftBar"
import { margin } from "@mui/system"

const Main=styled(Box)`
width: 1920px;
height: 1080px;
background: #F8F9FD;
display: flex;
`
const Header=styled(Box)`
color: #030037;
width: 144px;
height: 29px;
font-weight: 600;
font-size: 24px;
line-height: 120%;
padding-left: 10px;
`
const Nav=styled(Box)`
display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 16px;

position: absolute;
width: 70%;
height: 52px;
left: 356px;
top: 93px;

/* White */

background: #FFFFFF;
/* Card Shadow/01 */

box-shadow: 0px 1px 5px rgba(3, 0, 55, 0.08);
border-radius: 12px;
`

function HomeCom() {
  return (
    <Main>
   <LeftBar/>
   <Box>
   <Header>View Clients</Header>
   <p style={{color: "#686687",fontWeight: "400",
   fontSize: "12px",
   lineHeight: "16px",paddingLeft:"10px",margin:"2.5px"}}>Client Master / View Clients</p>
   <AllUsers/>
   </Box>
    </Main>
    
  )
}

export default HomeCom