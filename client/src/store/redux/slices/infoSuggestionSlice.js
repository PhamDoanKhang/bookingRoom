import { createSlice } from "@reduxjs/toolkit";

const infoSuggestionSlice = createSlice({
    name: "infoSuggestion",
    initialState: {
        infoSuggestionList: [],
        infoSuggestion: {},
        metaData: {}
    },
    reducers: {
        getInfoSuggesList:()=>{},
        postInfoSuggesList:()=>{},
        getInfoSuggesID:()=>{},
        deleteInfoSuggesID:()=>{},
        putInfoSuggesID:()=>{},

        setMetaData: (state,action)=>{
            state.metaData = action.payload;
        },
        setInforSuggesList:(state,action)=>{
            state.infoSuggestionList = action.payload;
        },
        setInforSugges: (state,action)=>{
            state.infoSuggestion = action.payload;
        },
        setDeleteInforSugges: (state,action)=>{
            state.infoSuggestionList = state.infoSuggestionList.filter((infoSugges)=>{
                return infoSugges.id !== action.payload; 
            })   
        },
        setPostInforSugges: (state,action)=>{
            state.infoSuggestionList = [...state.infoSuggestionList,action.payload];
        },
        setPutInforSugges: (state,action)=>{
            state.infoSuggestionList = state.infoSuggestionList.map((infoSugges)=>{
                return infoSugges.id === action.payload.id ? action.payload : infoSugges;
            })
        }
    }
})


export const { getInfoSuggesID, postInfoSuggesList, setMetaData,getInfoSuggesList, deleteInfoSuggesID, putInfoSuggesID, setInforSuggesList, setInforSugges, setDeleteInforSugges, setPostInforSugges, setPutInforSugges} = infoSuggestionSlice.actions;
export default infoSuggestionSlice.reducer;