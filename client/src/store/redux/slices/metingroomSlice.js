import { createSlice } from "@reduxjs/toolkit"

const meetingroomSlice = createSlice({
    name: "meetingroom",
    initialState: {
        listMeetingRoom: [],
        mettingRoomID:{}
    },
    reducers: {
        getMeetingRoomUser:()=>{},
        getMeetingRoomIDUser:()=>{},
        deleteMeetingRoom: ()=>{},
        postMeetingRoom: ()=>{},
        putMeetingRoom:()=>{},

        setMeetingRoomUser:(state,action)=>{
            state.listMeetingRoom = action.payload;
        },
        setMeetingRoomIDUser:(state,action)=>{
            state.mettingRoomID = action.payload;
        },
        setDeleteMeetingRoom:(state,action)=>{
            state.listMeetingRoom = state.listMeetingRoom.filter((meetingRoom)=>{
                return meetingRoom.id !== action.payload;
            });
        },
        setPostMeetingRoom:(state,action)=>{
            state.listMeetingRoom = [...state.listMeetingRoom, action.payload];
        },
        setPutMeetingRoom:(state,action)=>{
            state.listMeetingRoom = state.listMeetingRoom.map((meetingroom)=>{
                return meetingroom.id == action.payload.id ? action.payload : meetingroom;
            })
        }
    }
    
})

export const { getMeetingRoomUser,setMeetingRoomUser, deleteMeetingRoom, postMeetingRoom, getMeetingRoomIDUser, putMeetingRoom, setMeetingRoomIDUser, setDeleteMeetingRoom, setPostMeetingRoom, setPutMeetingRoom} = meetingroomSlice.actions
export default meetingroomSlice.reducer