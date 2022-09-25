import styled from 'styled-components';

import { RecentActivities } from './recentActivites/RecentActivities';
import { RecentExamGoals } from './recentExamGoals/RecentExamGoals';

export const OverviewFragment = () => {
  return (
    <OverviewFragmentStyled>
      <RecentExamGoals />
      <RecentActivities />
    </OverviewFragmentStyled>
  );
};

const OverviewFragmentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 45px;
  width: 100%;
`;
