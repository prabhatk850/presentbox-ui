import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdStar } from "react-icons/md";
import CircleButton from '../atom/circleButton';
import { getProducts } from '../../api';

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

  const [data, setdata] = useState([]);

  useEffect(() => {
    getProducts()
      .then(({ data }) => setdata(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Wrapper>
      {data.map((item)=> (
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