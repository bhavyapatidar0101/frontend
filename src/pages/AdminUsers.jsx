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
function AdminUsers(){
        const [admin,setAdmin] = useState({});
        const [data,setData] = useState([]);
        const [id,setId] = useState();
        const [first_name,setFirst_name] = useState();
        const [last_name,setLast_name] = useState();
        const [email,setEmail] = useState();
        const [phone,setPhone] = useState();
        const [password,setPassword] = useState();
        const [role,setRole] = useState();
        const [editId,setEditId] = useState(-1);
        let navigate = useNavigate();

        const handleSubmit = (event) => {
            event.preventDefault();
            const DATA = {
                "id":null,
                "first_name":first_name,
                "last_name":last_name,
                "email":email,
                "phone":phone,
                "password":password,
                "role":role
            }
            AuthenticationService.register(DATA).then((resp)=>{
                console.log(resp);
                navigate("/admin-users");
            });
        }

        const handleEdit = (id) => {
            setEditId(id);
        }

        const handleUpdate = () => {
            const DATA = {
                "id":editId,
                "first_name":first_name,
                "last_name":last_name,
                "email":email,
                "phone":phone,
                "password":password,
                "role":role,
            }
            UserService.update(DATA).then((resp)=>{
                console.log(resp);
                setEditId(-1);
                navigate("/admin-users");
            });
        }

        const handleDelete = (user_id) => {
                UserService.delete(user_id).then(resp=>{
                    console.log(resp);
                    navigate("/admin-users");
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

            UserService.getAll().then((response)=>{
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
                        <input onChange={e=>setId(e.target.value)} type="text" name="id" id="" placeholder='Id'/>
                        <input onChange={e=>setFirst_name(e.target.value)} type="text" name='first_name' placeholder='First Name'/>
                        <input onChange={e=>setLast_name(e.target.value)} type="text" name='last_name' placeholder='Last Name' />
                        <input onChange={e=>setEmail(e.target.value)} type="text" name="email" id="" placeholder='E-mail' />
                        <input onChange={e=>setPhone(e.target.value)} type="text" name='phone' placeholder='Phone'/>
                        <input onChange={e=>setPassword(e.target.value)} type="password" name="password" id="" placeholder='Password'/>
                        <input onChange={e=>setRole(e.target.value)} type="text" name='role' placeholder='Role'/>
                        <Button>submit</Button>
                    </form>
                </div>
                <table className='' width={"100%"}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                            <th>Phone</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((user,index)=>(
                            user.id === editId ?
                            <tr>
                               <td> <input  defaultValue={user.id} onChange={e=>setId(e.target.value)} type="number" name="id" id="" placeholder='Id'/></td>
                               <td>  <input defaultValue={user.first_name} onChange={e=>setFirst_name(e.target.value)} type="text" name='first_name' placeholder='First Name'/></td>
                               <td> <input defaultValue={user.last_name} onChange={e=>setLast_name(e.target.value)} type="text" name='last_name' placeholder='Last Name' /></td>
                               <td><input defaultValue={user.email} onChange={e=>setEmail(e.target.value)} type="text" name="email" id="" placeholder='E-mail' /></td>
                               <td><input defaultValue={user.phone} onChange={e=>setPhone(e.target.value)} type="text" name='phone' placeholder='Phone'/></td>
                               <td><input defaultValue={user.password} onChange={e=>setPassword(e.target.value)} type="password" name="password" id="" placeholder='Password'/></td>
                               <td><input defaultValue={user.role} onChange={e=>setRole(e.target.value)} type="text" name='role' placeholder='Role'/></td>
                               <td><button onClick={handleUpdate}>Update</button></td>

                            </tr>







                            :
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.password}</td>
                                <td>{user.role}</td>
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


export default AdminUsers;