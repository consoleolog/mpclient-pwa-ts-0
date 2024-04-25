import {lazy, Suspense} from "react";
import LoadingComponent from "../components/LoadingComponent";

const Cart = lazy(()=>import("../views/Cart/CartPage"))
const CartRouter = () => {
    return [
        {
            path : "",
            element : <Suspense fallback={LoadingComponent()}><Cart/></Suspense>
        }

    ]

}
export default CartRouter