import React, {lazy, Suspense} from "react";
import LoadingComponent from "../components/LoadingComponent";
import ListComponent from "../components/Problem/ListComponent";
import KoreanComponent from "../components/Problem/KoreanComponent";
import MathComponent from "../components/Problem/MathComponent";
import EnglishComponent from "../components/Problem/EnglishComponent";
import ScienceComponent from "../components/Problem/ScienceComponent";
import SocialComponent from "../components/Problem/SocialComponent";

const List = lazy(()=>import("../views/Problem/ListPage"))
const Write = lazy(()=>import("../views/Problem/WritePage"))
const Detail = lazy(()=>import("../views/Problem/DetailPage"))
const ProblemRouter = () => {
    return [
        {
            path:"write",
            element : <Suspense fallback={LoadingComponent()}><Write/></Suspense>
        },
        {
            path : `list`,
            element : <Suspense fallback={LoadingComponent()}><List/></Suspense>,
            children : ListRouter()
        },
        {
            path : "detail/:id",
            element : <Suspense fallback={LoadingComponent()}><Detail/></Suspense>,
        }
    ]
}
const ListRouter = () => {
    return [
        {
            path : "korean",
            element : <Suspense fallback={LoadingComponent()}><KoreanComponent/></Suspense>
        },
        {
            path : "math",
            element : <Suspense fallback={LoadingComponent()}><MathComponent/></Suspense>
        },
        {
            path : "english",
            element : <Suspense fallback={LoadingComponent()}><EnglishComponent/></Suspense>
        },
        {
            path : "science",
            element : <Suspense fallback={LoadingComponent()}><ScienceComponent/></Suspense>
        },
        {
            path : "social",
            element : <Suspense fallback={LoadingComponent()}><SocialComponent/></Suspense>
        }
    ]
}
export default ProblemRouter;