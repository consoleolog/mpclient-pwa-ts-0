import React, {ReactNode, useEffect} from 'react';
import Header from "../components/Header";
import {useQuery} from "react-query";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";
import {isLogin} from "../api/MemberApi";
import {changeLoginCheck} from "../store/store";

function Layout({ children }: { children: ReactNode }) {
    const dispatch = useDispatch();
    let loginCheck = useSelector((state:RootState)=>{return state.LoginCheckSlice})
    // useQuery('isLogin?',()=>{
    //     return axios.get("http://localhost:8080/mp/member/user-is-login",{
    //         withCredentials: true
    //     }).then((result)=>{
    //         console.log(result)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // })
    // useEffect(()=>{
    //     isLogin().then((result)=>{
    //             dispatch(changeLoginCheck())
    //             console.log(loginCheck)
    //     }).catch((error)=>{
    //         console.log(error)
    //         console.log(loginCheck)
    //     })
    // },[])
    // console.log(sessionStorage.getItem("persist:root"))
    return (
        <main>
            <Header loginCheck={loginCheck}/>
            <div>{children}</div>
        </main>
    );
}
export default Layout;