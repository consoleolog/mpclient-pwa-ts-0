import React from 'react';
import {useNavigate} from "react-router-dom";
import {HR, SettingProfileBox, SettingTapContents, SettingTapContentsBox} from "../../../styles/Member/Mypage.style";
import { useOutletContext } from "react-router-dom";

function MypageProfileComponent() {
    const navigate = useNavigate();
    // @ts-ignore
    const {userData} = useOutletContext();
    if ( userData.educateState == "elementSchool"){
        userData.educateState = "초등학생"
    } else if (userData.educateState == "middleSchool"){
        userData.educateState = "중학생"
    } else if ( userData.educateState == "highSchool"){
        userData.educateState = "고등학생"
    } else if ( userData.educateState == "university"){
        userData.educateState = "대학생"
    }
    return (
        <SettingTapContentsBox>
            <SettingTapContents onClick={()=>{navigate("/members/mypage")}}>
                정보
            </SettingTapContents>
            <SettingTapContents onClick={()=>{navigate("./edit")}}>
                편집
            </SettingTapContents><br/><br/>
            <h2>프로필</h2>
            <HR/>
            <div style={{display: "flex"}}>
                <SettingProfileBox>
                    <p>이름 : </p>
                    <p>이메일 : </p>
                    <p>현재 학력 : </p>
                    <p>보유 코인 : </p>
                </SettingProfileBox>
                <SettingProfileBox>
                    <p>{userData.displayName}</p>
                    <p>{userData.username}</p>

                    <p>{userData.educateState}</p>
                    <p>{userData.coin}C</p>
                </SettingProfileBox>
            </div>
        </SettingTapContentsBox>
    );
}

export default MypageProfileComponent;