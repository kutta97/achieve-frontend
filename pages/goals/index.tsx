import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { ExamGoals } from "../../components/examGoals/ExamGoals";
import { useGoals } from "./useGoals";

const Goals: React.FC = observer(() => {

  const { examGoals, addExamGoal } = useGoals();

  return (
    <GoalsFrameStyled>
      <ExamGoals examGoals={examGoals} onCreateGoal={addExamGoal} />
    </GoalsFrameStyled>
  )
});

const GoalsFrameStyled = styled.div`
`;

export default Goals