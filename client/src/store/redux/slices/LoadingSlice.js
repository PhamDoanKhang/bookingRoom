import { createSlice } from "@reduxjs/toolkit"

const LoadingSlice = createSlice({
    name: "Loading",
    initialState: {
        toggleLoading: false,
    },
    reducers: {
        getLoading: ()=>{},
        setLoading: (state,action)=>{
            state.toggleLoading = action.payload
        }
    }
})

export const { getLoading , setLoading } = LoadingSlice.actions
export default LoadingSlice.reducer