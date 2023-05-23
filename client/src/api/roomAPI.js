import axios from "axios";
import API, {endpoints , headers} from "../API";


export function getRoomListAPI(){
    
}

export function getListRoomApi(data){
    try {
        const {page_size, page , sort_by , order} = data;
        return API.get(endpoints["getListRoom"](page_size, page, sort_by, order),{headers: headers.headers_token})
                .then((res)=>{
                    return res.data;
                })
                .catch((err)=>{
                    console.log(err);
                })
    } catch (error) {
        return error
    }
}

// Get room id
export function getRoomIdApi(id){
    try {
        return API.get(endpoints["getRoomId"](id),{headers: headers.headers_token})
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

// Post room
export function postRoomAPI(data){
    try {
        return API.post(endpoints["postListRoom"], data, {headers: headers.headers_token})
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

export function deleteRoomAPI(data){
    try {


        console.log(data);
        return API.put(endpoints["putStatusRoom"], data , { headers: headers.headers_token})
                    .then((res)=>{
                        console.log(res.data);
                        return res.data;
                    })
                    .catch((err)=>{
                        console.log(err);
                    })


    } catch (error) {
        console.log(error);
    }
}

export function putRoomAPI(data){   
    try {
        return API.put(endpoints["putRoom"], data, {headers: headers.headers_token})
                    .then((res)=>{
                        console.log(res.data);
                        return res.data;
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
    } catch (error) {
        console.log(error);
    }
}