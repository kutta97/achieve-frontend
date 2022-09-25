import { Title } from '@components/common/text/Title';
import { RecentExamGoalItem } from '@components/overview/recentExamGoals/RecentExamGoalItem';
import styled from 'styled-components';

import { useRecentExamGoals } from './hooks/useRecentExamGoals';

export const RecentExamGoals = () => {
  const { examGoalList } = useRecentExamGoals();

  return (
    <RecentExamGoalsStyled>
      <Title text="Recent Exam Goals!" />
      <div className="recent-goals-wrap">
        {examGoalList?.map((value, index) => (
          <RecentExamGoalItem data={value} key={index} />
        ))}
      </div>
    </RecentExamGoalsStyled>
  );
};

const RecentExamGoalsStyled = styled.div`
  .recent-goals-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`;
