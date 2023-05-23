import API, { endpoints, headers } from "../API";

export function GetIndividualAPI(){
    return API.get(endpoints["getIndividual"],{headers: headers.headers_token})
            .then((res)=>{
                return res.data;
            })
            .catch((err)=>{
                console.log(err);
            })
}

export function getDepartmentAPI(){
    return API.get(endpoints["getDepartment"],{headers: headers.headers_token})
            .then((res)=>{
                return res.data;
            })
            .catch((err)=>{
                console.log(err);
            })
}