import React from 'react'
import styled from 'styled-components'
import { IoSearch } from "react-icons/io5";

const Wrapper=styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5dfdf;
  border-radius: 20px;
  padding: 0 10px;
  `;

function Search() {
  return (
    <Wrapper>
        <IoSearch style={{color:"gray"}}/>
        <input type="text" placeholder="Search..." style={{width:"90%",fontSize:"14px", padding:"10px", border:"none",outline:"none"}}/>
    </Wrapper>
  )
}

export default Search