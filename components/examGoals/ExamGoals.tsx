import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";
import { ExamGoalVO } from "../../vo/goals/examGoalVO";
import { ExamGoalInputBox } from "../examGoalInput/ExamGoalInputBox";
import { SubTitleWithButton } from "../subtitle/SubtitleWithButton";
import { ExamGoalBox } from "./ExamGoalBox";

interface Props {
  className?: string;
  examGoals: ExamGoalVO[];
}

export const ExamGoals: React.FC<Props> = observer(({ className, examGoals }) => {

  const [isInputFormVisible, setIsInputFormVisible] = useState(false);

  const handleCreateGoalClick = () => {
    console.log("isInputFormVisible", isInputFormVisible);
    setIsInputFormVisible(!isInputFormVisible);
  }

  return (
    <ExamGoalsStyled className={className}>
      <SubTitleWithButton
        className="title"
        buttonName="CREATE NEW GOAL"
        onClick={handleCreateGoalClick}
      >
        {`YOU HAVE ${examGoals.length} EXAM GOALS!`}
      </SubTitleWithButton>

      {isInputFormVisible && <ExamGoalInputBox />}

      <div className="goalBoxesWrap">
        {examGoals.map((examGoal) => (
          <ExamGoalBox
            examGoal={examGoal}
            key={examGoal.id}
          />
        ))}
      </div>
    </ExamGoalsStyled>
  );
});

const ExamGoalsStyled = styled.div`
  .title {
    margin-bottom: 17px;
  }

  .goalBoxesWrap {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;