import API, {endpoints, headers} from "../API";
export function getListMemberAPI(){
    try {
        return API.get(endpoints["getMemberList"],{ headers: headers.headers_token })
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

export function postMemberListAPI(profile_id){
    try {
        return API.post(endpoints["postMember"], { profile_id } , { headers: headers.headers_token })
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

export function deleteMemberIDAPI(id){
    try {
        return API.delete(endpoints["deleteMember"](id),{ headers: headers.headers_token })
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

export function getMemberIDAPI(id){
    try {
        return API.get(endpoints["getMemberID"](id),{ headers: headers.headers_token })
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

export function putMemberIDAPI(data){
    try {
        const { id , profile_id } = data;
        return API.put(endpoints["putMember"](id),{ profile_id }, { headers: headers.headers_token })
                .then((res)=>{
                    return res.data;
                })
    } catch (error) {
        console.log(error);
    }
}