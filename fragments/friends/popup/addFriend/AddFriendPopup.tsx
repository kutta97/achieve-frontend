import { Button } from '@components/common/button/Button';
import { TextInput } from '@components/common/form/TextInput';
import { Modal } from '@components/common/modal/Modal';
import { EMAIL_PATTERN } from '@consts/Regex';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { useAddFriendPopup } from './hooks/useAddFriendPopup';

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

export const AddFriendPopup = observer(({ isOpen = false, onClose }: Props) => {
  const { onSubmit, setError, control } = useAddFriendPopup();

  const handleInviteClick = () => {
    onSubmit().then((ok) => {
      if (ok) {
        onClose?.();
      }
      if (!ok) {
        setError('email', {
          type: 'custom',
          message: '친구 요청을 보낼 수 없는 상대입니다.',
        });
      }
    });
  };

  return (
    <Modal title="Add a Friend" width={638} isOpen={isOpen} onClose={onClose}>
      <AddFriendPopupStyled>
        <TextInput
          label="Friend's Email address"
          name="email"
          rules={{
            pattern: {
              value: EMAIL_PATTERN,
              message: '이메일을 입력해주세요.',
            },
            required: '이메일을 입력해 주세요.',
          }}
          placeholder="example@gmail.com"
          control={control}
        />
        <Button
          text="Invite"
          className="submit-button"
          onClick={handleInviteClick}
        />
      </AddFriendPopupStyled>
    </Modal>
  );
});

export const AddFriendPopupStyled = styled.form`
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
