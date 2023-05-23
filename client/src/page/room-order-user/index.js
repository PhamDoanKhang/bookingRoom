import Styles from "./room-order-user.module.css";
import React from "react";

import { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons"
import { Button, Breadcrumb, Input, Switch, Table, DatePicker } from "antd";
import { listMeetingRoomSelecter, loadingSelecter,  } from "../../store/redux/selecters";
import { useDispatch, useSelector} from "react-redux";
// import { getListRoom, getNoChangeOptionRoom, getChangeOptionRoom } from "../../store/redux/slices/roomSlice";
import { useNavigate } from "react-router-dom";

import Loadding from "../../components/Loadding";




function RoomOrderList() {
    // useDispath
    const dispatch = useDispatch();
    const navigage = useNavigate();

    // UseSelecter 
    // const pageSelecter = useSelector(roomMetadataSelecer);
    const loading = useSelector(loadingSelecter);
    const listRoomMeeting = useSelector(listMeetingRoomSelecter);
    // console.log(page);
    // Use Dispatch


    //function
 


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

    const columns = [
        {
            title: <span className={Styles["manager_room-title1"]}>STT</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>{"1"}</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Thời gian họp</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span className={Styles["manager_room-nd1"]}>16:00 11/05/2023</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Tên phòng</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>AB2</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Địa điểm</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>Báo tuổi trẻ</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Trạng thái</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>{room.status === 0 ? <span  className={Styles["wait"]}>Chờ xác nhận</span> : room.status === 1 ? <span className={Styles["confim"]}>Đã duyệt</span> : <span className={Styles["delete"]}>Đã hủy</span>  }</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Thành phần</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>Thành phần a</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Nội dung</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>Đăng ký lịch họp</span>
        },
        {
            title: <span className={Styles["manager_room-title"]}></span>,
            dataIndex: "",
            key: "",
            render: (room)=>{
                return (
                    <div className={Styles["manager_room-btn"]}>
                        <Button type="ghost" onClick={()=>{""}}>Hủy</Button>
                        <Button type="ghost" onClick={()=>{""}}>Xem</Button>
                        <Button type="ghost" onClick={()=>{""}}>Sửa</Button>
                    </div>
                )
            }
        },

    ]

    // Function 
    const HandelPathOrder = ()=>{
        navigage("/order_room");
    }

    // console.log(loading);
    return ( 
        <div className={Styles['manager_room']}>
            <Loadding loading={loading} /> 
            <div className={Styles["manager_room-brew"]}>
                <Breadcrumb items={itemPath} separator=">>" />
            </div>
            <div className={Styles["manager_room-container"]}>
                <div>
                    <div className={Styles["manager_room-title"]}>
                        <h3>Danh sách phòng đặt</h3>
                        <Button icon={<PlusOutlined />} onClick={()=>(HandelPathOrder())} type="ghost">Đặt phòng họp</Button>
                    </div>
                    <div className={Styles["manager_room-filter"]}>
                        <div className={Styles["manager_room-search"]}>
                        </div>
                        <div className={Styles["manager_room-check"]}>
                            <DatePicker placeholder="" className={Styles["manager_room-date"]} />
                            <Switch
                                style={{backgroundColor: "35794A"}}
                                checked={""}
                                checkedChildren=""
                                unCheckedChildren=""
                                onChange={() => {
                                    // HandelChangeOptionRoom()
                                }}
                            />
                        </div>
                    </div>
                    <div className={Styles["manager_room-table"]}>
                        <Table 
                            columns={columns} 
                            dataSource={[{},{}]} 
                            // pagination={{ 
                            //     total: pageSelecter.total_items,
                            //     defaultPageSize: 10, 
                            //     showSizeChanger: true, 
                            //     pageSizeOptions: ['10', '20', '30']}} 
                            //     onChange={(pageOption)=>{
                            //         console.log(page);
                            //         setPage({...page,page_size:pageOption.pageSize, page: pageOption.current })
                            //     }}    
                            />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default RoomOrderList;