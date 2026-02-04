import React from "react";
import ProductCard from "../Component/layout/productcard";
import ProductHeader from "../Component/layout/productHeader";
import ProductHeadings from "../Component/layout/productHeadings";

function Product(){
    return(
            <div style={{margin:"20px 40px 0 40px"}}>
            <ProductHeader/>
            <ProductHeadings/>
            <ProductCard/>
            </div>
    );
}

export default Product