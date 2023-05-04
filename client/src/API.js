import axios from "axios";
import https from "https"
import { getToken } from "./utils/Token";



const agent = new https.Agent({
    rejectUnauthorized: false
})

export default axios.create({
    baseURL: process.env.HD_EXP_DOMAIN,  
},{httpsAgent: agent})

export let endpoints = {
    "getRoom" : "/api/client/actions"
}

export let headers = {
    headers: {
        "Content-Type": "application/json",
    },
    headers_token: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYyLCJleHAiOjE2ODI2ODI5NTh9.ydqEnnhaG7KbxDQr3aT9cYEiMsPvuZPgGigG_SAIkuU`,
        "Content-Type": "application/json",
    }
}

