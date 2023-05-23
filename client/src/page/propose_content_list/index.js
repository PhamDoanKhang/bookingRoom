import Styles from "./proposr_content_list.module.css";
import React from "react";

import { useState, useEffect } from "react";
import { PlusOutlined, LeftOutlined } from "@ant-design/icons"
import { Button, Breadcrumb, Input, Switch, Table, DatePicker } from "antd";
import { listMeetingRoomSelecter, loadingSelecter,  } from "../../store/redux/selecters";
import { useDispatch, useSelector} from "react-redux";
// import { getListRoom, getNoChangeOptionRoom, getChangeOptionRoom } from "../../store/redux/slices/roomSlice";

import Loadding from "../../components/Loadding";




function ProposeContentList() {
    // useDispath
    const dispatch = useDispatch()

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
            title: <span>Quản lý phòng họp</span>
        },
        {
            href: "",
            title: <span className={Styles["room-title-color"]}>Danh sách đăng ký lịch tuần</span>
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
            title: <span className={Styles["manager_room-title1"]}>Tên phòng</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span className={Styles["manager_room-nd1"]}>A30</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Địa điểm</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>Báo tuổi trẻ</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Thời gian họp</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>19:00 19/09/2000</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Nội dung</span>,
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
            title: <span className={Styles["manager_room-title"]}></span>,
            dataIndex: "",
            key: "",
            render: (room)=>{
                return (
                    <div className={Styles["manager_room-btn"]}>
                        <Button type="ghost" onClick={()=>{""}}>Xóa</Button>
                        <Button type="ghost" onClick={()=>{""}}>Xem</Button>
                        <Button type="ghost" onClick={()=>{""}}>Sửa</Button>
                    </div>
                )
            }
        },

    ]

    // Function 
   

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
                        <h3>Danh sách nội dung trực thứ 2</h3>
                        <Button icon={<LeftOutlined />} onClick={()=>("")} type="ghost">Trở về</Button>
                    </div>
                    <div className={Styles["manager_room-filter"]}>
                        <div className={Styles["manager_room-search"]}>
                        </div>
                        <div className={Styles["manager_room-check"]}>
                            <Button icon={<PlusOutlined />}  onClick={()=>("")} type="ghost">Thêm nội dung</Button>
                        </div>
                    </div>
                    <div className={Styles["manager_room-table"]}>
                        <h3>Danh sách đề xuất nội dung trực</h3>
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

export default ProposeContentList;