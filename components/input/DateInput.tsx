import React from "react";
import styled from "styled-components";
import { InputWrap } from "./InputWrap";

interface Props {
  classNames?: string;
  startDate: string;
  dueDate: string;
  onChangeStartDate: (date: string) => void;
  onChangeDueDate: (date: string) => void;
}

export const DateInput: React.FC<Props> = ({
  classNames,
  startDate,
  dueDate,
  onChangeStartDate,
  onChangeDueDate
}) => {

  const handleChangeStartDate = e => {
    onChangeStartDate(e.target.value);
  }

  const handleChangeDueDate = e => {
    onChangeDueDate(e.target.value);
  }

  return (
    <DateInputStyled className={classNames}>
      <InputWrap title="Due date">
        from
        <input
          type="date"
          value={startDate}
          onChange={handleChangeStartDate}
        />
        to
        <input
          type="date"
          value={dueDate}
          onChange={handleChangeDueDate}
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