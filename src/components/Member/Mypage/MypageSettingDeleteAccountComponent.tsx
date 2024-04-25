import React from 'react';
import {useNavigate} from "react-router-dom";
import {SettingTapContents, SettingTapContentsBox} from "../../../styles/Member/Mypage.style";

function MypageSettingDeleteAccountComponent() {
    const navigate = useNavigate();
    return (
        <SettingTapContentsBox>
            <SettingTapContents onClick={()=>{navigate("/members/mypage/settings")}}>
                비밀번호 변경
            </SettingTapContents>
            <SettingTapContents onClick={()=>{navigate("/members/mypage/delete")}}>
                계정 삭제
            </SettingTapContents><br/><br/>
            <h2>계정 삭제</h2>
        </SettingTapContentsBox>
    );
}

export default MypageSettingDeleteAccountComponent;