import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import FaceIcon from '@mui/icons-material/Face';
import cardimage from './images/trainer-student.jpg';

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
                setTrainer(response);
            });
        }

    });




    return(
            <div>
                            <div className="home-background-video"></div>

                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/trainer-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/trainer-my-courses" className='text-white mx-3 text-decoration-none' underline='none'>My Courses</a>
                    <a href="/trainer-my-students" className='text-white mx-3 text-decoration-none' underline='none'>My Students</a>
                    <a href="/trainer-my-equipments" className='text-white mx-3 text-decoration-none' underline='none'>My Equipments</a>
                    
                    </Box>
                    <span className='text-light'><FaceIcon/> Welcome {trainer?trainer.first_name:"Trainer"}!</span>

                    <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
                </Toolbar>

                <span className="d-inline-block py-3 text-light display-4 mx-5 my-2 border-bottom border-light">
                    Welcome {trainer?trainer.first_name:"Trainer"}!
                </span>
<div className="content text-light mx-5 mt-2 my-5 py-5 px-3 bg-dark" style={{"backgroundColor":"rgba(0,0,0,0.4)"}}>


  <section>
    <h2 className='text-light display-3 my-2 py-5'>Embrace the Thrill of Sports!</h2>

  
    <article>
      <h3 className='text-light'>Dedicated Trainers:</h3>
      <ul>
        <li>Expert Guidance: As a trainer, your expertise shapes the future champions.</li>
        <li>Celebrate Success Stories: Highlight the achievements of your trainees.</li>
        <li>Connect with Members: Facilitate communication with your trainees.</li>
      </ul>
    </article>
  
 
  </section>

  <footer className='my-4'>
    <p>Join Us in the Pursuit of Excellence! Ready to dive in? Explore the site, connect with the community, and let the games begin!</p>
  </footer>
  </div>




            </div>
    );

}


export default TrainerHome;