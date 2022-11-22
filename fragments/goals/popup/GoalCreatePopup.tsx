import { TextInput } from '@components/auth/TextInput';
import { Button } from '@components/common/button/Button';
import { Modal } from '@components/common/modal/Modal';
import styled from 'styled-components';

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

export const GoalCreatePopup = ({ isOpen = false, onClose }: Props) => {
  return (
    <Modal
      title="Create New Goal"
      width={638}
      isOpen={isOpen}
      onClose={onClose}
    >
      <GoalCreatePopupStyled>
        <TextInput label="Exam name" placeholder="write your exam name" />
        <span className="input-wrap">
          <TextInput label="Score type" width={140} />
          <TextInput label="Score" width={84} />
          <p>이상 받을 것이다!</p>
        </span>
        <span className="label-input-wrap">
          <Label>Due date</Label>
          <span className="input-wrap">
            <p>from</p>
            <TextInput width={140} />
            <p>to</p>
            <TextInput width={140} />
          </span>
        </span>
        <Button text="Create" className="submit-button" />
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
