import { RoundCheckbox } from '@components/common/checkbox/RoundCheckbox';
import { useHabitTracker } from '@components/goals/hooks/useHabitTracker';
import { IHabitTracker } from '@vo/goals/IExamGoal';
import styled from 'styled-components';

interface Props {
  goalId?: number;
  habitTracker?: IHabitTracker;
}

export const HabitTrackerItem = ({ goalId, habitTracker }: Props) => {
  const { onCheckHabitTracker } = useHabitTracker();

  const handleCheckHabitTracker = () => {
    onCheckHabitTracker(goalId, habitTracker.habitId);
  };

  return (
    <HabitTrackerItemStyled>
      <div className="left">
        <RoundCheckbox
          checked={habitTracker.isDone}
          onCheck={handleCheckHabitTracker}
        />
        {habitTracker?.title}
      </div>
    </HabitTrackerItemStyled>
  );
};

const HabitTrackerItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.ShadeGray30};
  border-radius: 30px;
  padding: 9px 18px;

  font-weight: 400;
  font-size: 11px;
  line-height: 13px;

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;
