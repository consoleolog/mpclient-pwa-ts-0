import React from 'react';
import {useNavigate} from "react-router-dom";
import {SettingProfileBox, SettingTapContents, SettingTapContentsBox} from "../../../styles/Member/Mypage.style";
import {Input} from "antd";

function MypageSettingComponent() {
    const navigate = useNavigate();
    return (

        <SettingTapContentsBox>
            <SettingTapContents onClick={()=>{navigate("/members/mypage/settings")}}>
                비밀번호 변경
            </SettingTapContents>
            <SettingTapContents onClick={()=>{navigate("/members/mypage/delete")}}>
                계정 삭제
            </SettingTapContents><br/><br/>
            <h2>설정</h2>
            <SettingProfileBox>
                <p>현재 비밀번호</p>
                <Input/>
            </SettingProfileBox>
        </SettingTapContentsBox>
    );
}

export default MypageSettingComponent;