import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: ${({ $isActive }) => $isActive ? '#000' : '#fff'};
  border-radius: 20px;
  width: fit-content;
  border: 1px solid #e5dfdf;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ $isActive }) => $isActive ? '#000' : '#f5f5f5'};
  }
  `;
const Category = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 10px 15px;
  color: ${({ $isActive }) => $isActive ? '#fff' : 'grey'};
  transition: color 0.3s ease;
`;

function ProductCategoryBubble({ category, isActive, onClick }) {
  return (
    <Wrapper $isActive={isActive} onClick={onClick}>
        <Category $isActive={isActive}>{category}</Category>
    </Wrapper>
  )
}

export default ProductCategoryBubble