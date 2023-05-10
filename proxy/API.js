
const axios = require("axios")
const https = require('https')

const agent = new https.Agent({
    rejectUnauthorized: false
})

let API = axios.create({
    baseURL: process.env.BACKEND_DOMAIN,  
},{httpsAgent: agent})

let endpoints = {
    // room
    "getListRoom" : "/detail-room/",
    "postListRoom": "/detail-room/",
    "getRoomId": (id)=>`/detail-room/${id}`,
    "deleteRoom": (id)=>`/detail-room/${id}`,
    "putRoom": (id)=>`/detail-room/${id}`,

    // metting room 
    "getListMeetingRoom": "/meeting-room/",
    "getMeetingRoomID":(id) => `/meeting-room/${id}`,
    "putMeetingRoomID": `/meeting-room/`,
    "deleteMeetingRoom":(id) => `/meeting-room/${id}`,
    "postMeetingRoom":`/meeting-room/`,
}

let headers = {
    headers: {
        "Content-Type": "application/json",
    },
    headers_token: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYyLCJleHAiOjE2ODI2ODI5NTh9.ydqEnnhaG7KbxDQr3aT9cYEiMsPvuZPgGigG_SAIkuU`,
        "Content-Type": "application/json",
    }
}

module.exports = {
    headers,
    endpoints,
    API
}
