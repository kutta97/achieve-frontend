import {
  OptionItemType,
  SelectInput,
} from '@components/common/form/SelectInput';
import { TextInput } from '@components/common/form/TextInput';
import { observer } from 'mobx-react';
import { Control, useFormState, useWatch } from 'react-hook-form';
import styled from 'styled-components';

import { GoalCreatePopupFormDataType } from '../../../../fragments/goals/popup/GoalCreatePopupFormDataType';
import {
  ExamGoalScoreTypeEnum,
  ExamGoalScoreTypeKey,
} from '../../../../types/examGoalScoreType';

interface Props {
  classname?: string;
  disabled?: boolean;
  control: Control<GoalCreatePopupFormDataType>;
}

export const ScoreInput = observer((props: Props) => {
  const { classname, disabled, control } = props;
  const { errors } = useFormState({ control });

  const watchScoreType = useWatch({
    control,
    name: 'scoreType',
    defaultValue: ExamGoalScoreTypeKey.NUMBER,
  });

  const scoreTypeList: OptionItemType[] = [
    {
      id: ExamGoalScoreTypeKey.NUMBER,
      value: ExamGoalScoreTypeEnum.NUMBER,
    },
    {
      id: ExamGoalScoreTypeKey.LETTER,
      value: ExamGoalScoreTypeEnum.LETTER,
    },
    {
      id: ExamGoalScoreTypeKey.PERCENTAGE,
      value: ExamGoalScoreTypeEnum.PERCENTAGE,
    },
  ];

  const letterGradeList: OptionItemType[] = [
    {
      id: 0,
      value: 'A+',
    },
    {
      id: 1,
      value: 'A0',
    },
    {
      id: 2,
      value: 'A-',
    },
    {
      id: 3,
      value: 'B+',
    },
    {
      id: 4,
      value: 'B0',
    },
    {
      id: 5,
      value: 'B-',
    },
    {
      id: 6,
      value: 'C+',
    },
    {
      id: 7,
      value: 'C0',
    },
    {
      id: 8,
      value: 'C-',
    },
  ];

  return (
    <ScoreInputStyled className={classname}>
      <span className="input-form">
        <SelectInput
          label="Score type"
          name="scoreType"
          width={170}
          disabled={disabled}
          itemList={scoreTypeList}
          control={control}
        />
        {watchScoreType === ExamGoalScoreTypeKey.NUMBER && (
          <span>
            <TextInput
              label="Score"
              name="score"
              width={84}
              rules={{
                min: {
                  value: 0,
                  message: '0 이상의 숫자를 입력해주세요',
                },
                max: {
                  value: 10000,
                  message: '10,000 이하의 숫자를 입력해주세요',
                },
                required: 'Score 항목은 필수 입력값입니다.',
              }}
              disabled={disabled}
              isNumber
              showError={false}
              control={control}
            />
            <p>점</p>
          </span>
        )}
        {watchScoreType === ExamGoalScoreTypeKey.LETTER && (
          <SelectInput
            label="Score"
            name="score"
            width={84}
            disabled={disabled}
            itemList={letterGradeList}
            showError={false}
            control={control}
          />
        )}
        {watchScoreType === ExamGoalScoreTypeKey.PERCENTAGE && (
          <span>
            <TextInput
              label="Score"
              name="score"
              width={84}
              rules={{
                min: {
                  value: 0,
                  message: '0 ~ 100 사이의 숫자를 입력해주세요',
                },
                max: {
                  value: 100,
                  message: '0 ~ 100 사이의 숫자를 입력해주세요',
                },
                required: 'Score 항목은 필수 입력값입니다.',
              }}
              disabled={disabled}
              showError={false}
              control={control}
            />
            <p>%</p>
          </span>
        )}
        <p>이상 받을 것이다!</p>
      </span>
      <span className="error-message">
        {errors?.score?.message && errors.score.message}
      </span>
    </ScoreInputStyled>
  );
});

const ScoreInputStyled = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .input-form {
    display: flex;
    flex-direction: row;
    gap: 20px;

    span {
      display: flex;
      gap: 10px;
    }

    p {
      margin-top: auto;
      margin-bottom: 13px;
    }
  }

  .error-message {
    color: ${({ theme }) => theme.colors.SolidRed};
    padding-left: 190px;
  }
`;
