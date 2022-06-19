import React from "react";
import styled from "styled-components";
import { InputWrap } from "./InputWrap";

interface Props {
  classNames?: string;
  title: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextInput: React.FC<Props> = ({
  classNames,
  title,
  value,
  onChange
}) => {

  const handleChangeInput = e => {
    onChange(e.target.value);
  }

  return (
    <TextInputStyled className={classNames}>
      <InputWrap title={title}>
        <input
          type="text"
          value={value}
          placeholder="write your exam name"
          onChange={handleChangeInput}
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