import axios from "axios"
import {ACCESS_TOKEN} from "./constant"


const api = axios.create({
    baseUrl:import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    (config) =>{
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) =>{
        return Promise.reject(error)
    }
)

export default api