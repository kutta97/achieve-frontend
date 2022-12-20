import { Button } from '@components/common/button/Button';
import { TextInput } from '@components/common/form/TextInput';
import { Modal } from '@components/common/modal/Modal';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { useGroupCreatePopup } from './hooks/useGroupCreatePopup';

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

export const GroupCreatePopup = observer(
  ({ isOpen = false, onClose }: Props) => {
    const { onSubmit, loadGroupList, control } = useGroupCreatePopup();

    const handleCreateClick = () => {
      onSubmit().then((ok) => {
        if (ok) {
          onClose?.();
          loadGroupList();
        }
      });
    };

    return (
      <Modal
        title="Create a New Group"
        width={638}
        isOpen={isOpen}
        onClose={onClose}
      >
        <GroupCreatePopupStyled>
          <TextInput
            label="Group name"
            name="name"
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
          <Button
            text="Create"
            className="submit-button"
            onClick={handleCreateClick}
          />
        </GroupCreatePopupStyled>
      </Modal>
    );
  }
);

export const GroupCreatePopupStyled = styled.form`
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
