import {lazy, Suspense} from "react";
import LoadingComponent from "../components/LoadingComponent";
import MypageProfileComponent from "../components/Member/Mypage/MypageProfileComponent";
import MypageSettingComponent from "../components/Member/Mypage/MypageSettingComponent";
import MypageMadePcomponent from "../components/Member/Mypage/MypageMadePcomponent";
import MypageBuyPcomponent from "../components/Member/Mypage/MypageBuyPcomponent";
import MypageProfileEditComponent from "../components/Member/Mypage/MypageProfileEditComponent";
import MypageSettingDeleteAccountComponent from "../components/Member/Mypage/MypageSettingDeleteAccountComponent";


const Register = lazy(()=>import("../views/Member/RegisterPage"))
const Mypage = lazy(()=>import("../views/Member/MypagePage"))
const MemberRouter = () => {
    return [
        {
            path: "register",
            element: <Suspense fallback={LoadingComponent()}><Register/></Suspense>
        },
        {
            path : "mypage",
            element: <Suspense fallback={LoadingComponent()}><Mypage/></Suspense>,
            children : MypageRouter()
        }
    ]
}
const MypageRouter = () => {
    return [
        {
            path : "",
            element : <Suspense fallback={LoadingComponent()}><MypageProfileComponent/></Suspense>
        },
        {
            path : "settings",
            element : <Suspense fallback={LoadingComponent()}><MypageSettingComponent/></Suspense>
        },
        {
            path : "made",
            element : <Suspense fallback={LoadingComponent()}><MypageMadePcomponent/></Suspense>
        },
        {
            path : "buy",
            element : <Suspense fallback={LoadingComponent()}><MypageBuyPcomponent/></Suspense>
        },
        {
            path : "edit",
            element : <Suspense fallback={LoadingComponent()}><MypageProfileEditComponent/></Suspense>
        },
        {
            path : "delete",
            element : <Suspense fallback={LoadingComponent()}><MypageSettingDeleteAccountComponent/></Suspense>
        }

    ]
}
export default MemberRouter;