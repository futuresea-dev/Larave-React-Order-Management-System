import axios from "axios";
// import { useSelector } from "react-redux";

// const token = useSelector((state) => state.auth.token);

let api = axios.create({
    baseURL: 'https://65.108.74.155',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + token,
    },
    withCredentials: true
});




export default api;