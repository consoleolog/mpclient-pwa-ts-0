import React, {useEffect, useState} from 'react';
import {
    MypageProfileBox,
    ProfileImg,
    ProfileImgBox,
    ProfileName,
    ProfileTapBox, ProfileTapContents, ProfileTapContentsBox, SettingTapBox
} from "../../styles/Member/Mypage.style";
import {Outlet, useNavigate} from "react-router-dom";
import Layout from "../../layout/Layout";
function MypagePage() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<any>("");
    useEffect(()=>{
        let userdata  = sessionStorage.getItem("userdata") as string;
        setUserData(JSON.parse(userdata))
    },[])


    return (
        <Layout><br/><br/><br/><br/>
            <MypageProfileBox>
                <ProfileImgBox>
                    <ProfileImg src={`${process.env.PUBLIC_URL}/graduate_5360916.png`} alt=""/>
                </ProfileImgBox>
                <ProfileName>{userData.displayName}</ProfileName>
            </MypageProfileBox>

            <ProfileTapBox>
                <ProfileTapContentsBox>
                    <ProfileTapContents onClick={()=>{
                        navigate("./")
                    }}>
                        프로필
                    </ProfileTapContents>
                    <ProfileTapContents onClick={()=>{
                        navigate("./settings")
                    }}>
                        설정
                    </ProfileTapContents>
                    <ProfileTapContents onClick={()=>{navigate("./made")}}>
                        내 활동
                    </ProfileTapContents>
                </ProfileTapContentsBox>
            </ProfileTapBox>
            <SettingTapBox>
                <Outlet context={{userData}}/>
            </SettingTapBox>
        </Layout>
    );
}

export default MypagePage;