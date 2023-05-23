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
    "getListRoom" : (page_size,page,sort_by,order)=>  `/api/room/list?page_size=${page_size}&page=${page}&sort_by=${sort_by}&order=${order}`,
    "getRoomList" : "/api/room/room-list",
    "getRoomId": (id)=> `/api/room/get-room-id?id=${id}`,
    "postListRoom": "/api/room/post-list-room",
    "deleteRoom": (id)=>`/api/room/delete-room?id=${id}`,
    "putStatusRoom": "/api/room/status",

    "putRoom": `/api/room/put-room-id`,

    // Metting Room
    "getListMeeting": (page, page_size, order, sort_by) => `/api/meet/list?page_size=${page_size}&page=${page}&sort_by=${sort_by}&order=${order}`,
    "getMeetingRoomID": (id)=>`/api/meet/room-id?id=${id}`,
    "deleteMeetingRoom": (id)=>`/api/meet/delete-room?id=${id}`,
    "postMeetingRoom": "/api/meet/post-room",
    "putMeetingRoomID":(id)=> `/api/meet/put-room?id=${id}`,

    // Weekly-schedule
    "getWeeklySchedule": "/api/weekly-schedule",
    "getWeeklyScheduleID": (id)=> `/api/weekly-schedule/getId?id=${id}`,
    "postWeekSchedule": "/api/weekly-schedule/post",
    "deleteWeekSchedule": (id)=>`/api/weekly-schedule/delete?id=${id}`,
    "putWeekScheduleID": `/api/weekly-schedule/put`,

    // Meeting-Info Ban bien tap
    "getListMeetingInfo": "/api/meeting-info/",
    "getMeetingInfo": (id) => `/api/meeting-info/get?id=${id}`,
    "deleteMeetingInfo": (id) => `/api/meeting-info/delete?id=${id}`,
    "postMeetingInfo": "/api/meeting-info/post",
    "putMeetingInfo": (id) => `/api/meeting-info/put?id=${id}`,

    // member 
    "getMemberList": "/api/member/",
    "getMemberID": id => `/api/member/get?id=${id}`,
    "deleteMember": id => `/api/member/delete?id=${id}`,
    "postMember": "/api/member/post",
    "putMember": id => `/api/member/put?id=${id}`,

    // info-Suggestion

    "getInfoSuggesList": (page_size,page,sort_by,order)  => `/api/info-suggestion/?page_size=${page_size}&page=${page}&sort_by=${sort_by}&order=${order}`,
    "getInfoSuggesID": id => `/api/info-suggestion/get?id=${id}`,
    "deleteInfoSugges": id => `/api/info-suggestion/delete?id=${id}`,
    "postInfoSugges": "/api/info-suggestion/post",
    "putInfoSugges": id => `/api/info-suggestion/put?id=${id}`,

    //participants
    
}

export let headers = {
    headers: {
        "Content-Type": "application/json",
    },
    headers_token: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoyNzQ5Nzk2MTk2fQ.2i_z3-2cpRRXusvpR-T5h0QvclOi4gL8wq1ze-aLyAA`,
        "Content-Type": "application/json",
    }
}

