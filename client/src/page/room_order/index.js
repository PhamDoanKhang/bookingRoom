import Styles from "./room_order.module.css";
import React from "react";

import { useState, useEffect } from "react";
import { LeftOutlined } from "@ant-design/icons"
import { Button, Breadcrumb, Input, Select, DatePicker, Checkbox} from "antd";
import { listRoomSelecter } from "../../store/redux/selecters";
import { useDispatch, useSelector } from "react-redux";
import { getListRoom } from "../../store/redux/slices/roomSlice";

import TextArea from "antd/es/input/TextArea";


function RoomOrderUser() {
    const [page,setPage] = useState({ page_size: 10 , page: 1 })
    // dispatch
    const dispatch = useDispatch();

    // useEffect
    useEffect(()=>{
        dispatch({type: getListRoom.type, data:{ page_size: page.page_size , page : page.page, sort_by: "1", order: "desc" }});
    },[])

    // UseSelecter
    const listRoom = useSelector(listRoomSelecter);
    console.log(listRoom);

    const itemPath = [
        {
            href: "",
            title: <span>Quản lý phòng đặt</span>
        },
        {
            href: "",
            title: <span className={Styles["room-title-color"]}>Danh sách phòng đặt</span>
        },
    ]
    // Function 
    const HandelShowPopupAddRoom = ()=>{
        
    }

    // console.log(loading);
    return ( 
        <div className={Styles['manager_room']}>
            {/* <Loadding loading={loading} />  */}
            <div className={Styles["manager_room-brew"]}>
                <Breadcrumb items={itemPath} separator=">>" />
            </div>
            <div className={Styles["manager_room-container"]}>
                <div>
                    <div className={Styles["manager_room-title"]}>
                        <h3>Danh sách phòng đặt</h3>
                        <Button icon={<LeftOutlined />} onClick={()=>HandelShowPopupAddRoom()} type="ghost">Trở lại</Button>
                    </div>
                    <div className={Styles["br"]}></div>
                    <div className={Styles["order_room-container"]}>
                        <div className={Styles["order_room-left"]}>
                            <div className={Styles["order_room-items"]}>
                                <div className={Styles["order_room-item"]}>
                                        <span>Thời gian:</span>
                                        <DatePicker className={Styles["datepicker"]}></DatePicker>
                                </div>
                                <div className={Styles["order_room-item"]}>
                                        <span>Số lượng:</span>
                                        <Input  />
                                </div>
                                <div className={Styles["order_room-item"]}>
                                        <span>Địa điểm:</span>
                                        <Select 
                                            className={Styles["order_room-select"]} 
                                            options={listRoom.map((room) => ({
                                                
                                            }))}
                                        />  
                                </div>
                                <div className={Styles["order_room-item"]}>
                                        <span>Tên phòng</span>
                                        <Select className={Styles["order_room-select"]} />  
                                </div>
                                <div className={Styles["title"]}>Thành phần</div>
                                <div></div>
                                <div className={Styles["order_room-item"]}>
                                    <Checkbox>Phòng ban</Checkbox>
                                    <Select className={Styles["order_room-select"]} />  
                                </div>
                                <div className={Styles["order_room-item"]}>
                                    <Checkbox>Cá nhân</Checkbox>
                                        <Select className={Styles["order_room-select"]} />  
                                </div>
                            </div>
                            
                        </div>
                        <div className={Styles["order_room-right"]}>
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
                    </div>
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
                    <div className={Styles["option"]}>
                        <label>Option:</label>
                        <Input placeholder="Chọn option" />
                        <Button type="ghost">Thêm</Button>
                    </div>
                    <div className={Styles["list-option"]}>
                        <div className={Styles["option-item"]}>
                            <div></div>
                            <div>Tivi</div>
                            <></>
                        </div>
                        <div className={Styles["option-item"]}>
                            <div></div>
                            <div>Trái cây</div>
                        </div>
                        <div className={Styles["option-item"]}>
                            <div></div>
                            <div>Nước ngọt</div>
                        </div>
                        <div className={Styles["option-item"]}>
                            <div></div>
                            <div>Tấm Bảng</div>
                        </div>
                    </div>
                    <div className={Styles["detail_room-note"]}>
                        <h3>Nội dung cuộc họp:</h3>
                        <div className={Styles["detail_room-text"]}>
                            <TextArea  />
                        </div>
                    </div>
                    <div className={Styles["detail_room-display"]}>
                        <div></div>
                        <div className={Styles["detail_room-btn"]}>
                            <button>Thêm</button>
                            <button onClick={()=>{setShowDeatailOrderRoom(false)}}>Trở về</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default RoomOrderUser;