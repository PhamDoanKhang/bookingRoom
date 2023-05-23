import API,{ endpoints, headers} from "../API";



export function getInfoSuggesListAPI(data){
    try {
        const { page_size,page , sort_by, order} = data;
        console.log({ page_size,page , sort_by, order});
        return API.get(endpoints["getInfoSuggesList"](page_size,page,sort_by,order),{headers: headers.headers_token})
                .then((res)=>{
                    // console.log(res.data);
                    return res.data;
                })
                .catch((err)=>{
                    console.log(err);
                })
         retur       
    } catch (error) {
        console.log(error);
    }
}

export function getInfoSuggesIDAPI(id){
    try {
        return API.get(endpoints["getInfoSuggesID"](id),{ headers: headers.headers_token })
                .then((res)=>{
                    // console.log(res.data);
                    return res.data;
                })
                .catch((err)=>{
                    console.log(err);
                })
    } catch (error) {
        console.log(error);
    }
}

export function deleteInfoSuggesIDAPI(id){
    try {
        return API.delete(endpoints["deleteInfoSugges"](id),{ headers: headers.headers_token })
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

export function putInfoSuggesIDAPI(data){
    try {
        // console.log(data);
        const { id , res } = data
        return API.put(endpoints["putInfoSugges"](id), res ,{ headers: headers.headers_token })
                .then((res)=>{
                    // console.log(res.data);
                    return res.data
                })
                .catch((err)=>{
                    console.log(err);
                })
    } catch (error) {
        console.log(error);
    }
}

export function postInfoSuggesListAPI(data){
    try {
        console.log(data);
        return API.post(endpoints["postInfoSugges"],data,{headers: headers.headers_token})
                .then((res)=>{
                    // console.log(res.data);
                    return res.data
                })
                .catch((err)=>{
                    console.log(err);
                })
    } catch (error) {
        console.log(error);
    }
}