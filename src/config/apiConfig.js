import axios from "axios";

export const API_BASE_URL = "https://ecommerce-server-production-6557.up.railway.app";

const jwt = localStorage.getItem("jwt");
//const cors=require("cors");



export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": jwt ? `Bearer ${jwt}` : null, 
         // Assurez-vous que le JWT est inclus s'il est disponible
        "Content-Type": "application/json"
    }
    
});
