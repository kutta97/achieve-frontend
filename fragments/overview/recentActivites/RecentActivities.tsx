import { Box } from '@components/common/box/Box';
import { Title } from '@components/common/text/Title';
import { RecentActivityItem } from '@components/overview/recentActivities/RecentActivityItem';
import styled from 'styled-components';

import { useRecentActivities } from './hooks/useRecentActivities';

export const RecentActivities = () => {
  const { activityList } = useRecentActivities();

  return (
    <RecentActivitiesStyled>
      <Title text="Recent Achieve Activities!" />
      <Box className="recent-activities-wrap">
        {activityList?.map((value, index) => (
          <RecentActivityItem data={value} key={index} />
        ))}
        <RecentActivitiesMoreButton>
          {'Show More Activity'}
        </RecentActivitiesMoreButton>
      </Box>
    </RecentActivitiesStyled>
  );
};

const RecentActivitiesStyled = styled.div`
  .recent-activities-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 35px;
    margin-top: 20px;
  }
`;

const RecentActivitiesMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.ShadeGray50};
  border-radius: 8px;

  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  color: ${({ theme }) => theme.colors.ShadeGray50};

  padding: 11px 0;
  margin-top: 14px;

  cursor: pointer;
`;
