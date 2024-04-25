import React from 'react';
import SalesComponent from "../../components/Sales/SalesComponent";
import {BasicBanner} from "../../styles/Global.style";
import Layout from "../../layout/Layout";

function SalesPage() {
    return (
        <Layout>
            <BasicBanner>
                <h2>구매하기</h2>
            </BasicBanner>
            <SalesComponent/>
        </Layout>
    );
}

export default SalesPage;