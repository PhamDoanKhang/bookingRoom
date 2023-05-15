import { createSlice } from "@reduxjs/toolkit";
// Dành cho ban biện tập

const meetingInforSlice = createSlice({
    name: "mettingInfo",
    initialState: {
        meetingInforList : [],
        meetingInfo: {}
    },
    reducers: {
        getMeetingInforList: ()=>{},
        getMeetingInfor: ()=>{},
        postMeetingInfoList: ()=>{},
        deleteMeetingInfo: ()=>{},
        putMeetingInfo: ()=>{},


        setMeetingInForList: (state,action)=>{
            state.meetingInforList = action.payload;
        },
        setMeetingInfor: (state,action)=>{
            state.meetingInfo = action.payload;
        },
        setPostMeeetingInfor: (state,action)=>{
            state.meetingInforList = [...state.meetingInforList,action.payload];
        },
        setPutMeetingInfor: (state,action)=>{
            state.meetingInforList = state.meetingInforList.map((mettingInfo)=>{
                return mettingInfo.id === action.payload.id ? action.payload : mettingInfo;
            })
        },
        setDeleteMeetingInfor: (state,action)=>{
            state.meetingInforList = state.meetingInforList.filter((meetingInfo)=>{
                return meetingInfo.id !== action.payload;
            })
        }
    }
})


export const { getMeetingInforList,setMeetingInForList, postMeetingInfoList, deleteMeetingInfo, getMeetingInfor, putMeetingInfo, setMeetingInfor, setPostMeeetingInfor, setDeleteMeetingInfor, setPutMeetingInfor} = meetingInforSlice.actions;
export default meetingInforSlice.reducer;