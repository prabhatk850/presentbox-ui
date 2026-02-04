import React from 'react'
import styled from 'styled-components'
import { LuArrowUpRight } from 'react-icons/lu';

const Cover = styled.div`
  display: inline-flex;
  align-items: center;
  /* margin-left: 8px; */
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
 border: 1px solid #e5dfdf;
`;


function CircleButton() {
  return (
   <Cover style={{background:"white"}}>
                  <LuArrowUpRight style={{height:"32px", width:"32px"}}/>
                  </Cover>
  )
}

export default CircleButton