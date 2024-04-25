import {lazy, Suspense} from "react";
import LoadingComponent from "../components/LoadingComponent";

const Sales = lazy(()=>import("../views/Sales/SalesPage"))
const SalesRouter = () => {
    return [
        {
            path : "",
            element : <Suspense fallback={LoadingComponent()}><Sales/></Suspense>
        }
    ]
}
export default SalesRouter