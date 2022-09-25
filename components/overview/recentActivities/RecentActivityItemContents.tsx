import { RecentActivityItemContent } from '@components/overview/recentActivities/RecentActivityItemContent';
import { IActivityDetail } from '@vo/overview/IRecentActivity';
import styled from 'styled-components';

interface Props {
  createdGoals?: IActivityDetail[];
  achievedGoals?: IActivityDetail[];
  gainedBadges?: IActivityDetail[];
}

export const RecentActivityItemContents = ({
  createdGoals,
  achievedGoals,
  gainedBadges,
}: Props) => {
  return (
    <RecentActivityItemContentStyled>
      <div className="outer">
        <RecentActivityItemContent
          contentList={createdGoals}
          activityType={'CREATE_GOAL'}
        />
        <RecentActivityItemContent
          contentList={achievedGoals}
          activityType={'ACHIEVE_GOAL'}
        />
        <RecentActivityItemContent
          contentList={gainedBadges}
          activityType={'GOT_BADGE'}
        />
      </div>
    </RecentActivityItemContentStyled>
  );
};

const RecentActivityItemContentStyled = styled.div`
  padding: 0 0 0 10px;

  .outer {
    display: flex;
    flex-direction: column;
    gap: 18px;
    border-left: 2px solid ${({ theme }) => theme.colors.ShadeGray40};
    padding: 15px 0;
  }
`;
