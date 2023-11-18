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
import StripeCheckout from 'react-stripe-checkout';
function MemberCourses(){

    let navigate = useNavigate();
    const [purchasedCourses,setPurchasedCourses] = useState([]);
    const [notPurchasedCourses,setNotPurchasedCourses] = useState([]);

    useEffect(()=>{
        if(!AuthenticationService.isLoggedIn() || !AuthenticationService.isMember()){
            navigate("/");
        }
        CourseService.getByMember().then((response)=>{
            setPurchasedCourses(response);
        });
        CourseService.getNotByMember().then((response)=>{
            setNotPurchasedCourses(response);
        });

    },[]);

    const onToken = (token) => {
        console.log(token);
        var data = {
           service_id: 'service_fqs0xza',
           template_id: 'template_5q9lilj',
           user_id: 'Qd0ji-jrk1CxhZLfo',
           template_params: {
               'message':'Your payment is successful!',
               'to_name': token.email,
               'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
           }
       }
    }

        return (
            <div>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/member-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/member-courses" className='text-primary mx-3 text-decoration-none' underline='none'>Courses</a>
                    <a href="/member-equipments" className='text-white mx-3 text-decoration-none' underline='none'>Equipments</a>
                    <a href="/member-trainers" className='text-white mx-3 text-decoration-none' underline='none'>Trainers</a>
                    
                    </Box>
                    <Button size='small' href="/login" className="text-white border border-white" underline='none'>Logout<LogoutIcon /></Button>
                 </Toolbar>

                 <span className="d-inline-block py-3 text-dark display-4 mx-5 mt-5 border-bottom border-dark">
                    My Courses
                </span>

                <div className="my-students mx-5 py-5 mt-5 my-5 d-flex flex-row align-items-center justify-content-start flex-wrap" width="100%">
                
                {purchasedCourses.map((c)=>
                <Card sx={{ width: "15%" }}>
                    <CardMedia component="img" height="140" image={cardimage} alt="Course Image" />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{c.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{c.description}</Typography>
                    <Typography variant="body2" color="text.secondary">Duration: {c.duration}</Typography>
                    <Typography variant="body2" color="text.secondary">Price: {c.price}Rs</Typography>
                    </CardContent>
                    <CardActions>
                    <Typography className='px-1 text-success'>PURCHASED</Typography>
                    </CardActions>
                </Card>
                )}
                </div>








                <span className="d-inline-block py-3 text-dark display-4 mx-5 mt-5 border-bottom border-dark">
                    Explore
                </span>


                <div className="my-students mx-5 py-5 mt-5 my-5 d-flex flex-row align-items-center justify-content-start flex-wrap" width="100%">
                
                {notPurchasedCourses.map((c)=>
                <Card sx={{ width: "15%" }}>
                    <CardMedia component="img" height="140" image={cardimage} alt="Course Image" />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{c.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{c.description}</Typography>
                    <Typography variant="body2" color="text.secondary">Duration: {c.duration}</Typography>
                    <Typography variant="body2" color="text.secondary">Price: {c.price}Rs</Typography>
                    </CardContent>
                    <CardActions>
                    <StripeCheckout price={c.price}
        token={onToken}
        stripeKey="pk_test_51MkrdQSB8pStGpyCIFVaYZpPCGue0YtRnt0HXXhEQxSpE6vCgvYCNsdi96B8SiieyUiwrra6Ww1bAf7AQgJH7qB600lqOQ4ZXT">
            <Button>Pay now</Button>
        </StripeCheckout>
                    </CardActions>
                </Card>
                )}
                </div>




            </div>
        );
}

export default MemberCourses;