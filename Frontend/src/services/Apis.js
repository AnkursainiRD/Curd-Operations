const BASE_URL=import.meta.env.VITE_BASE_URL

export const dataEndPoints={
    GET_ALL_DATA: BASE_URL +"/getAllData",
    CREATE_DATA_API: BASE_URL +"/createData",
    EDIT_DATA_API: BASE_URL +"/editData",
    DELETE_DATA_API: BASE_URL +"/deleteData",
    SEARCH_DATA_API: BASE_URL +"/searchData",
    ITEAM_SEARCH_API: BASE_URL +"/itemSearchQuery",
    LOGIN_ADMIN_API: BASE_URL +"/loginUser"
}