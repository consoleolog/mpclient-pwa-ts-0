import React from 'react';
import {BasicBanner} from "../../styles/Global.style";
import WriteComponent from "../../components/Problem/WriteComponent";
import Layout from "../../layout/Layout";

function WritePage() {
    return (
        <Layout>
            <BasicBanner>
                <h2>문제 등록</h2>
            </BasicBanner>
            <WriteComponent/>
        </Layout>
    );
}

export default WritePage;