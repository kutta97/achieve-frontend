import React from "react";
import styled from "styled-components";
import { InputWrap } from "./InputWrap";

interface Props {
  classNames?: string;
}

export const DateInput: React.FC<Props> = ({ classNames }) => {
  return (
    <DateInputStyled className={classNames}>
      <InputWrap title="Due date">
        from
        <input
          type="date"
        />
        to
        <input
          type="date"
        />
      </InputWrap>
    </DateInputStyled>
  );
}

const DateInputStyled = styled.div`
  display: flex;
  flex-direction: row;

  input {
    font-size: 17px;
    letter-spacing :-1px;
    padding: 10px 20px;
    background: #FFFFFF;
    border: 1.5px solid #C4C4C4;
    border-radius: 10px;
    margin-left: 5px;
    margin-right: 20px;
  }
`;