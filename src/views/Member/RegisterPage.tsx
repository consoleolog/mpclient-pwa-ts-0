import React from 'react';
import {BasicBanner} from "../../styles/Global.style";
import Layout from "../../layout/Layout";
import RegisterComponent from "../../components/Member/RegisterComponent";

function RegisterPage() {
    return (
        <Layout>
            <BasicBanner>
                <h2>회원가입</h2>
            </BasicBanner>
            <RegisterComponent/>
        </Layout>
    );
}

export default RegisterPage;