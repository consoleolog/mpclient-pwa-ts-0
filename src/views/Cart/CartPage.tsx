import React, {useEffect, useState} from 'react';
import Layout from "../../layout/Layout";
import CartComponent from "../../components/Cart/CartComponent";
import {BasicBanner} from "../../styles/Global.style";
import {getCart} from "../../api/CartApi";

function CartPage() {
    let copy = sessionStorage.getItem("userdata") as string;
    let userId = JSON.parse(copy).id
    const [cart, setCart] = useState<any>([]);
    useEffect(()=>{
        getCart(userId).then((result)=>{
            let copy = [...result]
            setCart(copy)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return (
        <Layout>
            <BasicBanner>
                <h2>장바구니</h2>
            </BasicBanner>
            <CartComponent cart={cart}/>
        </Layout>
    );
}

export default CartPage;