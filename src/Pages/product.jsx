import React from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../Component/layout/productcard";
import ProductHeader from "../Component/layout/productHeader";
import ProductHeadings from "../Component/layout/productHeadings";

function Product() {
    // grab category from navigation state or query param if needed later
    const location = useLocation();
    const dynamicCategory = location.state?.category || null;

    return (
        <div style={{ margin: "20px 40px 50px 40px" }}>
            <ProductHeader dynamicCategory={dynamicCategory} />
            <ProductHeadings />
            <ProductCard />
        </div>
    );
}

export default Product