import API, {endpoints , headers} from "../API";

export function getListRoomApi(){
    try {
        return API.get(endpoints["getListRoom"],{headers: headers.headers_token})
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

export function deleteRoomAPI(id){
    try {
        return API.delete(endpoints["deleteRoom"](id), {headers: headers.headers_token})
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

export function putRoomAPI(data){
    try {
        return API.put(endpoints["putRoom"], data, {headers: headers.headers_token})
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