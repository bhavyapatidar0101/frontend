import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import EquipmentService from '../services/EquipmentService';
function TrainerAllEquipments(){
    let navigate = useNavigate();

    useEffect(()=>{ 
        //authenticated check
        

    });




    return(
            <div>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="#" className='text-white ms-5 me-3 text-decoration-none' underline='none'>All Courses</a>
                    <a href="#" className='text-white mx-3 text-decoration-none' underline='none'>All Equipments</a>
                    <a href="#" className='text-white mx-3 text-decoration-none' underline='none'>My Courses</a>
                    <a href="#" className='text-white mx-3 text-decoration-none' underline='none'>My Students</a>
                    <a href="#" className='text-white mx-3 text-decoration-none' underline='none'>My Equipments</a>
                    
                    </Box>
                    <Button size='small' href="/login" className="text-white border border-white" underline='none'>Logout<LogoutIcon /></Button>
                </Toolbar>






            </div>
    );

}


export default TrainerAllEquipments;