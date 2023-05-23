import React, { useState } from "react";
import Styles from "../AddRoom/AddRoom.module.css";

import { CloseOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { putRoom } from "../../store/redux/slices/roomSlice";
import { getLoading } from "../../store/redux/slices/LoadingSlice";

function EditRoom({setShowEditRoom,data}) {
    // UseState
    const [name,setName] = useState(data.name);
    const [location,setLocation] = useState(data.location);

    // useDispatch
    const dispatch = useDispatch();

    // Function
    const HandelEditRoom = ()=>{
        // console.log({name,location});
        dispatch({type: getLoading.type});
        dispatch({type: putRoom.type , data: { location, name , id: data.id}});
        setShowEditRoom(false);
    }
    return ( 
        <div className={Styles["bg-custom"]}>
            <div className={Styles.add_room}>
                <div className={Styles["add_room-close"]}>
                    <CloseOutlined onClick={()=>setShowEditRoom(false)} />
                </div>
                <div className={Styles["add_room-container"]}>
                    <div className={Styles["add_room-title"]}>
                        <h2>Cập nhật phòng họp</h2>
                    </div>
                    <div className={Styles["add_room-form"]}>
                        <div className={Styles["add_room-input"]}>
                            <label> Tên phòng</label>
                            <Input value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className={Styles["add_room-input"]}>
                            <label> Địa điểm</label>
                            <Input value={location} onChange={(e)=>setLocation(e.target.value)} />
                        </div>
                        <div className={Styles["add_room-btn"]}>
                            <Button type="ghost" onClick={()=>{HandelEditRoom()}}>Chỉnh sửa</Button>
                            <Button type="ghost" onClick={()=>setShowEditRoom(false)}>Hủy</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default EditRoom;