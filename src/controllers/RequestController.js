import axios from 'axios'

const request = axios.create({
    baseURL: "https://15e0-179-33-113-11.ngrok-free.app",
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