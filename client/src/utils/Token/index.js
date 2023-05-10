import { useJwt } from "react-jwt"

// GET TOKEN
export const getToken = (key = "usertoken")=>{
    if(document.cookie.length > 0){
        const cookies = document.cookie.split("; ");
        let token;
        for (const value of cookies) {
            if(value.split("=")[0] === key){
                token = value.split("=")[1]
            }
        }
        return token
    }    
}

// DECODE TOKEN
export const parseToken = (token)=>{
    if(token){
        const { decodedToken, isExpired } = useJwt(token) 
        return decodedToken
    }
}

