import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadingSelecter, roomIdSelecer , listRoomSelecter } from "../../store/redux/selecters";
import { getRoomId, deleteRoom, postRoom , getListRoom , putRoom } from "../../store/redux/slices/roomSlice";
// import { postMeetingRoom,putMeetingRoom } from "../../store/redux/slices/metingroomSlice";
import { SuccessNotification } from "../../utils/Notification";
import { getLoading } from "../../store/redux/slices/LoadingSlice";
// import Loading from "../../components/Loadding";
// import { getWeeklyScheduleList,postWeekluScheduleID,deleteWeekluScheduleID, getWeeklyScheduleId,putWeeklyScheduleID } from "../../store/redux/slices/weeklyScheduleSlice";
// import { getMeetingInforList, postMeetingInfoList , putMeetingInfo,deleteMeetingInfo } from "../../store/redux/slices/meetingInfoSlice";

function RoomManager() {
    const dispatch = useDispatch();
    const HandelCLick = ()=>{
        dispatch({type: putRoom.type , data: { id : 7 , location: "KhangProReactJS", name: "AOO" }})
    }
    const listRoom = useSelector(listRoomSelecter);
    console.log(listRoom);
    useEffect(()=>{
        dispatch({type: getListRoom.type})
    },[])

    return ( 
        <div className="RoomManager">
            {/* <Loading loading={loading} /> */}
            <button onClick={()=>HandelCLick()}>Call Api</button>
        </div>
     );
}

export default RoomManager;