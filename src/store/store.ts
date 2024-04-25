import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {LoginCheckSlice} from "./slices/Member";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {Member} from "./slices/Member";


const reducers = combineReducers({
    member : Member.reducer
})

const persistConfig = { //redux persist 설정
    key : 'root',
    storage : storage,
    whitelist: ['member']
}

// const persistedReducer = persistReducer(persistConfig, Member.reducer); //로그인 정보 자동 저장

export default configureStore({
    reducer : {
        LoginCheckSlice : LoginCheckSlice.reducer,
    },
})

export let {changeLoginCheck} = LoginCheckSlice.actions
export let {changeMember} = Member.actions