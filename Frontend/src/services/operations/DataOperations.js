import  {toast} from "react-hot-toast"
import {apiConnector} from "../apiConnector"
import { dataEndPoints } from "../Apis"
import { afterDeleteData, afterEditData, setData, setFilterSearch, setLoading, updateData } from "../../slice/dataSlice"

export async function getCardData(dispatch){
    console.log("its here");
    dispatch(setLoading(true))
    const toastId=toast.loading("Loading...")
    try {
        const responce=await apiConnector("GET",dataEndPoints.GET_ALL_DATA)
        if(!responce.data.success){
            throw new Error("Couldn't fetched data!")
        }
        toast.success("Data fetched")
        dispatch(setData(responce.data.data))
        localStorage.setItem('CourtData', JSON.stringify(responce.data.data));

    } catch (error) {
        console.log(error);
        toast.error("Error while data fechting!")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
}

export async function createCardData(data,dispatch,navigate){
    const toastId=toast.loading("Loading...")
    try {
        const responce=await apiConnector("POST",dataEndPoints.CREATE_DATA_API,data)
        if(!responce.data.success){
            throw new Error("Data Creation Failed!")
        }
        toast.success("Data Created")
        console.log(responce);
        dispatch(updateData(responce.data.data))
        navigate("/")
    } catch (error) {
        console.log(error);
        toast.error("Data Creation Failed")
    }
    toast.dismiss(toastId)
    navigate("/")

}

export async function searchData(id){
    let result=null;
    try {
        const responce=await apiConnector("POST",dataEndPoints.SEARCH_DATA_API,{id})
        if(!responce.data.success){
            throw new Error("Data not found!")
        }
        result=responce.data.data
    } catch (error) {
        console.log(error);

    }
    return result
}


export async function deleteCardData(id,navigate,dispatch){
    const toastId=toast.loading("Loading...")
    try {
        const responce=await apiConnector("DELETE",dataEndPoints.DELETE_DATA_API,{id})
        if(!responce.data.success){
            throw new Error("Data deletion failed")
        }
        toast.success("Data Deleted")
        dispatch(afterDeleteData(id))
        navigate("/")
    } catch (error) {
        console.log(error)
    }
    toast.dismiss(toastId)
    navigate("/")
}



export async function editCardData(data,navigate,dispatch){
    const toastId=toast.loading("Loading...")
    console.log(data)
    try {
        const responce=await apiConnector("POST",dataEndPoints.EDIT_DATA_API,data)
        if(!responce.data.success){
            throw new Error("Failed while updating!")
        }
        toast.success("Updated")
        dispatch(afterEditData(responce.data.data))
        navigate("/")
    } catch (error) {
        console.log(error);
    }
    toast.dismiss(toastId)
    navigate("/")
}


export async function itemSearchApi(selected,searchValue,dispatch){
    const toastId=toast.loading("Loading...")
    let result=[]
    console.log(selected,searchValue);
    try {
        const responce=await apiConnector("POST",dataEndPoints.ITEAM_SEARCH_API,{selected,searchValue})
        if(!responce.data.success){
            throw new Error("No data found!")
        }
        console.log(responce.data.data);
        if(!responce.data.data.lenght===0){
            toast.error("No Data Found!")
        }
        toast.success("Data Found")
        dispatch(setFilterSearch(responce.data.data))
    } catch (error) {
        console.log(error);
        toast.error("Couldn't search data!")
    }
    toast.dismiss(toastId)
    return result
}