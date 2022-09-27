import { BulletColor, BulletTitle } from '@components/common/text/BulletTitle';
import { IGroupGoal } from '@vo/groups/IGroup';
import styled from 'styled-components';

interface Props {
  groupGoal?: IGroupGoal;
}

export const GroupGoalItem = ({ groupGoal }: Props) => {
  return (
    <GroupGoalItemStyled>
      <div className="goal-title-wrap">
        <div className="left">
          <BulletTitle
            text={groupGoal?.title}
            bulletColor={BulletColor.GREEN}
          />
        </div>
        <div className="right">
          <DDayText>{groupGoal?.dDay}</DDayText>
        </div>
      </div>
      <PeriodText className="period">{groupGoal?.period}</PeriodText>
    </GroupGoalItemStyled>
  );
};

const GroupGoalItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 25px 30px;

  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.ShadeGray30};

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
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
