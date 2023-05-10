import React, { useEffect } from "react";
import useFetchList from "../../hook/useFetchList";

import { useDispatch } from "react-redux"

import API ,{ endpoints , headers  } from "../../API"

function Test() {

    const HandelClick = ()=>{

    }
    return ( 
        <>
            <button onClick={HandelClick}>OnClick</button>
        </>
     );
}

export default Test;