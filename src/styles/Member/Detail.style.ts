import styled from 'styled-components';



export const DetailBox = styled.div`
    width: 100%;
    margin: 70px 100px;
`
export const DetailPayBox = styled.div`
    width: 20%;
    margin-right: 120px;
    max-width: 500px;
    margin-top: 20px;
    height: 300px;
    background-color: rgb(250,250,250);
    border: solid 1px rgb(230,230,230);
    border-radius: 10px;
    float: right;
    text-align: center;
    @media screen and (max-width : 1200px) {
        float: none;
        width: 100%;
        margin: 20px 100px;
    }
`
export const DetailBuyButton = styled.button`
    border: none;
    font-size: 20px;
    background-color:rgb(134,198,143) ;
    //background-color: rgb(96,132,138);
    color: #fff;
    width: 80%;
    height: 80px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    line-height: 80px;
    border-radius: 10px;
    cursor: pointer;

`
export const DetailCartButton = styled.button`
    border: none;
    font-size: 20px;
    //background-color:rgb(134,198,143) ;
    background-color: rgb(96,132,138);
    color: #fff;
    width: 80%;
    height: 80px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    line-height: 80px;
    border-radius: 10px;
    cursor: pointer;
`
export const CartBanner = styled.div`
    width: 100%;
    height: 40px;
    background-color: rgb(250,250,250);
    border-top: solid 1px rgb(242,242,242);
    margin-top: 0.2rem;
    padding:30px 100px;
`
export const CartBox = styled.div`
    width: 90% ;
    height: 600px;
    margin: 10px auto;
`