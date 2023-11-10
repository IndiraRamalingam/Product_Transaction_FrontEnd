import axios from "axios";

//const baseURL='https://hospital-crm-backend.onrender.com/api'
const baseURL='http://localhost:3001/api'

const authInstance= axios.create({
    baseURL : baseURL,
    timeout : 5000,
    headers : {
        'Content-Type' : 'application/json',
    }
});

export default {
    authInstance
}