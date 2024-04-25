import {createSlice} from "@reduxjs/toolkit";

export const AlertSlice = createSlice({
    name: "AlertSlice",
    initialState: false,
    reducers : {
        changeAlert(state){
            return true;
        }
    }
})