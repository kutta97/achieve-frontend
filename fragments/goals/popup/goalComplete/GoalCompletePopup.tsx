import { Button } from '@components/common/button/Button';
import { Modal } from '@components/common/modal/Modal';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { useGoalCompletePopup } from './hooks/useGoalCompletePopup';

interface Props {
  goalId?: number;
  goalTitle?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const GoalCompletePopup = observer(
  ({ goalId, goalTitle, isOpen = false, onClose }: Props) => {
    const { onComplete, loadGoalList } = useGoalCompletePopup();

    const handleCompleteClick = (achieved?: boolean) => {
      onComplete(goalId, achieved).then((ok) => {
        if (ok) {
          loadGoalList();
          onClose?.();
        }
      });
    };

    return (
      <Modal
        title="Complete Goal"
        width={638}
        isOpen={isOpen}
        onClose={onClose}
      >
        <GoalCompletePopupStyled>
          <p>
            <span>{`"${goalTitle}"`}</span>
            {` 목표를 `}
            <span>ACHIEVE!</span>
            {` 했습니까?`}
          </p>
          <div className="button-wrap">
            <Button
              text="Failed"
              style={{ background: '#FF3636' }}
              className="submit-button"
              onClick={() => handleCompleteClick(false)}
            />
            <Button
              text="Achieved!"
              className="submit-button"
              onClick={() => handleCompleteClick(true)}
            />
          </div>
        </GoalCompletePopupStyled>
      </Modal>
    );
  }
);

export const GoalCompletePopupStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 28px;
  gap: 28px;

  span {
    font-weight: 700;
  }

  .button-wrap {
    display: flex;
    width: 100%;
    gap: 8px;
    .submit-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      height: 44px;
      font-size: 16px;
      padding: 10px 10px;
    }
  }
`;
