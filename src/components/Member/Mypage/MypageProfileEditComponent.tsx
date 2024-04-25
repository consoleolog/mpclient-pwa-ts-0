import React from 'react';
import {useNavigate} from "react-router-dom";
import {SettingTapContents, SettingTapContentsBox} from "../../../styles/Member/Mypage.style";

function MypageProfileEditComponent() {
    const navigate = useNavigate();
    return (
        <SettingTapContentsBox>
            <SettingTapContents onClick={() => {
                navigate("/members/mypage")
            }}>
                정보
            </SettingTapContents>
            <SettingTapContents onClick={() => {
                navigate("/members/mypage/edit")
            }}>
                편집
            </SettingTapContents><br/><br/>
            <h2>프로필 편집</h2>
        </SettingTapContentsBox>
    );
}

export default MypageProfileEditComponent;