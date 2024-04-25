import React, {useCallback, useEffect, useRef, useState} from 'react';
import Layout from "../layout/Layout";
import axios from "axios";
import {upload} from "@testing-library/user-event/dist/upload";
import {getUserData} from "../api/MemberApi";

function HomePage() {

    const [file,setFile] = useState<File>();
    const [file1,setFile1] = useState<File>();
    const handleImgUpload = async (e:any) => {
        if (!e.target.files){
            return;
        }
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    const handleImgUpload1 = async (e:any) => {
        if (!e.target.files){
            return;
        }
        setFile1(e.target.files[0]);
    }
    const uploadImage = async () => {
        const formData = new FormData();
        if (file instanceof File && file1 instanceof File) {
            formData.append("file", file);
            formData.append("file1", file1);
            const res = await axios.post(`http://localhost:8080/upload`,formData,{
                headers:{"Content-Type":"multipart/form-data"},
                withCredentials:true
            }).then((result)=>{
                console.log(result)
            })
        }
    }
    return (
        <Layout>

        </Layout>
    );
}
export default HomePage;