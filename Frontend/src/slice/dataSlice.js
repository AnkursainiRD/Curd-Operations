import { createSlice } from "@reduxjs/toolkit";

const intitialState={
    loading:false,
    data:[],
    fileterData:[]
}

const dataSlice=createSlice({
    name:"data",
    initialState:intitialState,
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload
        },
        updateData:(state,action)=>{
            state.data=[...setData.data,action.payload]
        },
        setFilterSearch:(state,action)=>{
            state.fileterData=[...action.payload]
        }
    }
})

export const {setData,updateData,setFilterSearch}=dataSlice.actions;
export default dataSlice.reducer