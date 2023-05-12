import API,{ headers, endpoints} from "../API"

export function getWeeklyScheduleAPI(){
    try {
        return API.get(endpoints["getWeeklySchedule"],{headers: headers.headers_token})
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

export function PostWeeklyScheduleAPI(id){
    try {
        return API.post(endpoints["postWeekSchedule"](id), {} ,{ headers: headers.headers_token })
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

export function DeleteWeeklyScheduleAPI(id){
    try {
        console.log(id);
        console.log(id);
        return API.delete(endpoints["deleteWeekSchedule"](id), { headers: headers.headers_token})
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

export function getWeeklyScheduleIDAPI(id){
    try {
        console.log(id);
        return API.get(endpoints["getWeeklyScheduleID"](id),{headers: headers.headers_token})
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

export function putWeekScheduleAPI(data){
    try {
        return API.put(endpoints["putWeekScheduleID"],data,{headers: headers.headers_token})
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
