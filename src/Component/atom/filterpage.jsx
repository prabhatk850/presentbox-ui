import React, { useState } from 'react'
import styled from 'styled-components'
import { BsToggles } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import ProductCategoryBubble from './productCategoryBubble';
import { RiMoneyRupeeCircleLine } from "react-icons/ri";


const Filterheader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding:10px 20px;
`;

const Div = styled.div`
display: flex;
align-items: center;
gap: 8px;
font-weight: 400;
font-size: 30px;
line-height: 22px;`;

const Wrapper = styled.div`
width: 1000px;
height: 500px;
background: #F7F7F7;
border: 1px solid #e5dfdf;
border-radius: 20px;
box-shadow: 0 6px 18px rgba(0,0,0,0.08);
position: absolute;
right:0px;
top:  calc(50% + 5px);
z-index: 20;
// padding: 20px;
`;

// little arrow pointing up to the filter button
Wrapper.displayName = 'FilterPageWrapper';

const Arrow = styled.div`
  position: absolute;
  top: -8px;
  right: 20px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #f0ebeb;
`;

const Hover = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
padding: 4px ;
&:hover {
  background-color: #f0f0f0;
  cursor: pointer;
  border: 1px solid #e5dfdf;
  padding: 3px;
}
`;

const Divider = styled.div`
height: 1.5px;
background-color: #e5dfdf;
`;


const FilterTypes = styled.div`
display: flex;
width: 100%;
border-bottom: 1px solid #e5dfdf;
`;

const Basic = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
padding:  10px 0;
cursor: pointer;
transition: box-shadow 0.3s ease;
box-shadow: ${({ $isActive }) => $isActive ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'};
color: ${({ $isActive }) => $isActive ? '#fff' : 'black'};
background-color: ${({ $isActive }) => $isActive ? '#000' : '#fff'};
`;

const Advance = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
padding:  10px 0;
cursor: pointer;
transition: box-shadow 0.3s ease;
box-shadow: ${({ $isActive }) => $isActive ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'};
color: ${({ $isActive }) => $isActive ? '#fff' : 'black'};
background-color: ${({ $isActive }) => $isActive ? '#000' : '#fff'};
`;

const BasicContent = styled.div`
padding: 30px 20px;
display: flex;
gap: 40px;
`;

const Bubbles = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
align-content: flex-start;
`;

const Head = styled.div`
font-size: 18px;
font-weight: 500;
margin-bottom: 20px;
`;

const Left = styled.div`
width: 40%;
`;

const Right = styled.div``;

const PriceBubble = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
  background:  #fff;
  border-radius: 20px;
  width: 150px;
  gap: 10px;
  padding: 10px 15px;
  border: 1px solid #e5dfdf;
  transition: all 0.3s ease;
  `;

// const Handle = styled.div`
// position: absolute;
// width: 36px;
// height: 36px;
// border: 2px solid #FF5722;
// border-radius: 50%;
// background: #fff;
// display: flex;
// align-items: center;
// justify-content: center;
// cursor: pointer;
// top: 50%;
// transform: translateY(-50%);
// font-size: 14px;
// color: #666;
// `;

// const LeftHandle = styled(Handle)`
// left: ${({ $position }) => $position}%;
// `;

// const RightHandle = styled(Handle)`
// right: ${({ $position }) => $position}%;
// `;



function FilterPage() {
  const [activeFilter, setActiveFilter] = useState('basic');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categorys = ["All Products", "Fashion", "Home", "Beauty", "Sports"];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <Wrapper>
      <Arrow />
      <Filterheader>
        <Div><BsToggles   weight="bold" size={30}/><Div>Filter</Div></Div>
        <Hover><IoClose size={40} color='gray' /></Hover>
      </Filterheader>
      <Divider></Divider>
      <FilterTypes>
        <Basic 
          $isActive={activeFilter === 'basic'}
          onClick={() => setActiveFilter('basic')}
        >
          Basic Filter
        </Basic>
        <Advance 
          $isActive={activeFilter === 'advance'}
          onClick={() => setActiveFilter('advance')}
        >
          More Filter
        </Advance>
      </FilterTypes>

      {activeFilter === 'basic' ? (
        <BasicContent>
          <Left>
          <Head>Category</Head>
           <Bubbles> 
            {categorys.map((category, index) => (
                <ProductCategoryBubble 
                  key={index} 
                  category={category}
                  isActive={selectedCategories.includes(category)}
                  onClick={() => toggleCategory(category)}
                />
            ))}
            </Bubbles>
            </Left>
            <Right>
            <Head>Price Range</Head>
              <Bubbles>
                <PriceBubble>
                  <div style={{display:"flex", gap:"5px"}}><RiMoneyRupeeCircleLine size={18} color="#000" /> Min:</div><input type="number" placeholder="0" style={{width:'50px', border:'none', outline:'none',overflow:"hidden"}}/>
                </PriceBubble>
                <div style={{display:"flex",alignItems:"center"}}>-</div>
                <PriceBubble>
                  <div style={{display:"flex",gap:"5px"}}><RiMoneyRupeeCircleLine size={18} color="#000" /> Max:</div><input type="number" placeholder="10000" style={{width:'50px', border:'none', outline:'none'}}/> 
                </PriceBubble>
              </Bubbles>
            </Right>
        </BasicContent>
      ) : (
        <div style={{padding: '20px'}}>Advanced filter options go here</div>
      )}


    </Wrapper>
  )
}

export default FilterPage