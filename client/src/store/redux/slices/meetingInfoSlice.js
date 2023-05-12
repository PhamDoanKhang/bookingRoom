import { createSlice } from "@reduxjs/toolkit";
// Dành cho ban biện tập

const meetingInforSlice = createSlice({
    name: "mettingInfo",
    initialState: {
        meetingInforList : [],
    },
    reducers: {
        getMeetingInforList: ()=>{},
        getMeetingInfor: ()=>{},
        postMeetingInfoList: ()=>{},
        deleteMeetingInfo: ()=>{},
        putMeetingInfo: ()=>{},


        setMeetingInForList: (state,action)=>{},
    }
})


export const { getMeetingInforList,setMeetingInForList, postMeetingInfoList, deleteMeetingInfo, getMeetingInfor, putMeetingInfo } = meetingInforSlice.actions;
export default meetingInforSlice.reducer;