import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  link: string;
  children: React.ReactNode;
  selected: boolean;
}

export const NavItem: React.FC<Props> = ({ className, link, children, selected }) => {
  return (
    <NavItemStyled className={className} selected={selected}>
      <Link href={link}>
        <a>{children}</a>
      </Link>
    </NavItemStyled >
  );
}

const NavItemStyled = styled.h3 <{ selected: boolean }> `
  font-size: 18px;
  font-weight: 500;
  padding: 7px 15px 3px 15px;
  color: ${props => (
    props.selected ? `black;` : `white;`
  )};
  border-bottom: ${props => (
    props.selected ? `4px solid #4B4B4B` : `4px solid transparent`
  )};

  &:hover {
    background-color: #C4C4C4;
    border-radius: 5px 5px 0px 0px;
  }
`;