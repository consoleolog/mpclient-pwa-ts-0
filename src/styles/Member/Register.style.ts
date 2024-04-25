import styled from "styled-components";

export const RegisterBox = styled.div`
    width: 80%;
    margin: 20px 100px;
    max-width: 1200px;
    position: absolute;
    z-index: 5;
`
export const RegisterBasicInput = styled.input`
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
export const RegisterBasicSelect = styled.select`
    width: 64%;
    height: 50px;
    padding: 0 20px;
    font-size: 16px;
    border: solid 1px rgb(229,229,229);
`
export const RegisterBasicTextarea = styled.textarea`
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