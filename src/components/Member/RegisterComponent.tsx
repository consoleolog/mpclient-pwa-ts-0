import React, { useState } from 'react';
import {TinyColor} from "@ctrl/tinycolor";
import {
    RegisterBasicInput,
    RegisterBasicSelect,
    RegisterBasicTextarea,
    RegisterBox
} from "../../styles/Member/Register.style";
import {Button, ConfigProvider} from "antd";
import {MemberImpl} from "../../types/MemberImpl";
import {useDispatch, useSelector} from "react-redux";
import {doRegister} from "../../api/MemberApi";
import {useNavigate} from "react-router-dom";
import {RootState} from "../../index";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const initState : MemberImpl = {
    id : null,
    username : "",
    intro : "",
    educateState : "",
    displayName : "",
    password : "",
}
function RegisterComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [registerData, setRegisterData] = useState<MemberImpl>(initState);
    const [passwordCheck, setPasswordCheck] = useState<string>("")
    const onChangeRegisterData = (e: any) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value // 해당하는 필드에 대해 입력 값 업데이트
        });
    };
    const showSwal = () => {
        withReactContent(Swal).fire({
            position: "center",
            icon: "success",
            title: "회원가입이 완료되었습니다!",
            showConfirmButton: false,
            timer: 1500
        });
    }
    const register = () => {
        doRegister(registerData).then((result) => {
            showSwal()
            navigate("/")
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <>
            <RegisterBox>
                <p>이메일 * </p>
                <RegisterBasicInput name={"username"} onChange={onChangeRegisterData} type="email" required={true}/>
                <p>닉네임 *</p>
                <RegisterBasicInput name={"displayName"} onChange={onChangeRegisterData} required={true}/>
                <p>한줄소개</p>
                <RegisterBasicTextarea name={"intro"} rows={3} onChange={onChangeRegisterData} required={true}/>
                <p>현재 학력 *</p>
                <RegisterBasicSelect name={"educateState"} onChange={onChangeRegisterData}>
                    <option value="elementSchool">초등학생</option>
                    <option value="middleSchool">중학생</option>
                    <option value="highSchool">고등학생</option>
                    <option value="university">대학생</option>
                </RegisterBasicSelect>
                <p>비밀번호 *</p>
                <RegisterBasicInput name={"password"} type={"password"} onChange={onChangeRegisterData}
                                    required={true}/>
                <p>비밀번호 확인 *</p>
                <RegisterBasicInput name={"passwordCheck"} type={"password"} onChange={(e: any) => {
                    setPasswordCheck(e.target.value)
                }} required={true}/>
                <br/><br/><br/>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorPrimary: `linear-gradient(90deg,  ${colors2.join(', ')})`,
                                colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors2).join(', ')})`,
                                colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors2).join(', ')})`,
                                lineWidth: 0,
                            },
                        },
                    }}
                >
                    <Button type="primary" size="large" onClick={register} style={{
                        width: "300px",
                        height: "60px",
                        padding: "0px 30px",
                        fontSize: "20px",
                        fontWeight: "bold"
                    }}>
                        회원가입
                    </Button>
                </ConfigProvider>
            </RegisterBox>
        </>
    );
}
const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());
export default RegisterComponent;