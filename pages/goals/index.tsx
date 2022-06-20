import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { ExamGoals } from "../../components/examGoals/ExamGoals";
import { Layout } from "../../components/layout/Layout";
import { useGoals } from "./useGoals";

const Goals: React.FC = observer(() => {

  const { examGoals, addExamGoal } = useGoals();

  return (
    <Layout selectedPage="GOALS">
      <GoalsFrameStyled>
        <ExamGoals examGoals={examGoals} onCreateGoal={addExamGoal} />
      </GoalsFrameStyled>
    </Layout>
  )
});

const GoalsFrameStyled = styled.div`
`;

export default Goals