import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadingSelecter, InfoSuggesSelecter , InfoSuggesListSelecter , listMeetingInfoSelecter, listMeetingRoomSelecter, memberSelecter } from "../../store/redux/selecters";
import { getRoomId, deleteRoom, postRoom , getListRoom , putRoom } from "../../store/redux/slices/roomSlice";
import { postMeetingRoom,putMeetingRoom, getMeetingRoomUser ,  } from "../../store/redux/slices/metingroomSlice";
import { SuccessNotification } from "../../utils/Notification";
import { getLoading } from "../../store/redux/slices/LoadingSlice";
// import Loading from "../../components/Loadding";
import { getMeetingInfor, putMeetingInfo } from "../../store/redux/slices/meetingInfoSlice"
import { getMemberID, getMemberList ,postMemberList, deleteMemberID, putMemberID } from "../../store/redux/slices/memberSlice";
import { getWeeklyScheduleList,postWeekluScheduleID,deleteWeekluScheduleID, getWeeklyScheduleId,putWeeklyScheduleID, setPostWeeklySchedu } from "../../store/redux/slices/weeklyScheduleSlice";
import { getMeetingInforList, postMeetingInfoList , setMeetingInfor,deleteMeetingInfo } from "../../store/redux/slices/meetingInfoSlice";
import { getInfoSuggesID, getInfoSuggesList , deleteInfoSuggesID , putInfoSuggesID , postInfoSuggesList } from "../../store/redux/slices/infoSuggestionSlice";

function RoomManager() {
    const dispatch = useDispatch();
    const HandelCLick = ()=>{
        
        // dispatch({type:  putMeetingInfo.type, data: {
        //     id: 3,
        //     profile_id: 10,
        //     information: "noi dung dung blue 213 1231 231 123123123123 123123123",
        //     meeting_room_id: 8,
        //     participants: "phong cntt1",
        //     quantity: 30,
        //     option: "[\n  {\n    \"Bánh\": true,\n    \"Nước\": true,\n    \"Khăn lạnh\": true\n  }\n]"
        //   }});
        // dispatch({type: putInfoSuggesID.type, data: {
        //     id: 10,
        //     profile_id: 10,
        //     information: "Doan Khang 10 10 2",
        //     end_time: "2023-05-15T09:35:55.022821",
        //     department_id: 7
        // }});

        dispatch({type: deleteInfoSuggesID.type, data: {id:9}});

    }
    // const listRoom = useSelector();
    const listRoom = useSelector(InfoSuggesListSelecter);
    // const InfoSugges = useSelector(InfoSuggesSelecter);
    // const listRoom = useSelector(listWeeklyScheduleSelecter);
    console.log(listRoom);
    // console.log(InfoSugges);
    useEffect(()=>{
        dispatch({type:  getInfoSuggesList.type});
    },[])

    return ( 
        <div className="RoomManager">
            {/* <Loading loading={loading} /> */}
            <button onClick={()=>HandelCLick()}>Call Api</button>
        </div>
     );
}

export default RoomManager;