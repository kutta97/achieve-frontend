import React from "react";
import styled from "styled-components";

interface Props {
  classNames?: string;
  children: React.ReactNode;
}

export const DefaultBox: React.FC<Props> = ({ classNames, children }) => {
  return (
    <DefaultBoxStyled className={classNames}>
      {children}
    </DefaultBoxStyled>
  );
}

const DefaultBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 40px;

  background: #FBFAFA;
  border: 1.5px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 20px;

  p {
    margin: 0;
    font-size: 13px;
  }
`;