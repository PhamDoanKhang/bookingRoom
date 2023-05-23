import Styles from "./room_order.module.css";
import React from "react";

import { useState, useEffect } from "react";
import { LeftOutlined } from "@ant-design/icons"
import { Button, Breadcrumb, Input, Select, DatePicker, Checkbox, InputNumber } from "antd";
import { DepartmentSelecter, IndividualSelecter, listRoomSelecter } from "../../store/redux/selecters";
import { useDispatch, useSelector } from "react-redux";
import { getListRoom } from "../../store/redux/slices/roomSlice";

import TextArea from "antd/es/input/TextArea";
import { getDepartment , getIndividual} from "../../store/redux/slices/participantsSlice";
import { useNavigate } from "react-router-dom";

function RoomOrderUser() {
    const [page,setPage] = useState({ page_size: 10 , page: 1 });
    const [valueOption,setValueOpTion] = useState("");
    const [option,setOption] = useState([]);
    const [content, setContent] = useState("");
    // dispatch
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // useEffect
    useEffect(()=>{
        dispatch({type: getListRoom.type, data:{ page_size: page.page_size , page : page.page, sort_by: "1", order: "desc" }});
        dispatch({type: getIndividual.type});
        dispatch({type: getDepartment.type});
    },[])
    // UseSelecter
    const listRoom = useSelector(listRoomSelecter);
    const Individuals = useSelector(IndividualSelecter);
    const Departments = useSelector(DepartmentSelecter)
   
    const listRoomUser = listRoom.filter(listRoom=>{
        return listRoom.status === 0;
    })

  

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
    const HandelSaveOption = ()=>{
        setOption([...option,valueOption]);
        setValueOpTion("");
    }
    const HandelPrev = ()=>{
        navigate("/room_order-user")
    }

    // console.log(listRoomUser);

    console.log(content);
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
                        <Button icon={<LeftOutlined />} onClick={()=>HandelPrev()} type="ghost">Trở lại</Button>
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
                                        <Input type="" />
                                        {/* <InputNumber className={Styles["input-Number"]} min={1} max={100} value={1} /> */}
                                </div>
                                <div className={Styles["order_room-item"]}>
                                        <span>Địa điểm:</span>
                                        <Select 
                                            className={Styles["order_room-select"]} 
                                            options={listRoomUser.map((room)=>{
                                                return {
                                                    value: room.id,
                                                    label: room.location
                                                }
                                            })}
                                        />  
                                </div>
                                <div className={Styles["order_room-item"]}>
                                        <span>Tên phòng</span>
                                        <Select 
                                            options={listRoomUser.map((room)=>{
                                                return {
                                                    value: room.id,
                                                    label: room.name
                                                }
                                            })}
                                            className={Styles["order_room-select"]} 
                                        />  
                                </div>
                                <div className={Styles["title"]}>Thành phần</div>
                                <div></div>
                                <div className={Styles["order_room-item"]}>
                                    {/* <Checkbox>Phòng ban</Checkbox> */}
                                    <div>Phòng ban</div>
                                    <Select
                                        options={Departments.map((indvidual)=>{
                                            return {
                                                value: indvidual.id,
                                                label: indvidual.name
                                            }
                                        })} 
                                        className={Styles["order_room-select"]} 
                                    />  
                                </div>
                                <div className={Styles["order_room-item"]}>
                                    {/* <Checkbox>Cá nhân</Checkbox> */}
                                    <div>Cá nhân</div>
                                        <Select 
                                            options={Individuals.map((indvidual)=>{
                                                return {
                                                    value: indvidual.id,
                                                    label: indvidual.name
                                                }
                                            })} 
                                            className={Styles["order_room-select"]} />  
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
                        <Input placeholder="Chọn option" value={valueOption} onChange={(e)=>{setValueOpTion(e.target.value)}} />
                        <Button type="ghost" onClick={()=>{HandelSaveOption()}} >Thêm</Button>
                    </div>
                    <div className={Styles["list-option"]}>
                        {option && option.map((value)=>{
                            return (
                            <div className={Styles["option-item"]}>
                                <div></div>
                                <div>{value}</div>
                                <></>
                            </div>
                            )
                        })}
                        {/* <div className={Styles["option-item"]}>
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
                        </div> */}
                    </div>
                    <div className={Styles["detail_room-note"]}>
                        <h3>Nội dung cuộc họp:</h3>
                        <div className={Styles["detail_room-text"]}>
                            <TextArea onChange={(e)=>{(setContent(e.target.value))}}  />
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