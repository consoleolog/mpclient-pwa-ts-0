import axios from "axios";

const URL = `http://localhost:8080/mp/comments`

export const register = async (commentData : object) => {
    const res = await axios.post(`${URL}/register`, commentData,{
        withCredentials: true
    })
    return res.data
}
export const getList = async (id:number) => {
    const res = await axios.get(`${URL}/${id}`,{
        withCredentials: true
    })
    return res.data
}