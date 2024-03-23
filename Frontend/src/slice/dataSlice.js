import { createSlice } from "@reduxjs/toolkit";

const intitialState={
    loading:false,
    data:localStorage.getItem('CourtData')?JSON.parse(localStorage.getItem("CourtData")):[],
    fileterData:null,
    foundData:null,
    loading:false,
    admin:localStorage.getItem("admin")?(localStorage.getItem("admin")):false,
}

const dataSlice=createSlice({
    name:"data",
    initialState:intitialState,
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload
        },
        setAdmin:(state,action)=>{
            state.admin=action.payload
        },
        updateData:(state,action)=>{
            state.data.push(action.payload)
        },
        setLoading:(state,action)=>{
            state.loading=action.payload
        },
        setFilterSearch:(state,action)=>{
            state.fileterData=null
            state.fileterData=action.payload
        },
        clearFilterSearch:(state,action)=>{
            state.fileterData=null
        },
        findData:(state,action)=>{
            const id=action.payload
            state.foundData=null
            const selectData=state.data.find(item=>item._id==id)
            console.log(selectData);
            state.foundData=selectData?selectData:null
        },
        afterEditData:(state,action)=>{
            const card=action.payload
            const checkCard=state.data.find(val=>val._id==card._id)
            state.data=state.data.filter(item=>item._id!==card._id)
            state.data.push(checkCard&&card)
        },
        afterDeleteData:(state,action)=>{
            const id=action.payload
            state.data=state.data.filter(item=>item._id!==id)
        }
    }
})

export const {setData,updateData,setFilterSearch,findData,afterEditData,afterDeleteData,setLoading,setAdmin,clearFilterSearch}=dataSlice.actions;
export default dataSlice.reducer