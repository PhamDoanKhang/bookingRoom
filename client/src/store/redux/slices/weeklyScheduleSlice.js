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
        


    }
})

export const { getWeeklyScheduleList , setWeeklyScheduleList, postWeekluScheduleID, deleteWeekluScheduleID, getWeeklyScheduleId, setWeeklyScheduleID, putWeeklyScheduleID} = weeklyScheduleSlice.actions;
export default weeklyScheduleSlice.reducer