import React from "react";
import styled from "styled-components";
import { NavBar } from "./NavBar";

interface Props {
  className?: string;
  selected?: string;
}

export const Header: React.FC<Props> = ({ className, selected }) => {
  return (
    <HeaderStyled className={className}>
      <div className="navBarWrap">
        <NavBar className="navBar" selected={selected} />
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  background: #929292;

  .navBarWrap {
    display: flex;
    flex-direction: row-reverse;
    width: 1080px;

    .navBar {
      display: flex;
      flex-direction: row;
      width: 790px;
    }
  }
`;