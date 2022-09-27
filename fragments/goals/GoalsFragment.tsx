import { Button } from '@components/common/button/Button';
import { Title } from '@components/common/text/Title';
import { ExamGoalItem } from '@components/goals/ExamGoalItem';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { useGoals } from './hooks/useGoals';

export const GoalsFragment = observer(() => {
  const { examGoalList } = useGoals();

  return (
    <GoalsFragmentStyled>
      <div className="top">
        <Title text="You have 5 Exam Goals!" />
        <Button text="Create New Goal" />
      </div>
      <div className="exam-goals-wrap">
        {examGoalList?.map((value, index) => (
          <ExamGoalItem data={value} key={index} />
        ))}
      </div>
    </GoalsFragmentStyled>
  );
});

const GoalsFragmentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .exam-goals-wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
