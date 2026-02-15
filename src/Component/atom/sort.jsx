import React from 'react'
import styled from 'styled-components'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


const Wrapper = styled.div`
display: flex;
margin-top: 20px;
padding: 8px 12px;
border: 1px solid #ccc;
border-radius: 10px;
cursor: pointer;
color: gray;
height: fit-content;
width: fit-content;
gap: 20px;
justify-content: space-between;
position: relative;

&:hover{
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;
}
`;

const SortText = styled.span`
display: flex;
gap: 5px;
font-size: 14px;
font-weight: 500;
margin-right: 5px;   
color: grey;
`;

const Accordian = styled.div`
  position: absolute;
  top: calc(100%);
  left: -0.5px;
  width: calc(100% + 1px);
  background: #fff;
  border: 1px solid #ccc;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  z-index: 20;
  overflow: hidden;
`;

const Option = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  &:hover { background: #f7f7f7; }
`;

function Sort() {

    const [sortOption, setSortOption] = React.useState("Relevance");
    const [hovered, setHovered] = React.useState(false);
    const wrapperRef = React.useRef(null);

    const handleMouseEnter = () => setHovered(true);
    const handleOptionClick = (opt) => { setSortOption(opt); setHovered(false); };

    const options = [
      'Relevance',
      'Price: Low to High',
      'Price: High to Low',
      'Customer Reviews'
    ];

    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setHovered(false);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, []);

  return (
    <div><Wrapper ref={wrapperRef} onMouseEnter={handleMouseEnter} onMouseLeave={() => setHovered(false)}>
            <SortText>Sort: <div style={{color:"black",fontWeight:"600"}}>
                {sortOption}
                </div>
                </SortText>
            {hovered ? <FaAngleUp /> : <FaAngleDown />}
            {hovered && (
              <Accordian onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {options.map((opt) => (
                  <Option key={opt} onClick={() => handleOptionClick(opt)}>
                    {opt}
                  </Option>
                ))}
              </Accordian>
            )}
        </Wrapper></div>
  )
}

export default Sort