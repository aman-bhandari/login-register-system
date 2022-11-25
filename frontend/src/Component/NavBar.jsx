
import { AppBar, Toolbar, styled, Stack, Button } from '@mui/material';
import { Box } from '@mui/system';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: white;
    display: flex;
    flex-direction: column;
`;
    
const Tabs = styled(NavLink)`
    color: black;
margin-left: 20px;
    text-decoration: none;
    font-size: 20px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
   
`;
const LoginButton = styled(Box)`
 
padding: 8px 6px;
gap: 12px;

width: 290px;
height: 38px;
display: flex;
align-items: center;
border-radius: 10px;


/* Primary Persian Blue/100% */

background: #153AC7;
color:white;
margin: 0px;
font-family: 'Nunito+Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
`;

const NavBar = () => {
    return (
        
        
            
            <div style={{display:"flex",flexDirection:"column"}}>
                <Tabs to="/all" exact>View Clients</Tabs>
                <Tabs to="/add" exact>
                <LoginButton>Add Client</LoginButton>
                </Tabs>
            </div>
            
        

        
        
    )
}

export default NavBar;