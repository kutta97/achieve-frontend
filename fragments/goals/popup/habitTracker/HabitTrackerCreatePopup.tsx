import { Button } from '@components/common/button/Button';
import { TextInput } from '@components/common/form/TextInput';
import { Modal } from '@components/common/modal/Modal';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { useHabitTrackerCreatePopup } from './hooks/useHabitTrackerCreatePopup';

interface Props {
  goalId?: number;
  isOpen?: boolean;
  onClose?: () => void;
}

export const HabitTrackerCreatePopup = observer(
  ({ goalId, isOpen = false, onClose }: Props) => {
    const { onSubmit, loadGoalList, control } = useHabitTrackerCreatePopup();

    const handleCreateClick = () => {
      onSubmit(goalId).then((ok) => {
        if (ok) {
          onClose?.();
          loadGoalList();
        }
      });
    };

    return (
      <Modal
        title="Create New Habit Tracker"
        width={638}
        isOpen={isOpen}
        onClose={onClose}
      >
        <GoalCreatePopupStyled>
          <TextInput
            label="Habit Tracker name"
            name="title"
            rules={{
              maxLength: {
                value: 30,
                message: '제목은 30자 이하로 입력해 주세요.',
              },
              required: '이 항목은 필수 입력값입니다.',
            }}
            placeholder="write your habit name"
            control={control}
          />
          <Button
            text="Create"
            className="submit-button"
            onClick={handleCreateClick}
          />
        </GoalCreatePopupStyled>
      </Modal>
    );
  }
);

export const GoalCreatePopupStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 28px;
  gap: 28px;

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
