import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MemberImpl} from "../../types/MemberImpl";
import {getUserData} from "../../api/MemberApi";

export const Member = createSlice({
    name: "MemberSlice",
    initialState: {
        id : 0,
        username : "",
        password : "",
        intro : "",
        displayName : "",
        educateState : ""
    },
    reducers : {
        changeMember(state:MemberImpl , action:PayloadAction<any>){
            getUserData().then((result)=>{
                return result
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
})

export const LoginCheckSlice = createSlice({
    name: "LoginCheckSlice",
    initialState: false,
    reducers : {
        changeLoginCheck(state) {
            return !state;
        }
    }
})

