import React, {useEffect} from 'react';
import {Link, useOutletContext} from "react-router-dom";
import {GreyBg, WhiteBg} from "../../styles/Global.style";
import {ListBox, ListLink, ListP} from "../../styles/Problem/List.style";
import {getOne} from "../../api/ProblemApi";

function MathComponent() {
    // @ts-ignore
    const {problemData} = useOutletContext();
    let copy = [...problemData]

    return (
        <GreyBg>
            <WhiteBg>
                {
                    problemData.map((item:any, index:number) => {
                        return (
                            <ListBox key={index}>
                                <ListLink><Link to={`../../detail/${item.id}`}>{item.title}</Link></ListLink>
                                <ListP>{item.price}C</ListP>
                            </ListBox>
                        )
                    })
                }
            </WhiteBg>
        </GreyBg>
    )
}

export default MathComponent;