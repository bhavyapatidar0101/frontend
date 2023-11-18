import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
function TrainerHome(){
    let navigate = useNavigate();
    let [trainer,setTrainer] = useState();
    useEffect(()=>{ 
        //authenticated check
        if(!AuthenticationService.isLoggedIn() || !AuthenticationService.isTrainer()){
            navigate("/login");
        }
        else{
            UserService.details().then((response)=>{
                setTrainer(response.first_name);
            });
        }

    });




    return(
            <div>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/trainer-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/trainer-my-courses" className='text-white mx-3 text-decoration-none' underline='none'>My Courses</a>
                    <a href="/trainer-my-students" className='text-white mx-3 text-decoration-none' underline='none'>My Students</a>
                    <a href="/trainer-my-equipments" className='text-white mx-3 text-decoration-none' underline='none'>My Equipments</a>
                    
                    </Box>
                    <span className='text-light'>Hey {trainer} !!</span>
                    <Button size='small' href="/login" className="text-white border border-white" underline='none'>Logout<LogoutIcon /></Button>
                </Toolbar>






            </div>
    );

}


export default TrainerHome;