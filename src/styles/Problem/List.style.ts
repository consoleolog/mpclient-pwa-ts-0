import styled from "styled-components";

export const SearchInput = styled.input`
    width: 200px;
    height: 30px;
    padding: 5px 10px;
    margin: 10px 50px;
    font-size: 16px;
    color: #424242;
    border: solid 1.5px rgb(235,235,235);
    &:focus {
        outline: none;
    }
`
export const SearchButton = styled.button`
    width: 80px;
    height: 40px;
    padding: 10px;
    color: rgb(83, 149, 94);
    font-weight: bold;
    border: solid 1.5px rgb(101,180,118);
    background-color: #fff;
    transition: all 0.5s;
    cursor: pointer;
    border-radius: 3px;
    margin-left: -30px;
    margin-top: 11px;
    min-width: 80px;
    &:hover {
        color: white;
        background-color: rgb(101,180,118);
    }
`
export const WriteProblemButton = styled.button`
    padding: 10px;
    width: 150px;
    height: 45px;
    margin-top: 10px;
    margin-left: 850px;
    color: rgb(83, 149, 94);
    font-weight: bold;
    border: solid 1.5px rgb(101,180,118);
    background-color: #fff;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.5s;
    min-width: 150px;
    &:hover {
        color: white;
        background-color: rgb(101,180,118);
    }
    @media screen and (max-width : 1400px) {
        margin-left: 700px;
    }
    @media screen and (max-width : 1250px) {
        margin-left: 500px;
    }
    @media screen and (max-width : 975px) {
        margin-left: 25%;
    }
    @media screen and (max-width : 725px) {
        margin-left: 15%;
    }
`
export const ListBox = styled.div`
    padding: 10px;
    border-bottom: 1px solid rgb(255, 255, 255);
`
export const ListLink = styled.p`
    font-size: 16px;
    font-weight: 550;
    margin: 5px;
    text-decoration: none;
    color: #333;
`
export const ListP = styled.p`
    font-size: 13px;
    margin: 5px;
    color: grey;
`