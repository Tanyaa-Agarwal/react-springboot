import axios from "axios";

const USER_BASE_REST_API='http://localhost:8080/users';

class UserService{

    getAllUsers(){
        return axios.get(USER_BASE_REST_API);
    }
    createUser(user){
        return axios.post(USER_BASE_REST_API,user);
    }
    getEmployeeById(username){
        return axios.get(USER_BASE_REST_API+'/'+username);
    }

    updateUser(user){
        return axios.put(USER_BASE_REST_API,user);
    }
    deleteUser(username){
        return axios.delete(USER_BASE_REST_API+'/'+username);
    }
}

export default new UserService();