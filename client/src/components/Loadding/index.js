import React from "react";
import Styles from "./Loadding.module.css"
import { useDispatch } from "react-redux";
function Loadding() {
    return ( 
        <div className={Styles.Loadding}>
            <div className={Styles.ring} />
            <div className={Styles.ring} />
            <div className={Styles.ring} />
            <span className={Styles.loadding}>Loadding...</span>
        </div>
     );
}

export default Loadding;