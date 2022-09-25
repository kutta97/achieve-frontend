import styled from 'styled-components';

import { SidebarTitle } from './SidebarTitle';

interface Props {
  goalCount?: number;
  goalList?: string[];
}

export const SidebarGoals = ({ goalCount, goalList }: Props) => {
  return (
    <SidebarGoalsFrame>
      <SidebarTitle title="Achieving Goals" number={goalCount} />
      <div className="sidebar-goal-list">
        {goalList?.map((goalTitle, index) => (
          <SidebarGoalItem key={index} goalTitle={goalTitle} />
        ))}
      </div>
    </SidebarGoalsFrame>
  );
};

const SidebarGoalsFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .sidebar-goal-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

interface GoalItemProps {
  goalTitle?: string;
}

const SidebarGoalItem = ({ goalTitle }: GoalItemProps) => {
  return (
    <SidebarGoalItemStyled>
      <SidebarGoalItemBullet />
      {goalTitle}
    </SidebarGoalItemStyled>
  );
};

const SidebarGoalItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;

  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: ${({ theme }) => theme.colors.BasicGray};
`;

const SidebarGoalItemBullet = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.SolidGreen};
`;
