import { Box } from '@components/common/box/Box';
import { TagList } from '@components/common/tag/TagList';
import { BulletTitle } from '@components/common/text/BulletTitle';
import { IRecentExamGoal } from '@vo/overview/IRecentExamGoal';
import styled from 'styled-components';

import { getStateColor } from '../../../types/examGoalStatusType';

interface Props {
  data?: IRecentExamGoal;
}

export const RecentExamGoalItem = ({ data }: Props) => {
  return (
    <Box>
      <RecentExamGoalItemStyled>
        <div className="goal-title-wrap">
          <BulletTitle
            text={data?.title}
            bulletColor={getStateColor(data?.goalStatus)}
          />
          <DDayText>{data?.dDay}</DDayText>
        </div>
        <div className="goal-content-wrap">
          <PeriodText>{data?.period}</PeriodText>
          <TagList
            goalStatus={data?.goalStatus}
            isGroupGoal={data?.isGroupGoal}
          />
        </div>
      </RecentExamGoalItemStyled>
    </Box>
  );
};

const RecentExamGoalItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 32px 35px;

  .goal-title-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .goal-content-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
  }
`;

const DDayText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.BasicBlack};

  padding-top: 3px;
  margin: 0;
`;

const PeriodText = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: ${({ theme }) => theme.colors.BasicBlack};

  padding-top: 2px;
  margin: 0;
`;
