import { Box } from '@components/common/box/Box';
import {
  OptionMenu,
  OptionMenuItem,
} from '@components/common/select/OptionMenu';
import { BulletColor, BulletTitle } from '@components/common/text/BulletTitle';
import { GroupExamGoalList } from '@components/groups/GroupExamGoalList';
import { IGroup } from '@vo/groups/IGroup';
import styled from 'styled-components';

interface Props {
  data?: IGroup;
  onClickMenu?: (groupId: number) => void;
  onSelectMenu?: (menuId: string) => void;
}

export const GroupItem = ({ data, onClickMenu, onSelectMenu }: Props) => {
  const optionMenuList: OptionMenuItem[] = [
    {
      id: 'GROUP_GOAL',
      value: 'Add a Group Goal',
    },
  ];

  const handleClickMenu = () => {
    onClickMenu?.(data?.groupId);
  };
  const handleSelectMenuItem = (id: string) => {
    onSelectMenu?.(id);
  };

  return (
    <Box>
      <GroupItemStyled>
        <div className="goal-title-wrap">
          <div className="left">
            <BulletTitle text={data?.title} bulletColor={BulletColor.BLUE} />
          </div>
          <div className="right">
            <OptionMenu
              className="option_menu"
              optionList={optionMenuList}
              onClickMenu={handleClickMenu}
              onSelectItem={handleSelectMenuItem}
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
