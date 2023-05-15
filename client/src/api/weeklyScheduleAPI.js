import API,{ headers, endpoints} from "../API"

export function getWeeklyScheduleAPI(){
    try {
        return API.get(endpoints["getWeeklySchedule"],{headers: headers.headers_token})
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

export function PostWeeklyScheduleAPI(data){
    try {
        return API.post(endpoints["postWeekSchedule"], data ,{ headers: headers.headers_token })
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

export function DeleteWeeklyScheduleAPI(id){
    try {
        return API.delete(endpoints["deleteWeekSchedule"](id), { headers: headers.headers_token})
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

export function getWeeklyScheduleIDAPI(id){
    try {
        return API.get(endpoints["getWeeklyScheduleID"](id),{headers: headers.headers_token})
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

export function putWeekScheduleAPI(data){
    try {
        return API.put(endpoints["putWeekScheduleID"],data,{headers: headers.headers_token})
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
