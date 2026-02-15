import React from 'react'
import styled from 'styled-components'
import Filter from '../atom/filter';
import Sort from '../atom/sort';

const Parent = styled.div`
display: flex;
justify-content: space-between;
`;

const Wrapper = styled.div`
  margin: 20px 0;
  gap: 10px;
  width: 70%;
  margin-bottom: 40px;
  `;

  const Heading = styled.h2`
  font-family: 'BBH Bartle', sans-serif;
  font-size: 20px;
  margin: 0;
  word-spacing: 0.2em;
  line-height: 1.4;
    font-weight: 300;
`;

const SubHeading = styled.p`
  margin-top: 8px;
  color: #777;
  text-wrap: wrap;
`;



function ProductHeadings() {
  return (
    <Parent>
    <Wrapper>
        <Heading>Key Features of This Items</Heading>
        <SubHeading>Discover the standout features that make this product a must-have.</SubHeading>
    </Wrapper>
    <div style={{display:"flex", gap:"10px"}}>
    <Sort/>
    <Filter/>
    </div>
    </Parent>
  )
}

export default ProductHeadings