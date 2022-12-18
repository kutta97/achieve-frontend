import { Box } from '@components/common/box/Box';
import {
  OptionMenu,
  OptionMenuItem,
} from '@components/common/select/OptionMenu';
import { TagList } from '@components/common/tag/TagList';
import { BulletTitle } from '@components/common/text/BulletTitle';
import { ExamGoalItemHabitTracker } from '@components/goals/ExamGoalItemHabitTracker';
import { IExamGoal } from '@vo/goals/IExamGoal';
import styled from 'styled-components';

import { getStateColor } from '../../types/examGoalStatusType';

interface Props {
  data?: IExamGoal;
  onClickMenu?: (goalId: number, goalTitle: string) => void;
  onSelectMenu?: (menuId: string) => void;
}

export const ExamGoalItem = ({ data, onClickMenu, onSelectMenu }: Props) => {
  const optionMenuList: OptionMenuItem[] = [
    {
      id: 'COMPLETE',
      value: 'Complete this goal',
    },
    {
      id: 'HABIT_TRACKER',
      value: 'Add habit tracker',
    },
  ];

  const handleClickMenu = () => {
    onClickMenu?.(data?.goalId, data?.title);
  };
  const handleSelectMenuItem = (id: string) => {
    onSelectMenu?.(id);
  };

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
            <OptionMenu
              className="option_menu"
              optionList={optionMenuList}
              onClickMenu={handleClickMenu}
              onSelectItem={handleSelectMenuItem}
            />
          </div>
        </div>
        <PeriodText className="period">{data?.period}</PeriodText>
        <ExamGoalItemHabitTracker
          goalId={data?.goalId}
          habitTrackers={data?.habitTrackers}
        />
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
