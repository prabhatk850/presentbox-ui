import React from 'react'
import styled from 'styled-components'
import { FaFilter } from 'react-icons/fa';
import FilterPage from './filterPage';

const Wrapper = styled.div`
display: flex;
margin-top: 20px;
padding: 8px 12px;
border: 1px solid #ccc;
border-radius: 10px;
cursor: pointer;
color: gray;
height: fit-content;
align-items: center;
`;

const FilterText = styled.span`
font-size: 14px;
font-weight: 500;
margin-left: 5px;   
color: black;
`;



function Filter() {

    const [clicked, setClicked] = React.useState(false);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setClicked(false);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, []);

  return (
    <div ref={containerRef} style={{position: 'relative', display: 'inline-block'}}>
      <Wrapper onClick={() => setClicked(!clicked)}>
        <FaFilter size={14}/>
        <FilterText>Filter</FilterText>
      </Wrapper>
      {clicked && <FilterPage />}
    </div>
  )
}

export default Filter