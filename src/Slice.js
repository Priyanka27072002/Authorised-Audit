import { createSlice } from "@reduxjs/toolkit";
import Card from "./Component/card.json"
export const Slice=createSlice({
    name:"rsm",
    initialState:{
        arr:Card,
        count:0
    },
    reducers:{
        handlearr:(state,action)=>{
            state.arr.addcard=action.payload
        },
        handlecount:(state,action)=>{
            state.count=action.payload
        }
    }
})
export default Slice.reducer
export const {handlearr,handlecount}=Slice.actions 