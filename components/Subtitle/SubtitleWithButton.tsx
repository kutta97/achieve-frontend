import React from "react";
import styled from "styled-components";
import { SubTitle } from "./Subtitle";

interface Props {
  className?: string;
  children: React.ReactNode;
  buttonName?: string;
}

export const SubTitleWithButton: React.FC<Props> = ({ className, children, buttonName }) => {
  return (
    <SubTitleWithButtonStyled className={className}>
      <SubTitle className="title">{children}</SubTitle>
      <button className="button">
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

  .button {
    font-size: 15px;
    font-weight: bold;
    padding: 5px 35px;
    background: #C4C4C4;
    border-radius: 10px;
    border: 0;

    &:hover {
      background: #929292;
    }
  }
`;