import React, {useEffect, useState} from 'react';
import {
    BlackBg,
    CenterBox, GoToRegisterButton,
    HeaderBox, LoginButton, LoginCancelButton, LoginCenterBox, LoginEmailInputBox, LoginModalBox, LoginPasswordInputBox,
    LogoBox,
    NavContents,
    NavContentsBox, NavProfileBox, NavProfileContents,
    NavSideCloseIconBox, NavSideContents,
    NavSideContentsBox, NavSideContentsSearchBox
} from "../styles/Header.style";
import "../styles/Global.scss"
import {Twirl as Hamburger} from 'hamburger-react'
import {IoClose} from "react-icons/io5";
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import {doLogin, doLogout, getUserData} from "../api/MemberApi";

type AppProps = {
    loginCheck : boolean;
}

function Header(props : AppProps) {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false)
    const [opacity, setOpacity] = useState("");
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })
    const [userData, setUserData] = useState<any>("")
    useEffect(()=>{
        let userdata  = sessionStorage.getItem("userdata") as string;
        setUserData(JSON.parse(userdata))
    },[])
    let formData = new FormData();
    const onChangeLoginData = (e: any) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value // 해당하는 필드에 대해 입력 값 업데이트
        });
    };
    const loginModalOpen = () => {
        setOpacity("opacity-1")
    }
    const login = () => {
        formData.append("username", loginData.username);
        formData.append("password", loginData.password);
        doLogin(formData).then((result) => {
            getUserData().then((result)=>{
                let copy = {...result}
                console.log(copy)
                sessionStorage.setItem("userdata",JSON.stringify(copy));
            }).catch((error)=>{
                console.log(error)
            })
            sessionStorage.getItem("userData")
            navigate("/")
            window.location.reload()
        }).catch((error) => {
            getUserData().then((result)=>{
                let copy = {...result}
                console.log(copy)
                sessionStorage.setItem("userdata",JSON.stringify(copy));
            }).catch((error)=>{
                console.log(error)
            })
            sessionStorage.getItem("userData")
            navigate("/")
            window.location.reload()
        })
    }
    const logout = () => {
        doLogout().then((result)=>{
            navigate("/")
            window.location.reload()
        }).catch((error)=>{
            console.log(`로그아웃하면서 에러남${error}`)
            getUserData().then((result)=>{
                let copy = {...result}
                console.log(copy)
                sessionStorage.setItem("userdata",JSON.stringify(copy));
            }).catch((error)=>{
                console.log(error)
            })
            sessionStorage.getItem("userData")
            navigate("/")
            window.location.reload()
        })
    }
    const loginModalClose = () => {
        setOpacity("")
    }
    const navOpen = () => {
        document.querySelector("main")?.classList.toggle("nav-active")
    }
    const navClose = () => {
        document.querySelector("main")?.classList.remove("nav-active")
        setOpen(false)
    }
    return (
        <main>
            <HeaderBox>
                <LogoBox>
                    LOGO
                </LogoBox>
                <NavContentsBox>
                    <Link to={"/problems/list/korean"}>
                        <NavContents>국어</NavContents>
                    </Link>
                    <Link to={"/problems/list/math"}>
                        <NavContents>수학</NavContents>
                    </Link>
                    <Link to={"/problems/list/english"}>
                        <NavContents>영어</NavContents>
                    </Link>
                    <Link to={"/problems/list/science"}>
                        <NavContents>과탐</NavContents>
                    </Link>
                    <Link to={"/problems/list/social"}>
                        <NavContents>사탐</NavContents>
                    </Link>
                </NavContentsBox>

                <NavProfileBox>
                    {
                        userData && userData.id !== "no-register-user" || "" ?
                            <>
                                <NavProfileContents style={{fontSize:"15px"}} onClick={()=>{navigate("/members/mypage")}}>
                                    {userData.displayName}
                                </NavProfileContents>
                                <NavProfileContents onClick={logout}>
                                    로그아웃
                                </NavProfileContents>
                            </>
                            :<NavProfileContents onClick={loginModalOpen}>
                                로그인
                            </NavProfileContents>
                    }
                    <NavProfileContents style={{marginTop: "2px", marginLeft: "-15px"}}>
                        <AiOutlineShoppingCart onClick={() => {
                            navigate("/cart")
                        }} style={{fontSize: "23px", marginTop: "0"}}/>
                    </NavProfileContents>
                    <div>
                    <span onClick={navOpen}>
                        <Hamburger size={23} toggled={isOpen} toggle={setOpen}/>
                    </span>
                    </div>
                </NavProfileBox>
                <BlackBg className={`opacity-0 ${opacity}`}>
                    <LoginModalBox>
                        <p style={{padding: "30px 0px 0px 30px"}}>로그인</p>
                        <IoClose onClick={loginModalClose} style={{
                            fontSize: "30px",
                            marginLeft: "290px",
                            position: "absolute",
                            top: "155px",
                            fontWeight: "bolder",
                            cursor: "pointer"
                        }}/>
                        <LoginCenterBox>
                            <LoginEmailInputBox name={"username"} type={"email"} onChange={onChangeLoginData}
                                                placeholder={"이메일"} required={true}/>
                            <LoginPasswordInputBox name={"password"} placeholder={"비밀번호"} type={"password"}
                                                   onChange={onChangeLoginData} required={true}/>
                        </LoginCenterBox>
                        <LoginButton onClick={login}>로그인</LoginButton>
                        <GoToRegisterButton onClick={() => {
                            window.location.replace("/members/register")
                        }}>회원가입</GoToRegisterButton>
                        <LoginCancelButton>게스트 로그인</LoginCancelButton>
                    </LoginModalBox>
                </BlackBg>
            </HeaderBox>

            <NavSideContentsBox>
                <NavSideCloseIconBox>
                    <IoClose onClick={navClose} style={{fontSize: "80px", fontWeight: "bolder", cursor: "pointer"}}/>
                </NavSideCloseIconBox>
                <NavSideContentsSearchBox>
                    <CenterBox>
                        <AiOutlineSearch
                            style={{fontSize: "27px", fontWeight: "bolder", marginTop: "10px", cursor: "pointer"}}/>
                    </CenterBox>
                </NavSideContentsSearchBox>
                <Link to={"/problems/list/korean"}>
                    <NavSideContents style={{marginTop: "5px"}}>국어</NavSideContents>
                </Link>
                <Link to={"/problems/list/math"}>
                    <NavSideContents>수학 </NavSideContents>
                </Link>
                <Link to={"/problems/list/english"}>
                    <NavSideContents>영어 </NavSideContents>
                </Link>
                <Link to={"/problems/list/science"}>
                    <NavSideContents>과학 탐구</NavSideContents>
                </Link>
                <Link to={"/problems/list/social"}>
                    <NavSideContents>사회 탐구</NavSideContents>
                </Link>
            </NavSideContentsBox>
        </main>
    );
}

export default Header;