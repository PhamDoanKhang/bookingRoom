import { createSlice } from "@reduxjs/toolkit"

const roomSlice = createSlice({
    name: "room",
    initialState: {
        listRoom: [],
        idRoom: {},
        listRoomContainer: [],
        metaData: {}
    },
    reducers: {
        // handel saga
        getListRoom: ()=>{},
        getRoomList: ()=>{},
        getRoomListAll: ()=>{},
        getRoomId: ()=>{},
        postRoom: ()=>{},
        deleteRoom:()=>{},
        putRoom: ()=>{},

        setListRoom: (state,action)=>{
            state.listRoom = action.payload;
            state.listRoomContainer = action.payload;
        },

        getChangeOptionRoom: (state,action)=>{
            state.listRoom = state.listRoom.filter((rooms)=>{
                return rooms.status === 0;
            })
        },

        getNoChangeOptionRoom: (state)=>{
            state.listRoom = state.listRoomContainer;
        },

        setRoomId: (state,action)=>{
            state.idRoom = action.payload;
        },
        postListRoom: (state,action)=>{
            state.listRoom = [action.payload,...state.listRoom];
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

        },
        setMetaData: (state,action)=>{
            state.metaData = action.payload;
        }
       
    }
})

export const { getNoChangeOptionRoom ,getChangeOptionRoom ,getListRoom, getRoomList,  setListRoom , getRoomId , setRoomId , postRoom, deleteRoom , putRoom, postListRoom, deleteListRoom, updateListRoomID, setMetaData, getRoomListAll} = roomSlice.actions
export default roomSlice.reducer