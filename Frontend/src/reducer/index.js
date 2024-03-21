import {combineReducers} from "@reduxjs/toolkit"
import dataReducer from "../slice/dataSlice"

const rootReducer=combineReducers({
    data:dataReducer
})

export default rootReducer