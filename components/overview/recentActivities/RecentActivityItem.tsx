import { RecentActivityItemContents } from '@components/overview/recentActivities/RecentActivityItemContents';
import { IRecentActivity } from '@vo/overview/IRecentActivity';
import styled from 'styled-components';

import { getMonthName } from '../../../utils/date';

interface Props {
  data?: IRecentActivity;
}

export const RecentActivityItem = ({ data }: Props) => {
  return (
    <RecentActivityItemStyled>
      <RecentActivityItemTop>
        <p className="activity-date-wrap">
          <b>{data?.month && getMonthName(data?.month)}</b>
          {` ${data?.year}`}
        </p>
        <div className="divider" />
      </RecentActivityItemTop>
      <RecentActivityItemContents
        achievedGoals={data?.achievedGoals}
        createdGoals={data?.createdGoals}
        gainedBadges={data?.gainedBadges}
      />
    </RecentActivityItemStyled>
  );
};

const RecentActivityItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  width: 100%;
`;

const RecentActivityItemTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  width: 100%;

  .activity-date-wrap {
    display: flex;
    flex-direction: row;

    font-weight: 400;
    font-size: 11px;
    line-height: 11px;
    align-items: center;
    white-space: pre;

    margin: 0;
    color: ${({ theme }) => theme.colors.ShadeGray50};
  }

  .divider {
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.colors.ShadeGray50};
  }
`;
