import { Modal } from '@components/common/modal/Modal';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { AcceptFriendItem } from './AcceptFriendItem';
import { useAcceptFriendPopup } from './hooks/useAcceptFriendPopup';

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

export const AcceptFriendPopup = observer(
  ({ isOpen = false, onClose }: Props) => {
    const { invitationList, onAccept, loadFriendList } = useAcceptFriendPopup();

    const handleAcceptClick = (friendId?: number, accept?: boolean) => {
      onAccept(friendId, accept).then((ok) => {
        if (ok) {
          loadFriendList();
          onClose?.();
        }
      });
    };

    return (
      <Modal
        title="Pending Invites"
        width={638}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AcceptFriendPopupStyled>
          {invitationList?.map((invitation) => (
            <AcceptFriendItem
              data={invitation}
              onAccept={handleAcceptClick}
              key={invitation.id}
            />
          ))}
        </AcceptFriendPopupStyled>
      </Modal>
    );
  }
);

export const AcceptFriendPopupStyled = styled.form`
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
