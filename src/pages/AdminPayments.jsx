import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {CardMedia,CardActions,Modal,AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import CourseService from '../services/CourseService';
import './Home.css';
import FaceIcon from '@mui/icons-material/Face';
import { Face } from '@mui/icons-material';
import cardimage from './images/trainer-student.jpg';
function AdminPayments(){
        const [admin,setAdmin] = useState({});
        let navigate = useNavigate();
        useEffect(()=>{
            if(!AuthenticationService.isLoggedIn() || !AuthenticationService.isAdmin()){
                navigate("/");
            }
            UserService.details().then((response)=>{
                let resp = response;
                console.log(resp)
                setAdmin(resp);
            });





        },[]);



   










    return (
        <div>
            <div className="home-background-video"></div>
       
            <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/member-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/admin-courses" className='text-white mx-3 text-decoration-none' underline='none'>Courses</a>
                    <a href="/admin-equipments" className='text-white mx-3 text-decoration-none' underline='none'>Equipments</a>
                    <a href="/admin-users" className='text-white mx-3 text-decoration-none' underline='none'>Users</a>
                    <a href="/admin-payments" className='text-white mx-3 text-decoration-none' underline='none'>Payments</a>
                    </Box>
                    <span className='text-light'><FaceIcon/> Welcome {admin?admin.first_name:"Admin"}!</span>
                    <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
            </Toolbar>

            <span className="d-inline-block py-3 text-light display-4 mx-5 my-2 border-bottom border-light">
                    Welcome {admin?admin.first_name:"Admin"}!
                </span>

        </div>
    );
}


export default AdminPayments;