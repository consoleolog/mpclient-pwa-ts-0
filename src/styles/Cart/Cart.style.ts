import styled from 'styled-components';

export const CartPageWrapper = styled.div`
    width: 90%;
`
export const CartBox = styled.div`
    width: 70%;
    height: 100%;
    position: relative;
    float: left;
    margin-top: 30px;
    @media screen and (max-width : 975px) {
        float: none;
        width: 100%;
    }
`
export const PayBox = styled.div`
    margin-top: -30px;
    width: 30%;
    border: solid 2px rgb(244,244,244);
    height: 300px;
    float: right;
    @media screen and (max-width : 975px) {
        float: none;
        width: 70%;
        margin-top: 300px;
        margin-left: 16%;
    }
`
export const CartTable = styled.table`
    width: 100%;
    height: 100%;
    margin-left: 100px;
    //text-align: center;
`
export const CartThead = styled.div`
    border: solid 2px rgb(244,244,244);
    width: 100%;
    
`
export const HR = styled.div`
    width: 200%;
    height: 2px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: -20px;
    background-color: rgb(244,244,244);
`
export const DisplayFlexBox = styled.div`
    display: flex;
    width: 100%;
`
export const PayButton = styled.button`
    width: 90%;
    height: 50px;
    border-radius: 7px;
    border: solid 2px rgb(101,180,118);
    color: rgb(83, 149, 94);
    background-color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin: 20px 15px;
    transition: all 0.5s;
    &:hover {
        background-color: rgb(101,180,118);
        color: #fff;
    }
    @media screen and (max-width : 975px) {
        margin-left: 30px;
    }
`