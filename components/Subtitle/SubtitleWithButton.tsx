import React from "react";
import styled from "styled-components";
import { SubTitle } from "./Subtitle";

interface Props {
  className?: string;
  children: React.ReactNode;
  buttonName?: string;
  onClick?: () => void;
}

export const SubTitleWithButton: React.FC<Props> = ({ className, children, buttonName, onClick }) => {

  const handleClick = () => {
    onClick?.();
  }

  return (
    <SubTitleWithButtonStyled className={className}>
      <SubTitle className="title">{children}</SubTitle>
      <button
        className="subTitleButton"
        onClick={handleClick}
      >
        {buttonName}
      </button>
    </SubTitleWithButtonStyled>
  );
}

const SubTitleWithButtonStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .title {
    margin-top: auto;
    margin-bottom: auto;
  }

  .subTitleButton {
    font-size: 15px;
    font-weight: bold;
    padding: 5px 20px;
    background: #C4C4C4;
    border-radius: 10px;
    border: 0;
    cursor: pointer;

    &:hover {
      background: #929292;
    }
  }
`;