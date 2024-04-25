import React from 'react';
import {Link, useOutletContext} from "react-router-dom";
import {ListBox, ListLink, ListP} from "../../styles/Problem/List.style";
import {GreyBg, WhiteBg} from "../../styles/Global.style";

function KoreanComponent() {
// @ts-ignore
    const {problemData} = useOutletContext();
    console.log(problemData)
    let copy = [...problemData]
    return (
        <GreyBg>
            <WhiteBg>
                {
                    problemData.map((item:any, index:number) => {
                        return (
                            <ListBox key={index}>
                                <ListLink><Link to={"/"}>{item.title}</Link></ListLink>
                                <ListP>{item.price}C</ListP>
                            </ListBox>
                        )
                    })
                }
            </WhiteBg>
        </GreyBg>
    )
}

export default KoreanComponent;