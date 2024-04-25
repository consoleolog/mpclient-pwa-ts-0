import React, {useEffect, useRef, useState} from 'react';
import {
    WriteBasicImgDiv,
    WriteBasicImgLabel,
    WriteBasicInput, WriteBasicInput1,
    WriteBasicSelect,
    WriteBox
} from "../../styles/Problem/Write.style";
import {CiImageOn} from "react-icons/ci";
import {Button, ConfigProvider} from "antd";
import {TinyColor} from "@ctrl/tinycolor";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {doRegister, doRegisterImg} from "../../api/ProblemApi";
function WriteComponent() {
    const navigate = useNavigate();
    const [pimage, setPimage] = useState<File|string>("");
    const [aimage, setAimage] = useState<File|string>("");
    const uploadRef = useRef<HTMLInputElement>(null);
    const [userData, setUserData] = useState<any>("")
    useEffect(()=>{
        let userdata  = sessionStorage.getItem("userdata") as string;
         setUserData(JSON.parse(userdata))
    },[])
    let copy = sessionStorage.getItem("userdata") as string;
    let writerId = JSON.parse(copy).id

    const showSwal = () => {
        withReactContent(Swal).fire({
            position: "center",
            icon: "success",
            title: "문제 등록이 완료되었습니다!",
            showConfirmButton: false,
            timer: 1500
        });
    }
    const problemDto = {
        id : null,
        title : "",
        price : 0,
        content : "",
        category : "",
        level : "",
        answer : 0,
        writerId : writerId
    }
    const problemImgDto = {
        id : null,
        quizImg : pimage,
        answerImg : aimage,
        parent_id : "",
    }
    const [problemData, setProblemData] = useState<any>(problemDto)
    const onChangeProblemData = (e:any)=>{
        const {name, value} = e.target;
        setProblemData({
            ...problemData,
            [name] : value
        })
    }
    const register = () => {
        let formData = new FormData();
        formData.append("title",problemData.title)
        formData.append("price",problemData.price)
        formData.append("content",problemData.content)
        formData.append("category",problemData.category)
        formData.append("level",problemData.level)
        formData.append("answer",problemData.answer)
        formData.append("writerId",writerId)
        formData.append("quizImg",pimage)
        doRegister(formData).then((result) => {
            // let formData = new FormData();
            // formData.append("parentId", result)
            // const answerImgList = uploadRef.current.files;
            // for(let i=0;i<answerImgList.length;i++){
            //     formData.append("answerImgList",answerImgList[i])
            // }
            doRegisterImg(formData).then((result) => {
                console.log(result)
            }).catch((error)=>{
                console.log(error)
            })
        })



    }

    return (
        <WriteBox>
            <p>문제 제목</p>
            <WriteBasicInput name={"title"} onChange={onChangeProblemData} required={true}/>
            <p>과목 선택</p>
            <WriteBasicSelect name={"category"} onChange={onChangeProblemData}>
                <option value="korean">국어</option>
                <option value="math">수학</option>
                <option value="english">영어</option>
                <option value="science">과학 탐구</option>
                <option value="social">사회 탐구</option>
            </WriteBasicSelect>
            <p>난이도</p>
            <WriteBasicSelect name={"level"} onChange={onChangeProblemData}>
                <option value="easy">쉬움</option>
                <option value="normal">보통</option>
                <option value="hard">어려움</option>
            </WriteBasicSelect>
            <p>가격(C)</p>
            <WriteBasicInput name={"price"} onChange={onChangeProblemData} required={true}/>
            <p>문제 설명</p>
            <WriteBasicInput name={"intro"} onChange={onChangeProblemData} required={true}/>
            <p>문제 이미지</p>
            <WriteBasicImgDiv draggable="true" >
                <CiImageOn style={{fontSize: "57px", marginTop: "10px"}}/>
                <h4>문제 이미지 업로드</h4>
                <WriteBasicImgLabel htmlFor={"problemImage"}>
                    클릭
                </WriteBasicImgLabel>
            </WriteBasicImgDiv>
            <WriteBasicInput name={"problemImg"} id={"problemImage"} accept="image/*" onChange={(e) => {
                if (!e.target.files){
                    return;
                }
                setPimage(e.target.files[0])
            }} style={{display: "none"}} type={"file"}/>
            <p>답지 이미지</p>
            <WriteBasicImgDiv draggable="true">
                <CiImageOn style={{fontSize: "57px", marginTop: "10px"}}/>
                <h4>답지 이미지 업로드</h4>
                <WriteBasicImgLabel htmlFor={"answerImage"}>
                    클릭
                </WriteBasicImgLabel>
            </WriteBasicImgDiv>
            <WriteBasicInput1 name={"answerImg"}
                              id={"answerImage"}
                              accept="image/*"
                              ref={uploadRef}
                              style={{display: "none"}}
                              type={"file"}
                              multiple={true}/>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                            lineWidth: 0,
                        },
                    },
                }}
            >
                <Button type="primary" size="large" onClick={register}
                        style={{width: "300px", height: "60px", padding: "0px 30px", marginTop: "30px"}}>
                    등록
                </Button>
            </ConfigProvider>
        </WriteBox>
    );
}
const colors1 = ['#6253E1', '#04BEFE'];
const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());
export default WriteComponent;