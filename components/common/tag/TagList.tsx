import { Tag, TagColor } from '@components/common/tag/Tag';
import styled from 'styled-components';

import {
  ExamGoalStatusType,
  ExamGoalStatusTypeEnum,
} from '../../../types/examGoalStatusType';

interface Props {
  goalStatus?: ExamGoalStatusType;
  isGroupGoal?: boolean;
}

export const TagList = ({ goalStatus, isGroupGoal }: Props) => {
  return (
    <TagListStyled>
      {isGroupGoal && <Tag text="Group" tagColor={TagColor.BLUE}></Tag>}
      {goalStatus === 'ACHIEVING' && (
        <Tag
          text={ExamGoalStatusTypeEnum[goalStatus]}
          tagColor={TagColor.GREEN}
        ></Tag>
      )}
      {goalStatus === 'ACHIEVED' && (
        <Tag
          text={ExamGoalStatusTypeEnum[goalStatus]}
          tagColor={TagColor.PURPLE}
        ></Tag>
      )}
      {goalStatus === 'FAILED' && (
        <Tag
          text={ExamGoalStatusTypeEnum[goalStatus]}
          tagColor={TagColor.RED}
        ></Tag>
      )}
    </TagListStyled>
  );
};

const TagListStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
