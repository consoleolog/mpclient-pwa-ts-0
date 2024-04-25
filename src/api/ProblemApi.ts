import axios from "axios";

const URL = 'http://localhost:8080/mp/problems';

export const doRegister = async (problemData:any) => {
    const res = await axios.post(`http://localhost:8080/mp/problems/register`, problemData,{
        withCredentials:true,
    })
    return res.data;
}
export const doRegisterImg = async (formData: FormData) => {
    const res = await axios.post(`${URL}/register/answer`,formData,{
        headers : {'Content-Type': 'multipart/form-data'},
        withCredentials: true,
    })
    return res.data
}
export const getList = async (category:string) => {
    const res = await axios.get(`${URL}?category=${category}`,{
        withCredentials: true
    })
    return res.data
}
export const getOne = async (id:any) => {
    const res = await axios.get(`${URL}/detail/${id}`,{
        withCredentials: true
    })
    return res.data
}
