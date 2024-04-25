import storage from "redux-persist/lib/storage";
import storageSession from 'redux-persist/lib/storage/session';
import {persistReducer} from "redux-persist";
import {Member} from "./slices/Member";
import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger";

const reducers = combineReducers({
    member : Member.reducer
})

const persistConfig = { //redux persist 설정
    key : 'root',
    storage : storageSession,
    whitelist: ['member']
}
const persistedReducer = persistReducer(persistConfig, reducers); //로그인 정보 자동 저장

export const memberPersist = configureStore({
    reducer : persistedReducer,
})
