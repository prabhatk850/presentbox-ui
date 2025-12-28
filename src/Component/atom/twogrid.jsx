import React from "react";
import styled from "styled-components";

const Div = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  gap: 20px;
  margin-top: 10px;
`;

const Heading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 10px 0;
`;

const Subheading = styled.p`
  width: 90%;
  font-size: 17px;
  margin: 4px 0 0 0;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 30px;
  /* overflow: hidden; */
  border-radius: 20px;

  :hover {
    transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);

    filter: brightness(0.8) blur(1px);
  }
`;

function Headercards() {
  return (
    <Div>
      <hr
        style={{
          borderTop: "2px solid #ffffff",
          marginTop: "16px",
          marginBottom: "20px",
        }}
      />
      <Grid>
        <div>
          <Heading className="heading">Present Box</Heading>
          <Subheading>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            maxime corrupti pariatur at magni. Delectus ut nostrum labore,
            quidem earum modi quod soluta natus omnis tempore est vero beatae
            culpa explicabo quam.
          </Subheading>
        </div>
        <div>
          <ImageWrapper>
            <img
              style={{
                borderRadius: "20px",
                width: "100%",
                height: "80%",
                objectFit: "cover",
                objectPosition: "top",
              }}
              src="https://i.pinimg.com/736x/a4/ab/1e/a4ab1e64fc381d092ef9b500a8d89d3a.jpg"
              alt="Img"
            />
          </ImageWrapper>
        </div>
      </Grid>
    </Div>
  );
}

export default Headercards;
