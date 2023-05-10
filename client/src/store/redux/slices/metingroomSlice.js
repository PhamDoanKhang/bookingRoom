import { createSlice } from "@reduxjs/toolkit"

const meetingroomSlice = createSlice({
    name: "meetingroom",
    initialState: {
        listMeetingRoom: []
    },
    reducers: {
        getMeetingRoomUser:()=>{},
        setMeetingRoomUser:(state,action)=>{
            state.listMeetingRoom = action.payload
        },

        getMeetingRoomIDUser:()=>{},
        deleteMeetingRoom: ()=>{},
        postMeetingRoom: ()=>{},
        putMeetingRoom:()=>{},
    }
    
})

export const { getMeetingRoomUser,setMeetingRoomUser, deleteMeetingRoom, postMeetingRoom, getMeetingRoomIDUser, putMeetingRoom} = meetingroomSlice.actions
export default meetingroomSlice.reducer