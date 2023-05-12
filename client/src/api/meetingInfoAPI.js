import API, { headers, endpoints} from "../API"

export function getListMeetingInfoAPI(){
    try {
        return API.get(endpoints["getListMeetingInfo"],{headers: headers.headers_token})
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

export function postMeetingInfoAPI(data){
    try {
       return API.post(endpoints["postMeetingInfo"],data,{headers: headers.headers_token})
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

export function deleteMeetingInfoAPI(id) {
        try {
            console.log(id);
            return API.delete(endpoints["deleteMeetingInfo"](id),{headers: headers.headers_token})
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

export function getMeetingInfoAPI(id) {
    try {
        console.log(id);
        return API.get(endpoints["getMeetingInfo"](id),{headers: headers.headers_token})
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

export function putMeetingInfoAPI(data){
    try {
        return API.put(endpoints["putMeetingInfo"](1),data,{headers: headers.headers_token})
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