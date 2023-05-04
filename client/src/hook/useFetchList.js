import React, { useEffect, useState } from "react";
import axios from "axios"

function useFetchList(url){
   const [data,setData] = useState([])
   useEffect(()=>{
    axios.get(url)
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
        .catch((err)=>{
            return err
        })
   },[url])
    return data
}

export default useFetchList