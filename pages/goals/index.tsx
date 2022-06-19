import React from "react";
import styled from "styled-components";
import { ExamGoals } from "../../components/examGoals/ExamGoals";
import { useGoals } from "./useGoals";

const Goals: React.FC = () => {

  const { examGoals } = useGoals();

  return (
    <GoalsFrameStyled>
      <ExamGoals examGoals={examGoals} />
    </GoalsFrameStyled>
  )
}

const GoalsFrameStyled = styled.div`
`;

export default Goals