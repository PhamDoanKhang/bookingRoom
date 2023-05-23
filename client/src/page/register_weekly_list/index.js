import React, { useEffect, useState } from "react";

import { useDispatch,useSelector } from "react-redux";
import { loadingSelecter, InfoSuggesSelecter , InfoSuggesListSelecter , listMeetingInfoSelecter, listMeetingRoomSelecter, memberSelecter } from "../../store/redux/selecters";
import { getRoomId, deleteRoom, postRoom , getListRoom , putRoom } from "../../store/redux/slices/roomSlice";
import { postMeetingRoom,putMeetingRoom, getMeetingRoomUser ,  } from "../../store/redux/slices/metingroomSlice";
import { SuccessNotification } from "../../utils/Notification";
import { getLoading } from "../../store/redux/slices/LoadingSlice";
import { EditOutlined } from "@ant-design/icons";
// import Loading from "../../components/Loadding";
import { getMeetingInfor, putMeetingInfo } from "../../store/redux/slices/meetingInfoSlice"
import { getMemberID, getMemberList ,postMemberList, deleteMemberID, putMemberID } from "../../store/redux/slices/memberSlice";
import { getWeeklyScheduleList,postWeekluScheduleID,deleteWeekluScheduleID, getWeeklyScheduleId,putWeeklyScheduleID, setPostWeeklySchedu } from "../../store/redux/slices/weeklyScheduleSlice";
import { getMeetingInforList, postMeetingInfoList , setMeetingInfor,deleteMeetingInfo } from "../../store/redux/slices/meetingInfoSlice";
import { getInfoSuggesID, getInfoSuggesList , deleteInfoSuggesID , putInfoSuggesID , postInfoSuggesList } from "../../store/redux/slices/infoSuggestionSlice";
import AddRoom from "../../components/AddRoom";
import PopupDetailRoom from "../../components/PopupDetailRoom";
import HiddenRoom from "../../components/HiddenRoom";

import Styles from "./register_weekly_list.module.css";

import { PlusOutlined } from "@ant-design/icons"
import { Button, Breadcrumb, Input, Checkbox, Table, DatePicker } from "antd";
import { useNavigate } from "react-router-dom";

function WeeklyCalendarRegisterList() {
    const itemPath = [
        {
            href: "",
            title: <span>Quản lý phòng họp</span>
        },
        {
            href: "",
            title: <span>Danh sách đăng ký trực của ban biên tập</span>
        },
    ]

    const navigate = useNavigate();


    const HandelPathContent = ()=>{
        navigate("/propose_list-content");
    }
    
    return ( 
        <div className={Styles['manager_room']}>
            <div className={Styles["manager_room-brew"]}>
                <Breadcrumb items={itemPath} />
            </div>
            <div className={Styles["manager_room-container"]}>
                <div>
                    <div className={Styles["manager_room-title"]}>
                        <h3>Danh sách phòng đăng lý lịch trực của ban biên tập</h3>
                        <div className={Styles["manager_room-check"]}>
                            <Checkbox>Tháng hiện tại</Checkbox>
                            <DatePicker placeholder="" className={Styles["manager_room-date"]} />
                        </div>
                    </div>
                   <div className={Styles["weekly_calendar"]}>
                   <div className={Styles["weekly_calender-after"]}>
                                <h3>DANH SÁCH TUẦN TRƯỚC</h3>
                                <table>
                                    <tr className={Styles["weekly_table-title"]}>
                                        <th>Tên</th>
                                        <th>Thứ 2</th>
                                        <th>Thứ 3</th>
                                        <th>Thứ 4</th>
                                        <th>Thứ 5</th>
                                        <th>Thứ 6</th>
                                        <th>Thứ 7</th>
                                        <th>Chủ nhật</th>
                                    </tr>
                                    <tr className={Styles["weekly_table-content"]}>
                                        <td>Đăng ký</td>
                                        <td className={Styles["weekly-center"]} ><div className={Styles["weekly-selected-option"]}><input type="checkbox" /></div></td>
                                        <td className={Styles["weekly-center"]} ><div className={Styles["weekly-selected-option"]}><input type="checkbox" /></div></td>
                                        <td className={Styles["weekly-center"]} ><div className={Styles["weekly-selected-option"]}><input type="checkbox" /></div></td>
                                        <td className={Styles["weekly-center"]} ><div className={Styles["weekly-selected-option"]}><input type="checkbox" /></div></td>
                                        <td className={Styles["weekly-center"]} ><div className={Styles["weekly-selected-option"]}><input type="checkbox" /></div></td>
                                        <td className={Styles["weekly-center"]} ><div className={Styles["weekly-selected-option"]}><input type="checkbox" /></div></td>
                                        <td className={Styles["weekly-center"]} ><div className={Styles["weekly-selected-option"]}><input type="checkbox" /></div></td>
                                        {/* <td className={Styles["weekly-center"]} ><div className={Styles["weekly-selected-option"]}><input type="checkbox" /></div></td> */}
                                        
                                    </tr>
                                    <tr className={Styles["weekly_table-content"]}>
                                        <td></td>
                                        <td><EditOutlined onClick={()=>HandelPathContent()} className={Styles["edit"]} /></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                   
                                </table>
                        </div>
                        <div className={Styles["weekly_calender-after"]}>
                                <h3>DANH SÁCH TUẦN TRƯỚC</h3>
                                <table>
                                    <tr className={Styles["weekly_table-title"]}>
                                        <th>Tên</th>
                                        <th>Thứ 2</th>
                                        <th>Thứ 3</th>
                                        <th>Thứ 4</th>
                                        <th>Thứ 5</th>
                                        <th>Thứ 6</th>
                                        <th>Thứ 7</th>
                                        <th>Chủ nhật</th>
                                    </tr>
                                    <tr className={Styles["weekly_table-content"]}>
                                        <td>Đăng ký</td>
                                        <td className={Styles["weekly-center"]} ><div className={Styles["weekly-selected"]}></div></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                        </div>
                        
                   </div>
                </div>
            </div>
        </div>
     );
}

export default WeeklyCalendarRegisterList;