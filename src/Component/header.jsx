import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { styled } from "styled-components";
import { IoSearch } from "react-icons/io5";
import Twogrid from "./atom/twogrid";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  padding: 16px 24px;
  width: 100%;
`;
const Logo = styled.div`
  font-family: "BBH Bartle", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;
const Cover = styled.div`
  display: ${({ $collapsed }) => ($collapsed ? "none" : "flex")};
  gap: 12px;
  align-items: center;
  height: 54px;
  padding: 10px 20px;
  width: ${({ $active }) => ($active ? "100%" : "fit-content")};
  overflow: hidden;
  background-image: url("https://i.pinimg.com/1200x/68/a5/03/68a503d245800db249bd5bd751787b89.jpg");
  /* background: var(
    --lds-g-color-palette-transparent-black-080,
    rgba(0, 0, 0, 0.8)
  ); */
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12),
    inset 0 1px 1px rgba(255, 255, 255, 0.35);
  color: #ffffff;

  &:hover {
    cursor: pointer;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.3s ease-in-out;
    padding: 60px;
    overflow: hidden;
    background-size: cover;
  }
`;

function Header() {
  const [hovered, setHovered] = useState(null);
  const leftActive = hovered === "left";
  const rightActive = hovered === "right";
  const isHovering = hovered !== null;

  return (
    <div>
      <HeaderWrapper>
        <Cover
          $active={leftActive}
          $collapsed={isHovering && !leftActive}
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
        >
          <Logo>PresentBox</Logo>
          {!hovered && <RxHamburgerMenu size={20} />}
          {hovered && <Twogrid />}
        </Cover>

        <Cover
          $active={rightActive}
          $collapsed={isHovering && !rightActive}
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
        >
          <IoSearch />
          <IoSearch />
          <IoSearch />
        </Cover>
      </HeaderWrapper>
      {/* <Twogrid /> */}
    </div>
  );
}

export default Header;
