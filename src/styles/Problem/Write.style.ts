import styled from "styled-components";

export const WriteBox = styled.div`
    width: 80%;
    height: 1200px;
    margin: 20px 100px;
    max-width: 1200px;
    position: absolute;
`
export const WriteBasicInput = styled.input`
    width: 60%;
    height: 20px;
    padding: 15px 20px;
    font-size: 16px;
    border: solid 1px rgb(229,229,229);    
    &:focus {
        border:  solid 1px rgb(229,229,229);
        outline: none;
    }
`
export const WriteBasicInput1 = styled.input`
    width: 60%;
    height: 20px;
    padding: 15px 20px;
    font-size: 16px;
    border: solid 1px rgb(229,229,229);    
    &:focus {
        border:  solid 1px rgb(229,229,229);
        outline: none;
    }
`
export const WriteBasicSelect = styled.select`
    width: 64%;
    height: 50px;
    padding: 0 20px;
    font-size: 16px;
    border: solid 1px rgb(229,229,229);
`
export const WriteBasicTextarea = styled.textarea`
    width: 60%;
    height: 40px;
    padding: 15px 20px;
    font-size: 16px;
    border: solid 1px rgb(229,229,229);
    &:focus {
        border:  solid 1px rgb(229,229,229);
        outline: none;
    }
`
export const WriteBasicImgDiv = styled.div`
    width: 60%;
    height: 180px;
    border: solid 1px rgb(229,229,229);
    text-align: center;
`
export const WriteBasicImgLabel = styled.label`
    width: 500px;
    height: 20px;
    padding: 10px 50px;
    border-radius: 10px;
    background-color: #252525;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #424242;
    }
`