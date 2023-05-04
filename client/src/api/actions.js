import React from "react"
import API, {headers, endpoints} from "../API"

export function callAPi() {
    API.get(endpoints["getRoom"])
        .then((res)=>{  
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
}

