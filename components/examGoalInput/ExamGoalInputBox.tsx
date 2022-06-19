import React from "react";
import styled from "styled-components";
import { InputBox } from "../inputBox/InputBox";

interface Props {
  classNames?: string;
  onClick?: () => void;
}

export const ExamGoalInputBox: React.FC<Props> = ({ classNames, onClick }) => {

  const handleClick = () => {
    onClick?.();
  }

  return (
    <ExamGoalInputBoxStyled className={classNames}>
      <InputBox onClick={handleClick}>
        goal input
      </InputBox>
    </ExamGoalInputBoxStyled>
  );
}

const ExamGoalInputBoxStyled = styled.div`
  margin-bottom: 15px;
`;