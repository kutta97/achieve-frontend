import { ToggleList } from '@components/common/toggleList/ToggleList';
import { HabitTrackerItem } from '@components/goals/HabitTrackerItem';
import { IHabitTracker } from '@vo/goals/IExamGoal';
import styled from 'styled-components';

interface Props {
  goalId?: number;
  habitTrackers?: IHabitTracker[];
}

export const ExamGoalItemHabitTracker = ({ goalId, habitTrackers }: Props) => {
  const getTitle = (length?: number) => {
    if (!length) return 'No Habit Tracker';
    if (length === 1) return '1 Habit Tracker';
    return `${length} Habit Trackers`;
  };

  return (
    <ExamGoalItemHabitTrackerStyled>
      <ToggleList
        title={getTitle(habitTrackers?.length)}
        disabled={!habitTrackers?.length}
      >
        <div className="toggle-list-content-wrap">
          {habitTrackers?.map((value) => (
            <HabitTrackerItem
              goalId={goalId}
              habitTracker={value}
              key={value.habitId}
            />
          ))}
        </div>
      </ToggleList>
    </ExamGoalItemHabitTrackerStyled>
  );
};

const ExamGoalItemHabitTrackerStyled = styled.div`
  .toggle-list-content-wrap {
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-left: 15px;
    margin-top: 10px;
  }
`;
