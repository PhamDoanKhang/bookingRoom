import { createSlice } from "@reduxjs/toolkit"

const weeklyScheduleSlice = createSlice({
    name: "weeklySchedule",
    initialState: {
        weeklyScheduleList: [],
        weeklySchedule: {},
    },
    reducers:{
        getWeeklyScheduleList: ()=>{},
        postWeekluScheduleID: ()=>{},
        deleteWeekluScheduleID: ()=>{},
        getWeeklyScheduleId: ()=>{},
        putWeeklyScheduleID: ()=>{},


        setWeeklyScheduleList: (state,action)=>{
            state.weeklyScheduleList = action.payload;
        },
        setWeeklyScheduleID: (state,action)=>{
            state.weeklySchedule = action.payload
        },
        setPostWeeklySchedu: (state,action)=>{
            state.weeklyScheduleList = [...state.weeklyScheduleList, action.payload];
        },
        setDeleteWeeklySchedu: (state,action)=>{
            state.weeklyScheduleList = state.weeklyScheduleList.filter((weeklySchedue)=>{
                return weeklySchedue.id !== action.payload;
            })
        },
        setUpdateWeeklySchedu: (state,action)=>{
            state.weeklyScheduleList = state.weeklyScheduleList.map((weklySchedule)=>{
                return weklySchedule.id === action.payload.id ? action.payload : weklySchedule; 
            })
        }

    }
})

export const { getWeeklyScheduleList , setWeeklyScheduleList, postWeekluScheduleID, deleteWeekluScheduleID, getWeeklyScheduleId, setWeeklyScheduleID, putWeeklyScheduleID, setPostWeeklySchedu, setDeleteWeeklySchedu, setUpdateWeeklySchedu} = weeklyScheduleSlice.actions;
export default weeklyScheduleSlice.reducer