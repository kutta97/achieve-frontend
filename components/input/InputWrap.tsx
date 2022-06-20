import React from "react";
import styled from "styled-components";

interface Props {
  classNames?: string;
  title: string;
  children: React.ReactNode;
}

export const InputWrap: React.FC<Props> = ({ classNames, title, children }) => {
  return (
    <InputWrapStyled className={classNames}>
      <h3 className="inputTitle">{title}</h3>
      <div className="input">
        {children}
      </div>
    </InputWrapStyled>
  );
}

const InputWrapStyled = styled.div`
  display: flex;
  flex-direction: column;

  .inputTitle {
    font-size: 15px;
    color: #000000;
    margin-bottom: 10px;
    margin-top: 0;
  }
`;