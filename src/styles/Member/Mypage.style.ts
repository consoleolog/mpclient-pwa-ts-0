import styled from "styled-components";

export const MypageProfileBox = styled.div`
    width: 99%;
    height: 350px;
    background-color: rgb(250,250,250);
    margin: 7px auto;
    padding: 10px;
    @media screen and (max-width : 975px) {
        height: 550px;
        width: 98%;
    }
    @media screen and (max-width : 725px) {
        height: 350px;
        width: 97%;
    }
`
export const ProfileImgBox = styled.div`
    margin: 30px auto;
    width: 15%;
    min-width: 200px;
    max-width: 200px;
    @media screen and (max-width : 975px) {
        max-width: 550px;
        width: 40%;
    }
    @media screen and (max-width : 725px) {
        width: 15%;
    }
`
export const ProfileImg = styled.img`
    width: 100%;
`
export const ProfileName = styled.p`
    font-size: 25px;
    text-align: center;
    padding: 20px 0;
    font-weight: bold;
`
export const ProfileTapBox = styled.div`
    width: 100%;
    height: 50px;
    border: solid 1px rgb(235,235,235);
`
export const ProfileTapContentsBox = styled.div`
    width: 600px;
    height: 100%;
    margin-left: 5%;
    display: flex;
`
export const ProfileTapContents = styled.button`
    width: 90px;
    border: none;
    background-color: transparent;
    padding: 0px 10px;
    height: 100%;
    text-align: center;
    line-height: 50px;
    color: #424242;
    font-weight: 550;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        color: gray;
    }
`
export const SettingTapBox = styled.div`
    margin: 5px auto;
    height: 70px;
    background-color: rgb(250,250,250);
    max-width: 2000px;
    width: 1200px;
    border-radius: 5px;
    border: solid 1px rgb(235,235,235);
    @media screen and (max-width : 1200px) {
        width: 1000px;
    }
    @media screen and (max-width : 975px) {
        width: 700px;
    }
    @media screen and (max-width : 725px) {
        width: 600px;
    }
`
export const SettingTapContentsBox = styled.div`
    width: 400px;
    height: 100%;
    margin-left: 2%;
    
`
export const SettingTapContents = styled.button`
    width: 90px;
    height: 85%;
    margin-top: 5px;
    border: none;
    background-color: transparent;
    cursor : pointer;
    color: #424242;
    font-weight: 550;
`
export const HR = styled.div`
    height: 2px;
    background-color: rgb(239,239,239);
    width: 1200px;
    margin-left: -18px;
    @media screen and (max-width : 1200px) {
        width: 1000px;
    }
    @media screen and (max-width : 975px) {
        width: 700px;
    }
    @media screen and (max-width : 725px) {
        width: 600px;
    }
`
export const SettingProfileBox = styled.div`
    width: 800px;
    height: 400px;
`
