import { Box } from '@components/common/box/Box';
import { TagList } from '@components/common/tag/TagList';
import { BulletTitle } from '@components/common/text/BulletTitle';
import { ExamGoalItemHabitTracker } from '@components/goals/ExamGoalItemHabitTracker';
import { IExamGoal } from '@vo/goals/IExamGoal';
import Image from 'next/image';
import styled from 'styled-components';

import { getStateColor } from '../../types/examGoalStatusType';

interface Props {
  data?: IExamGoal;
}

export const ExamGoalItem = ({ data }: Props) => {
  return (
    <Box>
      <ExamGoalItemStyled>
        <div className="goal-title-wrap">
          <div className="left">
            <BulletTitle
              text={data?.title}
              bulletColor={getStateColor(data?.goalStatus)}
            />
            <TagList
              goalStatus={data?.goalStatus}
              isGroupGoal={data?.isGroupGoal}
            />
          </div>
          <div className="right">
            <DDayText>{data?.dDay}</DDayText>
            <Image
              src="/assets/icon/menu/icon_menu_vertical.svg"
              alt=""
              width={28}
              height={28}
            />
          </div>
        </div>
        <PeriodText className="period">{data?.period}</PeriodText>
        <ExamGoalItemHabitTracker habitTrackers={data?.habitTrackers} />
      </ExamGoalItemStyled>
    </Box>
  );
};

const ExamGoalItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 32px 35px;

  .goal-title-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;

    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }

    .right {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
  }

  .period {
    margin-bottom: 14px;
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
