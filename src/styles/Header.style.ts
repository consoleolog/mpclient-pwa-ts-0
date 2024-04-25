import styled from "styled-components";

export const HeaderBox = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    z-index: 10;
    position: relative;
    top: 0;
`
export const LogoBox = styled.div`
    width: 200px;
    height: 100%;
    margin-left: 10%;
    line-height: 70px;
`
export const NavContentsBox = styled.div`
    width: 500px;
    height: 100%;
    margin-left: 22%;
    @media screen and (max-width : 1200px) {
        margin-left: 20%;
    }
    @media screen and (max-width : 975px) {
        display: none;
    }
`
export const NavSideContentsBox = styled.div`
    width: 250px;
    position: fixed;
    top: 0;
    margin-left: 100%    ;
    height: 100%;
    border: solid 1px rgb(245,245,245);
    background-color: #fff;
    z-index: 1;
`
export const NavProfileBox = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    @media screen and (max-width : 975px) {
        margin-left: 40%;
    }
`
export const NavContents = styled.button`
    width: 60px;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 550;
    color: #424242;
    cursor: pointer;
    &:hover {
        border-bottom: solid 2px rgb(101,180,118);
        color: rgb(83, 149, 94); 
        font-size: 15px;
    }
`
export const NavSideCloseIconBox = styled.div`
    width: 100px;
    margin: 5px auto;
`
export const NavProfileContents = styled.button`
    width: 80px;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 550;
    color: #424242;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        color: rgb(83, 149, 94);
        font-size: 15px;
    }
`
export const NavSideContentsSearchBox = styled.div`
    width: 100%;
    background-color: rgb(235,235,235);
    border: solid 1px rgb(245,245,245);
    height: 50px;
`
export const NavSideContents = styled.div`
    width: 100%;
    border: solid 1px rgb(245,245,245);
    height: 50px;
    cursor: pointer;
    line-height: 50px;
    font-size: 20px;
    color: #424242;
    box-sizing: border-box;
    padding: 0 40px;
    font-weight: 500;
`
export const CenterBox = styled.div`
    width: 50px;
    margin: 0 auto;
`
export const BlackBg = styled.div`
    width : 100%;
    height : 100%;
    position : fixed;
    background : rgba(0,0,0,0.5);
    z-index : 1;
    padding: 30px;
`
export const LoginModalBox = styled.div`
    width: 350px;
    height: 250px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    margin: 100px auto;
    font-size: 20px;
    font-weight: 500;
    color: #424242;
`
export const LoginEmailInputBox = styled.input`
    height: 30px;
    border: none;
    width: 80%;
    padding: 15px 0 0 10px;
    margin-left: 20px ;
    border-bottom: 2px solid rgb(238,238,238);
    font-size: 16px;
    &:focus {
        outline: none;
        border-bottom: solid 2px rgb(138,198,205);
    }
`
export const LoginPasswordInputBox = styled.input`
    height: 30px;
    border: none;
    width: 80%;
    padding: 0 0 0 10px;
    margin-left: 20px ;
    margin-top: 20px;
    border-bottom: 2px solid rgb(238,238,238);
    font-size: 16px;
    &:focus {
        outline: none;
        border-bottom: solid 2px rgb(138,198,205);
    }
`
export const LoginButton = styled.button`
    width: 100%;
    height: 50px;
    margin-top: 40px;
    border: none;
    background-color: rgb(141,206,184);
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
`
export const GoToRegisterButton  = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    background-color: rgb(77,77,77);
`
export const LoginCenterBox = styled.div`
    margin: 0 auto;
    width: 330px;
`
export const LoginCancelButton = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    background-color: rgb(108, 93, 93);
`