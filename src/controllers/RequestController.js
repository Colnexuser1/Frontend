import axios from 'axios'

const request = axios.create({
    baseURL: "http://localhost:8080",
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