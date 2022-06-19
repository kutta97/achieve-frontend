import React from "react";
import styled from "styled-components";
import { ExamGoalVO } from "../../vo/goals/examGoalVO";
import { SubTitleWithButton } from "../subtitle/SubtitleWithButton";
import { ExamGoalBox } from "./ExamGoalBox";


interface Props {
  className?: string;
  examGoals: ExamGoalVO[];
}

export const ExamGoals: React.FC<Props> = ({ className, examGoals }) => {
  return (
    <ExamGoalsStyled className={className}>
      <SubTitleWithButton className="title" buttonName="CREATE NEW GOAL">
        YOU HAVE 5 EXAM GOALS!
      </SubTitleWithButton>

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
}

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