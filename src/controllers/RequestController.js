import axios from 'axios'

const request = axios.create({
    baseURL: "http://192.168.1.13",
    withCredentials: false,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
})

export default {
    Login(json) {
        return request.post("/login", json);
    }
}