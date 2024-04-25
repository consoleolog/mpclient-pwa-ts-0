import React from 'react';
import {SettingTapContents, SettingTapContentsBox} from "../../../styles/Member/Mypage.style";
import {useNavigate} from "react-router-dom";

function MypageBuyPcomponent() {
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
            <h2>구매한 문제</h2>
        </SettingTapContentsBox>
    );
}

export default MypageBuyPcomponent;