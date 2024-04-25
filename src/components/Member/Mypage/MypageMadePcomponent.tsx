import React from 'react';
import {useNavigate} from "react-router-dom";
import {SettingTapContents, SettingTapContentsBox} from "../../../styles/Member/Mypage.style";

function MypageMadePcomponent() {
    const navigate = useNavigate();
    return (
        <SettingTapContentsBox>
            <SettingTapContents onClick={() => {
                navigate("../made")
            }}>
                만든 문제
            </SettingTapContents>
            <SettingTapContents onClick={() => {
                navigate("../buy")
            }}>
                구매한 문제
            </SettingTapContents><br/><br/>
            <h2>만든 문제</h2>
        </SettingTapContentsBox>
    );
}

export default MypageMadePcomponent;