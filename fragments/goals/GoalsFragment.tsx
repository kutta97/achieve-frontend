import { Button } from '@components/common/button/Button';
import { Title } from '@components/common/text/Title';
import { ExamGoalItem } from '@components/goals/ExamGoalItem';
import { observer } from 'mobx-react';
import { useState } from 'react';
import styled from 'styled-components';

import { useGoals } from './hooks/useGoals';
import { GoalCreatePopup } from './popup/GoalCreatePopup';

export const GoalsFragment = observer(() => {
  const { examGoalList } = useGoals();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <GoalsFragmentStyled>
      <div className="top">
        <Title text="You have 5 Exam Goals!" />
        <Button text="Create New Goal" onClick={handleOpen} />
      </div>
      <div className="exam-goals-wrap">
        {examGoalList?.map((goal) => (
          <ExamGoalItem data={goal} key={goal.goalId} />
        ))}
      </div>
      <GoalCreatePopup isOpen={isOpen} onClose={handleClose} />
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
