import styled from "styled-components";

export const CommentInput = styled.input`
    width: 400px;
    height: 100px;
    border: 1px solid rgb(222,222,222);
    margin-top: 20px;
`
export const CommentBox = styled.div`
    width: 600px;
    border-bottom: 2px solid rgb(222,222,222);
    line-height: 50px;
`
export const CommentP = styled.p`
    color: gray;
    font-size: 15px;
    margin-top: -30px;
    word-wrap: break-word;
`
export const CommentButton = styled.button`
    cursor: pointer;
    font-size: 20px;
    background-color: #fff;
    width: 100px;
    height: 50px;
    margin-left: 20px;
    border: solid 2px rgb(101,180,118);
    color: rgb(83, 149, 94);
    border-radius: 2px;
    transition: all 0.5s;
    &:hover {
        color: #fff;
        background-color: rgb(101,180,118);;
    }
`