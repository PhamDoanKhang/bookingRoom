import { createSlice } from "@reduxjs/toolkit";

const ParticipantsSlice = createSlice({
    name: "Participants",
    initialState: {
        Individual:[],
        Department:[]
    },
    reducers:{
        getIndividual:()=>{},
        getDepartment:()=>{},

        setDepartment:(state,action)=>{
            state.Department = action.payload;
        },
        setIndividual:(state,action)=>{
            state.Individual = action.payload;
        },
    }
})

export const { getDepartment, getIndividual, setDepartment , setIndividual } = ParticipantsSlice.actions;
export default ParticipantsSlice.reducer;