import React from "react";
import Styles from "../HiddenRoom/HiddenRoom.module.css";

import { CloseOutlined } from "@ant-design/icons"
import { Button } from "antd";
import { deleteRoom } from "../../store/redux/slices/roomSlice";
import { useDispatch } from "react-redux";
import { getLoading } from "../../store/redux/slices/LoadingSlice";
import { getChangeOptionRoom } from "../../store/redux/slices/roomSlice";

function HiddenRoom({setShowDeleteRoom,data}) {
    // Dispatch
    const dispatch = useDispatch();
    
    // Function
    const HandleHiddenRoom = ()=>{
        // 0 on , 1 off 
        dispatch({type: deleteRoom.type, data: data});
        dispatch({type: getLoading.type });
      
        setShowDeleteRoom(false);
    }
    return ( 
        <div className={Styles["bg-custom"]}>
            <div className={Styles.hidden_room}>
                <div className={Styles["hidden_room-close"]}>
                    <CloseOutlined onClick={()=>{setShowDeleteRoom(false)}} />
                </div>
                <div className={Styles["hidden_room-container"]}>
                    <div className={Styles["hidden_room-title"]}>
                        <h2>{data.status !== 0 ? "Ẩn phòng này" : "Mở phòng này"}</h2>
                    </div>
                    <div className={Styles["hidden_room-form"]}>
                        <div className={Styles["hidden_room-input"]}>
                            <span>Xác nhận {data.status !== 0 ? "ẩn" : "mở"} phòng {data.name} này!</span>
                        </div>
                        <div className={Styles["hidden_room-btn"]}>
                            <Button type="ghost" onClick={()=>{HandleHiddenRoom()}} >{data.status !== 0 ? "Ẩn" : "Mở"}</Button>
                            <Button type="ghost" onClick={()=>{setShowDeleteRoom(false)}}>Hủy</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HiddenRoom;