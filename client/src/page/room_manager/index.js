import Styles from "./room_manager.module.css";
import React from "react";

import { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons"
import { Button, Breadcrumb, Input, Switch, Table } from "antd";
import { listRoomSelecter, loadingSelecter, roomMetadataSelecer } from "../../store/redux/selecters";
import { useDispatch, useSelector} from "react-redux";
import { getListRoom, getNoChangeOptionRoom, getChangeOptionRoom } from "../../store/redux/slices/roomSlice";
import { getLoading } from "../../store/redux/slices/LoadingSlice";

import Loadding from "../../components/Loadding";
import AddRoom from "../../components/AddRoom";
import EditRoom from "../../components/EditRoom";
import HiddenRoom from "../../components/HiddenRoom";



function RoomManager() {
    // UseState 
    const [showEditRoom,setShowEditRoom] = useState(false);
    const [showAddRoom,setShowAddRoom] = useState(false);
    const [showDeleteRoom,setShowDeleteRoom] = useState(false);
    const [dataEdit,setDataEdit] = useState({});
    const [dataDelete,setDataDelete] = useState({});
    const [showOptionRoom,setShowOptionRoom] = useState(false);
    const [page,setPage] = useState({page_size: 10 , page: 1});
    // useDispath
    const dispatch = useDispatch()

    // useEffect
    useEffect(()=>{
        dispatch({type: getListRoom.type, data:{ page_size: page.page_size , page : page.page, sort_by: "1", order: "desc" }});
        dispatch({type: getLoading.type });
    },[page])

    useEffect(()=>{
        if(showOptionRoom){
            dispatch({type: getChangeOptionRoom.type});
        }else{
            dispatch({type: getNoChangeOptionRoom.type});
        }
    },[showOptionRoom])


    // UseSelecter 
    const pageSelecter = useSelector(roomMetadataSelecer);
    const loading = useSelector(loadingSelecter);
    const listRoom = useSelector(listRoomSelecter);
    console.log(page);
    // Use Dispatch


    //function
    const editRoom = (room)=>{
        setShowEditRoom(true);
        setDataEdit(room)
    }

    const deleteRoom = (room)=>{
        if(room.status === 0){
            setDataDelete({...room, status: 1});
            setShowDeleteRoom(true);
        }else{
            setDataDelete({...room, status: 0});
            setShowDeleteRoom(true);
        }
    }
 
    const HandelChangeOptionRoom = ()=>{
        setShowOptionRoom(!showOptionRoom);
    }

    const itemPath = [
        {
            href: "",
            title: <span>Quản lý phòng họp</span>
        },
        {
            href: "",
            title: <span className={Styles["room-title-color"]}>Danh sách phòng họp</span>
        },
    ]

    const columns = [
        {
            title: <span className={Styles["manager_room-title1"]}>STT</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>{""}</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Địa điểm</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span className={Styles["manager_room-nd1"]}>{room.location}</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Tên phòng</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>{room.name}</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Trạng thái</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>{room.status === 0 ? <span style={{color:"green"}}>Mở</span> : <span style={{"color":"red"}}>Đóng</span> }</span>
        },
        {
            title: <span className={Styles["manager_room-title"]}></span>,
            dataIndex: "",
            key: "",
            render: (room)=>{
                return (
                    <div className={Styles["manager_room-btn"]}>
                        <Button type="ghost" onClick={()=>{editRoom(room)}}>Chỉnh sửa</Button>
                        <Button type="ghost" onClick={()=>{deleteRoom(room)}}>{room.status === 0 ? "Đóng" : "Mở"}</Button>
                    </div>
                )
            }
        },

    ]

    // Function 
    const HandelShowPopupAddRoom = ()=>{
        setShowAddRoom(true)
    }

    console.log(loading);
    return ( 
        <div className={Styles['manager_room']}>
            <Loadding loading={loading} /> 
            <div className={Styles["manager_room-brew"]}>
                <Breadcrumb items={itemPath} separator=">>" />
            </div>
            <div className={Styles["manager_room-container"]}>
                <div>
                    <div className={Styles["manager_room-title"]}>
                        <h3>Danh sách phòng họp</h3>
                        <Button icon={<PlusOutlined />} onClick={()=>HandelShowPopupAddRoom()} type="ghost">Thêm phòng họp</Button>
                        { showAddRoom && <AddRoom setShowAddRoom={setShowAddRoom} />}
                        { showEditRoom && <EditRoom  data={dataEdit} setShowEditRoom={setShowEditRoom}/> }
                        { showDeleteRoom && <HiddenRoom data={dataDelete} setShowDeleteRoom={setShowDeleteRoom} />}
                    </div>
                    <div className={Styles["manager_room-filter"]}>
                        <div className={Styles["manager_room-search"]}>
                            <Input  placeholder="Tìm kiếm" />
                            <Button type="ghost">Tìm</Button>
                        </div>
                        <div className={Styles["manager_room-check"]}>
                        <Switch
                            style={{backgroundColor: "35794A"}}
                            checked={showOptionRoom}
                            checkedChildren=""
                            unCheckedChildren=""
                            onChange={() => {
                                HandelChangeOptionRoom()
                            }}
                        />
                        </div>
                    </div>
                    <div className={Styles["manager_room-table"]}>
                        <Table 
                            columns={columns} 
                            dataSource={listRoom} 
                            pagination={{ 
                                total: pageSelecter.total_items,
                                defaultPageSize: 10, 
                                showSizeChanger: true, 
                                pageSizeOptions: ['10', '20', '30']}} 
                                onChange={(pageOption)=>{
                                    console.log(page);
                                    setPage({...page,page_size:pageOption.pageSize, page: pageOption.current })
                                }}    
                            />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default RoomManager;