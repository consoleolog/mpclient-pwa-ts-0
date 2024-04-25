import React, {ChangeEvent, useEffect, useState} from 'react';
import {CommentBox, CommentButton, CommentInput, CommentP} from "../../styles/Problem/Comment.style";
import {getList, register} from "../../api/CommentApi";
import {ProblemDataType} from "../../types/ProblemInpl";
import {useParams} from "react-router-dom";

interface CommentComponentProps {
    problemData?: ProblemDataType
}

function CommentComponent({problemData}: CommentComponentProps) {
    const [content, setContent] = useState('');
    const [userData, setUserData] = useState<any>("")
    const [comment, setComment] = useState<any>([]);
    let {id} = useParams() as any;
    useEffect(()=>{
        let userdata  = sessionStorage.getItem("userdata") as string;
        setUserData(JSON.parse(userdata))
        getList(id).then((result)=>{
            let copy = [...result]
            setComment(copy)
        }).catch((error)=>{
            console.log("댓글 불러오면서 에러남 "+error)
        })
    },[])
    let copy = sessionStorage.getItem("userdata") as string;
    let writerId = JSON.parse(copy).id
    const commentData = {
        id: null,
        content: content,
        writerId: writerId,
        parentId : problemData && problemData.id,
    }
    const doRegister = () => {
        register(commentData).then((result) => {
            setContent("")
            window.location.reload();
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
            <CommentBox>
                {
                    comment.map((item:any,index:number)=>{
                        return (
                            <div key={index}>
                                <h4><strong>{item.member.displayName}</strong></h4>
                                <CommentP>{item.content}</CommentP>
                            </div>
                        )
                    })
                }

            </CommentBox>
            <CommentInput onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setContent(e.target.value)
            }} name={"content"}/>
            <CommentButton onClick={doRegister} type={"submit"}>
                전송
            </CommentButton>
        </>
    );
}

export default CommentComponent;