import React, { useEffect } from "react";
import Styles from "./PopupDetailRoom.module.css";

import { CloseOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { getRoomId } from "../../store/redux/slices/roomSlice";
import { roomIdSelecer } from "../../store/redux/selecters";
function PopupDetailRoom({ setShowDeatailOrderRoom, DetaiOrderRoom }) {
    // useDispatch
    const dispatch = useDispatch();

    console.log(DetaiOrderRoom);

    

    // useSelecter
    const room = useSelector(roomIdSelecer);

    useEffect(()=>{
        dispatch({type: getRoomId.type, data: { id: DetaiOrderRoom.meeting_room_id }})
    },[])
    
    const HandelUpdateStatusMeetingRoom = ()=>{
        dispatch({type: putMeetingRoom.type, data: {...DetaiOrderRoom, status: 1 , option : JSON.stringify(DetaiOrderRoom.option)} });
        setShowDeatailOrderRoom(false);
    }

    return ( 
        <div className={Styles["bg-custom"]}>
            <div className={Styles["detail_room"]}>
                <div className={Styles["detail_room-close"]}>
                    <CloseOutlined onClick={()=>{setShowDeatailOrderRoom(false)}} />
                </div>
                <div className={Styles["detail_room-infonation"]}>
                    <div className={Styles["detail_room-infoRoom"]}>
                        <div className={Styles["detail_room-room"]}>
                            <div className={Styles["detail_room-title"]}>
                                <span className={Styles["detail_room-lable"]}>Tên phòng:</span>
                                <span className={`${Styles[`detail_room-value`]} ${Styles["detail_room-bold"]}`}>{room.name}</span>
                            </div>
                            <div className={Styles["detail_room-title"]}>
                                <span className={Styles["detail_room-lable"]}>Thời gian họp:</span>
                                <span className={Styles["detail_room-value"]}>{DetaiOrderRoom.meeting_time} {DetaiOrderRoom.meeting_date}</span>
                            </div>
                            <div className={Styles["detail_room-title"]}>
                                <span className={Styles["detail_room-lable"]}>Địa điểm họp:</span>
                                <span className={Styles["detail_room-value"]}>{room.location}</span>
                            </div>
                            <div className={Styles["detail_room-title"]}>
                                <span className={Styles["detail_room-lable"]}>Số lượng:</span>
                                <span className={Styles["detail_room-value"]}>{DetaiOrderRoom.quantity}</span>
                            </div>
                            
                        </div>
                        <div className={Styles["detail_room-user"]}>
                            <div className={Styles["detail_room-user-img"]}>
                                <img src="" />
                            </div>
                            <div className={Styles["detail_room-userInfo"]}>
                                <div>Nguyen Long Lam</div>
                                <div>0925535027</div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["detail_room-componient"]}>
                        <h2>Thành phần</h2>
                        <div className={Styles["detail_room_list"]}>
                            <h3>Danh sách phòng ban các nhân</h3>
                            <div className={Styles["detail_room_list-user"]}>
                                <div className={Styles["detai_room-user"]}>
                                    <span>Cá nhân 1</span>
                                </div>
                                <div className={Styles["detai_room-user"]}>
                                    <span>Cá nhân 2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["detail_room-option"]}>
                        <h3>Option:</h3>
                        <div className={Styles["detail_room-option-list"]}>
                            <div>Trà nóng</div>
                            <div>-</div>
                            <div>Trái Cây</div>
                            <div>-</div>
                            <div>Ti vi</div>
                        </div>
                    </div>
                    <div className={Styles["detail_room-note"]}>
                        <h3>Nội dung cuộc họp:</h3>
                        <div className={Styles["detail_room-text"]}>
                            <TextArea value={DetaiOrderRoom.information} />
                        </div>
                    </div>
                    <div className={Styles["detail_room-display"]}>
                        <div></div>
                        <div className={Styles["detail_room-btn"]}>
                            {DetaiOrderRoom.status === 0 ? 
                                <>
                                    <button onClick={()=>{HandelUpdateStatusMeetingRoom()}}>Duyệt</button>
                                    <button onClick={()=>{setShowDeatailOrderRoom(false)}}>Hủy</button>
                                </>
                                :
                                ""
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default PopupDetailRoom;