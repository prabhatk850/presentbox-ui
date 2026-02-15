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



function ProductHeader({ dynamicCategory }) {
    // base options
    const baseCategories = ["All Products", "Fashion", "Home", "Beauty", "Sports"];

    // if a dynamicCategory prop was passed and it's not already listed, add it temporarily
    const categorys = dynamicCategory
        ? Array.from(new Set([...baseCategories, dynamicCategory]))
        : baseCategories;

    const [selectedCategory, setSelectedCategory] = useState(
        dynamicCategory || "All Products"
    );

    // if the dynamicCategory prop changes (e.g. user clicks another product while already on the
    // products page), update the selected bubble
    React.useEffect(() => {
        if (dynamicCategory) {
            setSelectedCategory(dynamicCategory);
        }
    }, [dynamicCategory]);

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