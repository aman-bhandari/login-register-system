import React, { useState,useContext} from 'react';
import { TextField, Box, Button, Typography, styled, Container } from '@mui/material';
import { LoginContext } from '../context/ContextProvider';
import { authenticateLogin, authenticateSignup } from "../Service/api"
import {PermIdentity,LockOpen}from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {useNavigate} from "react-router-dom"



// left box
const LeftBox=styled(Box)`
position: absolute;
width: 50%;
height: 100vh;
overflow: "hidden";
background: white;
left: 0%;






`
const RightBox=styled(Box)`
position: absolute;
width : 50%;
height: 100vh;
left: 50%;
background: #1334B3;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;

`
const WhiteBox=styled(Box)`

width: 644.22px;
height: 553.03px;


/* White */

background: #FFFFFF;
/* Card Shadow/08 */

box-shadow: 0px 12px 48px rgba(3, 0, 55, 0.15);
border-radius: 20px;
`

const InputWrapper=styled(Box)`
                 width: 100%;
                height: 100%;
                display: flex;
                border: 1px solid #E6E6E6;
                border-radius: 8px;
                overflow-x: hidden;
                
`

const InputBox= styled(TextField)`
             width:567px;
                height: 100%;
                
               
                

`

const Subhead=styled(Box)`
width: 567px;
height: 20px;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #686687;
`



const Welcome = styled(Typography)`

width: 567px;
height: 44px;



/* Typeface/Nunito Sans/Headline H4 */

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 800;
font-size: 32px;
line-height: 44px;


/* Secondary ISS Dark Blue/100% */

color: #030037;


/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
justify-content: center;
margin-top: 3%;

`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #1334B3;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    width: 510px;
    text-align: center;

`;
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`


const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
    },
    signup: {
        view: 'signup',
    }
}

function LoginDialog() {
    // use of context Api 
    const { setAccount } = useContext(LoginContext);
    // multiple states 
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    const [alert,setAlert]=useState(false);
   
    const navigate = useNavigate();
    // manging functions

    //  1. login user response
    
    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) {
            showError(true);
            setAlert(true);
        }
            
        else {
            showError(false);
            toggleAccount(accountInitialValues.login);
            setAccount(login.username);
            navigate("/all");

        }
    }

    // 2. sign up user
    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        toggleAccount(accountInitialValues.login);
        setAccount(signup.username);
        navigate("/all");
    }

    // setting various fields during login
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    //  setting up sign up fields
 
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    
// toogle sign up
const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
}


  return (
    <>


<Container style={{display:"flex",background: "#1334B3",width:"100vw",marginLeft:"176px"}}>

  <LeftBox>



        <Box style={{display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing:"-0.005em",
    justifyContent:"center"}}>

        <Welcome>Welcome</Welcome>
    </Box>

        
   

  
    {
        account.view === 'login' ? 
    
        <Box>
        
        

        <Box  style={{display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing:"-0.005em",
    justifyContent:"center"}}>
        <Subhead>
        Enter your Username and Passoword.
        </Subhead>
        
        </Box>

        { 
            alert &&
                <Alert severity="error" >
        <AlertTitle>Login Failed</AlertTitle>
        User do not exists — <strong>Add New User</strong>
      </Alert>
            
           }
        
        <Wrapper>
        <InputWrapper>
        <Box style={{marginTop:"20px",color:"#E6E6E6"}}>
        <PermIdentity/>
        </Box>
            <InputBox variant="standard"
             onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
            </InputWrapper>
            { error && <Error>Please enter valid Email ID/Mobile number</Error> }
            
            <InputWrapper>
        <Box style={{marginTop:"20px",color:"#E6E6E6"}}>
        <LockOpen/>
        </Box>
        <InputBox variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' 
            />
            </InputWrapper>
            { error && <Error>Please enter valid password</Error> }
           
            <Box style={{display:"flex",justifyContent:"center"}}>
            <LoginButton onClick={() => loginUser()} >Login</LoginButton>
            </Box>
            <Typography style={{color:"#686687"}}>Forgot Password?</Typography>
            
            <CreateAccount onClick={() => toggleSignup()}>Add New User</CreateAccount>
        </Wrapper>
        
        </Box> : 
        /* else we are going to see the signup  */
        
        <Wrapper>
        <InputWrapper>
            <InputBox variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
            </InputWrapper>
            <InputWrapper>
            <InputBox variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
            </InputWrapper>
            <InputWrapper>
            <InputBox variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
            </InputWrapper>
            <InputWrapper>
            <InputBox variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
            </InputWrapper>
            <InputWrapper>
            <InputBox variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
            </InputWrapper>
            <InputWrapper>
            <InputBox variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
            </InputWrapper>
            
            <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
        
            
        </Wrapper>
        
    }
    </LeftBox>  
    
    
    <RightBox>
   
    <WhiteBox></WhiteBox>
    <Typography>360° Solution for Asset Management</Typography>
    <Typography style={{width:"70%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
    
    

    
    
   
    </RightBox>
    
    </Container>
    </>
    
  )
}

export default LoginDialog;