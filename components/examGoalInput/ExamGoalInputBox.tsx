import React, { useState } from "react";
import styled from "styled-components";
import { ExamGoalVO, ScoreType } from "../../vo/goals/examGoalVO";
import { DateInput } from "../input/DateInput";
import { ScoreInput } from "../input/ScoreInput";
import { TextInput } from "../input/TextInput";
import { InputBox } from "../inputBox/InputBox";

interface Props {
  classNames?: string;
  onCreateClick?: (examGoal: ExamGoalVO) => void;
  onCloseClick?: () => void;
}

export const ExamGoalInputBox: React.FC<Props> = ({ classNames, onCreateClick, onCloseClick }) => {

  const [examName, setExamName] = useState<string>('');
  const [scoreType, setScoreType] = useState<ScoreType>('NUMBER');
  const [score, setScore] = useState<string>("100");
  const [startDate, setStartDate] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');

  const handleCreateClick = () => {
    onCreateClick?.({
      id: 3,
      examName: examName,
      scoreType: scoreType,
      score: score,
      startDate: startDate.replaceAll('-', '.'),
      dueDate: dueDate.replaceAll('-', '.'),
      dDay: 'D-123',
      states: [],
      habitTrackerCount: 0,
      habitTracker: [],
    });
  }

  const handleCloseClick = () => {
    onCloseClick?.();
  }
  const handleChangeExamName = (examName: string) => {
    setExamName(examName);
  }
  const handleChangeScoreType = (scoreType: ScoreType) => {
    setScoreType(scoreType);
  }
  const handleChangeScore = (score: string) => {
    setScore(score);
  }
  const handleChangeStartDate = (date: string) => {
    setStartDate(date);
  }
  const handleChangeDueDate = (date: string) => {
    setDueDate(date);
  }


  return (
    <ExamGoalInputBoxStyled className={classNames}>
      <InputBox onCreateClick={handleCreateClick} onCloseClick={handleCloseClick}>
        <TextInput
          title="Exam name"
          value={examName}
          onChange={handleChangeExamName}
        />
        <ScoreInput
          scoreType={scoreType}
          score={score}
          onChangeScoreType={handleChangeScoreType}
          onChangeScore={handleChangeScore}
        />
        <DateInput
          startDate={startDate}
          dueDate={dueDate}
          onChangeStartDate={handleChangeStartDate}
          onChangeDueDate={handleChangeDueDate}
        />
      </InputBox>
    </ExamGoalInputBoxStyled>
  );
}

const ExamGoalInputBoxStyled = styled.div`
  margin-bottom: 15px;
`;