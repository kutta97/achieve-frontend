import { Button } from '@components/common/button/Button';
import { Title } from '@components/common/text/Title';
import { ExamGoalItem } from '@components/goals/ExamGoalItem';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import { observer } from 'mobx-react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useGoals } from './hooks/useGoals';
import { GoalCreatePopup } from './popup/GoalCreatePopup';

export const GoalsFragment = observer(() => {
  const { examGoalList, getNextGoals } = useGoals();

  const [isOpen, setIsOpen] = useState(false);

  const target = useRef<HTMLDivElement>();

  const { count } = useInfiniteScroll({
    rootMargin: '120px',
    target: target,
    targetArray: examGoalList,
    threshold: 0.2,
    endPoint: 3,
  });

  useEffect(() => {
    getNextGoals(count);
  }, [count]);

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
      <div className="exam-goals-wrap" ref={target}>
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
    margin: -30px -40px 20px -40px;
    padding: 30px 40px 0 40px;
    z-index: 2;
    background: ${({ theme }) => theme.colors.BasicBg};
    border-radius: 20px;
  }

  .exam-goals-wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100vh;
    overflow-y: auto;
    margin: -60px;
    padding: 60px;
  }
`;
