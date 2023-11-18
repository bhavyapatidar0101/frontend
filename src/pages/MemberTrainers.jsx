import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import CourseService from '../services/CourseService';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import cardimage from './images/trainer-student.jpg';


function MemberTrainers(){
        let navigate = useNavigate();
        const [member,setMember] = useState();
        useEffect(()=>{
                if(!AuthenticationService.isLoggedIn() || !AuthenticationService.isMember()){
                    navigate("/");
                }
                UserService.details().then((response)=>{
                    let resp = response;
                    console.log(resp)
                    setMember(resp);
                });


        },[]);
        return(<div>


                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/member-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/member-courses" className='text-white mx-3 text-decoration-none' underline='none'>Courses</a>
                    <a href="/member-equipments" className='text-white mx-3 text-decoration-none' underline='none'>Equipments</a>
                    <a href="/member-trainers" className='text-primary mx-3 text-decoration-none' underline='none'>Trainers</a>
                    
                    </Box>
                    <Button size='small' href="/login" className="text-white" underline='none'><LogoutIcon /></Button>
                 </Toolbar>
                 <div>
                 <span className="d-inline-block py-3 text-dark display-4 mx-5 mt-5 border-bottom border-dark">
                    Welcome {member?member.first_name:"Member"}!
                </span></div>


        </div>);

}


export default MemberTrainers;