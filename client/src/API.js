import axios from "axios";
import https from "https"
import { getToken } from "./utils/Token";

const agent = new https.Agent({
    rejectUnauthorized: false
})

export default axios.create({
    baseURL: process.env.HD_EXP_DOMAIN,  
    // baseURL: "http://localhost:5000",  
},{httpsAgent: agent})

export let endpoints = {
    // Detail Meeting Room
    "getListRoom" : "/api/room/list",
    "getRoomId": (id)=> `/api/room/get-room-id?id=${id}`,
    "postListRoom": "/api/room/post-list-room",
    "deleteRoom": (id)=>`/api/room/delete-room?id=${id}`,
    "putRoom": `/api/room/put-room-id`,

    // Metting Room
    "getListMeeting": "/api/meet/list",
    "getMeetingRoomID": (id)=>`/api/meet/room-id?id=${id}`,
    "deleteMeetingRoom": (id)=>`/api/meet/delete-room?id=${id}`,
    "postMeetingRoom": "/api/meet/post-room",
    "putMeetingRoomID":(id)=> `/api/meet/put-room?id=${id}`
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

