import React from "react";
import styled from "styled-components";
import { DefaultBox } from "../box/DefaultBox";

interface Props {
  classNames?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const InputBox: React.FC<Props> = ({ classNames, children, onClick }) => {

  const handleClick = () => {
    onClick?.();
  }

  return (
    <InputBoxStyled className={classNames}>
      <DefaultBox>
        {children}
        <button
          className="button"
          onClick={handleClick}
        >
          create
        </button>
      </DefaultBox>
    </InputBoxStyled>
  );
}

const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;

  .button {
    margin-left: auto;
    font-size: 15px;
    font-weight: bold;
    color: #FFFFFF;
    padding: 5px 15px;
    background: #4B4B4B;
    border-radius: 10px;
    border: 0;
    cursor: pointer;

    &:hover {
      background: #929292;
    }
  }
`;