import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadingSelecter, roomIdSelecer } from "../../store/redux/selecters"
import { getRoomId,deleteRoom , getListRoom , putRoom } from "../../store/redux/slices/roomSlice";
import { postMeetingRoom,putMeetingRoom } from "../../store/redux/slices/metingroomSlice"
import { SuccessNotification } from "../../utils/Notification";
import { getLoading } from "../../store/redux/slices/LoadingSlice";
import Loading from "../../components/Loadding"
function RoomManager() {
    const dispatch = useDispatch();
    const loading = useSelector(loadingSelecter)
    const listroom = useSelector(roomIdSelecer)
    // console.log(listroom);
    const HandelCLick = ()=>{
        dispatch({
            type: getRoomId.type,
            data: { id: 1 }
        })
        dispatch({ type: getLoading.type})
    }
    
    useEffect(()=>{
        // dispatch({type: getListRoom.type,})
    },[])

    return ( 
        <div className="RoomManager">
            <Loading loading={loading} />
            <button onClick={()=>HandelCLick()}>Call Api</button>
        </div>
     );
}

export default RoomManager;