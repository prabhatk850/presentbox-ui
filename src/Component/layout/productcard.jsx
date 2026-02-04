import React from 'react'
import styled from 'styled-components'
import { MdStar } from "react-icons/md";
import CircleButton from '../atom/circleButton';

const Wrapper=styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
`;

const Grid=styled.div`
  display:flex;
  flex-direction:column;
  gap: 20px;
`;

const Background =styled.div`
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  background: #F7F7F7;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06); */
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 30px 0;
`;

const Type = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: white;
  padding:5px 10px;
  border-radius: 15px;
  background: red;
`;

const Raiting = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  padding:5px 10px;
  border-radius: 15px;
  background: #fff;
`;

const ImgConatainerr = styled.div`
display:flex;
width:100%;
height: 300px;
justify-content: center;
align-items: center;
overflow:hidden;
border-radius: 14px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Div=styled.div`
display:flex;
flex-direction:column;
gap:10px;
`;

const LowerContainer=styled.div`
  padding: 20px;
  border-radius: 20px;
  display:flex;
  align-items:center;
  justify-content: space-between;
  background: #F7F7F7;
`;

const ProductName=styled.div``;

const Price=styled.div`
  font-weight: bold;`;

  const Star = styled(MdStar)`
  margin-right: 5px;
  font-size: 20px;
  color: #f5a623;
`;


function ProductCard() {

  const Testdata=[
    {id:1, 
      type:"New",
      Raiting:4.5,
      name:"eDisplay XG", 
      price:"USD 649.99", 
      img:"https://intuitive-beauty-55ad61f540.media.strapiapp.com/d5e5c8f729ff158ff03a5ee7bf8a6d93_8bc39da1e7.jpg"
    },
    {
      id:2, 
      type:"Hot",
      Raiting:4.1,
      name:"eDisplay Pro", 
      price:"USD 799.99", 
      img:"https://i.pinimg.com/1200x/24/c7/28/24c72886928b5122fa8c94abc3b2667d.jpg"
    },
    {
      id:3, 
      type:"Sale",
      Raiting:4.7,
      name:"eDisplay Lite",
      price:"USD 499.99",
      img:"https://i.pinimg.com/1200x/de/02/55/de025520655e8aa7bd9c65d4c79cd64c.jpg"
    },
          {id:4, 
      type:"New",
      Raiting:4.5,
      name:"eDisplay XG", 
      price:"USD 649.99", 
      img:"https://i.pinimg.com/1200x/24/c7/28/24c72886928b5122fa8c94abc3b2667d.jpg"
    },
    {
      id:5, 
      type:"Hot",
      Raiting:4.1,
      name:"eDisplay Pro",
      price:"USD 799.99",
      img:"https://intuitive-beauty-55ad61f540.media.strapiapp.com/d5e5c8f729ff158ff03a5ee7bf8a6d93_8bc39da1e7.jpg"
    },
    {
      id:6,
      type:"Sale",
      Raiting:4.7,
      name:"eDisplay Lite",
      price:"USD 499.99",
      img:"https://i.pinimg.com/1200x/de/02/55/de025520655e8aa7bd9c65d4c79cd64c.jpg"
    },
  ]

  return (
    <Wrapper>
      {Testdata.map((item)=> (
        <Grid key={item.id}>
          <Background>
            <Detail>
                <Type>{item.type}</Type>
                <Raiting><Star /> <div style={{fontSize:"14px"}}>{item.Raiting}</div></Raiting>
            </Detail>
            <ImgConatainerr><Img src={item.img}  alt="img"></Img></ImgConatainerr>
          </Background>
          <LowerContainer>
            <Div>
              <ProductName>
                {item.name}
              </ProductName>
              <Price>
                {item.price}
              </Price>
            </Div>
            <CircleButton/>
          </LowerContainer>
        </Grid>
      ))}
    </Wrapper>
  )
}

export default ProductCard