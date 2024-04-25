import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import LoadingComponent from "../components/LoadingComponent";
import MemberRouter from "./MemberRouter";
import ProblemRouter from "./ProblemRouter";
import CartRouter from "./CartRouter";
import SalesRouter from "./SalesRouter";


const Home = lazy(()=>import("../views/HomePage"))
const RootRouter = createBrowserRouter([
    {
        path : "",
        element : <Suspense fallback={LoadingComponent()}><Home/></Suspense>
    },
    {
        path : "members",
        children : MemberRouter()
    },
    {
        path : "problems",
        children : ProblemRouter()
    },
    {
        path : "cart",
        children : CartRouter()
    },
    {
        path : "sales",
        children : SalesRouter()
    }
])
export default RootRouter;