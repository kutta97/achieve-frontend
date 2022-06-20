import React from "react";
import styled from "styled-components";

interface Props {
  classNames?: string;
  title: string;
}

export const DefaultBoxTitle: React.FC<Props> = ({ classNames, title }) => {
  return (
    <DefaultBoxTitleStyled className={classNames}>
      <div className="bullet" />
      <h1 className="boxTitle">{title}</h1>
    </DefaultBoxTitleStyled>
  );
}

const DefaultBoxTitleStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .bullet {
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background: #C4C4C4;
  }

  .boxTitle {
    font-size: 15px;
    margin-left: 9px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;