import axios from 'axios';
const API = "http://localhost:8080/equipment/"

class EquipmentService{

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

    async getByTrainer(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "bytrainer";
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return await axios.get(URL,HEADER).then((response)=>{
            console.log(response);
            return response.data;
            
        }).catch((error)=>{
            console.log(error);
            return [];
        })
    }



}

export default new EquipmentService();