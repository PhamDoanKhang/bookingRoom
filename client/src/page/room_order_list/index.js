import Styles from "./room_order_list.module.css";
import React from "react";
import Loading from "../../components/Loadding"
import PopupDetailRoom from "../../components/PopupDetailRoom";

import { useEffect, useState } from "react";
import { Button, Breadcrumb, Input, Checkbox, Table, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getMeetingRoomUser, putMeetingRoom } from "../../store/redux/slices/metingroomSlice"; 
import { getLoading } from "../../store/redux/slices/LoadingSlice";
import { listMeetingRoomSelecter, loadingSelecter, meetingMetaSelecter } from "../../store/redux/selecters";


function RoomOrder() {
    // useState 
    const [showDetailOrderRoom,setShowDeatailOrderRoom] = useState(false);
    const [DetaiOrderRoom,setDetailOrderRoom] = useState({});
    const [page,setPage] = useState({page_size: 10 , page: 1});
    // useEffect
    useEffect(()=>{
        dispatch({type: getMeetingRoomUser.type, data:{ page_size: page.page_size , page : page.page, sort_by: "1", order: "desc" } });
        dispatch({type: getLoading.type});
    },[page])
    
    // useSelecter
    const listMeeting = useSelector(listMeetingRoomSelecter);
    const pageMeta = useSelector(meetingMetaSelecter);
    const loading = useSelector(loadingSelecter)

    // useDispath 
    const dispatch = useDispatch();

    // Function 
    const HandelDisplayInfoRoomOrder = (roomOrder)=>{
        setDetailOrderRoom(roomOrder);
        setShowDeatailOrderRoom(true);
    }

    const HandelUpdateStatusMeetingRoom = (meeting)=>{
        dispatch({type: putMeetingRoom.type, data: {...meeting, status: 1 , option : JSON.stringify(meeting.option)} });
        dispatch({type: getLoading.type});
    }
    const HandelUpdateStatusMeetingRoomClear = (meeting)=>{
        dispatch({type: putMeetingRoom.type, data: {...meeting, status: 0 , option : JSON.stringify(meeting.option)} });
        dispatch({type: getLoading.type});
    }


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
            render: (text)=><span className={Styles["manager_room_nd1"]}>1</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Người đặt</span>,
            dataIndex: "",
            key: "",
            render: (text)=><span className={Styles["manager_room_nd1"]}>Nguyễn Văn A</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Thời gian họp</span>,
            dataIndex: "",
            key: "",
            render: (meeting)=><span className={Styles["manager_room_nd1"]}>{meeting.meeting_time} {meeting.meeting_date}</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Trạng thái</span>,
            dataIndex: "",
            key: "",
            render: (meeting)=><span className={Styles["manager_room_nd1"]}>{meeting.status === 0 ? <span style={{color:"red",fontSize:"12px"}} >Chưa duyệt</span> : <span style={{color:"green",fontSize:"12px"}}>Đã duyệt</span> } </span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Thành phần</span>,
            dataIndex: "",
            key: "",
            render: (meeting)=><span className={Styles["manager_room_nd1"]}>{meeting.participants}</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Nội dung</span>,
            dataIndex: "",
            key: "",
            render: (meeting)=><span className={Styles["manager_room_nd1"]}>{meeting.information}</span>
        },
        {
            title: <span className={Styles["manager_room-title"]}></span>,
            dataIndex: "",
            key: "",
            render: (meeting)=>{
                return (
                    <div className={Styles["manager_room-btn"]}>
                        <Button type="ghost" onClick={()=>{HandelDisplayInfoRoomOrder(meeting)}}>Xem</Button>
                        {meeting.status === 0 ?
                            <Button type="ghost" onClick={()=>{HandelUpdateStatusMeetingRoom(meeting)}} >Duyệt</Button>
                            :
                            <Button type="ghost" onClick={()=>{HandelUpdateStatusMeetingRoomClear(meeting)}} >Hủy</Button>   
                        }
                    </div>
                )
            }
        },

    ]

    // const data = [{},{},{},{},{},{},{},{},{},{},{}]
    
    return ( 
        <div className={Styles['manager_room']}>
            <div className={Styles["manager_room-brew"]}>
                <Loading loading={loading} />
                <Breadcrumb items={itemPath} />
            </div>
            <div className={Styles["manager_room-container"]}>
                <div>
                    {showDetailOrderRoom && <PopupDetailRoom setShowDeatailOrderRoom={setShowDeatailOrderRoom} DetaiOrderRoom={DetaiOrderRoom} />}
                    <div className={Styles["manager_room-title"]}>
                        <h3>Danh sách phòng đặt</h3>
                    </div>
                    <div className={Styles["manager_room-filter"]}>
                        <div className={Styles["manager_room-search"]}>
                            <Input  placeholder="Tìm kiếm" />
                            <Button type="ghost">Tìm</Button>
                        </div>
                        <div className={Styles["manager_room-check"]}>
                            <Checkbox>Ngày hôm nay</Checkbox>
                            <DatePicker placeholder="" className={Styles["manager_room-date"]} />
                        </div>
                    </div>
                    <div className={Styles["manager_room-table"]}>
                        <Table 
                            columns={columns} 
                            dataSource={listMeeting} 
                            pagination={{ 
                                total: pageMeta.total_items,
                                defaultPageSize: 1, 
                                showSizeChanger: true, 
                                pageSizeOptions: ['10', '20', '30']}} 
                                onChange={(pageOption)=>{
                                    setPage({...page,page_size:pageOption.pageSize, page: pageOption.current })
                        }}   
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default RoomOrder;