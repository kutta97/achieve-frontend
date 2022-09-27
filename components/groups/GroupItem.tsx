import { Box } from '@components/common/box/Box';
import { BulletColor, BulletTitle } from '@components/common/text/BulletTitle';
import { GroupExamGoalList } from '@components/groups/GroupExamGoalList';
import { IGroup } from '@vo/groups/IGroup';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  data?: IGroup;
}

export const GroupItem = ({ data }: Props) => {
  return (
    <Box>
      <GroupItemStyled>
        <div className="goal-title-wrap">
          <div className="left">
            <BulletTitle text={data?.title} bulletColor={BulletColor.BLUE} />
          </div>
          <div className="right">
            <Image
              src="/assets/icon/menu/icon_menu_vertical.svg"
              alt=""
              width={28}
              height={28}
            />
          </div>
        </div>
        <GroupExamGoalList groupGoals={data?.goals} />
      </GroupItemStyled>
    </Box>
  );
};

const GroupItemStyled = styled.div`
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
`;
