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
            state.listRoom = action.payload;
        },
        setRoomId: (state,action)=>{
            state.idRoom = action.payload;
        },
        postListRoom: (state,action)=>{
            state.listRoom = [...state.listRoom,action.payload];
        },
        deleteListRoom: (state,action)=>{
            state.listRoom = state.listRoom.filter((rooms)=>{
                return rooms.id !== action.payload
            })
        },
        updateListRoomID: (state,action)=>{
            state.listRoom = state.listRoom.map((rooms)=>{
               return rooms.id === action.payload.id ? action.payload : rooms;
            })

        }
    }
})

export const { getListRoom, setListRoom , getRoomId , setRoomId , postRoom, deleteRoom , putRoom, postListRoom, deleteListRoom, updateListRoomID} = roomSlice.actions
export default roomSlice.reducer