import axios from "axios";
import API,{ headers , endpoints } from "../API";


export function getMeetingRoomAPI(data){
    try {   
      const { page, page_size, order, sort_by } = data
      return API.get(endpoints["getListMeeting"](page, page_size, order, sort_by),{headers: headers.headers_token})
            .then((res)=>{
                return res.data;
            })
            .catch((err)=>{
                console.log(err);
            })

    } catch (error) {
        console.log(error);
    }
}

export function deleteMeetingRoomAPI(id){
    try {
        return API.delete(endpoints["deleteMeetingRoom"](id),{headers: headers.headers_token})
                .then((res)=>{
                    return res.data;
                })
                .catch((err)=>{
                    console.log(err);
                })
    } catch (error) {
        console.log(error);
    }
}

export function postMeetingRoomAPI(data){
    try {
      return API.post(endpoints["postMeetingRoom"], data ,{headers: headers.headers_token})
            .then((res)=>{
                return res.data;
            })
            .catch((err)=>{
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }
}

export function getMeetingRoomIDUserAPI(id){
    try {
        return API.get(endpoints["getMeetingRoomID"](id),{headers: headers.headers_token})
                .then((res)=>{
                    return res.data;
                })
                .catch((err)=>{
                    console.log(err);
                })

    } catch (error) {
        console.log(error);
    }
}

export function updateMeetingRoomAPI(payload){
    try {
        const { id, ...res } = payload;
        console.log({id,res});
        return API.put(endpoints["putMeetingRoomID"](id), res , { headers: headers.headers_token })
                .then((res)=>{
                    return res.data;
                })
                .catch((err)=>{
                    console.log(err);
                })
    } catch (error) {
        console.log(error);
    }
}