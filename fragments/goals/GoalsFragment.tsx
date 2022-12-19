import { Button } from '@components/common/button/Button';
import { Title } from '@components/common/text/Title';
import { ExamGoalItem } from '@components/goals/ExamGoalItem';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import { observer } from 'mobx-react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useGoals } from './hooks/useGoals';
import { GoalCreatePopup } from './popup/goal/GoalCreatePopup';
import { GoalCompletePopup } from './popup/goalComplete/GoalCompletePopup';
import { HabitTrackerCreatePopup } from './popup/habitTracker/HabitTrackerCreatePopup';

export const GoalsFragment = observer(() => {
  const { totalGoalCount, examGoalList, getNextGoals } = useGoals();

  const [selectedGoalId, setSelectedGoalId] = useState(0);
  const [selectedGoalTitle, setSelectedGoalTitle] = useState('');
  const [isGoalPopupOpen, setIsGoalPopupOpen] = useState(false);
  const [isHabitPopupOpen, setIsHabitPopupOpen] = useState(false);
  const [isCompletePopupOpen, setIsCompletePopupOpen] = useState(false);

  const target = useRef<HTMLDivElement>();

  const { count } = useInfiniteScroll({
    target: target,
    targetArray: examGoalList,
    threshold: 0.2,
    endPoint: 3,
  });

  useEffect(() => {
    getNextGoals(count);
  }, [count]);

  const handleGoalPopupOpen = () => {
    setIsGoalPopupOpen(true);
  };
  const handleGoalPopupClose = () => {
    setIsGoalPopupOpen(false);
  };
  const handleMenuClick = (goalId: number, goalTitle: string) => {
    setSelectedGoalId(goalId);
    setSelectedGoalTitle(goalTitle);
  };
  const handleHabitPopupClose = () => {
    setIsHabitPopupOpen(false);
  };
  const handleCompletePopupClose = () => {
    setIsCompletePopupOpen(false);
  };
  const handleSelectMenuItem = (id: string) => {
    if (id === 'COMPLETE') {
      setIsCompletePopupOpen(true);
    }
    if (id === 'HABIT_TRACKER') {
      setIsHabitPopupOpen(true);
    }
  };

  return (
    <GoalsFragmentStyled>
      <div className="top">
        <Title text={`You have ${totalGoalCount} Exam Goals!`} />
        <Button text="Create a New Goal" onClick={handleGoalPopupOpen} />
      </div>
      <div className="exam-goals-wrap" ref={target}>
        {examGoalList?.map((goal) => (
          <ExamGoalItem
            data={goal}
            key={goal.goalId}
            onClickMenu={handleMenuClick}
            onSelectMenu={handleSelectMenuItem}
          />
        ))}
      </div>
      <GoalCreatePopup
        isOpen={isGoalPopupOpen}
        onClose={handleGoalPopupClose}
      />
      <HabitTrackerCreatePopup
        goalId={selectedGoalId}
        isOpen={isHabitPopupOpen}
        onClose={handleHabitPopupClose}
      />
      <GoalCompletePopup
        goalId={selectedGoalId}
        goalTitle={selectedGoalTitle}
        isOpen={isCompletePopupOpen}
        onClose={handleCompletePopupClose}
      />
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
