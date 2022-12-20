import { Button } from '@components/common/button/Button';
import { TextInput } from '@components/common/form/TextInput';
import { DateInput } from '@components/common/form/goalInput/DateInput';
import { ScoreInput } from '@components/common/form/goalInput/ScoreInput';
import { Modal } from '@components/common/modal/Modal';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { useGroupGoalCreatePopup } from './hooks/useGroupGoalCreatePopup';

interface Props {
  groupId?: number;
  isOpen?: boolean;
  onClose?: () => void;
}

export const GroupGoalCreatePopup = observer(
  ({ groupId, isOpen = false, onClose }: Props) => {
    const {
      handleScoreTypeChange,
      onSubmit,
      loadGoalList,
      startDate,
      endDate,
      changeStartDate,
      changeEndDate,
      control,
    } = useGroupGoalCreatePopup();

    const handleCreateClick = () => {
      onSubmit(groupId).then((ok) => {
        if (ok) {
          onClose?.();
          loadGoalList();
        }
      });
    };

    return (
      <Modal
        title="Create a New Group Goal"
        width={638}
        isOpen={isOpen}
        onClose={onClose}
      >
        <GroupGoalCreatePopupStyled>
          <TextInput
            label="Exam name"
            name="examTitle"
            rules={{
              maxLength: {
                value: 30,
                message: '제목은 30자 이하로 입력해 주세요.',
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
        </GroupGoalCreatePopupStyled>
      </Modal>
    );
  }
);

export const GroupGoalCreatePopupStyled = styled.form`
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
