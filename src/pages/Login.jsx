import React from 'react';
import { Box,Typography,Toolbar,Button,TextField,Container,Input} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';


function Login(){

        return(
            <div>
                <div className="home-background-video"></div>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="#" className='text-white ms-5 me-3 text-decoration-none' underline='none'>Home</a>
                    <a href="#" className='text-white mx-3 text-decoration-none' underline='none'>Services</a>
                    <a href="#" className='text-white mx-3 text-decoration-none' underline='none'>Contact</a>
                    </Box>
                    <Button size='small' href="#" className="text-white border border-white" underline='none'>Sign in<LoginIcon /></Button>
                </Toolbar>
           


            
                    <Container maxWidth="sm" className='d-flex flex-column justify-content-around py-5 border border-dark rounded' style={{marginTop:"5%",backgroundColor:"rgba(0,0,0,0.5)"}}>
                        
                        <h3 className='display-5 text-light my-3'>Login</h3>
                        <TextField className='my-3 text-light border-light' size='small' variant='filled' required label="email" type='email' name='email' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <TextField className='my-3 text-light' size='small' variant='filled' required label="password" type='password' name='password' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <Button className='my-3 text-light' variant='standard'>Sign In</Button>
                    </Container>
            </div>
        );
}

export default Login;