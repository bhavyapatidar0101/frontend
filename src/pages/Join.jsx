import React, { useEffect } from 'react';
import './Home.css';
import LoginIcon from '@mui/icons-material/Login';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent,TextField,Container,FormControl,Radio,FormControlLabel,FormLabel,RadioGroup} from '@mui/material';
import AuthenticationService from '../services/AuthenticationService';
import { useState } from 'react';
import ValidationService from '../services/ValidationService';

function Join(){

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const [error,setError] = useState("");

    async function register(){
        setError("");
        if(!(firstname.length>1)){
            setError("First name should not be empty");
            return;
        }
        if(!(lastname.length>2)){
            setError("Last name should not be empty");
            return;
        }
        if(!ValidationService.validateEmail(email)){
            setError("Invalid email")
            return;
        }
        if(!ValidationService.validatePassword(password)){
            setError("Password should contain more than 8 letter");
            return;
        }
        if(ValidationService.validatePhone(phone)){
            setError("Invalid phone number");
            return;
        }
       
        //Validation to be done
        const DATA = {
            "first_name":firstname,
            "last_name":lastname,
            "email":email,
            "phone":phone,
            "password":password,
        }
        console.log(DATA);
        AuthenticationService.register(DATA).then((resp)=>{
            if(resp.data === true){
                setError(<span className='text-success'>User has been registered.</span>);
            }
            else{
                setError("User has not been registered.");
            }
        }).catch((e)=>{
            console.log(e);
        });
        
        
    }

    return (

        <div>
            <div className="home-background-video"></div>

            
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/" className='text-white ms-5 me-3 text-decoration-none' underline='none'>Home</a>
                    <a href="/services" className='text-white mx-3 text-decoration-none' underline='none'>Services</a>
                    <a href="/contact" className='text-white mx-3 text-decoration-none' underline='none'>Contact</a>
                    </Box>
                    <Button size='small' href="/login" className="text-white border border-white" underline='none'>Sign in<LoginIcon /></Button>
                </Toolbar>
         

                <Container maxWidth="sm" className='d-flex flex-column justify-content-around py-2 border border-dark rounded' style={{marginTop:"1%",backgroundColor:"rgba(0,0,0,0.5)"}}>
                        
                        <h3 className='display-5 text-light my-3'>Register</h3>
                        <TextField onChange={(e)=>{setFirstname(e.target.value)}} className='my-3 text-light border-light' size='small' variant='filled' required label="First Name" type='text' name='first_name' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <TextField onChange={(e)=>{setLastname(e.target.value)}} className='my-3 text-light border-light' size='small' variant='filled' required label="Last Name" type='text' name='last_name' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <TextField onChange={(e)=>{setEmail(e.target.value)}} className='my-3 text-light border-light' size='small' variant='filled' required label="Email" type='text' name='email' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <TextField onChange={(e)=>{setPhone(e.target.value)}} className='my-3 text-light border-light' size='small' variant='filled' required label="Phone" type='text' name='phone' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <TextField onChange={(e)=>{setPassword(e.target.value)}} className='my-3 text-light' size='small' variant='filled' required label="Password" type='password' name='password' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <span className='text-danger'>{error}</span>
                        <Button onClick={register} className='my-3 text-light' variant='standard'>Register</Button>
                    </Container>

        </div>
    );
}

export default Join;