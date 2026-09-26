import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../atom/card.jsx";
import { getCategoryCards } from "../../api";

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

function ProductsGrid() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getCategoryCards();
        console.log("Fetched data:", data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <CardsGrid>
      {data && data.map((data) => (
        <ProductCard
          key={data.id}
          variant={data.variant}
          title={data.title}
          description={data.description}
          image={data?.img}
          button={data.button}
      />
      ))}
    </CardsGrid>
  );
}
export default ProductsGrid;
