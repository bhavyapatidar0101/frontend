import axios from 'axios';
const API = "http://localhost:8080/payment/"

class PaymentService{

    

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

   

}

export default new PaymentService();