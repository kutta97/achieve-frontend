import React from "react";
import styled from "styled-components";

interface Props {
  classNames?: string;
}

export const ExamGoalInputBox: React.FC<Props> = () => {
  return (
    <ExamGoalInputBoxStyled>
      goal input
    </ExamGoalInputBoxStyled>
  );
}

const ExamGoalInputBoxStyled = styled.div`
`;