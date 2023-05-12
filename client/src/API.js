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
    "putMeetingRoomID":(id)=> `/api/meet/put-room?id=${id}`,

    // Weekly-schedule
    "getWeeklySchedule": "/api/weekly-schedule",
    "getWeeklyScheduleID": (id)=> `/api/weekly-schedule/getId?id=${id}`,
    "postWeekSchedule": (profile_id)=> `/api/weekly-schedule/post?profile_id=${profile_id}`,
    "deleteWeekSchedule": (id)=>`/api/weekly-schedule/delete?id=${id}`,
    "putWeekScheduleID": `/api/weekly-schedule/put`,

    // Meeting-Info Ban bien tap
    "getListMeetingInfo": "/api/meeting-info/",
    "getMeetingInfo": (id) => `/api/meeting-info/get?id=${id}`,
    "deleteMeetingInfo": (id) => `/api/meeting-info/delete?id=${id}`,
    "postMeetingInfo": "/api/meeting-info/post",
    "putMeetingInfo": (id) => `/api/meeting-info/put?id=${id}`,

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

