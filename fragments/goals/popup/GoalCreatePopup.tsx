import { Button } from '@components/common/button/Button';
import { TextInput } from '@components/common/form/TextInput';
import { DateInput } from '@components/common/form/goalInput/DateInput';
import { ScoreInput } from '@components/common/form/goalInput/ScoreInput';
import { Modal } from '@components/common/modal/Modal';
import { NAME_PATTERN } from '@consts/Regex';
import styled from 'styled-components';

import { useGoalCreatePopup } from './hooks/useGoalCreatePopup';

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

export const GoalCreatePopup = ({ isOpen = false, onClose }: Props) => {
  const {
    handleScoreTypeChange,
    handleCreateClick,
    startDate,
    endDate,
    changeStartDate,
    changeEndDate,
    control,
  } = useGoalCreatePopup();

  return (
    <Modal
      title="Create New Goal"
      width={638}
      isOpen={isOpen}
      onClose={onClose}
    >
      <GoalCreatePopupStyled>
        <TextInput
          label="Exam name"
          name="examTitle"
          rules={{
            maxLength: {
              value: 30,
              message: '제목은 30자 이하로 입력해 주세요.',
            },
            pattern: {
              value: NAME_PATTERN,
              message: '이 항목은 한글, 영문만 입력이 가능합니다.',
            },
            required: '이 항목은 필수 입력값입니다.',
          }}
          placeholder="write your exam name"
          control={control}
        />
        <ScoreInput
          onChangeScoreType={handleScoreTypeChange}
          control={control}
        />
        <span className="label-input-wrap">
          <Label>Due date</Label>
          <DateInput
            startDate={startDate}
            endDate={endDate}
            onChangeStartDate={changeStartDate}
            onChangeEndDate={changeEndDate}
          />
        </span>
        <Button
          text="Create"
          className="submit-button"
          onClick={handleCreateClick}
        />
      </GoalCreatePopupStyled>
    </Modal>
  );
};

export const GoalCreatePopupStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 28px;
  gap: 28px;

  .input-wrap {
    display: flex;
    flex-direction: row;
    gap: 20px;

    p {
      margin-top: auto;
      margin-bottom: 13px;
    }
  }

  .label-input-wrap {
    display: flex;
    flex-direction: column;
  }

  .submit-button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 44px;
    font-size: 16px;
    padding: 10px 10px;
    margin-top: 24px;
  }
`;

const Label = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: ${({ theme }) => theme.colors.BasicBlack};
`;
