import { createSlice } from "@reduxjs/toolkit"

const roomSlice = createSlice({
    name: "room",
    initialState: {
        listRoom: [],
        idRoom: {}
    },
    reducers: {
        // handel saga
        getListRoom: ()=>{},
        getRoomId: ()=>{},
        postRoom: ()=>{},
        deleteRoom:()=>{},
        putRoom: ()=>{},

        setListRoom: (state,action)=>{
            state.listRoom = action.payload
        },
        // get room id
        setRoomId: (state,action)=>{
            state.idRoom = action.payload;
        },
        // post room
        //delete room
        // put room 
    }
})

export const { getListRoom, setListRoom , getRoomId , setRoomId , postRoom, deleteRoom , putRoom} = roomSlice.actions
export default roomSlice.reducer