import React, { useState } from 'react'
import styled from 'styled-components'
import ProductCategoryBubble from '../atom/productCategoryBubble'
import Search from '../atom/search';

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0;`;

const Bubbles = styled.div`
display: flex;
gap: 10px;
`;



function ProductHeader() {

    const categorys = ["All Products", "Fashion", "Home", "Beauty", "Sports"];
    const [selectedCategory, setSelectedCategory] = useState("All Products");

  return (
    <Wrapper>
        <Bubbles>
            {categorys.map((category, index) => (
                <ProductCategoryBubble 
                  key={index} 
                  category={category}
                  isActive={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                />
            ))}
        </Bubbles>
        <Search/>

    </Wrapper>
  )
}

export default ProductHeader