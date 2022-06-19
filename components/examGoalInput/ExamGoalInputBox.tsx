import React from "react";
import styled from "styled-components";
import { DateInput } from "../input/DateInput";
import { ScoreInput } from "../input/ScoreInput";
import { TextInput } from "../input/TextInput";
import { InputBox } from "../inputBox/InputBox";

interface Props {
  classNames?: string;
  onCreateClick?: () => void;
  onCloseClick?: () => void;
}

export const ExamGoalInputBox: React.FC<Props> = ({ classNames, onCreateClick, onCloseClick }) => {

  const handleCreateClick = () => {
    onCreateClick?.();
  }

  const handleCloseClick = () => {
    onCloseClick?.();
  }

  return (
    <ExamGoalInputBoxStyled className={classNames}>
      <InputBox onCreateClick={handleCreateClick} onCloseClick={handleCloseClick}>
        <TextInput title="Exam name" />
        <ScoreInput />
        <DateInput />
      </InputBox>
    </ExamGoalInputBoxStyled>
  );
}

const ExamGoalInputBoxStyled = styled.div`
  margin-bottom: 15px;
`;