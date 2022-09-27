import { ToggleList } from '@components/common/toggleList/ToggleList';
import { GroupGoalItem } from '@components/groups/GroupExamGoalItem';
import { IGroupGoal } from '@vo/groups/IGroup';
import styled from 'styled-components';

interface Props {
  groupGoals?: IGroupGoal[];
}

export const GroupExamGoalList = ({ groupGoals }: Props) => {
  const getTitle = (length?: number) => {
    if (!length) return 'No Group Goals';
    if (length === 1) return '1 Group Goal';
    return `${length} Group Goals`;
  };

  return (
    <ExamGoalItemHabitTrackerStyled>
      <ToggleList
        title={getTitle(groupGoals?.length)}
        disabled={!groupGoals?.length}
      >
        <div className="toggle-list-content-wrap">
          {groupGoals?.map((value, index) => (
            <GroupGoalItem groupGoal={value} key={index} />
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
