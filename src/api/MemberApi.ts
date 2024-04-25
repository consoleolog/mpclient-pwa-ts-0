import {MemberImpl} from "../types/MemberImpl";
import axios from "axios";
import {BasicAlertBox} from "../styles/Global.style";
import React from "react";

const URL = `http://localhost:8080/mp/members`

// export const doRegister = async (memberData:MemberImpl, passwordCheck : string) =>{
//     let e:any
//     if (memberData.username == null || memberData.username == ""){
//         e.preventDefault();
//         return <BasicAlertBox>이메일을 입력하세요</BasicAlertBox>
//     }else if (memberData.displayName == null || memberData.displayName == ""){
//         e.preventDefault();
//     } else if (memberData.intro == null || memberData.intro == ""){
//         e.preventDefault();
//     } else if (memberData.educateState == null || memberData.educateState == ""){
//         memberData.educateState = '초등학생'
//     } else if (memberData.password == null || memberData.password == ""){
//         e.preventDefault();
//     } else if (memberData.password != passwordCheck){
//         e.preventDefault();
//     } else {
//         const res = await axios.post(`${URL}/register`, memberData,{
//             withCredentials: true
//         })
//         return res.data
//     }
// }
export const doRegister = async (memberData: MemberImpl) => {
    const res = await axios.post(`${URL}/register`, memberData, {
        withCredentials: true
    })
    return res.data
}
export const doLogin = async (loginData:object) => {
    const res = await axios.post(`${URL}/login`,loginData,{
        withCredentials: true
    })
}
export const isLogin = async () => {
    const res = await axios.get(`${URL}/user-is-login`,{
        withCredentials: true
    })
    return res.data
}
export const doLogout = async () => {
    const res = await axios.get(`${URL}/logout`,{
        withCredentials: true
    })
}
export const getUserData = async () => {
    const res = await axios.get(`${URL}/user-detail-data`,{
        withCredentials: true
    })
    return res.data
}