import React from "react";
import styled from "styled-components";
import { InputWrap } from "./InputWrap";

interface Props {
  classNames?: string;
  title: string;
}

export const TextInput: React.FC<Props> = ({ classNames, title }) => {
  return (
    <TextInputStyled className={classNames}>
      <InputWrap title={title}>
        <input
          type="text"
          placeholder="write your exam name"
        />
      </InputWrap>
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  input {
    width: 100%;
    font-size: 18px;
    padding: 10px 20px;
    background: #FFFFFF;
    border: 1.5px solid #C4C4C4;
    border-radius: 10px;
  }

  input::placeholder {
    color: #C4C4C4;
  }
`;