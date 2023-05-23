import Styles from "./propose_list.module.css";
import React from "react";

import { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons"
import { Button, Breadcrumb, Input, Switch, Table, DatePicker } from "antd";
import {  InfoSuggesListSelecter, InfoSuggesMetaDataSelecter ,loadingSelecter,  } from "../../store/redux/selecters";
import { useDispatch, useSelector} from "react-redux";
import PopupPropose from "../../components/PopupPropose";
import Loadding from "../../components/Loadding";
import { getInfoSuggesList } from "../../store/redux/slices/infoSuggestionSlice" 



function ProposeList() {
    const [showPopopuPropose,setShowPopupPropose] = useState(false);
    const [page,setPage] = useState({page_size: 10 , page: 1});

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type: getInfoSuggesList.type, data:{ page_size: page.page_size , page : page.page, sort_by: "1", order: "desc" }});
    },[])


    const loading = useSelector(loadingSelecter);
    const proposeList = useSelector(InfoSuggesListSelecter);
    const metaData = useSelector(InfoSuggesMetaDataSelecter);

    console.log(proposeList);

    const itemPath = [
        {
            href: "",
            title: <span>Quản lý phòng họp</span>
        },
        {
            href: "",
            title: <span className={Styles["room-title-color"]}>Danh sách đề xuất nội dung</span>
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
            title: <span className={Styles["manager_room-title1"]}>Người đề xuất</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span className={Styles["manager_room-nd1"]}>{room.profile_id}</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Thời gian</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span className={Styles["manager_room-nd1"]}>{room.end_time}</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Nội dung đề xuất</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>{room.information}</span>
        },
        {
            title: <span className={Styles["manager_room-title1"]}>Thành phần</span>,
            dataIndex: "",
            key: "",
            render: (room)=><span>{room.department_id}</span>
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
   const HandelAddPropose = ()=>{
        setShowPopupPropose(true)
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
                        <h3>Danh sách đề xuất nội dung</h3>
                        <Button icon={<PlusOutlined />} onClick={()=>(HandelAddPropose())} type="ghost">Thêm đề xuất</Button>
                        {showPopopuPropose && <PopupPropose setShowPopupPropose={setShowPopupPropose} />}
                    </div>
                   
                    <div className={Styles["manager_room-table"]}>
                        <Table 
                            columns={columns} 
                            dataSource={proposeList} 
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

export default ProposeList;