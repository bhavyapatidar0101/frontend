import axios from "axios";

const API = "http://localhost:8080/equipment/";

class EquipmentService{

    async getAll(){
        const URL = API + "all";
        let token = "Bearer " + localStorage.getItem("token");
        const HEADER = {'headers': {"Authorization":token}};
        try{
        let response = await axios.get(URL,HEADER);
        if (response.status == 200){
            return response.data;
        }
        else{
            return false;
        }
    }
    catch{
        return false;
    }
    }



}

export default new EquipmentService();