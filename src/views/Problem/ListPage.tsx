import React, {useEffect, useState} from 'react';
import {BasicBanner, BasicSearchBox} from "../../styles/Global.style";
import {Outlet, useNavigate} from "react-router-dom";
import Layout from "../../layout/Layout";
import {SearchButton, SearchInput, WriteProblemButton} from "../../styles/Problem/List.style";
import {getList} from "../../api/ProblemApi";

function ListPage() {
    const navigate = useNavigate();
    const [category, setCategory] = useState<string>("");
    const [problemData, setProblemData] = useState<Array<any>>([]);
    const urlStr = window.location.href;
    useEffect(()=>{
        let category:string = "";
        if (urlStr.includes("korean")){
            setCategory("국어")
            getList("korean").then((result)=>{
                setProblemData(result)
            }).catch((error)=>{
                console.log(error)
            })
        } else if (urlStr.includes("math")){
            setCategory("수학")
            getList("math").then((result)=>{
                setProblemData(result)
                console.log(result)
            }).catch((error)=>{
                console.log(error)
            })
        } else if (urlStr.includes("english")){
            setCategory("영어")
            getList("english").then((result)=>{
                setProblemData(result)
            }).catch((error)=>{
                console.log(error)
            })
        } else if (urlStr.includes("science")){
            setCategory("과학 탐구")
            getList("science").then((result)=>{
                setProblemData(result)
            }).catch((error)=>{
                console.log(error)
            })
        } else if (urlStr.includes("social")){
            setCategory("사회 탐구")
            getList("social").then((result)=>{
                setProblemData(result)
            }).catch((error)=>{
                console.log(error)
            })
        }

    },[urlStr])
    return (
        <Layout>
        <BasicBanner>
            <h2>{ category}</h2>
        </BasicBanner>
            <BasicSearchBox style={{display:"flex"}}>
                <SearchInput placeholder={"검색어 입력"}/>
                <SearchButton>
                    검색
                </SearchButton>
                <WriteProblemButton onClick={()=>{navigate("/problems/write")}}>
                    문제 등록하러가기
                </WriteProblemButton>
            </BasicSearchBox>
            <Outlet context={{problemData}}/>
        </Layout>
    );
}

export default ListPage;