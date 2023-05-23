
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
    "getListRoom" : (page_size,page) => `/detail-room/?page_size=${page_size}&page=${page}&sort_by=id&order=desc`,
    "postListRoom": "/detail-room/",
    "getRoomId": (id)=>`/detail-room/${id}`,
    "deleteRoom": (id)=>`/detail-room/${id}`,
    "putRoom": (id)=>`/detail-room/${id}`,

    // metting room 
    "getListMeetingRoom": (page_size,page) => `/meeting-room/?page_size=${page_size}&page=${page}&sort_by=id&order=desc`,
    "getMeetingRoomID":(id) => `/meeting-room/${id}`,
    "putMeetingRoomID": `/meeting-room/`,
    "deleteMeetingRoom":(id) => `/meeting-room/${id}`,
    "postMeetingRoom":`/meeting-room/`,

    // weekly-schedule
    "getListWeeklySchedule": "/weekly-schedule",
    "getIDWeeklySchedule": (id)=>`/weekly-schedule/${id}`,
    "postListWeeklySchedule": "/weekly-schedule",
    "deleteListWeeklySchedule":(id) => `/weekly-schedule/${id}`,
    "putIDWeeklySchedule": (id) => `/weekly-schedule/${id}`,

    // Meeting-Info Ban bien tap
    "getListMeetingInfo": "/meeting-info/",
    "getMeetingInfo": (id) => `/meeting-info/${id}`,
    "deleteMeetingInfo": (id) => `/meeting-info/${id}`,
    "postMeetingInfo": "/meeting-info/",
    "putMeetingInfo": (id) => `/meeting-info/${id}`,

    // Member
    "getListMember" : "/member/",
    "postMember": "/member/",
    "deleteMember": id => `/member/${id}`,
    "getMember": id => `/member/${id}`,
    "putMember": id => `/member/${id}`,

    // info-sugges
    "getListInfoSugges": (page_size,page) => `/info-suggestion/?page_size=${page_size}&page=${page}`,
    "getInfoSuggesID": id => `/info-suggestion/${id}`,
    "deleteInfoSugges": id => `/info-suggestion/${id}`,
    "putInfoSuggesID": id => `/info-suggestion/${id}`,
    "postInfoSugges": "/info-suggestion/"
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

