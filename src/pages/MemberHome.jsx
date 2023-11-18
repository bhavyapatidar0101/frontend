import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import CourseService from '../services/CourseService';

function MemberHome(){
        const [member,setMember] = useState();
        let navigate = useNavigate();
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





   










    return (
        <div>
            <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/member-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/member-courses" className='text-white mx-3 text-decoration-none' underline='none'>Courses</a>
                    <a href="/member-equipments" className='text-white mx-3 text-decoration-none' underline='none'>Equipments</a>
                    <a href="/member-trainers" className='text-white mx-3 text-decoration-none' underline='none'>Trainers</a>
                    
                    </Box>
                    <Button size='small' href="/login" className="text-white" underline='none'><LogoutIcon /></Button>
            </Toolbar>

            <span className="d-inline-block py-3 text-dark display-4 mx-5 mt-5 border-bottom border-dark">
                    Welcome {member?member.first_name:"Member"}!
                </span>
<div className="content mx-5 mt-2 my-5">


  <section>
    <h2 className='text-primary'>Embrace the Thrill of Sports!</h2>

    <article>
      <h3 className='text-primary'>For Our Valued Members:</h3>
      <ul>
        <li>Your Journey Starts Here: Join a community that shares your passion for fitness and sportsmanship.</li>
        <li>Event Highlights: Stay updated on upcoming events, matches, and tournaments.</li>
        <li>Community Connection: Engage with fellow members through forums, chat groups, and social events.</li>
      </ul>
    </article>

   
    <article>
      <h3 className='text-primary'>Dedicated Trainers:</h3>
      <ul>
        <li>Expert Guidance: As a trainer, your expertise shapes the future champions.</li>
        <li>Celebrate Success Stories: Highlight the achievements of your trainees.</li>
        <li>Connect with Members: Facilitate communication with your trainees.</li>
      </ul>
    </article>


  </section>

  <footer>
    <p>Join Us in the Pursuit of Excellence! Ready to dive in? Explore the site, connect with the community, and let the games begin!</p>
  </footer>
  </div>
        </div>
    );
}


export default MemberHome;