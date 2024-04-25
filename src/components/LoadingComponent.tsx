import React from 'react';
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import {CenterBox} from "../styles/Global.style";

function LoadingComponent() {
    return (
        <CenterBox>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 250 }} spin />} />
        </CenterBox>
    );
}

export default LoadingComponent;