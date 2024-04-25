import React from 'react';
import {
    CartBox,
    CartPageWrapper,
    CartTable,
    CartThead,
    DisplayFlexBox,
    HR,
    PayBox,
    PayButton
} from "../../styles/Cart/Cart.style";
import {IoClose} from "react-icons/io5";
import {deleteCart} from "../../api/CartApi";
import {log} from "node:util";

interface CartComponentProps {
    cart?: any
}

function CartComponent({cart}: CartComponentProps) {
    let copy = sessionStorage.getItem("userdata") as string;
    let ownerId = JSON.parse(copy).id
    let totalPrice = 0;
    for (var key in cart){
        totalPrice += cart[key].problem.price
    }
    console.log(cart)

    return (
        <>
            <CartPageWrapper>
                <CartBox>
                    <CartTable>
                        <thead>
                        <tr style={{fontWeight: "500"}}>
                            <td>문제명</td>
                            <td>가격</td>
                            <td>취소하기</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cart.map((item:any,index:number)=>{
                                return (
                                    <tr key={index}>
                                        <td>{item.problem.title}</td>
                                        <td>{item.problem.price}C</td>
                                        <td style={{marginLeft: "20px"}}>
                                            <IoClose
                                                onClick={()=>{
                                                    deleteCart(item.id).then((r)=>{
                                                        window.location.reload();
                                                    })
                                                }}
                                                style={{
                                                    fontSize: "30px",
                                                    fontWeight: "bolder",
                                                    cursor: "pointer",
                                                    color: "red"
                                                }}/>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </CartTable>
                </CartBox>
                <PayBox>
                    <h3 style={{margin: "40px"}}>구매할 답지 합계</h3>
                    <hr style={{width: "90%"}}/>
                    <DisplayFlexBox>
                        <p style={{margin: "23px", width: "70%"}}>총계</p>
                        <p style={{margin: "23px 100px", width: "30%"}}>{totalPrice}C</p>
                    </DisplayFlexBox>
                    <PayButton>
                        구매하기
                    </PayButton>


                </PayBox>
            </CartPageWrapper>
        </>
    );
}

export default CartComponent;