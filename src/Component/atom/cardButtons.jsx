import React from 'react'
import styled from 'styled-components'
import { LuArrowUpRight } from "react-icons/lu";
// import { useState } from 'react';




const Div = styled.div`
  display: inline-flex;
  align-items: center;
`;


const Action = styled.button`
  /* margin-right: 8px; */
  border: none;
  border-radius: 999px;
  padding: 18px 22px;
  cursor: pointer;
  width: fit-content;
`;

const Cover = styled.div`
  display: inline-flex;
  align-items: center;
  /* margin-left: 8px; */
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
 
`;


// color = button background, textColor = text/icon color (any CSS color).
// No cta = arrow-only button.
// Defaults: white button with black text; a colored button gets white text unless textColor is set.
function CardButtons({cta, color, textColor, onClick}) {
  const style = { background: color || "#fff", color: textColor || (color ? "#fff" : "#000") };

  return (
    <Div onClick={onClick} style={{cursor: 'pointer'}}>
              {cta && <Action style={style}>
                {cta}
              </Action>}
              <Cover style={style}>
              <LuArrowUpRight style={{height:"32px", width:"32px"}}/>
              </Cover>
    </Div>
  )
}

export default CardButtons