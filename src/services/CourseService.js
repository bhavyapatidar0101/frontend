import axios from 'axios';
const API = "http://localhost:8080/course/"

class CourseService{

    getAll(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "all";
        const HEADER = {'headers': {'Content-Type': 'application/json','Authorization': TOKEN}};
        return axios.get(URL,HEADER).then((response)=>{
            console.log(response);
            if (response.status == 200){
                return response.data;
            }
            else{
                return [];
            }
        }).catch((error)=>{
            return [];
        })
    }

    getById(id){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + id;
        const HEADER = {'headers': {'Content-Type': 'application/json','Authorization': TOKEN}};
        return axios.get(URL,HEADER).then((response)=>{
            console.log(response);
            if (response.status == 200){
                return response.data;
            }
            else{
                return false;
            }
        }).catch((error)=>{
            return false;
        })
    }

    add(data){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "add";
        const HEADER = {'headers': {'Content-Type': 'application/json','Authorization': TOKEN}};
        return axios.post(URL,data,HEADER).then((response)=>{
            console.log(response);
            if (response.status == 200){
                return response.data;
            }
            else{
                return false;
            }
        }).catch((error)=>{
            return false;
        })
    }

    delete(id){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "delete/" + id;
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return axios.delete(URL,HEADER).then((response)=>{
            console.log(response);
            if (response.status == 200){
                return response.data;
            }
            else{
                return false;
            }
        }).catch((error)=>{
            return false;
        })
    }

    getByTrainer(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "bytrainer";
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return axios.get(URL,HEADER).then((response)=>{
            console.log(response);
            if (response.status == 200){
                return response.data;
            }
            else{
                return [];
            }
        }).catch((error)=>{
            return [];
        })
    }
    getByMember(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "bymember";
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return axios.get(URL,HEADER).then((response)=>{
            console.log(response);
            if (response.status == 200){
                return response.data;
            }
            else{
                return [];
            }
        }).catch((error)=>{
            return [];
        })
    }
    getNotByMember(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "notbymember";
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return axios.get(URL,HEADER).then((response)=>{
            console.log(response);
            if (response.status == 200){
                return response.data;
            }
            else{
                return [];
            }
        }).catch((error)=>{
            return [];
        })
    }



}

export default new CourseService();