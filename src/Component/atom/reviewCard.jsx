import React from "react";
import styled from "styled-components";
import { LuQuote } from "react-icons/lu";

const Card = styled.article`
  background: #f7f7f7;
  border-radius: 24px;
  /* padding: 32px; */
  min-width: 730px;
  display: flex;
  height: 400px;
`;

const Quote = styled.div`
  font-size: 48px;
  color: #9a9a9a;
`;

const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 12px;
`;

const Message = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #666;
`;

const Left = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  height: 100%;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: #fff;
  border-radius: 28px;
  margin: 24px;
  padding: 0 15px;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 13px;
  object-fit: cover;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Stars = styled.div`
  color: #f6b100;
  font-size: 14px;
`;
const Circle = styled.div`
  background-color: #fff;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

const Square = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 327px;
  padding: 15px;
  border-radius: 18px;
`;

const ReviewCard = ({ data }) => {
  const { name, rating, avatar, title, message } = data;

  return (
    <Card>
      <Left>
        <Circle>
          <Avatar src={avatar} alt={name} />
        </Circle>
        <div>
          <Name>{name}</Name>
          <Stars>{"★".repeat(rating)}</Stars>
        </div>
      </Left>
      <Right>
        <Square>
          <Quote>
            <LuQuote />
          </Quote>
          <div>
            <Title>{title}</Title>
            <Message>{message}</Message>
          </div>
        </Square>
      </Right>
    </Card>
  );
};

export default ReviewCard;
