import axios from 'axios';
import {SalesImpl} from "./SalesImpl";

const URL = `http://localhost:8080/mp/sales`

export const doSales = async (salesData:SalesImpl) => {
    const res = await axios.post(`${URL}/register`, salesData)
    return res.data
}