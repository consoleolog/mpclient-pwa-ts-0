import React, {useEffect, useState} from 'react';
import {DetailBox, DetailBuyButton, DetailCartButton, DetailPayBox} from "../../styles/Member/Detail.style";
import {Image} from 'antd'
import {getOne} from "../../api/ProblemApi";
import {useParams} from "react-router-dom";
import {ProblemDataType} from "../../types/ProblemInpl";
import {HR} from "../../styles/Global.style";
import CommentComponent from "./CommentComponent";
import {doRegister} from "../../api/CartApi";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import localStorage from "redux-persist/es/storage";
function DetailComponent() {
    const showSwal = () => {
        withReactContent(Swal).fire({
            position: "center",
            icon: "success",
            title: "장바구니에 추가 되었습니다!",
            showConfirmButton: false,
            timer: 1500
        });
    }
    let {id}  = useParams() as any;
    const [problemData, setProblemData] = useState<ProblemDataType>({
        id : 0,
        title : "",
        content : "",
        price : 0,
        level : "",
        category : "",
        quizImgName : "",
        writerId : 0,
    });
    let copy = sessionStorage.getItem("userdata") as string;
    let ownerId = JSON.parse(copy).id
    const cartData = {
        id : null,
        problemId : id,
        ownerId : ownerId,
    }
    switch (problemData.level){
        case "easy" :
            problemData.level = "쉬움"
            break;
        case "normal" :
            problemData.level = "보통"
            break;
        case "hard":
            problemData.level = "어려움"
            break;
    }
    useEffect(()=>{
            getOne(id).then((result)=>{
                console.log(result)
                let copy = {...result}
                setProblemData(copy)
                switch (copy.category){
                    case "korean" :
                        copy.category = "국어"
                        break;
                    case "math" :
                        copy.category = "수학"
                        break;
                    case "english":
                        copy.category = "영어"
                        break;
                    case "science":
                        copy.category ="과학 탐구"
                        break;
                    case "social" :
                        copy.category = "사회 탐구"
                        break;
                }
            }).catch((error)=>{
                console.log(error)
            })
    },[])
    const addCart = () => {
        doRegister(cartData).then((result)=>{
            showSwal();
            localStorage.setItem("cartData",JSON.stringify(result))
        }).catch((error)=>{
            console.log(error)
        })
    }
    console.log(problemData)

    return (
        <DetailBox>
            <h1>{problemData.title && problemData.title}</h1>
            <h3>{problemData.category}</h3>
            <h3>{problemData.level}</h3>
            <Image style={{minWidth:"700px"}} width={"70%"} src={"https://placehold.co/900"}/>
            {
                ownerId == problemData.writerId ?
                    <DetailPayBox>
                        <DetailBuyButton>수정하기</DetailBuyButton>
                        <DetailCartButton onClick={addCart}>삭제</DetailCartButton>
                        <h3>{problemData.price}C</h3>
                    </DetailPayBox> :
                    <DetailPayBox>
                        <DetailBuyButton>답지 구매하기</DetailBuyButton>
                        <DetailCartButton onClick={addCart}>장바구니</DetailCartButton>
                        <h3>{problemData.price}C</h3>
                    </DetailPayBox>
            }
            <br/>
            <p>{problemData.content}</p>
            <br/><br/><br/><br/><br/><br/><br/><HR/>
            <CommentComponent problemData={problemData}/>
        </DetailBox>
    );
}

export default DetailComponent;