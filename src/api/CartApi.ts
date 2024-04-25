import axios from "axios";
import {CartImpl} from "../types/CartImpl";

const URL = "http://localhost:8080/mp/cart";

export const doRegister = async (cartData : object) => {
    const res = await axios.post(`${URL}/register`,cartData)
    return res.data
}
export const getCart = async (id:number)=>{
    const res = await axios.get(`${URL}/${id}`)
    return res.data
}
export const deleteCart = async (id:number) => {
    const res = await axios.delete(`${URL}/${id}`,{
        withCredentials: true
    })
    return res.data
}