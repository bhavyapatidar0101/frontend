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
function AdminCourses(){
        const [admin,setAdmin] = useState({});
        const [data,setData] = useState([]);
        const [id,setId] = useState();
        const[name,setName] = useState("");
        const[description,setDescription] = useState("");
        const [duration,setDuration] = useState();
        const [price,setPrice] = useState(0);
        const [trainer,setTrainer] = useState();
        const [editId,setEditId] = useState(-1);
        let navigate = useNavigate();

        const handleSubmit = (event) => {
            console.log("in submit");
            event.preventDefault();
            console.log("ADDING COURSE");
            const DATA = {
                "id":null,
                "name":name,
                "description":description,
                "duration":duration,
                "price":price,
                "trainer":{"id":trainer},
            }
            CourseService.add(DATA).then((resp)=>{
                console.log(resp);
                navigate("/admin-courses");
            });
        }

        const handleEdit = (id) => {
            setEditId(id);
        }

        const handleUpdate = () => {
            const DATA = {
                "id":null,
                "name":name,
                "description":description,
                "duration":duration,
                "price":price,
                "trainer":trainer,
              
            }
            CourseService.update(DATA).then((resp)=>{
                console.log(resp);
                setEditId(-1);
                navigate("/admin-courses");
            });
        }

        const handleDelete = (user_id) => {
                UserService.delete(user_id).then(resp=>{
                    console.log(resp);
                    navigate("/admin-courses");
                });
        }


        useEffect(()=>{
            if(!AuthenticationService.isLoggedIn() || !AuthenticationService.isAdmin()){
                navigate("/");
            }
            UserService.details().then((response)=>{
                let resp = response;
                console.log(resp)
                setAdmin(resp);
            });

            CourseService.getAll().then((response)=>{
                setData(response);
                console.log(response);
            });




        },[]);



   










    return (
        <div>
       
            <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/admin-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/admin-courses" className='text-white mx-3 text-decoration-none' underline='none'>Courses</a>
                    <a href="/admin-equipments" className='text-white mx-3 text-decoration-none' underline='none'>Equipments</a>
                    <a href="/admin-users" className='text-white mx-3 text-decoration-none' underline='none'>Users</a>
                    <a href="/admin-payments" className='text-white mx-3 text-decoration-none' underline='none'>Payments</a>
                    </Box>
                    <span className='text-light'><FaceIcon/> Welcome {admin?admin.first_name:"Admin"}!</span>
                    <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
            </Toolbar>

            <span className="d-inline-block py-3 text-dark display-4 mx-5 my-2 border-bottom border-dark">
                    Welcome {admin?admin.first_name:"Admin"}!
                </span>

            <div className='container py-5'>
                <div className='add-form d-flex flex-column justify-content-between align-items-center'>
                    <form className=' d-flex flex-row justify-content-between align-items-center flex-shrink' onSubmit={handleSubmit}>
                        <input onChange={e=>setId(e.target.value)} type="number" name="id" id="" placeholder='Id'/>
                        <input onChange={e=>setName(e.target.value)} type="text" name='name' placeholder='Name'/>
                        <input onChange={e=>setDescription(e.target.value)} type="text" name='description' placeholder='Description' />
                        <input onChange={e=>setDuration(e.target.value)} type="text" name="duration" id="" placeholder='Duration' />
                        <input onChange={e=>setPrice(e.target.value)} type="number" name='price' placeholder='Price'/>
                        <input onChange={e=>setTrainer(e.target.value)} type="number" name="trainer" id="" placeholder='Trainer Id'/>
                        <Button>submit</Button>
                    </form>
                </div>
                <table className='' width={"100%"}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Trainer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((user,index)=>(
                            user.id === editId ?
                            <tr>
                               <td> <input  defaultValue={user.id} onChange={e=>setId(e.target.value)} type="number" name="id" id="" placeholder='Id'/></td>
                               <td>  <input defaultValue={user.name} onChange={e=>setName(e.target.value)} type="text" name='name' placeholder='Name'/></td>
                               <td> <input defaultValue={user.description} onChange={e=>setDescription(e.target.value)} type="text" name='description' placeholder='Description' /></td>
                               <td><input defaultValue={user.duration} onChange={e=>setDuration(e.target.value)} type="text" name="duration" id="" placeholder='Duration' /></td>
                               <td><input defaultValue={user.price} onChange={e=>setPrice(e.target.value)} type="number" name='price' placeholder='Price'/></td>
                               <td><input defaultValue={user.trainer.id} onChange={e=>setTrainer(e.target.value)} type="number" name="trainer" id="" placeholder='Trainer'/></td>
                               <td><button onClick={handleUpdate}>Update</button></td>

                            </tr>







                            :
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.description}</td>
                                <td>{user.duration}</td>
                                <td>{user.price}</td>
                                <td>{user.trainer.id}</td>
                                <td>
                                    <Button onClick={()=>handleEdit(user.id)}>Edit</Button>
                                    <Button onClick={()=>handleDelete(user.id)}>Delete</Button>
                                </td>
                            </tr>




                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default AdminCourses;