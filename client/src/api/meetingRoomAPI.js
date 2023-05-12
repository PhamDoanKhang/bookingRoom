import axios from "axios";
import API,{ headers , endpoints } from "../API";


export function getMeetingRoomAPI(data){
    try {   
      return API.get(endpoints["getListMeeting"])
            .then((res)=>{
                return res.data
            })
            .catch((err)=>{
                console.log(err);
            })

    } catch (error) {
        
    }
}

export function deleteMeetingRoomAPI(id){
    try {
        console.log(id);
        return API.delete(endpoints["deleteMeetingRoom"](id))
                .then((res)=>{
                    return res.data
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
      return API.post(endpoints["postMeetingRoom"],{data:data})
            .then((res)=>{
                return res.data
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
        console.log(id);
        return API.get(endpoints["getMeetingRoomID"](id))
                .then((res)=>{
                    console.log(res.data);
                    return res.data
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
        const { data,id } = payload
        return API.put(endpoints["putMeetingRoomID"](id),{data:data})
                .then((res)=>{
                    console.log(res.data);
                    return res.data
                })
                .catch((err)=>{
                    console.log(err);
                })
    } catch (error) {
        console.log(error);
    }
}