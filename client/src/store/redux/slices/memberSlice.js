import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
    name: "member",
    initialState: {
        memberList: [],
        member: {}
    },
    reducers: {
        getMemberList:()=>{},
        postMemberList:()=>{},
        deleteMemberID:()=>{},
        getMemberID:()=>{},
        putMemberID:()=>{},



        setMemberList:(state,action)=>{
            state.memberList = action.payload;
        },
        setMember: (state,action)=>{
            state.member = action.payload;
        },
        setPostMember: (state,action)=>{
            state.memberList = [...state.memberList,action.payload];
        },
        setDeleteMember: (state,action)=>{
            state.memberList = state.memberList.filter((member)=>{
                return member.id !== action.payload;
            })
        },
        setPutMember: (state,action)=>{
            state.memberList = state.memberList.map((member)=>{
                return member.id === action.payload.id ? action.payload : member;
            })
        }

    }
})

export const { getMemberList, setMemberList, postMemberList, deleteMemberID, getMemberID, putMemberID, setMember, setPostMember, setDeleteMember, setPutMember} = memberSlice.actions;
export default memberSlice.reducer;