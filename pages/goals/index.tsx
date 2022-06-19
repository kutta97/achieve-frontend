import React from "react";
import styled from "styled-components";
import { SubTitleWithButton } from "../../components/subtitle/SubtitleWithButton";
import { useGoals } from "./useGoals";

const Goals: React.FC = () => {

  const examGoals = useGoals();

  return (
    <GoalsFrameStyled>
      <SubTitleWithButton buttonName="CREATE NEW GOAL">
        YOU HAVE 5 EXAM GOALS!
      </SubTitleWithButton>
    </GoalsFrameStyled>
  )
}

const GoalsFrameStyled = styled.div`
`;

export default Goals