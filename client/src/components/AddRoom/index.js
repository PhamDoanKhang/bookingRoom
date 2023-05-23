import React, { useState } from "react";
import Styles from "../AddRoom/AddRoom.module.css";

import { CloseOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { ErrorNotification } from "../../utils/Notification";
import { postRoom } from "../../store/redux/slices/roomSlice";
import { getLoading } from "../../store/redux/slices/LoadingSlice";

function AddRoom({setShowAddRoom}) {
    // UseState
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");

    // useDispath 
    const dispatch = useDispatch();
    
    const HandelAddRoom = ()=>{
        if(name !== ""){
            if(setLocation !== ""){
                dispatch({type: postRoom.type, data: { name , location , status: 0 } });
                dispatch({type: getLoading.type});
                setShowAddRoom(false);
            }else{
                ErrorNotification("Địa điểm không được để trống");
            }
        }else{
            ErrorNotification("Tên phòng không được để trống");
        }
    }

    return ( 
        <div className={Styles["bg-custom"]}>
            <div className={Styles.add_room}>
                <div className={Styles["add_room-close"]}>
                    <CloseOutlined onClick={()=>setShowAddRoom(false)} />
                </div>
                <div className={Styles["add_room-container"]}>
                    <div className={Styles["add_room-title"]}>
                        <h2>Thêm phòng họp</h2>
                    </div>
                    <div className={Styles["add_room-form"]}>
                        <div className={Styles["add_room-input"]}>
                            <label> Tên phòng</label>
                            <Input onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className={Styles["add_room-input"]}>
                            <label> Địa điểm</label>
                            <Input onChange={(e)=>setLocation(e.target.value)} />
                        </div>
                        <div className={Styles["add_room-btn"]}>
                            <Button type="ghost" onClick={()=>{HandelAddRoom()}}>Thêm</Button>
                            <Button type="ghost" onClick={()=>setShowAddRoom(false)}>Hủy</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AddRoom;